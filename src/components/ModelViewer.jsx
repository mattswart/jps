import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { useGLTF, Center } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { gsap } from 'gsap';
import * as THREE from 'three';

// Custom hook for performance monitoring
const usePerformanceMonitor = () => {
  const [performanceMode, setPerformanceMode] = useState('auto');
  
  useEffect(() => {
    // Simple performance detection
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    
    if (!gl) {
      setPerformanceMode('low');
      return;
    }
    
    // Check for mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Check GPU vendor for performance hints
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const vendor = debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : '';
    
    if (isMobile || vendor.toLowerCase().includes('intel')) {
      setPerformanceMode('low');
    } else {
      setPerformanceMode('high');
    }
  }, []);
  
  return performanceMode;
};

// Model optimization utility
const optimizeModel = (scene, performanceMode) => {
  if (!scene) return null;
  
  const clonedScene = scene.clone();
  
  clonedScene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = false;
      child.receiveShadow = false;
      
      if (child.material) {
        // Optimize materials based on performance mode
        if (performanceMode === 'low') {
          child.material.precision = 'lowp';
          
          // Disable expensive features
          if (child.material.normalMap) {
            child.material.normalMap = null;
          }
          if (child.material.roughnessMap) {
            child.material.roughnessMap = null;
          }
        }
        
        // Optimize textures
        if (child.material.map) {
          child.material.map.generateMipmaps = false;
          child.material.map.minFilter = THREE.LinearFilter;
          child.material.map.magFilter = THREE.LinearFilter;
        }
      }
      
      // Optimize geometry
      if (child.geometry) {
        child.geometry.computeBoundingSphere();
        
        // Reduce geometry complexity for low-end devices
        if (performanceMode === 'low' && child.geometry.attributes.position.count > 10000) {
          // You could implement geometry simplification here
          console.log('High poly model on low-end device');
        }
      }
    }
  });
  
  return clonedScene;
};

const ModelViewer = ({ modelPath, animation, ...props }) => {
  const group = useRef();
  const { scene } = useGLTF(modelPath);
  const performanceMode = usePerformanceMonitor();
  const [isAnimating, setIsAnimating] = useState(false);
  const { invalidate } = useThree(); // Get invalidate function to trigger re-renders
  
  // Memoize the optimized scene
  const optimizedScene = useMemo(() => {
    return optimizeModel(scene, performanceMode);
  }, [scene, performanceMode]);
  
  // Optimized animation function
  const animateModel = useCallback((animationType) => {
    if (!group.current || isAnimating) return;
    
    setIsAnimating(true);
    
    // Kill existing animations
    gsap.killTweensOf(group.current.rotation);
    
    // Performance-aware animation settings
    const duration = performanceMode === 'low' ? 0.5 : 1;
    const ease = performanceMode === 'low' ? 'power2.inOut' : 'power3.inOut';
    
    gsap.set(group.current, {
      willChange: 'transform',
      transformOrigin: 'center center'
    });
    
    let targetRotation = 0;
    
    switch (animationType) {
      case 'card-0':
        targetRotation = Math.PI / 4;
        break;
      case 'card-1':
        targetRotation = -Math.PI / 4;
        break;
      default:
        targetRotation = 0;
        break;
    }
    
    gsap.to(group.current.rotation, {
      y: targetRotation,
      duration,
      ease,
      onUpdate: () => {
        invalidate(); // Force re-render during animation
      },
      onComplete: () => {
        gsap.set(group.current, { willChange: 'auto' });
        setIsAnimating(false);
        invalidate(); // Final re-render
      }
    });
  }, [performanceMode, isAnimating, invalidate]);
  
  // Animation trigger
  useEffect(() => {
    // Debounce animation calls
    const timeoutId = setTimeout(() => {
      animateModel(animation);
    }, 50);
    
    return () => clearTimeout(timeoutId);
  }, [animation, animateModel]);
  
  // Performance-aware frame updates
  const frameCount = useRef(0);
  useFrame(() => {
    frameCount.current++;
    
    // Update frequency based on performance mode
    const updateFrequency = performanceMode === 'low' ? 6 : 3;
    
    if (frameCount.current % updateFrequency === 0) {
      // Any per-frame updates here
    }
  });
  
  if (!optimizedScene) return null;
  
  return (
    <group ref={group} {...props} dispose={null}>
      <Center>
        <primitive object={optimizedScene} />
      </Center>
    </group>
  );
};

export default React.memo(ModelViewer);