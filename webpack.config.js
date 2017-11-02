var path = require('path');

module.exports = {
  entry: path.resolve(__dirname+, 'app')+'/App.js';
  output: {
    path: __dirname,
    filename: path.resolve(__dirname, 'public')+'compiled.js',
  },
  module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                exclude: (node_modules|bower_components)
            },
            {
                test: /\.css$/,
                loader: 'style-loader|css-loader'
            }
        ]
    }
}
