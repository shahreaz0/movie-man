require("dotenv").config();
const request = require("request");
//http://www.omdbapi.com/?i=tt3896198&apikey=9948dcd4

class Search {
	constructor(query) {
		this.query = query;
	}
	getData(callback) {
		console.log(this);
		const url = `http://www.omdbapi.com/?s=${this.query}&apikey=${process.env.API_KEY}`;
		request({ url: url, json: true }, (error, response) => {
			if (!error && response.statusCode == 200) {
				callback(undefined, response.body);
			} else {
				callback("Something went wrong.", undefined);
			}
		});
	}
}

module.exports = Search;
