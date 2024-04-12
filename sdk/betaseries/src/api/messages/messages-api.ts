import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface DeleteMessagesMessageRequestData {
  /** ID of the message to delete — if it's the first in a discussion, the whole discussion is deleted */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMessagesDiscussionRequestData {
  /** ID of the first message of the discussion */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMessagesInboxRequestData {
  /** Page number, default 1 */
  'page'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMessagesMessageRequestData {
  /** ID of the recipient member (mandatory if first message) */
  'to'?: string;
  /** Text of the message */
  'text'?: string;
  /** Title of the message (mandatory if first message) */
  'title'?: string;
  /** ID of the first message in the discussion (optional) */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMessagesReadRequestData {
  /** ID of the message to mark as read */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use DeleteMessagesMessageRequestData
 */
export interface DeleteMessagesMessage extends DeleteMessagesMessageRequestData {}

/**
 * @Deprecated, please use GetMessagesDiscussionRequestData
 */
export interface GetMessagesDiscussion extends GetMessagesDiscussionRequestData {}

/**
 * @Deprecated, please use GetMessagesInboxRequestData
 */
export interface GetMessagesInbox extends GetMessagesInboxRequestData {}

/**
 * @Deprecated, please use PostMessagesMessageRequestData
 */
export interface PostMessagesMessage extends PostMessagesMessageRequestData {}

/**
 * @Deprecated, please use PostMessagesReadRequestData
 */
export interface PostMessagesRead extends PostMessagesReadRequestData {}

export class MessagesApi implements Api {

  /** API name */
  public static readonly apiName = 'MessagesApi';

  /** @inheritDoc */
  public readonly apiName = MessagesApi.apiName;

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
   * Delete a message
   * Delete a specific message. If it&#39;s the first in a discussion, the entire discussion is deleted.
   * @param data Data to provide to the API call
   */
  public async deleteMessagesMessage(data: DeleteMessagesMessageRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteMessagesMessageRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/messages/message`;
    const tokenizedUrl = `${this.client.options.basePath}/messages/message`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MessagesApi.apiName, undefined, 'deleteMessagesMessage');
    return ret;
  }

  /**
   * Retrieve a discussion
   * Fetch a discussion using the ID of its first message.
   * @param data Data to provide to the API call
   */
  public async getMessagesDiscussion(data: GetMessagesDiscussionRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMessagesDiscussionRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/messages/discussion`;
    const tokenizedUrl = `${this.client.options.basePath}/messages/discussion`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MessagesApi.apiName, undefined, 'getMessagesDiscussion');
    return ret;
  }

  /**
   * Retrieve the member&#39;s inbox
   * Fetch the inbox of the identified member, paginated by 20 messages.
   * @param data Data to provide to the API call
   */
  public async getMessagesInbox(data: GetMessagesInboxRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMessagesInboxRequestData>(data, ['page', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/messages/inbox`;
    const tokenizedUrl = `${this.client.options.basePath}/messages/inbox`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MessagesApi.apiName, undefined, 'getMessagesInbox');
    return ret;
  }

  /**
   * Send a message
   * Send a message to a fellow member of the site.
   * @param data Data to provide to the API call
   */
  public async postMessagesMessage(data: PostMessagesMessageRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMessagesMessageRequestData>(data, ['to', 'text', 'title', 'id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/messages/message`;
    const tokenizedUrl = `${this.client.options.basePath}/messages/message`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MessagesApi.apiName, undefined, 'postMessagesMessage');
    return ret;
  }

  /**
   * Mark a message as read
   * Mark a specific message as read.
   * @param data Data to provide to the API call
   */
  public async postMessagesRead(data: PostMessagesReadRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMessagesReadRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/messages/read`;
    const tokenizedUrl = `${this.client.options.basePath}/messages/read`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MessagesApi.apiName, undefined, 'postMessagesRead');
    return ret;
  }

}
