const path = require("path");

module.exports = {
	entry: {
        main: "./meetoffliner.js",
        loader: "./loader.js",
    },
	output: {
		path: path.resolve(__dirname, "./dist/"),
		filename: "[name].js",
	},
};