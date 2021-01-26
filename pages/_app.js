import "./index.scss";
import SpotifyContext from '../components/context'
function MyApp({ Component, pageProps }) {
	return (
		<SpotifyContext>
			<Component {...pageProps} />
		</SpotifyContext>
	);
}

export default MyApp;
