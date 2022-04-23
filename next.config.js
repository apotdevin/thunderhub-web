const withImages = require('next-images');

module.exports = withImages({
  poweredByHeader: false,
  compiler: {
    styledComponents: true,
  },
});
