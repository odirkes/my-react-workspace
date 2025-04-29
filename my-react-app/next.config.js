// filepath: /Users/owendirkes/Documents/React/my-react-app/next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/my-react-workspace' : '',
  assetPrefix: isProd ? '/my-react-workspace/' : '',
};