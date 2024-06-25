// middleware.js
import { NextResponse } from 'next/server';
import { analyzeRequest } from './lib/analyzeRequest';

export function middleware(req) {
  const url = req.nextUrl.clone();
  
  if (analyzeRequest(req)) {
    // Redirect malicious traffic to honeypot
    url.pathname = '/honeypot';
    return NextResponse.redirect(url);
  }

  // Allow legitimate traffic
  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*', // Apply to all routes
};
