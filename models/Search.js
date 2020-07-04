const axios = require("axios").default;
require("dotenv").config();

const search = async (query) => {
	const option = {
		url: "http://www.omdbapi.com/",
		params: {
			s: query,
			apikey: process.env.API_KEY,
		},
	};

	try {
		const res = await axios(option);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

module.exports = search;
