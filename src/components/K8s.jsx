import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/kubernetes_k8s_3d_logo.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -0.002]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['blue.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['Material.005']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/kubernetes_k8s_3d_logo.glb')
