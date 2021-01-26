import querystring from "querystring";
import { serialize } from "cookie";
import axios from "axios";
export default async (req, res) => {
	const state_key = "spotify_auth_state";

	const code = req.query.code || null;
	const state = req.query.state || null;
	const storedState = req.cookies ? req.cookies[state_key] : null;
	const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

	console.log("CODE: ", code);
	console.log("STATE: ", state);
	console.log("STORED STATE: ", storedState);
	if (state === null || state !== storedState) {
		res.redirect(
			`/#${querystring.stringify({
				error: "state_mismatch",
			})}`
		);
	} else {
		const response = await axios({
			url: "https://accounts.spotify.com/api/token",
			method: "post",
			params: {
				code: code,
				redirect_uri: REDIRECT_URI,
				grant_type: "authorization_code",
			},
			headers: {
				Accept: "application/json",
				"Content-Type": "application/x-www-form-urlencoded",
			},
			auth: {
				username: CLIENT_ID,
				password: CLIENT_SECRET,
			},
		});

		const { access_token, refresh_token } = response.data;


		await res.setHeader("Set-Cookie", [
			serialize("a", access_token, {
				path: "/",
				maxAge: 60 * 60 * 24,
			}),
			serialize("b", refresh_token, {
				path: "/",
				maxAge: 60 * 60 * 24 * 7,
			}),
		]);
		res.redirect("/");
	}
};
