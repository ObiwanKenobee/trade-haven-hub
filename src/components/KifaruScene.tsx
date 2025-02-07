import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const KifaruScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Temporary rhino placeholder (cube)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0x8B5CF6, // Kifaru purple
      emissive: 0x1A1F2C,
      specular: 0xffffff,
      shininess: 100,
    });
    const rhinoCube = new THREE.Mesh(geometry, material);
    scene.add(rhinoCube);

    // Trade network lines
    const createTradeLine = () => {
      const points = [];
      points.push(new THREE.Vector3(-2, Math.random() * 2 - 1, 0));
      points.push(new THREE.Vector3(2, Math.random() * 2 - 1, 0));
      
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0xF97316, // Kifaru orange
        transparent: true,
        opacity: 0.5
      });
      return new THREE.Line(lineGeometry, lineMaterial);
    };

    // Add multiple trade lines
    const tradeLines = [];
    for (let i = 0; i < 5; i++) {
      const line = createTradeLine();
      scene.add(line);
      tradeLines.push(line);
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      rhinoCube.rotation.x += 0.01;
      rhinoCube.rotation.y += 0.01;

      tradeLines.forEach((line) => {
        line.material.opacity = 0.3 + Math.sin(Date.now() * 0.001) * 0.2;
      });

      renderer.render(scene, camera);
    };

    // GSAP Animations
    gsap.to(rhinoCube.position, {
      y: 0.5,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10"
      style={{ background: 'linear-gradient(to bottom right, rgba(91, 33, 182, 0.1), rgba(249, 115, 22, 0.1))' }}
    />
  );
};