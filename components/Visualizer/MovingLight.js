import { useState, useRef } from "react";

import { useFrame } from "react-three-fiber";

export default function MovingLight({ color, position, angle, power }) {
	const ref = useRef();

	return (
		<pointLight
			distance={0}
			color={color}
			position={position}
			angle={angle}
			power={power}
			castShadow={true}
			ref={ref}
		/>
	);
}
