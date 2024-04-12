import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface DeleteFriendsBlockRequestData {
  /** Member ID to unblock */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteFriendsFriendRequestData {
  /** Member ID to remove */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetFriendsListRequestData {
  /** Member ID, optional, if not specified uses the identified member. If specified, blocked=false. */
  'id'?: string;
  /** If specified, returns the list of blocked people */
  'blocked'?: string;
  /** Returns the last action of friends (Default false) */
  'summary'?: string;
  /** Limit on the number of friends to display (optional, default all friends are returned) */
  'limit'?: string;
  /** Page number, default 1 */
  'page'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetFriendsRequestsRequestData {
  /** If specified, returns the list of received requests */
  'received'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostFriendsBlockRequestData {
  /** Member ID to block */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostFriendsFriendRequestData {
  /** Member ID to add as a friend */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use DeleteFriendsBlockRequestData
 */
export interface DeleteFriendsBlock extends DeleteFriendsBlockRequestData {}

/**
 * @Deprecated, please use DeleteFriendsFriendRequestData
 */
export interface DeleteFriendsFriend extends DeleteFriendsFriendRequestData {}

/**
 * @Deprecated, please use GetFriendsListRequestData
 */
export interface GetFriendsList extends GetFriendsListRequestData {}

/**
 * @Deprecated, please use GetFriendsRequestsRequestData
 */
export interface GetFriendsRequests extends GetFriendsRequestsRequestData {}

/**
 * @Deprecated, please use PostFriendsBlockRequestData
 */
export interface PostFriendsBlock extends PostFriendsBlockRequestData {}

/**
 * @Deprecated, please use PostFriendsFriendRequestData
 */
export interface PostFriendsFriend extends PostFriendsFriendRequestData {}

export class FriendsApi implements Api {

  /** API name */
  public static readonly apiName = 'FriendsApi';

  /** @inheritDoc */
  public readonly apiName = FriendsApi.apiName;

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
   * Unblocks a user
   * Unblocks a user.
   * @param data Data to provide to the API call
   */
  public async deleteFriendsBlock(data: DeleteFriendsBlockRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteFriendsBlockRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/friends/block`;
    const tokenizedUrl = `${this.client.options.basePath}/friends/block`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, FriendsApi.apiName, undefined, 'deleteFriendsBlock');
    return ret;
  }

  /**
   * Removes a friend
   * Removes a friend from the user&#39;s account.
   * @param data Data to provide to the API call
   */
  public async deleteFriendsFriend(data: DeleteFriendsFriendRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteFriendsFriendRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/friends/friend`;
    const tokenizedUrl = `${this.client.options.basePath}/friends/friend`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, FriendsApi.apiName, undefined, 'deleteFriendsFriend');
    return ret;
  }

  /**
   * Retrieves friends List
   * Retrieves the list of friends of the member.
   * @param data Data to provide to the API call
   */
  public async getFriendsList(data: GetFriendsListRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetFriendsListRequestData>(data, ['id', 'blocked', 'summary', 'limit', 'page', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/friends/list`;
    const tokenizedUrl = `${this.client.options.basePath}/friends/list`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, FriendsApi.apiName, undefined, 'getFriendsList');
    return ret;
  }

  /**
   * Retrieves sent requests
   * Retrieves the list of requests sent by the user.
   * @param data Data to provide to the API call
   */
  public async getFriendsRequests(data: GetFriendsRequestsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetFriendsRequestsRequestData>(data, ['received', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/friends/requests`;
    const tokenizedUrl = `${this.client.options.basePath}/friends/requests`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, FriendsApi.apiName, undefined, 'getFriendsRequests');
    return ret;
  }

  /**
   * Blocks a user
   * Blocks a user.
   * @param data Data to provide to the API call
   */
  public async postFriendsBlock(data: PostFriendsBlockRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostFriendsBlockRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/friends/block`;
    const tokenizedUrl = `${this.client.options.basePath}/friends/block`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, FriendsApi.apiName, undefined, 'postFriendsBlock');
    return ret;
  }

  /**
   * Adds a friend
   * Adds a friend to the user&#39;s account.
   * @param data Data to provide to the API call
   */
  public async postFriendsFriend(data: PostFriendsFriendRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostFriendsFriendRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/friends/friend`;
    const tokenizedUrl = `${this.client.options.basePath}/friends/friend`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, FriendsApi.apiName, undefined, 'postFriendsFriend');
    return ret;
  }

}
