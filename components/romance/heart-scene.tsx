"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function makeHeartShape() {
    const shape = new THREE.Shape();
    const x = 0;
    const y = 0;
    shape.moveTo(x + 5, y + 5);
    shape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
    shape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
    shape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
    shape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
    shape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
    shape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
    return shape;
}

export function HeartScene() {
    const wrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrap = wrapRef.current;
        if (!wrap) return;

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
        renderer.setSize(wrap.clientWidth, wrap.clientHeight);
        renderer.setClearColor(0xfff1f6, 0);
        wrap.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            38,
            wrap.clientWidth / Math.max(wrap.clientHeight, 1),
            0.1,
            80,
        );
        camera.position.set(0, 0.2, 16);

        const geometry = new THREE.ExtrudeGeometry(makeHeartShape(), {
            depth: 2.2,
            bevelEnabled: true,
            bevelSegments: 3,
            steps: 1,
            bevelSize: 0.45,
            bevelThickness: 0.4,
        });
        geometry.center();
        geometry.rotateZ(Math.PI);
        geometry.scale(0.42, 0.42, 0.42);

        const material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color("#ff3d78"),
            roughness: 0.28,
            metalness: 0.02,
            clearcoat: 0.55,
            clearcoatRoughness: 0.25,
            emissive: new THREE.Color("#ff4d88"),
            emissiveIntensity: 0.45,
        });
        const heart = new THREE.Mesh(geometry, material);
        scene.add(heart);

        const orbit = new THREE.Group();
        const beadGeometry = new THREE.SphereGeometry(0.16, 20, 20);
        const beadMaterials: THREE.MeshStandardMaterial[] = [];
        const palette = ["#ffd4e4", "#fff4ea", "#ff8fb8", "#e7c4ff", "#ffc2d4"];
        for (let i = 0; i < 16; i += 1) {
            const beadMaterial = new THREE.MeshStandardMaterial({
                color: palette[i % palette.length],
                emissive: palette[i % palette.length],
                emissiveIntensity: 0.4,
                roughness: 0.35,
            });
            beadMaterials.push(beadMaterial);
            const bead = new THREE.Mesh(beadGeometry, beadMaterial);
            const angle = (i / 16) * Math.PI * 2;
            const radius = i % 2 === 0 ? 3.7 : 4.6;
            bead.position.set(
                Math.cos(angle) * radius,
                Math.sin(angle) * 2.5,
                Math.sin(angle * 2) * 1.4,
            );
            orbit.add(bead);
        }
        scene.add(orbit);

        scene.add(new THREE.AmbientLight("#ffffff", 2.2));
        const key = new THREE.DirectionalLight("#ffe4ef", 2.4);
        key.position.set(4, 6, 8);
        scene.add(key);
        const rim = new THREE.DirectionalLight("#e9d5ff", 1.4);
        rim.position.set(-6, -2, 4);
        scene.add(rim);

        const clock = new THREE.Clock();
        let frame = 0;
        const tick = () => {
            const t = clock.getElapsedTime();
            heart.rotation.y = t * 0.55;
            heart.rotation.x = Math.sin(t * 0.7) * 0.2;
            heart.position.y = 0.7 + Math.sin(t * 1.15) * 0.22;
            orbit.rotation.y = t * 0.32;
            orbit.rotation.z = Math.sin(t * 0.4) * 0.15;
            renderer.render(scene, camera);
            wrap.dataset.frames = String(Math.floor(t * 10));
            frame = requestAnimationFrame(tick);
        };
        tick();

        const onResize = () => {
            const width = wrap.clientWidth;
            const height = Math.max(wrap.clientHeight, 1);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", onResize);
            geometry.dispose();
            material.dispose();
            beadGeometry.dispose();
            beadMaterials.forEach((item) => item.dispose());
            renderer.dispose();
            if (renderer.domElement.parentElement === wrap) {
                wrap.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={wrapRef} className="h-full w-full" />;
}
