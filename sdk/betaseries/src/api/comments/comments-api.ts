import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface DeleteCommentsCommentRequestData {
  /** ID of the comment */
  'id': string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteCommentsSubscriptionRequestData {
  /** Type of item: episode|show|member|movie */
  'type'?: string;
  /** ID of the item in question */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteCommentsThumbRequestData {
  /** ID of the comment */
  'id': string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetCommentsCommentRequestData {
  /** ID of the comment */
  'id': string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetCommentsCommentsRequestData {
  /** Number of comments per page */
  'nbpp': string;
  /** Element type: episode|show|member|movie|poll|article */
  'type'?: string;
  /** ID of the element in question */
  'id'?: string;
  /** ID of the last comment received (Optional) */
  'since_id'?: string;
  /** Chronological return order, desc or asc (Default asc) */
  'order'?: string;
  /** Include replies to comments (1 or 0, default 1) */
  'replies'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetCommentsRepliesRequestData {
  /** ID of the comment */
  'id': string;
  /** Chronological return order, desc or asc (Default asc) */
  'order'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetCommentsStatusRequestData {
  /** Type of item: episode|show|member|movie */
  'type'?: string;
  /** ID of the item in question */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostCommentsCommentRequestData {
  /** Type of item: episode|show|member|movie|event|poll|article (Mandatory for creation, or reference) */
  'type': string;
  /** ID of the item in question (Mandatory for creation, or reference) */
  'id': string;
  /** Reference ID of the item in question (Mandatory for creation, or type + id) */
  'reference': string;
  /** If a reply, inner_id of the corresponding comment (Optional for creation) */
  'in_reply_to'?: string;
  /** Text of the comment */
  'text'?: string;
  /** ID of the comment to edit (Mandatory for editing) */
  'edit_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostCommentsCommentEventRequestData {
  /** Type of the event: film_add|markas.... (Optional if id provided) */
  'type'?: string;
  /** ID of the element involved in the event (Optional if id provided) */
  'element_id'?: string;
  /** ID of the event to comment on (Optional if type + element_id provided) */
  'id'?: string;
  /** Text of the comment */
  'text'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostCommentsSubscriptionRequestData {
  /** Type of item: episode|show|member|movie */
  'type'?: string;
  /** ID of the item in question */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostCommentsThumbRequestData {
  /** ID of the comment */
  'id': string;
  /** Type of the vote (-1 for a downvote, 1 for an upvote) */
  'type': string;
  /** Whether the user switches their existing vote (default false) */
  'switch'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use DeleteCommentsCommentRequestData
 */
export interface DeleteCommentsComment extends DeleteCommentsCommentRequestData {}

/**
 * @Deprecated, please use DeleteCommentsSubscriptionRequestData
 */
export interface DeleteCommentsSubscription extends DeleteCommentsSubscriptionRequestData {}

/**
 * @Deprecated, please use DeleteCommentsThumbRequestData
 */
export interface DeleteCommentsThumb extends DeleteCommentsThumbRequestData {}

/**
 * @Deprecated, please use GetCommentsCommentRequestData
 */
export interface GetCommentsComment extends GetCommentsCommentRequestData {}

/**
 * @Deprecated, please use GetCommentsCommentsRequestData
 */
export interface GetCommentsComments extends GetCommentsCommentsRequestData {}

/**
 * @Deprecated, please use GetCommentsRepliesRequestData
 */
export interface GetCommentsReplies extends GetCommentsRepliesRequestData {}

/**
 * @Deprecated, please use GetCommentsStatusRequestData
 */
export interface GetCommentsStatus extends GetCommentsStatusRequestData {}

/**
 * @Deprecated, please use PostCommentsCommentRequestData
 */
export interface PostCommentsComment extends PostCommentsCommentRequestData {}

/**
 * @Deprecated, please use PostCommentsCommentEventRequestData
 */
export interface PostCommentsCommentEvent extends PostCommentsCommentEventRequestData {}

/**
 * @Deprecated, please use PostCommentsSubscriptionRequestData
 */
export interface PostCommentsSubscription extends PostCommentsSubscriptionRequestData {}

/**
 * @Deprecated, please use PostCommentsThumbRequestData
 */
export interface PostCommentsThumb extends PostCommentsThumbRequestData {}

export class CommentsApi implements Api {

  /** API name */
  public static readonly apiName = 'CommentsApi';

  /** @inheritDoc */
  public readonly apiName = CommentsApi.apiName;

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
   * Delete a comment from the identified user
   * Deletes a comment from the identified user.
   * @param data Data to provide to the API call
   */
  public async deleteCommentsComment(data: DeleteCommentsCommentRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteCommentsCommentRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/comments/comment`;
    const tokenizedUrl = `${this.client.options.basePath}/comments/comment`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, CommentsApi.apiName, undefined, 'deleteCommentsComment');
    return ret;
  }

  /**
   * Unsubscribe the member from email notifications for the given item
   * Unsubscribes the member from email notifications for the given item.
   * @param data Data to provide to the API call
   */
  public async deleteCommentsSubscription(data: DeleteCommentsSubscriptionRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteCommentsSubscriptionRequestData>(data, ['type', 'id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/comments/subscription`;
    const tokenizedUrl = `${this.client.options.basePath}/comments/subscription`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, CommentsApi.apiName, undefined, 'deleteCommentsSubscription');
    return ret;
  }

  /**
   * Remove the user&#39;s vote for the given comment
   * Removes the user&#39;s vote for the given comment.
   * @param data Data to provide to the API call
   */
  public async deleteCommentsThumb(data: DeleteCommentsThumbRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteCommentsThumbRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/comments/thumb`;
    const tokenizedUrl = `${this.client.options.basePath}/comments/thumb`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, CommentsApi.apiName, undefined, 'deleteCommentsThumb');
    return ret;
  }

  /**
   * Retrieve a given comment
   * Retrieves a given comment.
   * @param data Data to provide to the API call
   */
  public async getCommentsComment(data: GetCommentsCommentRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetCommentsCommentRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/comments/comment`;
    const tokenizedUrl = `${this.client.options.basePath}/comments/comment`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, CommentsApi.apiName, undefined, 'getCommentsComment');
    return ret;
  }

  /**
   * Get comments
   * Retrieves comments for a given element.
   * @param data Data to provide to the API call
   */
  public async getCommentsComments(data: GetCommentsCommentsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['since_id'] = data['since_id'] !== undefined ? data['since_id'] : 'null';
        data['order'] = data['order'] !== undefined ? data['order'] : 'asc';
        data['replies'] = data['replies'] !== undefined ? data['replies'] : 'true';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetCommentsCommentsRequestData>(data, ['type', 'id', 'nbpp', 'since_id', 'order', 'replies', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/comments/comments`;
    const tokenizedUrl = `${this.client.options.basePath}/comments/comments`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, CommentsApi.apiName, undefined, 'getCommentsComments');
    return ret;
  }

  /**
   * Retrieve the replies of a given comment
   * Retrieves the replies of a given comment.
   * @param data Data to provide to the API call
   */
  public async getCommentsReplies(data: GetCommentsRepliesRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['order'] = data['order'] !== undefined ? data['order'] : 'asc';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetCommentsRepliesRequestData>(data, ['id', 'order', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/comments/replies`;
    const tokenizedUrl = `${this.client.options.basePath}/comments/replies`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, CommentsApi.apiName, undefined, 'getCommentsReplies');
    return ret;
  }

  /**
   * Retrieve the status of comments on the given item (closed or open)
   * Retrieves the status of comments on the given item (closed or open).
   * @param data Data to provide to the API call
   */
  public async getCommentsStatus(data: GetCommentsStatusRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetCommentsStatusRequestData>(data, ['type', 'id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/comments/status`;
    const tokenizedUrl = `${this.client.options.basePath}/comments/status`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, CommentsApi.apiName, undefined, 'getCommentsStatus');
    return ret;
  }

  /**
   * Create or edit a comment for the specified item
   * Creates or edits a comment for the specified item.
   * @param data Data to provide to the API call
   */
  public async postCommentsComment(data: PostCommentsCommentRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostCommentsCommentRequestData>(data, ['type', 'id', 'reference', 'in_reply_to', 'text', 'edit_id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/comments/comment`;
    const tokenizedUrl = `${this.client.options.basePath}/comments/comment`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, CommentsApi.apiName, undefined, 'postCommentsComment');
    return ret;
  }

  /**
   * Create a comment for an event
   * Creates a comment for an event.
   * @param data Data to provide to the API call
   */
  public async postCommentsCommentEvent(data: PostCommentsCommentEventRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostCommentsCommentEventRequestData>(data, ['type', 'element_id', 'id', 'text', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/comments/comment_event`;
    const tokenizedUrl = `${this.client.options.basePath}/comments/comment_event`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, CommentsApi.apiName, undefined, 'postCommentsCommentEvent');
    return ret;
  }

  /**
   * Subscribe the member to email notifications for the given item
   * Subscribes the member to email notifications for the given item.
   * @param data Data to provide to the API call
   */
  public async postCommentsSubscription(data: PostCommentsSubscriptionRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostCommentsSubscriptionRequestData>(data, ['type', 'id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/comments/subscription`;
    const tokenizedUrl = `${this.client.options.basePath}/comments/subscription`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, CommentsApi.apiName, undefined, 'postCommentsSubscription');
    return ret;
  }

  /**
   * Add a vote for the user for the given comment
   * Adds a vote for the user for the given comment.
   * @param data Data to provide to the API call
   */
  public async postCommentsThumb(data: PostCommentsThumbRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['switch'] = data['switch'] !== undefined ? data['switch'] : 'false';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostCommentsThumbRequestData>(data, ['id', 'type', 'switch', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/comments/thumb`;
    const tokenizedUrl = `${this.client.options.basePath}/comments/thumb`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, CommentsApi.apiName, undefined, 'postCommentsThumb');
    return ret;
  }

}
