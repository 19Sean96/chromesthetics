import * as THREE from "three";


export default () => {

	return (
		<mesh position={[0, 0, 0]}>
			<sphereBufferGeometry args={[25, 32, 32]} />
			<meshStandardMaterial
				attach="material"
				metalness={1}
				roughness={0.1}
				color={"#999"}
				emissive={"#122"}
				side={THREE.DoubleSide}
				depthTest={true}
			/>
		</mesh>
	);
};
