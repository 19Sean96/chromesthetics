import { useState, useRef } from 'react'

const Controls = props => {
    // const { track } = props
    return (
        <div className="dashboard">
            <div className="current">
				{/* {track && (
					<>
						<h2 className="current--song">
							{track.current_track.name}
						</h2>
						<h2 className="current--artist">
							{track.current_track.artists[0].name}
						</h2>
					</>
				)} */}
			</div>
            <section className="player">
                <div className="player--controls">
                    <div className="player--controls--buttons">
                        <div className="player--skip-back player--controls--button__wrapper">
                            <button className="player--skip-back__button player--controls--button">
                                pause/play
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Controls