const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|JPG|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          limit: 350,
          name: './images/[name].[ext]',
        },
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
