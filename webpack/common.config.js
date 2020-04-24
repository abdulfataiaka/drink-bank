const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// I hope you are using create-react-app for other projects
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../build'),
    publicPath: '/build'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  devServer: {
    port: 4500,
    contentBase: path.join(__dirname, '../public'),
    historyApiFallback: true
  }
}
