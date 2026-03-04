import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const DOCKER_MODEL_PATH = `${import.meta.env.BASE_URL}models/docker-logo.glb`;

const Cube = (props) => {
  const { scene } = useGLTF(DOCKER_MODEL_PATH)
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const scale = 22 + Math.sin(clock.elapsedTime * 1.4) * 0.6
      groupRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <group {...props} dispose={null}>
      <group ref={groupRef} scale={22} rotation={[-0.5, -0.7, 0.2]}>
        <primitive object={scene.clone()} />
      </group>
    </group>
  )
}

useGLTF.preload(DOCKER_MODEL_PATH)

export default Cube
