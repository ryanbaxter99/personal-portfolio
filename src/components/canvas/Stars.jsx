import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(800), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 35;
    ref.current.rotation.x += delta / 25;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} {...props}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color='#8B8000' // star color
          size={0.001} // star size
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [showStars, setShowStars] = useState(false);
  const [starOpacity, setStarOpacity] = useState(0);

  // need to set timout so the stars don't show up on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStars(true);
      setStarOpacity(3);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          {showStars && (
            <Stars style={{ transition: "opacity 1s", opacity: starOpacity }} />
          )}
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
