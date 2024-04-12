import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface GetTimelineEventRequestData {
  /** ID of the event */
  'id': string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetTimelineFeedRequestData {
  /** Number of events per page, maximum 100 */
  'nbpp'?: string;
  /** Page number (Optional, default 1) */
  'page'?: string;
  /** Types of events to return, separated by a comma (Optional) */
  'types'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetTimelineFriendsRequestData {
  /** Number of events per page, maximum 100 */
  'nbpp'?: string;
  /** ID of the last event received to get previous ones (Optional) */
  'since_id'?: string;
  /** ID of the last event received to get subsequent ones (Optional) */
  'last_id'?: string;
  /** Types of events to return, separated by a comma (Optional) */
  'types'?: string;
  /** Include events of the identified member (Optional, default 0) */
  'self'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetTimelineHomeRequestData {
  /** Number of events per page, maximum 100 */
  'nbpp'?: string;
  /** ID of the last event received to get previous ones (Optional) */
  'since_id'?: string;
  /** ID of the last event received to get subsequent ones (Optional) */
  'last_id'?: string;
  /** Types of events to return, separated by a comma (Optional) */
  'types'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetTimelineMemberRequestData {
  /** ID of the member */
  'id': string;
  /** Number of events per page, maximum 100 */
  'nbpp'?: string;
  /** ID of the last event received to get previous ones (Optional) */
  'since_id'?: string;
  /** ID of the last event received to get subsequent ones (Optional) */
  'last_id'?: string;
  /** Types of events to return, separated by a comma (Optional) */
  'types'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetTimelineShowRequestData {
  /** ID of the series (Optional if thetvdb_id provided) */
  'id'?: string;
  /** ID of the series on TheTVDB (Optional if id provided) */
  'thetvdb_id'?: string;
  /** Number of events per page, maximum 100 */
  'nbpp'?: string;
  /** ID of the last event received to get previous ones (Optional) */
  'since_id'?: string;
  /** ID of the last event received to get subsequent ones (Optional) */
  'last_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use GetTimelineEventRequestData
 */
export interface GetTimelineEvent extends GetTimelineEventRequestData {}

/**
 * @Deprecated, please use GetTimelineFeedRequestData
 */
export interface GetTimelineFeed extends GetTimelineFeedRequestData {}

/**
 * @Deprecated, please use GetTimelineFriendsRequestData
 */
export interface GetTimelineFriends extends GetTimelineFriendsRequestData {}

/**
 * @Deprecated, please use GetTimelineHomeRequestData
 */
export interface GetTimelineHome extends GetTimelineHomeRequestData {}

/**
 * @Deprecated, please use GetTimelineMemberRequestData
 */
export interface GetTimelineMember extends GetTimelineMemberRequestData {}

/**
 * @Deprecated, please use GetTimelineShowRequestData
 */
export interface GetTimelineShow extends GetTimelineShowRequestData {}

export class TimelineApi implements Api {

  /** API name */
  public static readonly apiName = 'TimelineApi';

  /** @inheritDoc */
  public readonly apiName = TimelineApi.apiName;

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
   * Display a particular event
   * Displays a particular event.
   * @param data Data to provide to the API call
   */
  public async getTimelineEvent(data: GetTimelineEventRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetTimelineEventRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/timeline/event`;
    const tokenizedUrl = `${this.client.options.basePath}/timeline/event`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, TimelineApi.apiName, undefined, 'getTimelineEvent');
    return ret;
  }

  /**
   * Display the latest events of the friends of the identified member
   * Displays the latest events of the friends of the identified member.
   * @param data Data to provide to the API call
   */
  public async getTimelineFeed(data: GetTimelineFeedRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['page'] = data['page'] !== undefined ? data['page'] : '1';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetTimelineFeedRequestData>(data, ['nbpp', 'page', 'types', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/timeline/feed`;
    const tokenizedUrl = `${this.client.options.basePath}/timeline/feed`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, TimelineApi.apiName, undefined, 'getTimelineFeed');
    return ret;
  }

  /**
   * Display the latest events of the friends of the identified member
   * Displays the latest events of the friends of the identified member.
   * @param data Data to provide to the API call
   */
  public async getTimelineFriends(data: GetTimelineFriendsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['self'] = data['self'] !== undefined ? data['self'] : '0';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetTimelineFriendsRequestData>(data, ['nbpp', 'since_id', 'last_id', 'types', 'self', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/timeline/friends`;
    const tokenizedUrl = `${this.client.options.basePath}/timeline/friends`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, TimelineApi.apiName, undefined, 'getTimelineFriends');
    return ret;
  }

  /**
   * Display the latest events on the site
   * Displays the latest events on the site.
   * @param data Data to provide to the API call
   */
  public async getTimelineHome(data: GetTimelineHomeRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetTimelineHomeRequestData>(data, ['nbpp', 'since_id', 'last_id', 'types', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/timeline/home`;
    const tokenizedUrl = `${this.client.options.basePath}/timeline/home`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, TimelineApi.apiName, undefined, 'getTimelineHome');
    return ret;
  }

  /**
   * Display the latest events of the specified member
   * Displays the latest events of the specified member.
   * @param data Data to provide to the API call
   */
  public async getTimelineMember(data: GetTimelineMemberRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetTimelineMemberRequestData>(data, ['id', 'nbpp', 'since_id', 'last_id', 'types', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/timeline/member`;
    const tokenizedUrl = `${this.client.options.basePath}/timeline/member`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, TimelineApi.apiName, undefined, 'getTimelineMember');
    return ret;
  }

  /**
   * Display the latest events of the connected member about the specified show
   * Displays the latest events of the connected member on the specified series.
   * @param data Data to provide to the API call
   */
  public async getTimelineShow(data: GetTimelineShowRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetTimelineShowRequestData>(data, ['id', 'thetvdb_id', 'nbpp', 'since_id', 'last_id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/timeline/show`;
    const tokenizedUrl = `${this.client.options.basePath}/timeline/show`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, TimelineApi.apiName, undefined, 'getTimelineShow');
    return ret;
  }

}
