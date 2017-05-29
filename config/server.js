// config used by server side only
const NODE_SERVER_PORT = 3000;
const NODE_SERVER_HOST = '127.0.0.1';

module.exports = {
  // used by Store (server side)
  apiBaseUrl: `http://${NODE_SERVER_HOST}:${NODE_SERVER_PORT}/api/v1`,

  // used by Store (server and client side)
  ajaxBaseUrl: `http://${NODE_SERVER_HOST}:${NODE_SERVER_PORT}/ajax`,

  // used by API
  adminLoginUrl: '/admin/login',

  listenPort: NODE_SERVER_PORT,

  // used by API
  mongodbServerUrl: 'mongodb://db:27017/shop',

  // key to sign tokens
  jwtSecretKey: '-',

  // key to sign store cookies
  cookieSecretKey: '-',

  // path to uploads
  categoriesUploadPath: 'public/static/categories',
  productsUploadPath: 'public/static/products',
  filesUploadPath: 'public/static/files',

  // url to uploads
  categoriesUploadUrl: '/static/categories',
  productsUploadUrl: '/static/products',
  filesUploadUrl: '/static/files',

  // store UI language
  language: 'en',

  // used by API
  orderStartNumber: 1000
}
