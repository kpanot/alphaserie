// place files you want to import through the `$lib` alias in this folder.
import type { PluginRunner, RequestOptions, RequestPlugin } from '@ama-sdk/core';
import type { AuthenticationApi } from '../../api/authentication/authentication-api';

interface BetaseriesIdentifierOptions {
  client_id: string;
  client_secret: string;
  redirect_uri?: string;
  code: string;
}

interface authenticationResponse {
  access_token: string;
  token_type: string;
}

/**
 * Azure Api Management identification plugin
 */
export class BetaseriesIdentifier implements RequestPlugin {

  private readonly options: BetaseriesIdentifierOptions & { redirect_uri: string };

  public api?: AuthenticationApi;

  /** Token to be used in the request */
  private token?: Promise<authenticationResponse>;

  constructor(options: BetaseriesIdentifierOptions, api?: AuthenticationApi) {
    const defaultRedirectUri = `${location.hostname}${location.pathname}`;
    this.api = api;
    this.options = {
      redirect_uri: defaultRedirectUri,
      ...options
    };
  }

  private async getToken(): Promise<authenticationResponse> {
    if (this.api) {
      const response = await this.api.postOauthAccessToken({
        client_id: this.options.client_id,
        client_secret: this.options.client_secret,
        redirect_uri: this.options.redirect_uri,
        code: this.options.code
      }) as any as authenticationResponse;

      const token = response;
      if (!token) {
        throw new Error('Token not found in response');
      }
      return token;
    } else {
      throw new Error('Authentication API is not initialized');
    }
  }

  public load(): PluginRunner<RequestOptions, RequestOptions> {
    return {
      transform: async (data: RequestOptions) => {
        console.log(data.basePath);
        if (!data.basePath.endsWith('/oauth/access_token')) {
          if (!this.token) {
            this.token = this.getToken();
          }
          const token = await this.token;
          data.headers.set('Authorization', `${token.token_type[0].toUpperCase() + token.token_type.slice(1)} ${token.access_token}`);
        }

        data.headers.set('X-BetaSeries-Version', '3.0');
        data.headers.set('X-BetaSeries-Key', this.options.client_id);

        return data;
      }
    };
  }
}
