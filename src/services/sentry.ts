import * as Sentry from '@sentry/react-native';

import { SENTRY_DSN } from '@/config/env';

function initSentry() {
  if (!__DEV__) {
    Sentry.init({
      dsn: SENTRY_DSN,
      enableAutoSessionTracking: true,
    });
  }
}

function captureError(error: Error) {
  if (!__DEV__) {
    Sentry.captureException(error);
  }
}

export { initSentry, captureError };
