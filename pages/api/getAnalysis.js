import axios from "axios";

export default async (req, res) => {
	const { token, id } = req.body;
	// console.log(token, id);
	let response, error
    try {
        response = await axios({
            url: `https://api.spotify.com/v1/audio-analysis/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            json: true
        })

        if (response.status) console.log('GET ANALYSIS STATUS: ', response.status)

    } catch (err) {
		console.error(err.response.status, err.response.statusText);
        error = err.response
    } finally {
		res.json(response?.status === 200 ? response.data : error);
	}
};
