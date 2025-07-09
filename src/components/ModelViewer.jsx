import { useRef, useEffect } from 'react';
import { useGLTF, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';

export default function ModelViewer({ modelPath, animation, ...props }) {
  const group = useRef();
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    if (!group.current) return;

    // Define animations based on the prop value
    switch (animation) {
      case 'card-0':
        // Animate to a 45-degree angle
        gsap.to(group.current.rotation, { y: Math.PI / 4, duration: 1, ease: 'power3.inOut' });
        break;
      case 'card-1':
        // Animate to a -45-degree angle
        gsap.to(group.current.rotation, { y: -Math.PI / 4, duration: 1, ease: 'power3.inOut' });
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