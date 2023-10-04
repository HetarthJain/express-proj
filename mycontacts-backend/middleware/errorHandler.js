// Handles errors
const { constants } = require("../constants")

// Custom error handler
const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode ? res.statusCode : 500
	switch (statusCode) {
		case constants.VALIDATION_ERROR:
			res.json({
				title: "Validation Failed",
				message: err.message,
				stackTrace: err.stackTrace
			})
			break
		case constants.NOT_FOUND:
			res.json({
				title: "NOT FOUND",
				message: err.message,
				stackTrace: err.stackTrace
			})
			break
		case constants.UNAUTHORIZED:
			res.json({
				title: "UNAUTHORIZED",
				message: err.message,
				stackTrace: err.stackTrace
			})
			break
		case constants.FORBIDDEN:
			res.json({
				title:"FORBIDDEN",		message: err.message,
				stackTrace: err.stackTrace
				})
			break
		case constants.SERVER_ERROR:
			res.json({
				title: "SERVER_ERROR",
				message: err.message,
				stackTrace: err.stackTrace
			})
			break
		default:
			console.log("No Error Continue")
			break
	}
	
}
module.exports = errorHandler;