var webpack = require('webpack');
var path = require('path');
var envFile =require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try{
    envFile('./app/config_env/'+process.env.NODE_ENV+'.env')
} catch(error){}

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
    }),
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV:JSON.stringify(process.env.NODE_ENV),
        API_KEY:JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN:JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL:JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET:JSON.stringify(process.env.STORAGE_BUCKET)
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
