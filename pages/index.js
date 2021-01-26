import { useState, useEffect, useRef } from "react";

import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import Visualizer from "../components/Visualizer";
import Controls from "../components/Controls";
import Login from "../components/Login";

const Index = () => {
	const requestRef = useRef(null);

	const router = useRouter();
	const [tokens, setTokens] = useState([]);
	const [loggedIn, setLoggedIn] = useState(false);
	const [connectedSDK, connectToSDK] = useState(false);
	const [player, setPlayer] = useState();
	const [device, setDevice] = useState(false);
	const [track, setTrack] = useState();
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentBarWidth, setCurrentBarWidth] = useState();
	const [audioDetails, setAudioDetails] = useState({
		features: undefined,
		analysis: undefined,
	});
	const [time, setTime] = useState({
		current: 0,
		total: 0,
  });
  
  const setCurrentDevice = async (token, id) => {

    const res = await fetch('/api/setCurrentDevice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({token,id})
    })
    const response = await res.json()

    console.log("SET CURRENT DEVICE RESPONSE: ", response);
    return response
  }

	const handleSDKLoaded = () => {
		return new Promise((resolve) => {
			if (window.Spotify) {
				resolve();
			} else {
				window.onSpotifyWebPlaybackSDKReady = resolve;
			}
		});
	};

	const getSongTimeStamp = () => {
		player.getCurrentState().then((res) => {
			if (res?.position && res?.duration) {
				setTime(() => {
					return {
						current: res.position,
						total: res.duration,
					};
				});
				setCurrentBarWidth(res.position / res.duration);
			}
		});
	};

	const trackSongTime = (t) => {
		// console.log(t);
		if (!isPlaying) {
			console.log("IT IS NOT PLAYING");
			requestRef.current = null;
			return cancelAnimationFrame(requestRef.current);
		}

		if (isPlaying) {
			getSongTimeStamp();
			requestAnimationFrame(trackSongTime);
		}
	};

	const checkCookies = () => {
		let a, b;
		const cookies = document.cookie.split("; ");
		if (cookies.length > 2) {
			cookies.forEach((cookie) => {
				if (cookie.includes("a=")) {
					a = cookie.slice(2);
				} else if (cookie.includes("b=")) {
					b = cookie.slice(2);
				} else return;
			});

			setTokens([a, b]);
		} else setTimeout(checkCookies, 300);
	};

	useEffect(() => {
		window.onSpotifyWebPlaybackSDKReady = () => console.log("It IS READY");
  }, []);
  
	useEffect(() => {
		if (requestRef.current == null) {
			requestRef.current = requestAnimationFrame(trackSongTime);
		}

		return () => cancelAnimationFrame(requestRef.current);
	}, [isPlaying]);

	useEffect(async() => {
		if (track) {
			const { id } = track.current_track;
      getSongTimeStamp();
      
      const analysisRes = await fetch('/api/getAnalysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, token: tokens[0]})
      })
      const analysis = await analysisRes.json()

      const featuresRes = await fetch('/api/getFeatures', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, token: tokens[0]})
      })
      const features = await featuresRes.json()

      // getAudioAnalysis(id, tokens[0]).then((analysis) =>
			// 	getAudioFeatures(id, tokens[0]).then((features) =>
			// 		setAudioDetails({ features, analysis })
			// 	)
      // );
      setAudioDetails({ features, analysis })
		}
	}, [track?.current_track?.id]);

	useEffect(async () => {
		console.log(router.query);
		checkCookies();
	}, [router]);

	useEffect(() => {
		if (tokens.length > 1) {
			console.log("WE NEED TO LOAD THE SDK");
			handleSDKLoaded().then(() => {
				setPlayer(
					new window.Spotify.Player({
						name: "Chromesthetics",
						getOAuthToken: (cb) => cb(tokens[0]),
						volume: 0.5,
					})
				);
				setLoggedIn(true);
			});
		}
	}, [tokens]);

	useEffect(() => {
		if (player) {
			// Error handling
			player.addListener("initialization_error", ({ message }) => {
				console.error(`init error: ${message}`);
			});
			player.addListener("authentication_error", ({ message }) => {
				console.error(`auth error: ${message}`);
			});
			player.addListener("account_error", ({ message }) => {
				console.error(`account error: ${message}`);
			});
			player.addListener("playback_error", ({ message }) => {
				console.error(`play error: ${message}`);
			});

			// Playback status updates
			player.addListener("player_state_changed", (state) => {
				console.log("*STATE*", state);
				if (state !== null) {
					if (!connectedSDK) {
						connectToSDK(true);
					}

					setTrack(state.track_window);
					setIsPlaying(!state.paused);
				} else {
					connectToSDK(false);
				}
			});

			// Ready
			player.addListener("ready", ({ device_id }) => {
				console.log("Ready with Device ID", device_id);
				if (!device) {
					setCurrentDevice(tokens[0], device_id).then((res) => {
            console.log(res);
            if (res.message === "success") {
              setDevice(res.id);
            }
						// setIsPlaying(true)
					});
				}
			});

			// Not Ready
			player.addListener("not_ready", ({ device_id }) => {
				console.log("Device ID has gone offline", device_id);
				setConnected(false);
			});

			// Connect to the player!
			player.connect().then((connected) => {
				connectToSDK(true);
				console.log(connected);
			});
		}
	}, [player]);

	return (
		<div className="app">
			<Head>
				<title>Chromesthetics</title>
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<script
					crossOrigin
					src="https://sdk.scdn.co/spotify-player.js"
				></script>
			</Head>
			<main className="main">
				{!loggedIn && <Login />}
				<Visualizer />
				<Controls />
			</main>
		</div>
	);
};

export default Index;
