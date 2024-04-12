import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface GetBadgesBadgeRequestData {
  /** Badge ID. You can add more than one by separating them with a comma. */
  'id': string;
  /** ID of the user who earned the badge(s). */
  'userId'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use GetBadgesBadgeRequestData
 */
export interface GetBadgesBadge extends GetBadgesBadgeRequestData {}

export class BadgesApi implements Api {

  /** API name */
  public static readonly apiName = 'BadgesApi';

  /** @inheritDoc */
  public readonly apiName = BadgesApi.apiName;

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
   * Returns badge details
   * Returns a badge details.
   * @param data Data to provide to the API call
   */
  public async getBadgesBadge(data: GetBadgesBadgeRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetBadgesBadgeRequestData>(data, ['id', 'userId', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/badges/badge`;
    const tokenizedUrl = `${this.client.options.basePath}/badges/badge`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, BadgesApi.apiName, undefined, 'getBadgesBadge');
    return ret;
  }

}
