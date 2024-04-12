import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface GetPersonsArticlesRequestData {
  /** Person's ID */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPersonsPersonRequestData {
  /** Person's ID. */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use GetPersonsArticlesRequestData
 */
export interface GetPersonsArticles extends GetPersonsArticlesRequestData {}

/**
 * @Deprecated, please use GetPersonsPersonRequestData
 */
export interface GetPersonsPerson extends GetPersonsPersonRequestData {}

export class PersonsApi implements Api {

  /** API name */
  public static readonly apiName = 'PersonsApi';

  /** @inheritDoc */
  public readonly apiName = PersonsApi.apiName;

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
   * Display news articles
   * Display news articles that talk about the person.
   * @param data Data to provide to the API call
   */
  public async getPersonsArticles(data: GetPersonsArticlesRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPersonsArticlesRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/persons/articles`;
    const tokenizedUrl = `${this.client.options.basePath}/persons/articles`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PersonsApi.apiName, undefined, 'getPersonsArticles');
    return ret;
  }

  /**
   * Display details of the actor
   * Display the details of the actor.
   * @param data Data to provide to the API call
   */
  public async getPersonsPerson(data: GetPersonsPersonRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPersonsPersonRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/persons/person`;
    const tokenizedUrl = `${this.client.options.basePath}/persons/person`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PersonsApi.apiName, undefined, 'getPersonsPerson');
    return ret;
  }

}
