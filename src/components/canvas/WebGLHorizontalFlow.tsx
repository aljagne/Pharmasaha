import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, QuadraticBezierLine, Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

// --- CONFIGURATION ---
const GLOBE_RADIUS = 1.2;
const MAP_WIDTH = 2;
const MAP_HEIGHT = 2;

// Horizontal Stage Positions
const STAGE_LEFT = -3; // Global Labs
const STAGE_CENTER = 0; // Neural Core 
const STAGE_RIGHT = 3; // Local Markets (Africa)

// Helper: Convert Lat/Long to 2D Map Coordinates (for flat maps on left/right)
function getMapPos(lat: number, lon: number, stageOffset: number): THREE.Vector3 {
  const x = (lon / 180) * MAP_WIDTH + stageOffset;
  const y = (lat / 90) * MAP_HEIGHT;
  return new THREE.Vector3(x, y, 0);
}

// Global Entities
const ENTITIES = {
  // Global Labs (Left)
  naLab: { pos: new THREE.Vector3(STAGE_LEFT - 1, 0.5, 0), id: 'na', name: 'NA Innovation Lab', type: 'source', stats: { active: 14, yield: '99.9%' } },
  euLab: { pos: new THREE.Vector3(STAGE_LEFT, 1, 0), id: 'eu', name: 'EU Quality Hub', type: 'source', stats: { active: 32, yield: '100%' } },
  asiaLab: { pos: new THREE.Vector3(STAGE_LEFT + 0.5, -0.5, 0), id: 'apac', name: 'APAC Scale Center', type: 'source', stats: { active: 28, yield: '98.5%' } },
  
  // PharmaSaha Core (Center)
  core: { pos: new THREE.Vector3(STAGE_CENTER, 0, 0), id: 'core', name: 'Neural Logistics Core', type: 'hub' },

  // Local Markets (Right)
  market1: { pos: new THREE.Vector3(STAGE_RIGHT - 0.5, 0.5, 0), id: 'sn', name: 'Dakar Distro', type: 'destination', stats: { vol: 'High', latency: '2ms' } },
  market2: { pos: new THREE.Vector3(STAGE_RIGHT + 0.2, -0.2, 0), id: 'ci', name: 'Abidjan Hub', type: 'destination', stats: { vol: 'Med', latency: '4ms' } },
  market3: { pos: new THREE.Vector3(STAGE_RIGHT + 0.6, -0.8, 0), id: 'ng', name: 'Lagos Gateway', type: 'destination', stats: { vol: 'Extreme', latency: '8ms' } },
};

// --- COMPONENTS ---

function EnergyArc({ start, end, dashSpeed = 0.003, color = "#BAB9FF" }: { start: THREE.Vector3, end: THREE.Vector3, dashSpeed?: number, color?: string }) {
  const lineRef = useRef<any>(null);
  
  // Create an arcing mid-point. Since we flow horizontally, we push Z out to make it 'pop' in 3D
  const mid = start.clone().lerp(end, 0.5);
  mid.z += 1.5; 
  mid.y += (Math.random() - 0.5) * 1.5; // Randomize path slightly

  useFrame(() => {
    if (lineRef.current?.material) {
      // Flow from start to end continuously
      lineRef.current.material.dashOffset -= dashSpeed;
    }
  });

  return (
    <group>
      <QuadraticBezierLine
        ref={lineRef}
        start={start}
        end={end}
        mid={mid}
        color={color}
        lineWidth={1.5}
        transparent
        opacity={0.4}
        dashed={true}
        dashScale={20} // Long gaps between pulses
        dashSize={3}   // The pulse itself
        dashOffset={Math.random() * 10} // Random start phase
        gapSize={17}
      />
      {/* Background static line for context */}
      <QuadraticBezierLine
        start={start}
        end={end}
        mid={mid}
        color={color}
        lineWidth={0.5}
        transparent
        opacity={0.05}
      />
    </group>
  );
}

function HolographicNode({ node }: { node: typeof ENTITIES[keyof typeof ENTITIES] }) {
  const [hovered, setHover] = useState(false);
  const meshRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const isCore = node.type === 'hub';
  const color = isCore ? "#745A37" : (node.type === 'source' ? "#BAB9FF" : "#00ffcc");
  const size = isCore ? 0.3 : 0.08;

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Gentle floating
      meshRef.current.position.y = node.pos.y + Math.sin(clock.elapsedTime * 2 + node.pos.x) * 0.05;
    }
    if (ringRef.current && (isCore || hovered)) {
      // Pulse animation: scale 1 to 2, fade out
      const t = (clock.elapsedTime * 0.5) % 1; 
      ringRef.current.scale.setScalar(1 + t * 2);
      (ringRef.current.material as THREE.Material).opacity = 0.5 * (1 - t);
    }
  });

  return (
    <group ref={meshRef} position={node.pos}>
      <mesh 
        onPointerOver={() => setHover(true)} 
        onPointerOut={() => setHover(false)}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
      
      {/* Pulse Ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[size * 1.2, size * 1.3, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0} toneMapped={false} side={THREE.DoubleSide} />
      </mesh>

      {/* Interactive Tooltip OVERLAY */}
      <Html center distanceFactor={12} zIndexRange={[100, 0]} className={`transition-opacity duration-300 pointer-events-none ${hovered || isCore ? 'opacity-100 z-50' : 'opacity-0 z-0'}`}>
        <div className={`mt-8 px-4 py-3 rounded-xl border backdrop-blur-xl shadow-2xl flex flex-col gap-2 min-w-[140px]
            ${isCore ? 'bg-background/90 border-primary/40' : 'bg-[#000B0D]/95 border-[#BAB9FF]/30'}
          `}>
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
               {isCore ? <Activity className="w-3 h-3 text-primary" /> : (node.type === 'source' ? <ShieldCheck className="w-3 h-3 text-[#BAB9FF]" /> : <Zap className="w-3 h-3 text-[#00ffcc]" />)}
               <span className={`text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap
                 ${isCore ? 'text-primary' : (node.type === 'source' ? 'text-[#BAB9FF]' : 'text-[#00ffcc]')}
               `}>
                 {node.name}
               </span>
            </div>
            
            {/* Dynamic Stats based on node type */}
            {node.stats && (
              <div className="flex flex-col gap-1 w-full pt-1">
                {Object.entries(node.stats).map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center text-[9px] uppercase tracking-widest text-white/50">
                    <span>{key}</span>
                    <span className="text-white font-mono">{val}</span>
                  </div>
                ))}
              </div>
            )}
        </div>
      </Html>
    </group>
  );
}

function ParticleCore() {
  const meshRef = useRef<THREE.Group>(null);
  
  // Organic, dense particle sphere representing PharmaSaha
  const { positions, colors } = useMemo(() => {
    const count = 3000; // Less than wireframe Earth, more dense
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const baseColor = new THREE.Color("#745A37");
    const highlightColor = new THREE.Color("#BAB9FF");

    for (let i = 0; i < count; i++) {
       // Deeply randomized spherical distribution
       const u = Math.random();
       const v = Math.random();
       const theta = u * 2.0 * Math.PI;
       const phi = Math.acos(2.0 * v - 1.0);
       const r = Math.cbrt(Math.random()) * GLOBE_RADIUS; // Volume fill, not just surface

       pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
       pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
       pos[i * 3 + 2] = r * Math.cos(phi);

       // Noise-based color mix
       const mixed = baseColor.clone().lerp(highlightColor, Math.random() > 0.8 ? 0.8 : 0.1);
       col[i * 3] = mixed.r;
       col[i * 3 + 1] = mixed.g;
       col[i * 3 + 2] = mixed.b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Core spins slowly like an engine
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.rotation.x += delta * 0.05;
      
      // Gentle breathing effect on scale
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.02);
    }
  });

  return (
    <group ref={meshRef} position={ENTITIES.core.pos}>
       <Points positions={positions} colors={colors}>
        <PointMaterial
          transparent
          vertexColors
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.8}
        />
      </Points>
      {/* Inner dark mass to prevent seeing all data behind it clearly */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 0.8, 32, 32]} />
        <meshBasicMaterial color="#000708" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

// Map abstractions for Left & Right stages
function stylizedMap(offset: number, scale: number, count = 500) {
     const pos = new Float32Array(count * 3);
     for (let i = 0; i < count; i++) {
        // Random cluster for abstraction
        pos[i * 3] = offset + (Math.random() - 0.5) * scale * 2;
        pos[i * 3 + 1] = (Math.random() - 0.5) * scale;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 0.5; // Slight Z depth
     }
     return pos;
}

function MapClusters() {
   const labsPos = useMemo(() => stylizedMap(STAGE_LEFT, 1.5, 800), []);
   const marketsPos = useMemo(() => stylizedMap(STAGE_RIGHT, 1.2, 600), []);

   return (
     <group>
        {/* Global Labs Dust */}
        <Points positions={labsPos}>
           <PointMaterial color="#BAB9FF" size={0.015} transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
        </Points>
        {/* Local Markets Dust */}
        <Points positions={marketsPos}>
           <PointMaterial color="#00ffcc" size={0.015} transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
        </Points>
     </group>
   );
}


export default function WebGLHorizontalFlow() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#000405] via-[#000B0D] to-[#000405]">
      {/* Cinematic Lighting Underlays */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[30vw] h-[30vw] min-w-[300px] rounded-full bg-white/5 blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] min-w-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[30vw] h-[30vw] min-w-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none mix-blend-screen" />

      <Canvas 
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        
        {/* Stages */}
        <ParticleCore />
        <MapClusters />

        {/* Nodes */}
        {Object.values(ENTITIES).map(node => (
          <HolographicNode key={node.id} node={node} />
        ))}

        {/* Global Labs -> Core Arcs */}
        <EnergyArc start={ENTITIES.naLab.pos} end={ENTITIES.core.pos} dashSpeed={0.005} />
        <EnergyArc start={ENTITIES.euLab.pos} end={ENTITIES.core.pos} dashSpeed={0.008} />
        <EnergyArc start={ENTITIES.asiaLab.pos} end={ENTITIES.core.pos} dashSpeed={0.004} />

        {/* Core -> Local Markets Arcs */}
        <EnergyArc start={ENTITIES.core.pos} end={ENTITIES.market1.pos} color="#00ffcc" dashSpeed={0.006} />
        <EnergyArc start={ENTITIES.core.pos} end={ENTITIES.market2.pos} color="#00ffcc" dashSpeed={0.009} />
        <EnergyArc start={ENTITIES.core.pos} end={ENTITIES.market3.pos} color="#00ffcc" dashSpeed={0.007} />
        
        {/* Restrict camera to mainly horizontal panning */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minAzimuthAngle={-Math.PI / 16}
          maxAzimuthAngle={Math.PI / 16}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
      
      {/* Floating UI Overlay for stage labels */}
      <div className="absolute top-10 inset-x-8 flex justify-between pointer-events-none">
          <div className="text-white/30 font-mono text-[9px] tracking-[0.3em] uppercase">Stage 01: Synthesis</div>
          <div className="text-white/30 font-mono text-[9px] tracking-[0.3em] uppercase text-center hidden md:block">Stage 02: Core Logistics</div>
          <div className="text-white/30 font-mono text-[9px] tracking-[0.3em] uppercase text-right">Stage 03: Deployment</div>
      </div>
    </div>
  );
}
