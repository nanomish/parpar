const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.resolve('client/app/app.js')
  ],
  output: {
    path: 'public/',
    filename: 'main.app.js'
  }
}


