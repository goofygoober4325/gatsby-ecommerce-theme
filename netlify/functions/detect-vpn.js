const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const ip = event.headers['client-ip'] || event.headers['x-forwarded-for'];
  const api_key = "610c884e3d8c25"; // Replace with your actual IPinfo API key
  const url = `https://ipinfo.io/${ip}/privacy?token=${api_key}`;
  const honeypotServerIP = "139.84.216.81"; // Replace with your actual honeypot server IP

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.vpn) {
      return {
        
        statusCode: 302,
        headers: {
          Location: `http://${honeypotServerIP}/?original_ip=${ip}`
        },
        body: "Redirecting to honeypot"
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Welcome to the e-commerce site!" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to detect VPN" })
    };
  }
};
