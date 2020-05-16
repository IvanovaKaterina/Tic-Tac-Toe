const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: [
              /node_modules/
            ]
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                  loader: 'css-loader',
                  options: {
                    modules: {
                      localIdentName: '[local]___[hash:base64:5]'
                    }
                  }
                },
            ],
        },
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: __dirname + "/public/index.html",
          inject: 'body'
      })
  ],
  devServer: {
      contentBase: './src',
      port: 7700,
  } 
};