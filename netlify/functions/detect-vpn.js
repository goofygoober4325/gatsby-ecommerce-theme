const axios = require('axios');

exports.handler = async function(event, context) {
  const ip = event.headers['client-ip'] || event.headers['x-forwarded-for'];
  const api_key = '610c884e3d8c25';
  const honeypotServerIP = '139.84.216.81p';

  if (!ip) {
    return {
      statusCode: 400,
      body: 'IP address not found',
    };
  }

  const url = `https://ipinfo.io/${ip}?token=${api_key}`;
  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data && data.bogon) {
      // Redirect to honeypot if detected as VPN
      return {
        statusCode: 301,
        headers: {
          Location: `http://${honeypotServerIP}/?original_ip=${ip}`,
        },
      };
    }

    // Allow non-VPN traffic to proceed to your main site
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: `<!DOCTYPE html>
      <html>
        <head>
          <title>Main Site</title>
          <meta http-equiv="refresh" content="0;url=http://Sydney-ecommerce-test-site.netlify.app">
        </head>
        <body>
          <p>If you are not redirected, <a href="http://Sydney-ecommerce-test-site.netlify.app">click here</a>.</p>
        </body>
      </html>`,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Internal server error: ${error.message}`,
    };
  }
};
