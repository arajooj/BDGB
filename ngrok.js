const ngrok = require('ngrok');
const dotenv = require('dotenv').config();

(async function() {

  const url = await ngrok.connect({
    proto: 'http', // http|tcp|tls, defaults to http
    addr: process.env.PORTA, // port or network address, defaults to 80
    authtoken: process.env.AUTH, // your authtoken from ngrok.com
    region: 'sa', // one of ngrok regions (us, eu, au, ap), defaults to us
    });
  console.log(url)
})();
