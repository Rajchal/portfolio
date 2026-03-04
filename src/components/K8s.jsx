import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const K8S_MODEL_PATH = `${import.meta.env.BASE_URL}models/k8s.glb`

const K8s = (props) => {
  const { nodes, materials } = useGLTF(K8S_MODEL_PATH)
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.01
    }
  })

  return (
    <group {...props} dispose={null}>
      <group ref={groupRef} position={[0, 0, -0.002]}>
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

useGLTF.preload(K8S_MODEL_PATH)

export default K8s
