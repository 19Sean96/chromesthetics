
const Track = ({track}) => {
	return (
		<div className="track">
			<h2 className="track--artist">
				{track.current_track.artists[0].name}
			</h2>
            <h2 className="track--song">{track.current_track.name}</h2>
		</div>
	);
};
export default Track