import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const TARGET_MODEL_PATH = `${import.meta.env.BASE_URL}models/ts.glb`;

const Target = (props) => {
  const { nodes, materials } = useGLTF(TARGET_MODEL_PATH);
  const groupRef = useRef();
  const [up, setUp] = useState(true);

  const isMobile = useMediaQuery({ minWidth: 440, maxWidth: 768 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const pp = isSmall ? 0 : isMobile ? -10 : -10;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.y += up ? 0.01 : -0.01;
      if (groupRef.current.position.y > pp + 0.5) setUp(false);
      if (groupRef.current.position.y < pp) setUp(true);
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[Math.PI / 2 - 0.18, 0.8, -0.6]} scale={0.01 * 20}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.back.geometry}
          material={materials["back.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO.geometry}
          material={materials["logo.001"]}
          position={[0.534, 0.644, 0.996]}
        />
      </group>
    </group>
  );
};

useGLTF.preload(TARGET_MODEL_PATH);
export default Target;
