import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface GetSearchAllRequestData {
  /** Search term */
  'query'?: string;
  /** Number of results returned per type (series, movies, members), default 5. */
  'limit'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetSearchMoviesRequestData {
  /** Search term */
  'text'?: string;
  /** Number of results returned (optional, default 20) */
  'limit'?: string;
  /** Starting number for the movie list (optional, default 0) */
  'offset'?: string;
  /** Genres separated by a comma (must correspond to keys returned by movies/genres) */
  'genres'?: string;
  /** Broadcast types separated by a comma (none, theaters, sale) */
  'diffusions'?: string;
  /** Actor's name in the movies to search */
  'casting'?: string;
  /** SVoD platform IDs separated by a comma */
  'svods'?: string;
  /** Release years separated by a comma */
  'releases'?: string;
  /** Initial of the movies returned */
  'debut'?: string;
  /** Sorting of the movies (name, added, rating, popularity by default, release-asc, release-desc) */
  'tri'?: string;
  /** Other options. Can be new for only movies not followed, seen, unseen, or wishlist */
  'autres'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetSearchShowsRequestData {
  /** Search term */
  'text'?: string;
  /** Number of results returned (optional, default 20, maximum 100) */
  'limit'?: string;
  /** Starting number for the series list (optional, default 0) */
  'offset'?: string;
  /** Genres separated by a comma (must correspond to keys returned by shows/genres) */
  'genres'?: string;
  /** Broadcasts separated by a comma (week, finished, ongoing, standby, inproduction, planned, pilot, canceled) */
  'diffusions'?: string;
  /** Episode duration (1-19, 20-30, 31-40, 41-50, 51-60, 61+) */
  'duration'?: string;
  /** SVoD platform IDs separated by a comma */
  'svods'?: string;
  /** Years separated by a comma */
  'creations'?: string;
  /** Origin countries of the series separated by a comma (must be the 2-letter country code) */
  'pays'?: string;
  /** Broadcast channels separated by a comma */
  'chaines'?: string;
  /** Initial of the series returned */
  'debut'?: string;
  /** Sorting of the series (name, followed, id, rating, popularity by default, release-asc, release-desc) */
  'tri'?: string;
  /** Other options. Can be new for only series not followed or mine for only those followed by the user */
  'autres'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use GetSearchAllRequestData
 */
export interface GetSearchAll extends GetSearchAllRequestData {}

/**
 * @Deprecated, please use GetSearchMoviesRequestData
 */
export interface GetSearchMovies extends GetSearchMoviesRequestData {}

/**
 * @Deprecated, please use GetSearchShowsRequestData
 */
export interface GetSearchShows extends GetSearchShowsRequestData {}

export class SearchApi implements Api {

  /** API name */
  public static readonly apiName = 'SearchApi';

  /** @inheritDoc */
  public readonly apiName = SearchApi.apiName;

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
   * Return search results for all types of elements.
   * Return search results for all types of elements.
   * @param data Data to provide to the API call
   */
  public async getSearchAll(data: GetSearchAllRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetSearchAllRequestData>(data, ['query', 'limit', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/search/all`;
    const tokenizedUrl = `${this.client.options.basePath}/search/all`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, SearchApi.apiName, undefined, 'getSearchAll');
    return ret;
  }

  /**
   * Return movie search results with advanced filters.
   * Return movie search results with advanced filters.
   * @param data Data to provide to the API call
   */
  public async getSearchMovies(data: GetSearchMoviesRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetSearchMoviesRequestData>(data, ['text', 'limit', 'offset', 'genres', 'diffusions', 'casting', 'svods', 'releases', 'debut', 'tri', 'autres', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/search/movies`;
    const tokenizedUrl = `${this.client.options.basePath}/search/movies`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, SearchApi.apiName, undefined, 'getSearchMovies');
    return ret;
  }

  /**
   * Return series search results with advanced filters.
   * Return series search results with advanced filters.
   * @param data Data to provide to the API call
   */
  public async getSearchShows(data: GetSearchShowsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetSearchShowsRequestData>(data, ['text', 'limit', 'offset', 'genres', 'diffusions', 'duration', 'svods', 'creations', 'pays', 'chaines', 'debut', 'tri', 'autres', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/search/shows`;
    const tokenizedUrl = `${this.client.options.basePath}/search/shows`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, SearchApi.apiName, undefined, 'getSearchShows');
    return ret;
  }

}
