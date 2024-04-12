import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface DeleteTagsTagRequestData {
  /** ID of the show */
  'show_id'?: string;
  /** ID of the movie */
  'movie_id'?: string;
  /** Label of the tag to remove. You can specify several by separating them with a comma */
  'tag'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetTagsListRequestData {
  /** Type of media for the tags to display (show or movie, default is show) */
  'type'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostTagsTagRequestData {
  /** ID of the show */
  'show_id'?: string;
  /** ID of the movie */
  'movie_id'?: string;
  /** Label of the tag to create. You can add several by separating them with a comma */
  'tag'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use DeleteTagsTagRequestData
 */
export interface DeleteTagsTag extends DeleteTagsTagRequestData {}

/**
 * @Deprecated, please use GetTagsListRequestData
 */
export interface GetTagsList extends GetTagsListRequestData {}

/**
 * @Deprecated, please use PostTagsTagRequestData
 */
export interface PostTagsTag extends PostTagsTagRequestData {}

export class TagsApi implements Api {

  /** API name */
  public static readonly apiName = 'TagsApi';

  /** @inheritDoc */
  public readonly apiName = TagsApi.apiName;

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
   * Remove a tag for the show (or movie) for the connected member
   * Removes a tag for the show (or the movie) for the connected member.
   * @param data Data to provide to the API call
   */
  public async deleteTagsTag(data: DeleteTagsTagRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteTagsTagRequestData>(data, ['show_id', 'movie_id', 'tag', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/tags/tag`;
    const tokenizedUrl = `${this.client.options.basePath}/tags/tag`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, TagsApi.apiName, undefined, 'deleteTagsTag');
    return ret;
  }

  /**
   * Display all tags created by the connected member
   * Displays all the tags created by the connected member.
   * @param data Data to provide to the API call
   */
  public async getTagsList(data: GetTagsListRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['type'] = data['type'] !== undefined ? data['type'] : 'show';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetTagsListRequestData>(data, ['type', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/tags/list`;
    const tokenizedUrl = `${this.client.options.basePath}/tags/list`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, TagsApi.apiName, undefined, 'getTagsList');
    return ret;
  }

  /**
   * Add a tag (or several) for the show (or movie) for the connected member
   * Adds a tag (or several) for the show (or the movie) for the connected member.
   * @param data Data to provide to the API call
   */
  public async postTagsTag(data: PostTagsTagRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostTagsTagRequestData>(data, ['show_id', 'movie_id', 'tag', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/tags/tag`;
    const tokenizedUrl = `${this.client.options.basePath}/tags/tag`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, TagsApi.apiName, undefined, 'postTagsTag');
    return ret;
  }

}
