import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ee0e57855a28a3bce6bca6f9184afee0@o4507477510193152.ingest.us.sentry.io/4507477514321920",
  tracesSampleRate: 1.0,
});

