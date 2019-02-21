const env = process.env.NODE_ENV

if (env == 'production') {
  module.exports = require('./webpack/prod.config');
}

else {
  module.exports = require('./webpack/dev.config');
}
