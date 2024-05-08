// place files you want to import through the `$lib` alias in this folder.
import type { PluginRunner, RequestOptions, RequestPlugin } from '@ama-sdk/core';
import type { AuthenticationApi } from '../../api/authentication/authentication-api';

interface BetaseriesWithTokenOptions {
  key: string;
  apiTokenGlobalToken?: string;
}

const defaultApiTokenGlobalToken = 'betaseries_api_user_token';

/**
 * Add headers to the request from information from globalthis
 */
export class BetaseriesWithToken implements RequestPlugin {

  public readonly options: BetaseriesWithTokenOptions;

  constructor(options: BetaseriesWithTokenOptions) {
    this.options = options;
  }

  public load(): PluginRunner<RequestOptions, RequestOptions> {
    return {
      transform: async (data: RequestOptions) => {
        data.headers.set('X-BetaSeries-Key', this.options.key);
        data.headers.set('X-BetaSeries-Version', '3.0');
        data.headers.set('X-BetaSeries-Token', (globalThis as any)[this.options.apiTokenGlobalToken || defaultApiTokenGlobalToken] as string);
        return data;
      }
    };
  }
}
