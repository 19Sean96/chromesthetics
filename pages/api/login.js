import { generateRandomString, initMiddleware } from "../../functions/utility";
import querystring from "querystring";
import { serialize } from "cookie";
import Cors from "cors";

const cors = initMiddleware(
	Cors({
		methods: ["GET", "POST", "OPTIONS"],
	})
);

export default async (req, res) => {
	await cors(req, res);
	const state_key = "spotify_auth_state";
	const scope =
		"user-read-private user-read-email user-read-currently-playing user-read-playback-state streaming";
	const state = generateRandomString(16);
	await res.setHeader(
		"Set-Cookie",
		serialize(state_key, state, { path: "/" })
	);
    const { CLIENT_ID, REDIRECT_URI } = process.env;
    
	// try {
	// 	await res.redirect(
	// 		"https://accounts.spotify.com/authorize?" +
	// 			querystring.stringify({
	// 				response_type: "code",
	// 				client_id: CLIENT_ID,
	// 				scope: scope,
	// 				redirect_uri: REDIRECT_URI,
	// 				state: state,
	// 			})
	// 	);
	// } catch {
	// 	console.log("THERE WAS AN ERROR");
    // }

    res.json({
        URL: `https://accounts.spotify.com/authorize?${querystring.stringify({
            response_type: "code",
            client_id: CLIENT_ID,
            scope: scope,
            redirect_uri: REDIRECT_URI,
            state: state,
        })}`
    })
};
