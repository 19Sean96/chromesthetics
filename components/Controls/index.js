import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFastBackward,
	faFastForward,
	faUndoAlt,
	faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";

import MorphingPlayPause from "./MorphingPlayPause";

const Controls = ({
	player,
	isPlaying,
	track,
	time,
	setTime,
	currentBarWidth,
}) => {
	const controlThumb = useRef(null);
	const controlBar = useRef(null);
	const timeRequestRef = useRef();

	return (
		<div className="dashboard">
			<section className="player">
				<MorphingPlayPause
					isPlaying={isPlaying}
					onClick={() => {
						player
							.togglePlay()
							.then(
								() =>
									!isPlaying &&
									cancelAnimationFrame(timeRequestRef.current)
							);
					}}
				/>
				<div className="player--controls">
					<div className="player--controls--buttons">
						<div className="player--skip-back player--controls--button__wrapper">
							<button
								className="player--skip-back__button player--controls--button"
								onClick={() => player.previousTrack()}
							>
								<FontAwesomeIcon icon={faFastBackward} />
							</button>
						</div>
						<div className="player--back-30 player--controls--button__wrapper">
							<button
								onClick={() => {
									let newTime;
									if (time.current <= 30000) {
										newTime = 0;
									} else newTime = time.current - 30000;
									player.seek(newTime);
								}}
								className="player--back-30__button player--controls--button"
							>
								<span className="thirty">30</span>
								<FontAwesomeIcon icon={faUndoAlt} />
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Controls;
