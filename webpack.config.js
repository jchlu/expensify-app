const path = require('path')
// https://www.npmjs.com/package/extract-text-webpack-plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin('styles.css')
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      // https://webpack.js.org/configuration/dev-server/#devserver
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true, // This is fine for dev, not for prod
      publicPath: '/dist/'
    }
  }
}
