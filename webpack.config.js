const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/main_content.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|snv|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  mode: 'production',
};