import * as THREE from "three";


export default () => {

	return (
		<mesh position={[0, 0, 0]}>
			<sphereBufferGeometry args={[25, 12, 12]} />
			<meshStandardMaterial
				attach="material"
				metalness={1}
				roughness={0.1}
				color={"#4aed13"}
				emissive={"#111"}
				side={THREE.DoubleSide}
				depthTest={true}
			/>
		</mesh>
	);
};
