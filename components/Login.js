import { useEffect, useState, useContext } from "react";

export default (props) => {
	async function handleLogin() {
		const response = await fetch("/api/login", {
			method: "GET",
			headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
			},
        });
        const res = await response.json()
        console.log(res);
        window.location.href = res.URL;
	}
	return (
		<div className="login">
			<p className="login--text">Login to your Spotify Account</p>
			<button className="login--btn" onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};
