/* Example in Node.js ES6 using request-promise, concepts should translate to your language of choice */
  
const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    start: 1,
    limit: 5000,
    convert: 'USD'
  },
  headers: {
    'CMC_PRO_API_KEY': '3304d8d2-9f67-4661-825e-085bc3f9f577'
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  console.log('API call response:', response);
}).catch((err) => {
  console.log('API call error:', err.message);
});
