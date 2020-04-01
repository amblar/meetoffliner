const path = require("path");

module.exports = {
	entry: {
		main: "./src/meetoffliner.js",
		background: "./src/extension_background.js",
	},
	output: {
		path: path.resolve(__dirname, "./extension/chrome/"),
		filename: "[name].js",
	},
};