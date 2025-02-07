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
  const particlesRef = useRef<THREE.Points>();
  const tradeLinesRef = useRef<THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup with more dynamic positioning
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 8);
    cameraRef.current = camera;

    // Enhanced renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Advanced lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 1, 1);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Add point lights for dramatic effect
    const pointLight1 = new THREE.PointLight(0x8B5CF6, 1, 10);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xF97316, 1, 10);
    pointLight2.position.set(-2, -2, -2);
    scene.add(pointLight2);

    // Enhanced rhino placeholder (complex geometric shape)
    const rhinoGeometry = new THREE.DodecahedronGeometry(1, 1);
    const rhinoMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8B5CF6,
      metalness: 0.7,
      roughness: 0.2,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
    });
    const rhinoMesh = new THREE.Mesh(rhinoGeometry, rhinoMaterial);
    rhinoMesh.castShadow = true;
    rhinoMesh.receiveShadow = true;
    scene.add(rhinoMesh);

    // Particle system for ambient effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xF97316,
      size: 0.02,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Enhanced trade network visualization
    const createTradeLine = (start: THREE.Vector3, end: THREE.Vector3) => {
      const points = [];
      const segments = 50;
      
      for (let i = 0; i <= segments; i++) {
        const alpha = i / segments;
        const x = start.x + (end.x - start.x) * alpha;
        const y = start.y + (end.y - start.y) * alpha + Math.sin(alpha * Math.PI) * 0.5;
        const z = start.z + (end.z - start.z) * alpha;
        points.push(new THREE.Vector3(x, y, z));
      }
      
      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(100));
      const material = new THREE.LineBasicMaterial({ 
        color: 0xF97316,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending
      });
      return new THREE.Line(geometry, material);
    };

    // Create multiple trade routes
    const tradeRoutes = [];
    for (let i = 0; i < 8; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );
      const line = createTradeLine(start, end);
      scene.add(line);
      tradeRoutes.push(line);
    }
    tradeLinesRef.current = tradeRoutes;

    // Interactive mouse movement
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Enhanced animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate rhino based on mouse position
      rhinoMesh.rotation.x += 0.005;
      rhinoMesh.rotation.y += 0.005;
      rhinoMesh.position.x += (mouseX * 0.1 - rhinoMesh.position.x) * 0.05;
      rhinoMesh.position.y += (mouseY * 0.1 - rhinoMesh.position.y) * 0.05;

      // Animate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0005;
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.001 + positions[i]) * 0.001;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // Animate trade routes
      tradeLinesRef.current.forEach((line, index) => {
        line.material.opacity = 0.3 + Math.sin(Date.now() * 0.001 + index) * 0.2;
        line.rotation.y += 0.001;
      });

      renderer.render(scene, camera);
    };

    // GSAP Animations for smooth camera movement
    gsap.to(camera.position, {
      z: 6,
      duration: 2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
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
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10"
      style={{ 
        background: 'linear-gradient(to bottom right, rgba(91, 33, 182, 0.1), rgba(249, 115, 22, 0.1))',
        cursor: 'move'
      }}
    />
  );
};
