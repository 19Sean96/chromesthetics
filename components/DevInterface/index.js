import { useContext, useState, useEffect } from "react";
import ToggleOpen from "./ToggleOpen";
const DevInterface = ({ track, audioDetails, time }) => {
	const { current_track } = track;
	const { analysis, features } = audioDetails;

	const [open, toggleOpen] = useState(true);

	return (
		<div id="devInterface" className="dev-interface" style={{
			backgroundColor: open ? 'rgba(0,0,0, 0.55)' : 'rgba(0,0,0,0)'
		}}>
			<ToggleOpen toggleOpen={(e) => toggleOpen(!open)} open={open} />

			<div
				className="dev-interface--list"
				style={{
					transform: open ? "translateX(0)" : "translateX(-150%)",
				}}
			>
				<div className="dev-interface--list__trackInfo">
					<h6>track info</h6>
					<p>
						<span>artists: </span>
						<span>
							{current_track.artists.map((artist) => (
								<span>{artist.name}, </span>
							))}
						</span>
					</p>
					<p>
						<span>song: </span>
						<span>{current_track.name}</span>
					</p>
					<p>
						<span>album: </span>
						<span>{current_track.album.name}</span>
					</p>
					<p>
						<span>song length: </span>
						<ul className="dev-interface--list_sublist">
							<li>
								<span>min/sec: </span>
								<span>{`${Math.floor(
									Math.floor(time.total / 1000) / 60
								)}:${
									Math.floor(time.total / 1000) % 60
								}`}</span>
							</li>
							<li>
								<span>seconds: </span>
								<span>{Math.floor(time.total / 1000)}</span>
							</li>
							<li>
								<span>Milliseconds: </span>
								<span>{time.total}</span>
							</li>
							<li>
								<span>Elapsed Time (s): </span>
								<span>{`${Math.floor(
									time.current / 1000
								)} / ${Math.floor(time.total / 1000)}`}</span>
							</li>{" "}
							<li>
								<span>Elapsed Time (ms): </span>
								<span>{`${time.current} / ${time.total}`}</span>
							</li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	);
};

export default DevInterface;
