import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface DeletePlatformsServiceRequestData {
  /** Service ID */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPlatformsListRequestData {
  /** Country */
  'country'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPlatformsServicesRequestData {
  /** Member's ID (Optional if identified) */
  'id'?: string;
  /** Type of services (svod, vod, all) Default all */
  'type'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostPlatformsServiceRequestData {
  /** Service ID */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use DeletePlatformsServiceRequestData
 */
export interface DeletePlatformsService extends DeletePlatformsServiceRequestData {}

/**
 * @Deprecated, please use GetPlatformsListRequestData
 */
export interface GetPlatformsList extends GetPlatformsListRequestData {}

/**
 * @Deprecated, please use GetPlatformsServicesRequestData
 */
export interface GetPlatformsServices extends GetPlatformsServicesRequestData {}

/**
 * @Deprecated, please use PostPlatformsServiceRequestData
 */
export interface PostPlatformsService extends PostPlatformsServiceRequestData {}

export class PlatformsApi implements Api {

  /** API name */
  public static readonly apiName = 'PlatformsApi';

  /** @inheritDoc */
  public readonly apiName = PlatformsApi.apiName;

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
   * Remove the service from the user&#39;s subscriptions
   * Remove the service from the user&#39;s subscriptions.
   * @param data Data to provide to the API call
   */
  public async deletePlatformsService(data: DeletePlatformsServiceRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeletePlatformsServiceRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/platforms/service`;
    const tokenizedUrl = `${this.client.options.basePath}/platforms/service`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PlatformsApi.apiName, undefined, 'deletePlatformsService');
    return ret;
  }

  /**
   * Display the SVOD and VOD platforms available in the country
   * Display the SVOD and VOD platforms available in the country.
   * @param data Data to provide to the API call
   */
  public async getPlatformsList(data: GetPlatformsListRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPlatformsListRequestData>(data, ['country', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/platforms/list`;
    const tokenizedUrl = `${this.client.options.basePath}/platforms/list`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PlatformsApi.apiName, undefined, 'getPlatformsList');
    return ret;
  }

  /**
   * Display the different services a user can have
   * Display the different services a user can have.
   * @param data Data to provide to the API call
   */
  public async getPlatformsServices(data: GetPlatformsServicesRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPlatformsServicesRequestData>(data, ['id', 'type', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/platforms/services`;
    const tokenizedUrl = `${this.client.options.basePath}/platforms/services`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PlatformsApi.apiName, undefined, 'getPlatformsServices');
    return ret;
  }

  /**
   * Add the service to the user&#39;s subscriptions
   * Add the service to the user&#39;s subscriptions.
   * @param data Data to provide to the API call
   */
  public async postPlatformsService(data: PostPlatformsServiceRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostPlatformsServiceRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/platforms/service`;
    const tokenizedUrl = `${this.client.options.basePath}/platforms/service`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PlatformsApi.apiName, undefined, 'postPlatformsService');
    return ret;
  }

}
