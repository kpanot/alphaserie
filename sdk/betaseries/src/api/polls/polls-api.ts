import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface GetPollsLastRequestData {
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPollsListRequestData {
  /** Number of results per page, default 10 */
  'nbpp'?: string;
  /** Page number, default 1 */
  'page'?: string;
  /** Display inactive polls (1 or 0, default 0) */
  'inactive'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPollsPollRequestData {
  /** Poll ID */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPollsTargetRequestData {
  /** Target type (episode or show) */
  'type'?: string;
  /** ID of the episode or series */
  'ref_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostPollsAnswerRequestData {
  /** Poll ID */
  'id'?: string;
  /** Answer number */
  'answer'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use GetPollsLastRequestData
 */
export interface GetPollsLast extends GetPollsLastRequestData {}

/**
 * @Deprecated, please use GetPollsListRequestData
 */
export interface GetPollsList extends GetPollsListRequestData {}

/**
 * @Deprecated, please use GetPollsPollRequestData
 */
export interface GetPollsPoll extends GetPollsPollRequestData {}

/**
 * @Deprecated, please use GetPollsTargetRequestData
 */
export interface GetPollsTarget extends GetPollsTargetRequestData {}

/**
 * @Deprecated, please use PostPollsAnswerRequestData
 */
export interface PostPollsAnswer extends PostPollsAnswerRequestData {}

export class PollsApi implements Api {

  /** API name */
  public static readonly apiName = 'PollsApi';

  /** @inheritDoc */
  public readonly apiName = PollsApi.apiName;

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
   * Display the latest active poll
   * Display the latest active poll on BetaSeries.
   * @param data Data to provide to the API call
   */
  public async getPollsLast(data: GetPollsLastRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPollsLastRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/polls/last`;
    const tokenizedUrl = `${this.client.options.basePath}/polls/last`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PollsApi.apiName, undefined, 'getPollsLast');
    return ret;
  }

  /**
   * Display all polls
   * Display all polls of BetaSeries.
   * @param data Data to provide to the API call
   */
  public async getPollsList(data: GetPollsListRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPollsListRequestData>(data, ['nbpp', 'page', 'inactive', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/polls/list`;
    const tokenizedUrl = `${this.client.options.basePath}/polls/list`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PollsApi.apiName, undefined, 'getPollsList');
    return ret;
  }

  /**
   * Display the details of a poll
   * Display the details of the poll with the given ID.
   * @param data Data to provide to the API call
   */
  public async getPollsPoll(data: GetPollsPollRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPollsPollRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/polls/poll`;
    const tokenizedUrl = `${this.client.options.basePath}/polls/poll`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PollsApi.apiName, undefined, 'getPollsPoll');
    return ret;
  }

  /**
   * Display the latest active poll
   * Display the latest active poll regarding the target.
   * @param data Data to provide to the API call
   */
  public async getPollsTarget(data: GetPollsTargetRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPollsTargetRequestData>(data, ['type', 'ref_id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/polls/target`;
    const tokenizedUrl = `${this.client.options.basePath}/polls/target`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PollsApi.apiName, undefined, 'getPollsTarget');
    return ret;
  }

  /**
   * Send a response to a poll
   * Send a response to a poll.
   * @param data Data to provide to the API call
   */
  public async postPollsAnswer(data: PostPollsAnswerRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostPollsAnswerRequestData>(data, ['id', 'answer', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/polls/answer`;
    const tokenizedUrl = `${this.client.options.basePath}/polls/answer`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PollsApi.apiName, undefined, 'postPollsAnswer');
    return ret;
  }

}
