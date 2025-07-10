import { useRef, useEffect } from 'react';
import { useGLTF, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';

export default function ModelViewer({ modelPath, animation, ...props }) {
  const group = useRef();
  const { scene } = useGLTF(modelPath);

  // Optimize the model on load
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = false;
          child.receiveShadow = false;
          // Reduce geometry complexity if needed
          if (child.geometry) {
            child.geometry.computeBoundingSphere();
          }
        }
      });
    }
  }, [scene]);

  useEffect(() => {
    if (!group.current) return;
    
    // Use will-change for better performance
    gsap.set(group.current, { willChange: 'transform' });

    // Define animations based on the prop value
    switch (animation) {
      case 'card-0':
        // Animate to a 45-degree angle
        gsap.to(group.current.rotation, { 
          y: Math.PI / 4, 
          duration: 1, 
          ease: 'power3.inOut',
          onComplete: () => gsap.set(group.current, { willChange: 'auto' })
        });
        break;
      case 'card-1':
        // Animate to a -45-degree angle
        gsap.to(group.current.rotation, { 
          y: -Math.PI / 4, 
          duration: 1, 
          ease: 'power3.inOut',
          onComplete: () => gsap.set(group.current, { willChange: 'auto' })
        });
        break;
      default:
        // Return to the default position
        gsap.to(group.current.rotation, { y: 0, duration: 1, ease: 'power3.inOut' });
        break;
    }
  }, [animation]); // Rerun the effect when the animation prop changes

  return (
    <group ref={group} {...props} dispose={null}>
        <Center>
            <primitive object={scene} />
        </Center>
    </group>
  );
}