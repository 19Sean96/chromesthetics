import { useRef, useEffect, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useSpring, animated, config} from 'react-spring/three'
import { MeshWobbleMaterial } from "drei";

const Cube = (props) => {
	const mesh = useRef();
	const [segmentIndex, setSegmentIndex] = useState(0);
	const [segmentAnimation, setSegmentAnimation] = useState({
		from: undefined,
		to: undefined,
		duration: 1,
	});
	const [currentBeat, setCurrentBeat] = useState({
		up: 0,
		down: 0,
	});

    const { features, analysis } = props.audioDetails;
    
    const animatedVals = useSpring({
		to: {
			scale: segmentAnimation.to
				? [
						0.5 +
							0.025 *
								segmentAnimation.to.timbre[
									props.scaleIndex.x
								],
						0.5 +
							0.025 *
								segmentAnimation.to.timbre[
									props.scaleIndex.y
								],
						0.5 +
							0.025 *
								segmentAnimation.to.timbre[
									props.scaleIndex.z
								],
				  ]
				: [1, 1, 1],
		},
		config: config.wobbly,
    });
    
	useEffect(() => {
		setSegmentIndex(0);
	}, [props.track?.current_track.id]);

	useFrame(() => {

		if (analysis) {
			let current, next, dur;
			// console.log("ANALYSIS: ", analysis);
			// console.log(props.time.current);
			if (segmentIndex < analysis.segments.length - 1) {
				if (
					analysis.segments[segmentIndex + 1].start * 1000 <
					props.time.current
				) {
					setSegmentIndex(segmentIndex + 1);
					current = analysis.segments[segmentIndex];
					dur = current.duration;
					next = analysis.segments[segmentIndex + 1];
					// console.log("CURRENT SEGMENT: ", current);
					// console.log("SEGMENT DURATION: ", dur);
					// console.log("NEXT SEGMENT: ", next);
					setSegmentAnimation({
						from: current,
						to: next,
						duration: dur,
					});
				}
			}
		}

		mesh.current.rotation.x += segmentAnimation.to
			? segmentAnimation.to.pitches[props.rotationIndex.x] / 6
			: 0.05;

		mesh.current.rotation.y += segmentAnimation.to
			? segmentAnimation.to.pitches[props.rotationIndex.y] / 6
			: 0.05;

		mesh.current.rotation.z += segmentAnimation.to
			? segmentAnimation.to.pitches[props.rotationIndex.z] / 6
			: 0.05;

		// mesh.current.scale.x = segmentAnimation.to ? 
        //     0.5 + 0.025 * segmentAnimation.to.timbre[props.scaleIndex.x]
        //     : 1
		// mesh.current.scale.y = segmentAnimation.to ? 
        //     0.5 + 0.025 * segmentAnimation.to.timbre[props.scaleIndex.y]
        //     : 1
		// mesh.current.scale.z = segmentAnimation.to ? 
        //     0.5 + 0.025 * segmentAnimation.to.timbre[props.scaleIndex.z]
        //     : 1
	});

	
	return (
		<animated.mesh
			{...animatedVals}
			{...props}
			ref={mesh}
		>
			<boxBufferGeometry args={[1, 1, 1]} />
			<MeshWobbleMaterial
				attach="material"
				factor={0.1}
				color={props.color}
			/>
		</animated.mesh>
	);
};

export default Cube;
