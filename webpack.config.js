
module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: "dist/js",
        filename: "bolognese.js"
    },
    module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};
