import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const DOCKER_MODEL_PATH = `${import.meta.env.BASE_URL}models/docker-logo.glb`;

const Cube = (props) => {
  const { scene } = useGLTF(DOCKER_MODEL_PATH)
  const groupRef = useRef()
  const [scale, setScale] = useState(22)
  const [direction, setDirection] = useState(1)

  useFrame(() => {
    if (scale >= 23) setDirection(-1)
    if (scale <= 22) setDirection(1)
    setScale((prev) => prev + direction * 0.02)
    if (groupRef.current) {
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
