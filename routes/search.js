const express = require("express");
const router = express.Router();

const Search = require("../models/Search");

router.get("/search", (req, res) => {
	res.render("search", {
		title: "Search",
		path: req.url,
	});
});

router.get("/results", (req, res) => {
	const q = req.query.movieName;
	//console.log(q);
	if (q) {
		const search = new Search(q);
		search.getData((error, data) => {
			if (error) return res.send(error);
			res.render("results", {
				title: "Results",
				data: data.Search,
			});
		});
	} else {
		res.redirect("/search");
	}
});

module.exports = router;
