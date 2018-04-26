const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
		rules: [
			{
				test: /\.js$/, 
				include: [ path.resolve('src') ],
				loader: 'babel-loader'
			},
		]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({ 
            template: './src/index.html',
		}),
    ]
};
