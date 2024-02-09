import { useEffect } from 'react';

import type { GTMConfig } from 'src/app/libs/gtm';
import { gtm } from 'src/app/libs/gtm';

export function useAnalytics(config: GTMConfig) {
  useEffect(() => {
    gtm.initialize(config);
  }, [config]);
}
