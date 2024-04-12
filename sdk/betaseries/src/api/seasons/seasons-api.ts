import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface DeleteSeasonsHideRequestData {
  /** Series ID (Optional if thetvdb_id specified) */
  'id'?: string;
  /** Series ID on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Season number */
  'season'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteSeasonsNoteRequestData {
  /** Series ID (Optional if thetvdb_id specified) */
  'id'?: string;
  /** Series ID on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Season of the series to rate */
  'season'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteSeasonsWatchedRequestData {
  /** Series ID (Optional if thetvdb_id specified) */
  'id'?: string;
  /** Series ID on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Season number */
  'season'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostSeasonsHideRequestData {
  /** Series ID (Optional if thetvdb_id specified) */
  'id'?: string;
  /** Series ID on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Season number */
  'season'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostSeasonsNoteRequestData {
  /** Series ID (Optional if thetvdb_id specified) */
  'id'?: string;
  /** Series ID on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Season of the series to rate */
  'season'?: string;
  /** Rating assigned from 1 to 5 */
  'note'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostSeasonsWatchedRequestData {
  /** Series ID (Optional if thetvdb_id specified) */
  'id'?: string;
  /** Series ID on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Season number */
  'season'?: string;
  /** Rating assigned from 1 to 5 (Optional) */
  'note'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use DeleteSeasonsHideRequestData
 */
export interface DeleteSeasonsHide extends DeleteSeasonsHideRequestData {}

/**
 * @Deprecated, please use DeleteSeasonsNoteRequestData
 */
export interface DeleteSeasonsNote extends DeleteSeasonsNoteRequestData {}

/**
 * @Deprecated, please use DeleteSeasonsWatchedRequestData
 */
export interface DeleteSeasonsWatched extends DeleteSeasonsWatchedRequestData {}

/**
 * @Deprecated, please use PostSeasonsHideRequestData
 */
export interface PostSeasonsHide extends PostSeasonsHideRequestData {}

/**
 * @Deprecated, please use PostSeasonsNoteRequestData
 */
export interface PostSeasonsNote extends PostSeasonsNoteRequestData {}

/**
 * @Deprecated, please use PostSeasonsWatchedRequestData
 */
export interface PostSeasonsWatched extends PostSeasonsWatchedRequestData {}

export class SeasonsApi implements Api {

  /** API name */
  public static readonly apiName = 'SeasonsApi';

  /** @inheritDoc */
  public readonly apiName = SeasonsApi.apiName;

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
   * Remove all episodes of a season from hidden
   * Remove all episodes of a season from hidden. Skips already watched episodes.
   * @param data Data to provide to the API call
   */
  public async deleteSeasonsHide(data: DeleteSeasonsHideRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteSeasonsHideRequestData>(data, ['id', 'thetvdb_id', 'season', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/seasons/hide`;
    const tokenizedUrl = `${this.client.options.basePath}/seasons/hide`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, SeasonsApi.apiName, undefined, 'deleteSeasonsHide');
    return ret;
  }

  /**
   * Remove a rating from a season
   * Remove a rating from a season.
   * @param data Data to provide to the API call
   */
  public async deleteSeasonsNote(data: DeleteSeasonsNoteRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteSeasonsNoteRequestData>(data, ['id', 'thetvdb_id', 'season', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/seasons/note`;
    const tokenizedUrl = `${this.client.options.basePath}/seasons/note`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, SeasonsApi.apiName, undefined, 'deleteSeasonsNote');
    return ret;
  }

  /**
   * Remove all episodes of a season from watched
   * Remove all episodes of a season from watched. Skips episodes not yet watched.
   * @param data Data to provide to the API call
   */
  public async deleteSeasonsWatched(data: DeleteSeasonsWatchedRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteSeasonsWatchedRequestData>(data, ['id', 'thetvdb_id', 'season', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/seasons/watched`;
    const tokenizedUrl = `${this.client.options.basePath}/seasons/watched`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, SeasonsApi.apiName, undefined, 'deleteSeasonsWatched');
    return ret;
  }

  /**
   * Mark all episodes of a season as hidden
   * Mark all episodes of a season as hidden. Skips already watched episodes.
   * @param data Data to provide to the API call
   */
  public async postSeasonsHide(data: PostSeasonsHideRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostSeasonsHideRequestData>(data, ['id', 'thetvdb_id', 'season', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/seasons/hide`;
    const tokenizedUrl = `${this.client.options.basePath}/seasons/hide`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, SeasonsApi.apiName, undefined, 'postSeasonsHide');
    return ret;
  }

  /**
   * Rate a season
   * Rate a season.
   * @param data Data to provide to the API call
   */
  public async postSeasonsNote(data: PostSeasonsNoteRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostSeasonsNoteRequestData>(data, ['id', 'thetvdb_id', 'season', 'note', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/seasons/note`;
    const tokenizedUrl = `${this.client.options.basePath}/seasons/note`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, SeasonsApi.apiName, undefined, 'postSeasonsNote');
    return ret;
  }

  /**
   * Mark all episodes of a season as watched
   * Mark all episodes of a season as watched. Skips already watched episodes.
   * @param data Data to provide to the API call
   */
  public async postSeasonsWatched(data: PostSeasonsWatchedRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostSeasonsWatchedRequestData>(data, ['id', 'thetvdb_id', 'season', 'note', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/seasons/watched`;
    const tokenizedUrl = `${this.client.options.basePath}/seasons/watched`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, SeasonsApi.apiName, undefined, 'postSeasonsWatched');
    return ret;
  }

}
