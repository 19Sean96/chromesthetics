import { useRef, useState } from "react";

import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";

import cubes from "../../data/cubes";
import MovingLight from "./MovingLight";
import Surroundings from './Surroundings.js'
export default (props) => {
	return (
		<Canvas
			camera={{
				fov: 95,
				orthographic: true,
				position: [0, 0, 22.5],
			}}
		>
			<OrbitControls />
            <Surroundings />
			<MovingLight
				color="#fff"
				position={[0, 0.4, -15]}
				angle={10}
				power={8 * (4 * Math.PI)}
			/>
			<MovingLight
				color="#fc2200"
				position={[-1, -0.65, 5]}
				angle={10}
				power={7 * (4 * Math.PI)}
			/>
			<MovingLight
				color="#4f0b00"
				position={[4, -5, 12]}
				angle={3}
				power={9 * (3 * Math.PI)}
				speed={8723}
			/>
		</Canvas>
	);
};
