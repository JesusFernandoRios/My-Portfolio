import React, { useRef, useState, useCallback } from 'react'
import { Canvas } from 'react-three-fiber'
import Effects from './Threejs/Effects'
import {Html} from '@react-three/drei'
import './Style/Welcome.css';



function Ring() {
  const mesh = useRef()
  
  return (
    <mesh
    ref={mesh}
    >
      <ambientLight intensity={3}/>
      <ringBufferGeometry  args={[5,6,50]}/>
      <meshStandardMaterial color="purple"/>
      
    </mesh>
  )
}


function Welcome() {
  const [down, set] = useState(false)
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

  return (
    <Canvas
      
      camera={{ fov: 100, position: [0, 0, 10] }}
      onMouseMove={onMouseMove}
      onMouseUp={() => set(false)}
      onMouseDown={() => set(true)}
    >
      <ambientLight intensity={5}/>
      <pointLight distance={100} intensity={4} color="white" />
      <fog attach="fog" args={['white', 50, 190]} />
      <Ring/>
      <Html 
        center
      >
        <div className="content">
          <h1>Welcome</h1>
          <p>Lets Create Amazing Things Together</p>
        </div>
      </Html>
      <Effects down={down}/>
      
    </Canvas>
    
  );
}

export default Welcome;
