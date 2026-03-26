import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial, QuadraticBezierLine, Html, Line, Sphere, Trail } from '@react-three/drei';
import * as THREE from 'three';
import { MapPin, Zap } from 'lucide-react';

const RADIUS = 2;

// Real-world coordinates approximated to 3D Cartesian
function getPos(lat: number, lon: number, radius = RADIUS): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

const NODES = {
  dakar: { pos: getPos(14.7, -17.4), id: 'dakar', name: 'Dakar Core', type: 'hub' },
  paris: { pos: getPos(48.8, 2.3), id: 'eu', name: 'EU Node', type: 'source', telemetry: { latency: '14ms', load: '82%' } },
  mumbai: { pos: getPos(19.0, 72.8), id: 'asia', name: 'APAC Node', type: 'source', telemetry: { latency: '11ms', load: '94%' } },
  newyork: { pos: getPos(40.7, -74.0), id: 'us', name: 'NA Node', type: 'source', telemetry: { latency: '22ms', load: '78%' } },
  johannesburg: { pos: getPos(-26.2, 28.0), id: 'za', name: 'SA Node', type: 'pipeline' },
};

function GlowingArc({ start, end, color = "#BAB9FF", dashSpeed = 0.005 }: { start: THREE.Vector3, end: THREE.Vector3, color?: string, dashSpeed?: number }) {
  const lineRef = useRef<any>(null);
  const mid = start.clone().lerp(end, 0.5);
  mid.normalize().multiplyScalar(RADIUS * 1.5); // Arc height

  // Create points for a glowing trailed particle
  const curve = useMemo(() => new THREE.QuadraticBezierCurve3(start, mid, end), [start, mid, end]);
  const particleRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    // Animate dashed line
    if (lineRef.current?.material) {
      lineRef.current.material.dashOffset -= dashSpeed;
    }
    
    // Animate trailing particle
    if (particleRef.current) {
      const t = (state.clock.elapsedTime * dashSpeed * 20) % 1;
      const pos = curve.getPoint(t);
      particleRef.current.position.copy(pos);
    }
  });

  return (
    <group>
      {/* Base dashed line */}
      <QuadraticBezierLine
        ref={lineRef}
        start={start}
        end={end}
        mid={mid}
        color={color}
        lineWidth={2}
        transparent
        opacity={0.3}
        dashed={true}
        dashScale={50}
        dashSize={5}
        dashOffset={0}
        gapSize={2}
      />
      {/* Solid core line (very faint) */}
      <QuadraticBezierLine
        start={start}
        end={end}
        mid={mid}
        color={color}
        lineWidth={0.5}
        transparent
        opacity={0.1}
      />
      
      {/* Moving Energy Payload */}
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color={color} toneMapped={false} />
        <pointLight color={color} intensity={2} distance={1} decay={2} />
      </mesh>
    </group>
  );
}

function NodeMarker({ node }: { node: typeof NODES[keyof typeof NODES] }) {
  const isHub = node.type === 'hub';
  const isPipeline = node.type === 'pipeline';
  const color = isHub ? "#745A37" : (isPipeline ? "#00363D" : "#BAB9FF");
  const size = isHub ? 0.08 : 0.04;

  const markerRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (markerRef.current) {
      markerRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group position={node.pos}>
      {/* 3D Geometry */}
      <group ref={markerRef}>
        <mesh>
          <sphereGeometry args={[size, 16, 16]} />
          <meshBasicMaterial color={color} toneMapped={false} />
        </mesh>
        
        {/* Pulsing rings for active nodes */}
        {(!isPipeline) && (
          <mesh scale={2 + Math.sin(Date.now() / 300) * 0.5}>
            <torusGeometry args={[size * 1.5, 0.005, 16, 32]} />
            <meshBasicMaterial color={color} transparent opacity={0.5} toneMapped={false} />
          </mesh>
        )}
      </group>

      {/* HTML Overlay Label */}
      <Html center distanceFactor={15} zIndexRange={[100, 0]} className="pointer-events-none transition-opacity duration-300">
        <div className={`flex flex-col items-center gap-1 group w-max ${isPipeline ? 'opacity-40 grayscale' : ''}`}>
          
          {/* Node Interaction Target (expands on hover) */}
          <div className="w-6 h-6 rounded-full group-hover:bg-white/10 transition-colors flex items-center justify-center pointer-events-auto cursor-crosshair">
            {isHub && <MapPin className="w-4 h-4 text-primary drop-shadow-[0_0_8px_rgba(116,90,55,0.8)]" />}
          </div>
          
          {/* Label Card */}
          <div className={`mt-1 px-3 py-1.5 rounded-lg border backdrop-blur-md transition-all duration-500 flex flex-col items-center shadow-2xl
            ${isHub ? 'bg-background/90 border-primary/40' : 'bg-[#000B0D]/80 border-[#BAB9FF]/20 group-hover:border-[#BAB9FF]/60 group-hover:bg-[#001e22]/90'}
          `}>
            <span className={`text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap
              ${isHub ? 'text-primary' : (isPipeline ? 'text-white/50' : 'text-[#BAB9FF]')}
            `}>
              {node.name}
            </span>
            
            {/* Extended Telemetry (Visible on hover for source nodes) */}
            {node.type === 'source' && node.telemetry && (
              <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300 w-full">
                <div className="border-t border-white/10 pt-2 flex flex-col gap-1 w-full min-w-[100px]">
                  <div className="flex justify-between items-center text-[8px] uppercase tracking-widest text-white/50">
                    <span>Latency</span>
                    <span className="text-secondary">{node.telemetry.latency}</span>
                  </div>
                  <div className="flex justify-between items-center text-[8px] uppercase tracking-widest text-white/50">
                    <span>Load</span>
                    <span className="text-green-400">{node.telemetry.load}</span>
                  </div>
                </div>
              </div>
            )}
            
             {isPipeline && (
               <span className="text-[7px] text-white/30 uppercase tracking-widest mt-1 border border-white/10 px-1 rounded-sm">Pipeline</span>
             )}
          </div>
        </div>
      </Html>
    </group>
  );
}

function EarthWireframe() {
  const meshRef = useRef<THREE.Group>(null);
  
  // Custom points generation for a "neural" grid look
  const { positions, colors } = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const baseColor = new THREE.Color("#00363D");
    const highlightColor = new THREE.Color("#BAB9FF");

    for (let i = 0; i < count; i++) {
       // Fibonacci sphere distribution
       const phi = Math.acos(-1 + (2 * i) / count);
       const theta = Math.sqrt(count * Math.PI) * phi;
 
       positions[i * 3] = RADIUS * Math.cos(theta) * Math.sin(phi);
       positions[i * 3 + 1] = RADIUS * Math.sin(theta) * Math.sin(phi);
       positions[i * 3 + 2] = RADIUS * Math.cos(phi);

       // Color mixing based on Y height to create a subtle glow pole-to-pole
       const mixPoint = Math.abs(positions[i * 3 + 1] / RADIUS);
       const mixed = baseColor.clone().lerp(highlightColor, mixPoint > 0.8 ? 0.3 : 0.05);
       
       colors[i * 3] = mixed.r;
       colors[i * 3 + 1] = mixed.g;
       colors[i * 3 + 2] = mixed.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Very slow base rotation
      meshRef.current.rotation.y += delta * 0.015;
      
      // Interactive Parallax to mouse
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 8;
      
      meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.z += (-targetX - meshRef.current.rotation.z) * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Dark inner sphere to block back lines */}
      <mesh>
        <sphereGeometry args={[RADIUS * 0.98, 32, 32]} />
        <meshBasicMaterial color="#000708" transparent opacity={0.8} />
      </mesh>

      {/* Point Cloud Sphere */}
      <Points positions={positions} colors={colors}>
        <PointMaterial
          transparent
          vertexColors
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </Points>
      
      {/* Subtle geographic wireframe lines */}
      <mesh>
        <sphereGeometry args={[RADIUS, 24, 24]} />
        <meshBasicMaterial color="#00363D" wireframe transparent opacity={0.1} />
      </mesh>

      {/* Nodes */}
      {Object.values(NODES).map(node => (
        <NodeMarker key={node.id} node={node} />
      ))}

      {/* Live Data Streams (Arcs) */}
      <GlowingArc start={NODES.paris.pos} end={NODES.dakar.pos} dashSpeed={0.007} />
      <GlowingArc start={NODES.mumbai.pos} end={NODES.dakar.pos} dashSpeed={0.009} />
      <GlowingArc start={NODES.newyork.pos} end={NODES.dakar.pos} dashSpeed={0.005} />
    </group>
  );
}

export default function WebGLNetwork() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-background via-[#000B0D] to-background">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

      <Canvas 
        camera={{ position: [0, 0, 6.5], fov: 40 }}
        gl={{ antialias: true, alpha: true, outputColorSpace: THREE.SRGBColorSpace }}
      >
        <ambientLight intensity={0.2} />
        {/* Soft fill light */}
        <pointLight position={[10, 10, 10]} intensity={1} color="#BAB9FF" />
        {/* Warm dramatic light from bottom */}
        <pointLight position={[-5, -10, 5]} intensity={1.5} color="#745A37" />
        
        <EarthWireframe />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
