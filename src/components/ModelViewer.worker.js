import React, { useRef, useEffect, Suspense } from 'react'; // Add Suspense
import { render, extend } from '@react-three/offscreen';
import { Canvas } from '@react-three/fiber';
import { Bounds, Environment, useGLTF, Center, OrbitControls, Box } from '@react-three/drei'; // Import Box
import { gsap } from 'gsap';
import * as THREE from 'three';

extend(THREE);

function Model({ animation, modelPath }) {
  // ... (Model component remains the same)
}

function Scene(props) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: false }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      {/* **CRUCIAL CHANGE**: Add Suspense here */}
      <Suspense fallback={<Box args={[1, 1, 1]} />}>
        <Bounds fit clip observe margin={0.8}>
          <Model {...props} />
        </Bounds>
      </Suspense>
      <Environment preset="studio" />
      <OrbitControls />
    </Canvas>
  );
}

render(<Scene />);