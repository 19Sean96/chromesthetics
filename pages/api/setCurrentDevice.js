import axios from "axios";

export default async (req, res) => {
	const { token, id } = req.body;
	// console.log(token, id);
	let response;
	try {
		response = await axios({
			method: "PUT",
			url: "https://api.spotify.com/v1/me/player",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: {
				device_ids: [id],
			},
			json: true,
		});

		if (response.status) console.log("DEVICE STATUS", response.status);
		// console.log("AVAILABLE DEVICES", response);
	} catch (err) {
		console.error(err);
		response = false;
	} finally {
        console.log("THIS IS THE STATUS CODE: ", response.status);
        if (response.status === 204) {
            res.json({message: 'success', id});
        }
	}
};
