const requestIp = require('request-ip');
const fs = require('fs');
const path = require('path');

module.exports = function handler(req, res) {
  const clientIp = requestIp.getClientIp(req);

  // Log the IP address to a file
  const logPath = path.join(process.cwd(), 'logs', 'honeypot.log');
  const logEntry = `${new Date().toISOString()} - ${clientIp}\n`;

  fs.appendFileSync(logPath, logEntry, (err) => {
    if (err) {
      console.error('Failed to write to log file', err);
    }
  });

  res.status(200).json({ message: 'Honeypot accessed' });
};