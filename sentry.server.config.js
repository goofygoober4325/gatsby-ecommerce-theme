import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://de92adaf09fda3030f4cfa1caf0d0928@o4507477510193152.ingest.us.sentry.io/4507478090645504",
  tracesSampleRate: 1.0,
});

