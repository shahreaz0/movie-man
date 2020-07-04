const router = require("express").Router();
const search = require("../models/Search");

// routes
router.get("/search", (req, res) => {
	res.render("search", {
		title: "Search",
		path: req.url,
	});
});

router.get("/results", async (req, res) => {
	const q = req.query.movieName;
	if (q) {
		try {
			const data = await search(q);
			res.render("results", {
				title: "Results",
				data: data.Search,
			});
		} catch (error) {
			res.send(error);
		}
	} else {
		res.redirect("/search");
	}
});

module.exports = router;
