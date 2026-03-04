import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const AWS_MODEL_PATH = `${import.meta.env.BASE_URL}models/aws.glb`

export function Model(props) {
  const { nodes, materials } = useGLTF(AWS_MODEL_PATH)
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
    }
  })

  return (
    <group {...props} dispose={null}>
      <group ref={groupRef} scale={0.35}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ArrowBody.geometry}
          material={materials['Material.001']}
          position={[-0.131, 1.557, -0.203]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={160.675}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AWS.geometry}
          material={materials['Material.003']}
          position={[0.415, 6.12, -0.203]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={160.675}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ArrowHead.geometry}
          material={materials['Material.001']}
          position={[5.933, 2.057, -0.203]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={160.675}
        />
      </group>
    </group>
  )
}

useGLTF.preload(AWS_MODEL_PATH)

export default Model