const path = require("path");

module.exports = {
	entry: {
		main: "./src/main.js",
		background: "./src/background.js",
	},
	output: {
		path: path.resolve(__dirname, "./extension/chrome/"),
		filename: "[name].js",
	},
};