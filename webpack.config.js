const path = require('path');

module.exports = {
  entry: './src/game/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  }
};