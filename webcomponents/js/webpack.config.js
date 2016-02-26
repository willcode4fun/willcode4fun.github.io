var path = require('path');

module.exports = {
    entry: "./main.js",
    output: {
        path: path.join(__dirname, 'es5'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
			{ test: /\.js$/, loader: 'babel-loader', 
				include: [ path.resolve(__dirname, "es2015") ], 
				query: { presets: ['es2015'] } }
        ]
    },
	resolve: {
        alias: {
			utilities: path.join(__dirname,'es2015/utilities'),
            prettify: path.join(__dirname,'lib/google-code-prettify'),
			webcomponents: path.join(__dirname,'lib/webcomponents/webcomponents.js')
        }
    }
};