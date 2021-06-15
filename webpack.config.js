const path = require('path')
// const CircularDependencyPlugin = require('circular-dependency-plugin')
// const htmlWebpackPlugin = require("html-webpack-plugin")
const htmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')
module.exports  ={
  mode: "development",
  entry:'./src/index.js',
  output:{
    path: path.resolve(__dirname, "dist"), // string
    filename: '[name].js',

  },
  plugins:[
    new htmlWebpackPlugin({
      template:path.join(__dirname, './src/index.html'),
      filename:"index.html"
  }),
    // new CircularDependencyPlugin(),
    new webpack.HotModuleReplacementPlugin()

  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
    compress: true,
    open:true,    //自动打开页面，
},
}
