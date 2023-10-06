import React, { useRef, useState, useCallback } from "react";
import { Canvas } from "react-three-fiber";
import Effects from "./Threejs/Effects";
import { Html } from "@react-three/drei";
import "./Style/Welcome.css";

function Ring({ color }) {
  const mesh = useRef();

  return (
    <mesh ref={mesh}>
      <ambientLight intensity={0} />
      <ringBufferGeometry args={[8, 9, 50]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Welcome({ color, ringColors, setColor }) {
  const [down, set] = useState(false);
  const mouse = useRef([0, 0]);

  const colorPicker = () => {
    let currentColor = color;

    if (currentColor === ringColors.length - 1) {
      currentColor = -1;
    }

    setColor((currentColor += 1));
  };

  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  );

  return (
    <Canvas
      id="home"
      camera={{ fov: 100, position: [0, 0, 10] }}
      onMouseMove={onMouseMove}
      onMouseUp={() => set(false)}
      onMouseDown={() => set(true)}
      onTouchStart={() => colorPicker()}
      onTouchEnd={() => set(false)}
      onClick={() => colorPicker()}
      onCli
    >
      <ambientLight intensity={5} />
      <pointLight distance={100} intensity={4} color="white" />
      <fog attach="fog" args={["white", 50, 190]} />
      <Ring color={ringColors[color]} />
      <Html center>
        <div className="content">
          <h1>Welcome</h1>
          <p>Lets Create Amazing Things Together</p>
          <a href="#About" class="btn btn-circle">
            <i class="fa fa-angle-double-down"></i>
          </a>
        </div>
      </Html>
      <Effects down={down} />
    </Canvas>
  );
}

export default Welcome;
