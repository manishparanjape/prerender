module.exports = {
	tabCreated: (req, res, next) => {

		res.setHeader("Cache-Control", "max-age=86400");

		next();
	}
}