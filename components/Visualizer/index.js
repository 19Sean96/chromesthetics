import { useRef, useState } from "react";

import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";

import cubes from "../../data/cubes";
import MovingLight from "./MovingLight";
import Surroundings from "./Surroundings";
import Cube from './Cube'
const Visualizer = ({ time, audioDetails, track, isPlaying }) => {
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
			{audioDetails?.features && (
				<>
					<MovingLight
						position={[0, 0.4, -15]}
						angle={22}
						power={20 * (4 * Math.PI)}
						speed={7878}
						audioDetails={audioDetails}
						isPlaying={isPlaying}
						time={time}
						track={track}
						xFactor={audioDetails.features.acousticness}
						yFactor={audioDetails.features.speechiness}
						zFactor={audioDetails.features.danceability}
					/>
					<MovingLight
						position={[-1, -0.65, 5]}
						angle={17}
						power={35 * (4 * Math.PI)}
						speed={3487}
						audioDetails={audioDetails}
						isPlaying={isPlaying}
						time={time}
						track={track}
						xFactor={audioDetails.features.speechiness}
						yFactor={audioDetails.features.danceability}
						zFactor={audioDetails.features.acousticness}
					/>
					<MovingLight
						position={[4, -5, 12]}
						angle={13}
						power={40 * (3 * Math.PI)}
						speed={8723}
						audioDetails={audioDetails}
						isPlaying={isPlaying}
						time={time}
						track={track}
						xFactor={audioDetails.features.danceability}
						yFactor={audioDetails.features.acousticness}
						zFactor={audioDetails.features.speechiness}
					/>
				</>
			)}
			{audioDetails?.analysis && cubes.map((cube, i) => <Cube 
				position={cube.pos}
				time={time}
				audioDetails={audioDetails}
				scaleIndex={cube.scaleIndex}
				rotationIndex={cube.rotationIndex}
				track={track}							
				color={i % 2 === 0 ? "#333" : "#ddd"}
				isPlaying={isPlaying}
			/>)}
		</Canvas>
	);
};

export default Visualizer;
