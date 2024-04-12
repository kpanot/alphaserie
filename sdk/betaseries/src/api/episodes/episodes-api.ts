import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface DeleteEpisodesDownloadedRequestData {
  /** Episode ID (Optional if thetvdb_id provided) */
  'id'?: string;
  /** Episode ID on TheTVDB (Optional if id provided) */
  'thetvdb_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteEpisodesHiddenRequestData {
  /** Identifier of the episode to remove. Multiple IDs can be separated by a comma */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteEpisodesNoteRequestData {
  /** Episode ID (Optional if thetvdb_id provided) */
  'id'?: string;
  /** Episode ID on TheTVDB (Optional if id provided) */
  'thetvdb_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteEpisodesWatchedRequestData {
  /** Episode ID (Optional if thetvdb_id provided) */
  'id'?: string;
  /** Episode ID on TheTVDB (Optional if id provided) */
  'thetvdb_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetEpisodesDisplayRequestData {
  /** Episode ID. Multiple IDs can be specified separated by a comma (Optional if thetvdb_id provided) */
  'id'?: string;
  /** Episode ID on TheTVDB. Multiple IDs can be specified separated by a comma (Optional if id provided) */
  'thetvdb_id'?: string;
  /** Episode ID on YouTube. Multiple IDs can be specified separated by a comma (Optional if id provided) */
  'youtube_id'?: string;
  /** Display subtitles if specified (Optional) */
  'subtitles'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetEpisodesLatestRequestData {
  /** Series ID. Multiple IDs can be separated by a comma (Optional if thetvdb_id provided) */
  'id'?: string;
  /** Series ID on TheTVDB. Multiple IDs can be separated by a comma (Optional if id provided) */
  'thetvdb_id'?: string;
  /** Include special episodes (default false) */
  'specials'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetEpisodesListRequestData {
  /** Display episodes with specific subtitles available: all|vovf|vo|vf (Optional) */
  'subtitles'?: string;
  /** Limit to a number of episodes per series (Optional) */
  'limit'?: string;
  /** Limit to a number of series (Optional, default 50) */
  'showsLimit'?: string;
  /** Page number for series pagination (Optional, default 1) */
  'page'?: string;
  /** Series ID (Optional) */
  'showId'?: string;
  /** Series ID on TheTVDB (Optional) */
  'showTheTVDBId'?: string;
  /** Series ID on IMDB (Optional) */
  'showIMDBId'?: string;
  /** Member's ID (Optional, default identified member) */
  'userId'?: string;
  /** Include special episodes in the return (Optional, default not returned) */
  'specials'?: string;
  /** If 1, displays only released episodes, 2 for upcoming, 0 for both (Optional, default 1) */
  'released'?: string;
  /** Order of episode appearance, \"account\" for account order, \"smart\" for current viewing order (Optional, default account) */
  'order'?: string;
  /** Timestamp to mark episodes released after this date (Optional) */
  'since'?: string;
  /** If specified, removes certain blocks from the return: characters (Optional) */
  'excludes'?: string;
  /** List of platform IDs where the episodes must be available (Optional) */
  'platforms'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetEpisodesNextRequestData {
  /** Series ID. Multiple IDs can be separated by a comma (Optional if thetvdb_id provided) */
  'id'?: string;
  /** Series ID on TheTVDB. Multiple IDs can be separated by a comma (Optional if id provided) */
  'thetvdb_id'?: string;
  /** Include special episodes (default false) */
  'specials'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetEpisodesScraperRequestData {
  /** File name to process */
  'file'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetEpisodesSearchRequestData {
  /** Series ID for the episode to search */
  'show_id'?: string;
  /** URL of the series to search (Optional) */
  'url'?: string;
  /** Episode number, either SxxExx or the global number */
  'number'?: string;
  /** If specified, returns subtitles for episodes */
  'subtitles'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetEpisodesUnratedRequestData {
  /** Number of results per page, default 20 */
  'nbpp'?: string;
  /** Page number, default 1 */
  'page'?: string;
  /** Time limit, yesterday for episodes watched yesterday, all for all watched episodes (Optional, default yesterday) */
  'date'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostEpisodesDownloadedRequestData {
  /** Episode ID (Optional if thetvdb_id provided) */
  'id'?: string;
  /** Episode ID on TheTVDB (Optional if id provided) */
  'thetvdb_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostEpisodesHiddenRequestData {
  /** Identifier of the episode to mark. Multiple IDs can be separated by a comma */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostEpisodesNoteRequestData {
  /** Episode ID (Optional if thetvdb_id provided) */
  'id'?: string;
  /** Episode ID on TheTVDB (Optional if id provided) */
  'thetvdb_id'?: string;
  /** Rating from 1 to 5 */
  'note'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostEpisodesWatchedRequestData {
  /** Episode ID (Optional if thetvdb_id provided) */
  'id'?: string;
  /** Episode ID on TheTVDB (Optional if id provided) */
  'thetvdb_id'?: string;
  /** Episode ID on YouTube (Optional if id provided) */
  'youtube_id'?: string;
  /** If specified, all previous episodes will also be marked as watched (default true) */
  'bulk'?: string;
  /** If specified, all subsequent episodes will no longer be marked as watched */
  'delete'?: string;
  /** If a rating between 1 and 5 is specified, rate the episode */
  'note'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use DeleteEpisodesDownloadedRequestData
 */
export interface DeleteEpisodesDownloaded extends DeleteEpisodesDownloadedRequestData {}

/**
 * @Deprecated, please use DeleteEpisodesHiddenRequestData
 */
export interface DeleteEpisodesHidden extends DeleteEpisodesHiddenRequestData {}

/**
 * @Deprecated, please use DeleteEpisodesNoteRequestData
 */
export interface DeleteEpisodesNote extends DeleteEpisodesNoteRequestData {}

/**
 * @Deprecated, please use DeleteEpisodesWatchedRequestData
 */
export interface DeleteEpisodesWatched extends DeleteEpisodesWatchedRequestData {}

/**
 * @Deprecated, please use GetEpisodesDisplayRequestData
 */
export interface GetEpisodesDisplay extends GetEpisodesDisplayRequestData {}

/**
 * @Deprecated, please use GetEpisodesLatestRequestData
 */
export interface GetEpisodesLatest extends GetEpisodesLatestRequestData {}

/**
 * @Deprecated, please use GetEpisodesListRequestData
 */
export interface GetEpisodesList extends GetEpisodesListRequestData {}

/**
 * @Deprecated, please use GetEpisodesNextRequestData
 */
export interface GetEpisodesNext extends GetEpisodesNextRequestData {}

/**
 * @Deprecated, please use GetEpisodesScraperRequestData
 */
export interface GetEpisodesScraper extends GetEpisodesScraperRequestData {}

/**
 * @Deprecated, please use GetEpisodesSearchRequestData
 */
export interface GetEpisodesSearch extends GetEpisodesSearchRequestData {}

/**
 * @Deprecated, please use GetEpisodesUnratedRequestData
 */
export interface GetEpisodesUnrated extends GetEpisodesUnratedRequestData {}

/**
 * @Deprecated, please use PostEpisodesDownloadedRequestData
 */
export interface PostEpisodesDownloaded extends PostEpisodesDownloadedRequestData {}

/**
 * @Deprecated, please use PostEpisodesHiddenRequestData
 */
export interface PostEpisodesHidden extends PostEpisodesHiddenRequestData {}

/**
 * @Deprecated, please use PostEpisodesNoteRequestData
 */
export interface PostEpisodesNote extends PostEpisodesNoteRequestData {}

/**
 * @Deprecated, please use PostEpisodesWatchedRequestData
 */
export interface PostEpisodesWatched extends PostEpisodesWatchedRequestData {}

export class EpisodesApi implements Api {

  /** API name */
  public static readonly apiName = 'EpisodesApi';

  /** @inheritDoc */
  public readonly apiName = EpisodesApi.apiName;

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
   * Remove the downloaded mark
   * Unmark an episode as downloaded.
   * @param data Data to provide to the API call
   */
  public async deleteEpisodesDownloaded(data: DeleteEpisodesDownloadedRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteEpisodesDownloadedRequestData>(data, ['id', 'thetvdb_id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/downloaded`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/downloaded`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'deleteEpisodesDownloaded');
    return ret;
  }

  /**
   * Remove an episode from the hidden list
   * Unmark an episode or multiple episodes from being hidden.
   * @param data Data to provide to the API call
   */
  public async deleteEpisodesHidden(data: DeleteEpisodesHiddenRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteEpisodesHiddenRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/hidden`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/hidden`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'deleteEpisodesHidden');
    return ret;
  }

  /**
   * Remove a rating
   * Delete an episode&#39;s rating.
   * @param data Data to provide to the API call
   */
  public async deleteEpisodesNote(data: DeleteEpisodesNoteRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteEpisodesNoteRequestData>(data, ['id', 'thetvdb_id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/note`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/note`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'deleteEpisodesNote');
    return ret;
  }

  /**
   * Unmark an episode as watched
   * Remove the watched mark from one or more episodes, allowing for multiple episodes to be specified.
   * @param data Data to provide to the API call
   */
  public async deleteEpisodesWatched(data: DeleteEpisodesWatchedRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteEpisodesWatchedRequestData>(data, ['id', 'thetvdb_id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/watched`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/watched`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'deleteEpisodesWatched');
    return ret;
  }

  /**
   * Display information of an episode
   * Show details of one or more episodes, allowing for multiple IDs and various information sources.
   * @param data Data to provide to the API call
   */
  public async getEpisodesDisplay(data: GetEpisodesDisplayRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetEpisodesDisplayRequestData>(data, ['id', 'thetvdb_id', 'youtube_id', 'subtitles', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/display`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/display`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'getEpisodesDisplay');
    return ret;
  }

  /**
   * Retrieve the latest aired episode
   * Fetch the most recently aired episode of a specific series.
   * @param data Data to provide to the API call
   */
  public async getEpisodesLatest(data: GetEpisodesLatestRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetEpisodesLatestRequestData>(data, ['id', 'thetvdb_id', 'specials', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/latest`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/latest`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'getEpisodesLatest');
    return ret;
  }

  /**
   * Retrieve the list of episodes to watch.
   * Fetch the list of episodes to watch, with various filters and pagination options.
   * @param data Data to provide to the API call
   */
  public async getEpisodesList(data: GetEpisodesListRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetEpisodesListRequestData>(data, ['subtitles', 'limit', 'showsLimit', 'page', 'showId', 'showTheTVDBId', 'showIMDBId', 'userId', 'specials', 'released', 'order', 'since', 'excludes', 'platforms', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/list`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/list`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'getEpisodesList');
    return ret;
  }

  /**
   * Retrieve the next episode
   * Fetch the upcoming episode of a specific series.
   * @param data Data to provide to the API call
   */
  public async getEpisodesNext(data: GetEpisodesNextRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetEpisodesNextRequestData>(data, ['id', 'thetvdb_id', 'specials', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/next`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/next`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'getEpisodesNext');
    return ret;
  }

  /**
   * Retrieve episode information
   * Fetch episode details from a given file name.
   * @param data Data to provide to the API call
   */
  public async getEpisodesScraper(data: GetEpisodesScraperRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetEpisodesScraperRequestData>(data, ['file', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/scraper`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/scraper`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'getEpisodesScraper');
    return ret;
  }

  /**
   * Retrieve episode information
   * Fetch episode details based on series ID, URL, episode number, or subtitles.
   * @param data Data to provide to the API call
   */
  public async getEpisodesSearch(data: GetEpisodesSearchRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetEpisodesSearchRequestData>(data, ['show_id', 'url', 'number', 'subtitles', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/search`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/search`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'getEpisodesSearch');
    return ret;
  }

  /**
   * Retrieve the list of watched and unrated episodes
   * Fetch the list of episodes that have been watched but not yet rated.
   * @param data Data to provide to the API call
   */
  public async getEpisodesUnrated(data: GetEpisodesUnratedRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetEpisodesUnratedRequestData>(data, ['nbpp', 'page', 'date', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/unrated`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/unrated`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'getEpisodesUnrated');
    return ret;
  }

  /**
   * Mark an episode as downloaded
   * Indicate an episode has been downloaded.
   * @param data Data to provide to the API call
   */
  public async postEpisodesDownloaded(data: PostEpisodesDownloadedRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostEpisodesDownloadedRequestData>(data, ['id', 'thetvdb_id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/downloaded`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/downloaded`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'postEpisodesDownloaded');
    return ret;
  }

  /**
   * Mark an episode as not to watch
   * Indicate an episode or multiple episodes as not to be watched.
   * @param data Data to provide to the API call
   */
  public async postEpisodesHidden(data: PostEpisodesHiddenRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostEpisodesHiddenRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/hidden`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/hidden`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'postEpisodesHidden');
    return ret;
  }

  /**
   * Rate an episode
   * Rate an episode with a score from 1 to 5.
   * @param data Data to provide to the API call
   */
  public async postEpisodesNote(data: PostEpisodesNoteRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostEpisodesNoteRequestData>(data, ['id', 'thetvdb_id', 'note', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/note`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/note`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'postEpisodesNote');
    return ret;
  }

  /**
   * Mark an episode as watched
   * Mark one or more episodes as watched, with options to specify multiple episodes, bulk marking, and deletion of future episode marks.
   * @param data Data to provide to the API call
   */
  public async postEpisodesWatched(data: PostEpisodesWatchedRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostEpisodesWatchedRequestData>(data, ['id', 'thetvdb_id', 'youtube_id', 'bulk', 'delete', 'note', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/episodes/watched`;
    const tokenizedUrl = `${this.client.options.basePath}/episodes/watched`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, EpisodesApi.apiName, undefined, 'postEpisodesWatched');
    return ret;
  }

}
