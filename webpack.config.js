const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      watch: true,
    },
    port: 3000,
    open: true,
    compress: true,
    hot: false, 
    liveReload: true,
    
  },
  module: {
    rules: [ 
      {
        test: /\.ts$/,
        use: 'ts-loader',   
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\,m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src/styles'), 
        use: [ 'style-loader' , 'css-loader', 'postcss-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: './events.html',
      template: './src/events.html',
    }),
    new HtmlWebpackPlugin({
      filename: './artists.html',
      template: './src/artists.html',
    }),
    new HtmlWebpackPlugin({
      filename: './about.html',
      template: './src/about.html',
    }),
  ],
}