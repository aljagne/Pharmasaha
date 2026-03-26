import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial, QuadraticBezierLine, Html } from '@react-three/drei';
import * as THREE from 'three';

const RADIUS = 1.4; // Further reduced for optimal composition

// Helper to convert Lat/Long to Cartesian 3D coordinates
function getCartesianFromSpherical(lat: number, lon: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(r * Math.sin(phi) * Math.cos(theta));
  const z = (r * Math.sin(phi) * Math.sin(theta));
  const y = (r * Math.cos(phi));

  return new THREE.Vector3(x, y, z);
}

// Operational Hubs with Status Data
const LOCATIONS = {
  africa: { pos: getCartesianFromSpherical(14.7, -17.4, RADIUS), status: 'active', label: "West Africa Hub" },
  europe: { pos: getCartesianFromSpherical(48.8, 2.3, RADIUS), status: 'active', label: "EU Manufacturing" },
  asia: { pos: getCartesianFromSpherical(19.0, 72.8, RADIUS), status: 'active', label: "APAC Supply" },
  america: { pos: getCartesianFromSpherical(40.7, -74.0, RADIUS), status: 'active', label: "Americas Innovators" },
  south_africa: { pos: getCartesianFromSpherical(-26.2, 28.0, RADIUS), status: 'pipeline', label: "Southern Node" },
  egypt: { pos: getCartesianFromSpherical(30.0, 31.2, RADIUS), status: 'pipeline', label: "Northern Node" },
  switzerland: { pos: getCartesianFromSpherical(47.3, 8.5, RADIUS), status: 'active', label: "Swiss Med Hub" },
};

function ConnectionLine({ start, end, color = "#BAB9FF" }: { start: THREE.Vector3, end: THREE.Vector3, color?: string }) {
  const mid = start.clone().lerp(end, 0.5);
  mid.normalize().multiplyScalar(RADIUS * 1.3); 

  const lineRef = useRef<any>(null);

  useFrame(() => {
    if (lineRef.current?.material) {
      lineRef.current.material.dashOffset -= 0.003;
    }
  });

  return (
    <QuadraticBezierLine
      ref={lineRef}
      start={start}
      end={end}
      mid={mid}
      color={color}
      lineWidth={1.2}
      transparent
      opacity={0.5}
      dashed
      dashScale={20}
      dashSize={2}
      dashOffset={0}
      gapSize={1}
    />
  );
}

function HubLabel({ position, name, status }: { position: THREE.Vector3, name: string, status: string }) {
  const config = status === 'active' 
    ? "bg-secondary/10 border-secondary/30 text-secondary shadow-[0_0_15px_rgba(186,185,255,0.4)]"
    : "bg-primary/5 border-primary/20 text-primary/70 shadow-[0_0_10px_rgba(116,90,55,0.2)]";

  return (
    <Html position={position} center distanceFactor={12} occlude>
      <div className={`rounded-md border backdrop-blur-md px-3 py-1.5 font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 pointer-events-none flex flex-col items-center gap-1 ${config}`}>
        <span className="text-[9px]">{name}</span>
        {status === 'pipeline' && (
          <span className="text-[7px] bg-primary/20 px-1.5 py-0.5 rounded-sm border border-primary/30">Pipeline</span>
        )}
      </div>
    </Html>
  );
}

function GlobeEntity() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors, opacities } = useMemo(() => {
    const count = 6000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const opacities = new Float32Array(count);
    
    const colorBronze = new THREE.Color("#745A37");
    const colorLavender = new THREE.Color("#BAB9FF");
    const colorDark = new THREE.Color("#00363D");

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      positions[i * 3] = RADIUS * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = RADIUS * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = RADIUS * Math.cos(phi);

      const rand = Math.random();
      let mixedColor;
      if (rand > 0.85) mixedColor = colorLavender;
      else if (rand > 0.45) mixedColor = colorBronze;
      else mixedColor = colorDark;
      
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
      opacities[i] = Math.random();
    }
    return { positions, colors, opacities };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04;
      
      // Gentle floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (state.pointer.y * Math.PI) / 12;
      
      groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.z += (-targetX - groupRef.current.rotation.z) * 0.05;
    }

    // Subtle particle twinkle effect
    if (pointsRef.current?.material) {
      (pointsRef.current.material as THREE.PointsMaterial).opacity = 0.7 + Math.sin(state.clock.elapsedTime * 2) * 0.15;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, -Math.PI / 2.5, 0]}>
      <mesh>
        <sphereGeometry args={[RADIUS * 0.95, 64, 64]} />
        <meshBasicMaterial color="#000708" transparent opacity={0.3} depthWrite={false} />
      </mesh>

      <Points ref={pointsRef} positions={positions} colors={colors}>
        <PointMaterial
          transparent
          vertexColors
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.8}
        />
      </Points>

      {Object.entries(LOCATIONS).map(([key, data]) => {
        const isHub = key === 'africa';
        const isActive = data.status === 'active';
        const color = isActive ? "#BAB9FF" : "#745A37";
        
        return (
          <group key={key} position={data.pos}>
            <mesh>
              <sphereGeometry args={[isHub ? 0.04 : 0.025, 16, 16]} />
              <meshBasicMaterial color={color} />
            </mesh>
            <mesh>
              <sphereGeometry args={[isHub ? 0.1 : 0.07, 16, 16]} />
              <meshBasicMaterial color={color} transparent opacity={0.3} blending={THREE.AdditiveBlending} />
            </mesh>
            {isActive && (
              <mesh scale={1.2 + Math.sin(Date.now() * 0.003) * 0.2}>
                <sphereGeometry args={[isHub ? 0.15 : 0.1, 16, 16]} />
                <meshBasicMaterial color={color} transparent opacity={0.1} blending={THREE.AdditiveBlending} />
              </mesh>
            )}
            <HubLabel position={new THREE.Vector3(0, 0, 0)} name={data.label} status={data.status} />
          </group>
        );
      })}

      {/* Connection Lines from major Global Hubs to Africa Hub */}
      <ConnectionLine start={LOCATIONS.europe.pos} end={LOCATIONS.africa.pos} color="#BAB9FF" />
      <ConnectionLine start={LOCATIONS.asia.pos} end={LOCATIONS.africa.pos} color="#BAB9FF" />
      <ConnectionLine start={LOCATIONS.america.pos} end={LOCATIONS.africa.pos} color="#745A37" />
      <ConnectionLine start={LOCATIONS.switzerland.pos} end={LOCATIONS.africa.pos} color="#745A37" />
    </group>
  );
}

export default function WebGLGlobe() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing z-20" style={{ mixBlendMode: 'screen' }}>
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#BAB9FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#745A37" />
        <GlobeEntity />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.4}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
