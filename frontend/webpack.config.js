const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
module.exports = {
  mode: 'development',
  entry: __dirname + "/src/app/index.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {  // where we defined file patterns and their loaders
      rules: [{
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }]
  },
  plugins: [  // Array of plugins to apply to build chunk
      new HtmlWebpackPlugin({
          template: __dirname + "/src/public/index.html",
          inject: 'body'
      })
  ],
  devServer: {  // configuration for webpack-dev-server
      static: {
        directory: __dirname + '/src/public',
      },  //source of static assets
      port: 8080, // port to run dev-server
  } 
};