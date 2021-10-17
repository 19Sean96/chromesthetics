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
				<div className="player--controls">
					<div className="player--controls--buttons">
						<button
							className="btn"
							id="prev"
							onClick={(e) => player.previousTrack()}
						>
							<FontAwesomeIcon icon={faFastBackward} />
						</button>
						<button
							className="btn"
							id="backward30"
							onClick={(e) => {
								if (time.current - 30 * 1000 < 0) {
									player.seek(0);
								} else {
									player.seek(time.current - 30 * 1000);
								}
							}}
						>
							<FontAwesomeIcon icon={faUndoAlt} />
						</button>
						<MorphingPlayPause
							isPlaying={isPlaying}
							onClick={() => {
								player
									.togglePlay()
									.then(
										() =>
											!isPlaying &&
											cancelAnimationFrame(
												timeRequestRef.current
											)
									);
							}}
						/>
						<button
							className="btn"
							id="forward30"
							onClick={(e) => {
								if (time.current + 30 * 1000 > time.total) {
									player.nextTrack();
								} else {
									player.seek(time.current + 30 * 1000);
								}
							}}
						>
							<FontAwesomeIcon icon={faRedoAlt} />
						</button>
						<button
							className="btn"
							id="next"
							onClick={() => player.nextTrack()}
						>
							<FontAwesomeIcon icon={faFastForward} />
						</button>
					</div>
				</div>
				<div className="player--progressbar">
					<input
						type="range"
						name="progress"
						id="progress"
						className="player--progressbar__input"
						min="0"
						value={time.current}
						max={time.total}
						onChange={(e) => player.seek(e.target.value)}
					/>
				</div>
				{track && (
					<div className="player--infobox">
						<div className="player--infobox__covers">
							{track?.previous_tracks && track.previous_tracks.length > 0 && (
								<img
									src={
										track.previous_tracks[0].album.images[2]
											.url
									}
									alt={track.previous_tracks[0].album.name}
									className="cover-previous"
									onClick={() => player.previousTrack()}
								/>
							)}

							<img
								src={track.current_track.album.images[2].url}
								alt={track.current_track.album.name}
								className="cover-current"
							/>
							<img
								src={track.next_tracks[0].album.images[2].url}
								alt={track.next_tracks[0].album.name}
								className="cover-next"
								onClick={() => player.nextTrack()}
							/>
						</div>
						<div className="player--infobox__track-info">
							<h1 className="artist">
								{track.current_track.artists
									.map((el) => el.name)
									.join(", ")}
							</h1>
							<h2 className="song">{track.current_track.name}</h2>
						</div>
					</div>
				)}
			</section>
		</div>
	);
};

export default Controls;
