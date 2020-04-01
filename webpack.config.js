const path = require("path");

module.exports = {
	entry: {
		main: "./meetoffliner.js",
		background: "./extension_background.js",
	},
	output: {
		path: path.resolve(__dirname, "./extension/chrome/"),
		filename: "[name].js",
	},
};