import querystring from "querystring";
import { serialize } from "cookie";
import axios from "axios";

export default async (req, res) => {
	const grant_type = "refresh_token";
	const obj = JSON.parse(req.body);
	console.log("REFRESH TOKEN: ", obj);
	const { refresh_token } = obj;

	const { CLIENT_ID, CLIENT_SECRET } = process.env;

	const response = await axios({
		url: "https://accounts.spotify.com/api/token",
		method: "POST",
		params: {
			grant_type,
			refresh_token,
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
	console.log("REFRESH LOGIN: ", response.data);

	await res.setHeader(
		"Set-Cookie",
		serialize("a", response.data.access_token, {
			path: "/",
			maxAge: 3600,
		})
	);
    res.json(response.data)
};
