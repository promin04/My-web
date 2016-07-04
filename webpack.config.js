var webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports={
  entry:[
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './public/scripts/master.jsx'
  ],
  externals:{
    jquery:'jQuery'
  },
  plugins:[

    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
})
  ],
  output:{
    path: __dirname,
    filename: './public/scripts/bundle.js'
  },
  resolve:{
    extensions: ['','.js','.jsx']
  },
  module:{
    loaders:[
      {
    loader: 'babel-loader',
    query: {
      presets: ['react','es2015','stage-0']
    },
    test:/\.jsx?$/,
    exclude:/(node_modules|bower_components)/
      }
    ]
  },
  devtool: process.env.NODE_ENV==='production'?undefined:'cheap-module-eval-source-map'
};
