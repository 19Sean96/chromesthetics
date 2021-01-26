const generateRandomString = function (length) {
	let text = "";
	const possible =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
};

const initMiddleware = function (middleware) {
	return (req, res) =>
		new Promise((resolve, reject) => {
			middleware(req, res, (result) => {
				if (result instanceof Error) {
					return reject(result);
				}
				return resolve(result);
			});
		});
};

const roundTo = (n, d=2) => +n.toFixed(d)
const randsgn = () => Math.pow(-1, Math.round(Math.random))
const rand = (max = 1, min = 0, d = 2) => roundTo(min + (max - min) * Math.random(), d)

export { generateRandomString, initMiddleware, roundTo, randsgn, rand };
