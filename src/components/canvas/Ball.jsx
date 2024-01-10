import React, { Suspense,useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();

  // Add a state to store the target rotation
  const targetRotation = useRef([0, 0, 0]);
   const initialPosition = [0,0,0];

  // Update the rotation of the ball to smoothly interpolate towards the target rotation
  useFrame(() => {
    meshRef.current.rotation.x += (targetRotation.current[0] - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.y += (targetRotation.current[1] - meshRef.current.rotation.y) * 0.05;
    meshRef.current.rotation.z += (targetRotation.current[2] - meshRef.current.rotation.z) * 0.05;
  });

  const handleDoubleClick = () => {
    // Set the target rotation to the original rotation
    targetRotation.current = [10, 10, 10];
  };

  return (
  <Float speed={1.75}  rotationIntensity={1} floatIntensity={2} position={initialPosition}>
     <ambientLight intensity={0.76}/>
     <directionalLight position={[0,0,0.05]}/> 
     
     <mesh ref={meshRef} castShadow receiveShadow scale={2.75}  onDoubleClick={handleDoubleClick}>
      <icosahedronGeometry args={[1, 1]}/>
      <meshStandardMaterial
      color="#fff8eb"
      polygonOffset
      polygonOffsetFactor={-5}
      flatShading
      />
      <Decal 
       position={[0,0,1]}
       rotation={[2*Math.PI,0,6.25]}
       map={decal}
      />
     </mesh>
  </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false}/>
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
