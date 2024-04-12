import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface PostOauthAccessTokenRequestData {
  /** Your API key. */
  'client_id'?: string;
  /** The secret key provided in your key's details. */
  'client_secret'?: string;
  /** The callback address you had previously specified for the first part. */
  'redirect_uri'?: string;
  /** Code obtained by the first part of the authentication. */
  'code'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostOauthDeviceRequestData {
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use PostOauthAccessTokenRequestData
 */
export interface PostOauthAccessToken extends PostOauthAccessTokenRequestData {}

/**
 * @Deprecated, please use PostOauthDeviceRequestData
 */
export interface PostOauthDevice extends PostOauthDeviceRequestData {}

export class AuthenticationApi implements Api {

  /** API name */
  public static readonly apiName = 'AuthenticationApi';

  /** @inheritDoc */
  public readonly apiName = AuthenticationApi.apiName;

  /** Tokens of the parameters containing PII */
  public readonly piiParamTokens: { [key: string]: string } = computePiiParameterTokens([]);

  /** @inheritDoc */
  public client: ApiClient;

  /**
   * Initialize your interface
   *
   * @params apiClient Client used to process call to the API
   */
  constructor(apiClient: ApiClient) {
    this.client = apiClient;
  }

  /**
   * Retrieve an access token with the code provided by OAuth 2 authentication
   * Retrieves an access token with the code provided by OAuth 2 authentication.
   * @param data Data to provide to the API call
   */
  public async postOauthAccessToken(data: PostOauthAccessTokenRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostOauthAccessTokenRequestData>(data, ['client_id', 'client_secret', 'redirect_uri', 'code', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/oauth/access_token`;
    const tokenizedUrl = `${this.client.options.basePath}/oauth/access_token`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, AuthenticationApi.apiName, undefined, 'postOauthAccessToken');
    return ret;
  }

  /**
   * Retrieve a code to present to the user for identification on a remote device (e.g., Television)
   * Retrieves a code to present to the user for identification on a remote device (e.g., Television).
   * @param data Data to provide to the API call
   */
  public async postOauthDevice(data: PostOauthDeviceRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostOauthDeviceRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/oauth/device`;
    const tokenizedUrl = `${this.client.options.basePath}/oauth/device`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, AuthenticationApi.apiName, undefined, 'postOauthDevice');
    return ret;
  }

}
