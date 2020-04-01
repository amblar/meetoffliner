const path = require("path");

module.exports = {
	entry: {
		main: "./meetoffliner.js",
		background: "./background.js",
	},
	output: {
		path: path.resolve(__dirname, "./extension/chrome/"),
		filename: "[name].js",
	},
};