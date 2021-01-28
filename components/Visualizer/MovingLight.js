import { useState, useRef, useEffect } from "react";

import { useFrame } from "react-three-fiber";
import { randsgn } from "../../functions/utility";

export default function MovingLight({
	position,
	angle,
	power,
	speed,
	audioDetails,
	isPlaying,
	time,
	track,
	xFactor,
	yFactor,
	zFactor,
}) {
	const ref = useRef();
	const { features, analysis } = audioDetails;

	const [cos, setCos] = useState(0);
	const [sin, setSin] = useState(0);
	const [color, setColor] = useState();
	const [signX, setSignX] = useState(1)
	const [signY, setSignY] = useState(-1)
	const [signZ, setSignZ] = useState(1)
	xFactor = xFactor < 0.05 ? xFactor * 10 : xFactor;
	yFactor = yFactor < 0.05 ? yFactor * 10 : yFactor;
	zFactor = zFactor < 0.05 ? zFactor * 10 : zFactor;

	function convertDecimalToHex(dec) {
		dec = Math.round(dec * 255);
		return dec.toString(16).length === 2
			? dec.toString(16)
			: dec.toString(16) + dec.toString(16);
	}

	useEffect(() => {
		ref.current.position.x = position[0];
		ref.current.position.y = position[1];
		ref.current.position.z = position[2];

		const red = convertDecimalToHex(xFactor * (2 / 3));
		const green = convertDecimalToHex((yFactor + zFactor) / 2);
		const blue = convertDecimalToHex(1 - zFactor);

		setColor("#" + red + green + blue);
		console.log(color);

		setSignX(Math.round(Math.random()) * 2 - 1)
		setSignY(Math.round(Math.random()) * 2 - 1)
		setSignZ(Math.round(Math.random()) * 2 - 1)
	}, [track]);

	useFrame(() => {
		if (features && isPlaying) {
			setCos(cos + ((features.key + 1) * 0.6) / features.tempo);
			setSin(sin + features.valence * features.speechiness);
			ref.current.position.x +=
				(features.tempo / 15) * Math.cos(cos / xFactor)
			ref.current.position.y +=
				(features.tempo / 30) * Math.sin(sin / yFactor)
			ref.current.position.z +=
				(features.tempo / 15) * Math.sin(cos / zFactor)
		}
	});

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
