const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/my-react-workspace' : '',
  assetPrefix: isProd ? '/my-react-workspace/' : '',
  output: 'export',
};