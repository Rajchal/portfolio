import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const RUST_MODEL_PATH = `${import.meta.env.BASE_URL}models/rust.glb`

const Rust = (props) => {
  const { nodes, materials } = useGLTF(RUST_MODEL_PATH)
  const groupRef = useRef()
  const baseYRef = useRef(0)
  const hasSetBaseYRef = useRef(false)

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    if (!hasSetBaseYRef.current) {
      baseYRef.current = groupRef.current.position.y
      hasSetBaseYRef.current = true
    }

    groupRef.current.position.y = baseYRef.current + Math.sin(clock.elapsedTime * 1.2) * 0.6
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group
        position={[0.482, 0.182, 0.003]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.28, 0.52, 0.28]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials['Material.006']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Material}
        scale={[0.266, 1.927, 1.927]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['Material.001']}
        position={[0.317, 0, 0]}
        scale={[0.212, 1.308, 1.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['Material.001']}
        position={[0, -0.847, 2.28]}
        scale={[0.17, 0.225, 0.591]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials['Material.001']}
        position={[0, -2.19, -0.93]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.17, 0.225, 0.591]}
      />
    </group>
  )
}

useGLTF.preload(RUST_MODEL_PATH)

export default Rust

