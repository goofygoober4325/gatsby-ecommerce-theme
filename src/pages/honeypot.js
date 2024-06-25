// pages/honeypot.js

import React, { useEffect } from 'react';

export default function Honeypot() {
  useEffect(() => {
    // Redirect to the actual honeypot server
    window.location.href = 'http://172.105.61.68';
  }, []);

  return <div>Redirecting...</div>;
}
