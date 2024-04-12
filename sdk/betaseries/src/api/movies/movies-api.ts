import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface DeleteMoviesFavoriteRequestData {
  /** ID of the movie to remove. */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteMoviesMovieRequestData {
  /** Movie ID */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteMoviesNoteRequestData {
  /** Movie ID */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMoviesArticlesRequestData {
  /** Movie ID */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMoviesCharactersRequestData {
  /** Movie ID */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMoviesDiscoverRequestData {
  /** Type of discovery: popular, upcoming */
  'type'?: string;
  /** Limit on the number of movies to display (optional, default 100, maximum 200) */
  'limit'?: string;
  /** Starting number for the movie list (optional, default 0) */
  'offset'?: string;
  /** Add some additional blocks to the return: platforms separated by a comma (optional). */
  'includes'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMoviesFavoritesRequestData {
  /** Member ID, optional, if not specified uses the identified member. */
  'id'?: string;
  /** Starting number for the movie list (optional, default 0) */
  'start'?: string;
  /** Limit on the number of movies to display (maximum 1000) (optional) */
  'limit'?: string;
  /** Specify return order: alphabetical, popularity, added, release, svod (optional, default alphabetical) */
  'order'?: string;
  /** Return only essential movie info (Default false) */
  'summary'?: string;
  /** If summary = true, add certain additional blocks to the return: user, notes, platforms separated by a comma (optional) */
  'includes'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMoviesGenresRequestData {
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMoviesListRequestData {
  /** Starting number for the movie list (optional, default 0) */
  'start'?: string;
  /** Limit of movies to display (optional, default 100, max 1000) */
  'limit'?: string;
  /** Specify return order: alphabetical, popularity (optional) */
  'order'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMoviesMemberRequestData {
  /** Member's ID (optional, default identified member) */
  'id'?: string;
  /** 0 = to watch, 1 = watched, 2 = do not want to watch (default 0) */
  'state'?: string;
  /** 0 = unreleased movies, 1 = released movies, 2 = all (default 2) */
  'released'?: string;
  /** Starting number for the movie list (optional, default 0) */
  'start'?: string;
  /** Limit of movies to display (maximum 1000) (optional) */
  'limit'?: string;
  /** Specify return order: alphabetical, popularity, added, release, svod (optional, default alphabetical) */
  'order'?: string;
  /** Return only essential movie info (Default false) */
  'summary'?: string;
  /** Retrieve movies with tags separated by a comma (optional) */
  'tags'?: string;
  /** Exclude movies with tags separated by a comma (optional) */
  'excluded_tags'?: string;
  /** If summary = true, add certain additional blocks to the return: user, notes, platforms separated by a comma (optional) */
  'includes'?: string;
  /** List of platform IDs where the movies must be available (Optional) */
  'platforms'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMoviesMovieRequestData {
  /** Movie ID */
  'id'?: string;
  /** Movie ID on TheMovieDB */
  'tmdb_id'?: string;
  /** Movie ID on IMDB */
  'imdb_id'?: string;
  /** If `summary = true`, add some additional blocks to the return: user, notes, platforms separated by a comma (optional). */
  'includes'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMoviesRandomRequestData {
  /** Number of movies to display, default 1 */
  'nb'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMoviesScraperRequestData {
  /** File name to process */
  'file'?: string;
  /** Number of results to return (default 1) */
  'number'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMoviesSearchRequestData {
  /** Searched title (optional if order=popularity) */
  'title'?: string;
  /** Return order (title|popularity), default title */
  'order'?: string;
  /** Number of results per page, default 5, maximum 100 */
  'nbpp'?: string;
  /** Page number, default 1 */
  'page'?: string;
  /** Only movies from the last two years (Default false) */
  'recent'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMoviesSimilarsRequestData {
  /** Movie ID */
  'id'?: string;
  /** Return movie details (Default false) */
  'details'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMoviesUpcomingRequestData {
  /** Number of movies (Optional, default 25) */
  'limit'?: string;
  /** Return order: release_date, popularity (Optional, default release_date) */
  'order'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMoviesFavoriteRequestData {
  /** ID of the movie to add. */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMoviesMovieRequestData {
  /** Movie ID */
  'id'?: string;
  /** Enable email alerts (0 or 1, default 1) */
  'mail'?: string;
  /** Enable Twitter alerts (0 or 1, default 1) */
  'twitter'?: string;
  /** 0 = to watch, 1 = watched, 2 = do not want to watch (default 0) */
  'state'?: string;
  /** Display on profile (0 or 1, default 1) */
  'profile'?: string;
  /** Movie rating (optional, from 1 to 5) */
  'note'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMoviesNoteRequestData {
  /** Movie ID */
  'id'?: string;
  /** Rating from 1 to 5 */
  'note'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use DeleteMoviesFavoriteRequestData
 */
export interface DeleteMoviesFavorite extends DeleteMoviesFavoriteRequestData {}

/**
 * @Deprecated, please use DeleteMoviesMovieRequestData
 */
export interface DeleteMoviesMovie extends DeleteMoviesMovieRequestData {}

/**
 * @Deprecated, please use DeleteMoviesNoteRequestData
 */
export interface DeleteMoviesNote extends DeleteMoviesNoteRequestData {}

/**
 * @Deprecated, please use GetMoviesArticlesRequestData
 */
export interface GetMoviesArticles extends GetMoviesArticlesRequestData {}

/**
 * @Deprecated, please use GetMoviesCharactersRequestData
 */
export interface GetMoviesCharacters extends GetMoviesCharactersRequestData {}

/**
 * @Deprecated, please use GetMoviesDiscoverRequestData
 */
export interface GetMoviesDiscover extends GetMoviesDiscoverRequestData {}

/**
 * @Deprecated, please use GetMoviesFavoritesRequestData
 */
export interface GetMoviesFavorites extends GetMoviesFavoritesRequestData {}

/**
 * @Deprecated, please use GetMoviesGenresRequestData
 */
export interface GetMoviesGenres extends GetMoviesGenresRequestData {}

/**
 * @Deprecated, please use GetMoviesListRequestData
 */
export interface GetMoviesList extends GetMoviesListRequestData {}

/**
 * @Deprecated, please use GetMoviesMemberRequestData
 */
export interface GetMoviesMember extends GetMoviesMemberRequestData {}

/**
 * @Deprecated, please use GetMoviesMovieRequestData
 */
export interface GetMoviesMovie extends GetMoviesMovieRequestData {}

/**
 * @Deprecated, please use GetMoviesRandomRequestData
 */
export interface GetMoviesRandom extends GetMoviesRandomRequestData {}

/**
 * @Deprecated, please use GetMoviesScraperRequestData
 */
export interface GetMoviesScraper extends GetMoviesScraperRequestData {}

/**
 * @Deprecated, please use GetMoviesSearchRequestData
 */
export interface GetMoviesSearch extends GetMoviesSearchRequestData {}

/**
 * @Deprecated, please use GetMoviesSimilarsRequestData
 */
export interface GetMoviesSimilars extends GetMoviesSimilarsRequestData {}

/**
 * @Deprecated, please use GetMoviesUpcomingRequestData
 */
export interface GetMoviesUpcoming extends GetMoviesUpcomingRequestData {}

/**
 * @Deprecated, please use PostMoviesFavoriteRequestData
 */
export interface PostMoviesFavorite extends PostMoviesFavoriteRequestData {}

/**
 * @Deprecated, please use PostMoviesMovieRequestData
 */
export interface PostMoviesMovie extends PostMoviesMovieRequestData {}

/**
 * @Deprecated, please use PostMoviesNoteRequestData
 */
export interface PostMoviesNote extends PostMoviesNoteRequestData {}

export class MoviesApi implements Api {

  /** API name */
  public static readonly apiName = 'MoviesApi';

  /** @inheritDoc */
  public readonly apiName = MoviesApi.apiName;

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
   * Remove a favorite movie
   * Remove a favorite movie from the profile of the identified member.
   * @param data Data to provide to the API call
   */
  public async deleteMoviesFavorite(data: DeleteMoviesFavoriteRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteMoviesFavoriteRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/favorite`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/favorite`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'deleteMoviesFavorite');
    return ret;
  }

  /**
   * Remove a movie
   * Delete a movie from the member&#39;s account.
   * @param data Data to provide to the API call
   */
  public async deleteMoviesMovie(data: DeleteMoviesMovieRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteMoviesMovieRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/movie`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/movie`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'deleteMoviesMovie');
    return ret;
  }

  /**
   * Remove a movie rating
   * Delete a given rating from a movie.
   * @param data Data to provide to the API call
   */
  public async deleteMoviesNote(data: DeleteMoviesNoteRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteMoviesNoteRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/note`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/note`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'deleteMoviesNote');
    return ret;
  }

  /**
   * Display blog articles about the movie
   * Display blog articles that talk about the movie.
   * @param data Data to provide to the API call
   */
  public async getMoviesArticles(data: GetMoviesArticlesRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMoviesArticlesRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/articles`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/articles`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'getMoviesArticles');
    return ret;
  }

  /**
   * Retrieve the cast of the movie.
   * Show the casting details of the movie.
   * @param data Data to provide to the API call
   */
  public async getMoviesCharacters(data: GetMoviesCharactersRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMoviesCharactersRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/characters`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/characters`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'getMoviesCharacters');
    return ret;
  }

  /**
   * Display movies to discover
   * Display the list of movies to discover.
   * @param data Data to provide to the API call
   */
  public async getMoviesDiscover(data: GetMoviesDiscoverRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMoviesDiscoverRequestData>(data, ['type', 'limit', 'offset', 'includes', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/discover`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/discover`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'getMoviesDiscover');
    return ret;
  }

  /**
   * Retrieve favorite movies
   * Show the favorite movies of a member.
   * @param data Data to provide to the API call
   */
  public async getMoviesFavorites(data: GetMoviesFavoritesRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMoviesFavoritesRequestData>(data, ['id', 'start', 'limit', 'order', 'summary', 'includes', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/favorites`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/favorites`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'getMoviesFavorites');
    return ret;
  }

  /**
   * Display all available genres
   * Show all available movie genres.
   * @param data Data to provide to the API call
   */
  public async getMoviesGenres(data: GetMoviesGenresRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMoviesGenresRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/genres`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/genres`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'getMoviesGenres');
    return ret;
  }

  /**
   * Display the list of all movies
   * Show the complete list of movies.
   * @param data Data to provide to the API call
   */
  public async getMoviesList(data: GetMoviesListRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMoviesListRequestData>(data, ['start', 'limit', 'order', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/list`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/list`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'getMoviesList');
    return ret;
  }

  /**
   * Display all movies of a member
   * Show the complete list of movies of a member.
   * @param data Data to provide to the API call
   */
  public async getMoviesMember(data: GetMoviesMemberRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMoviesMemberRequestData>(data, ['id', 'state', 'released', 'start', 'limit', 'order', 'summary', 'tags', 'excluded_tags', 'includes', 'platforms', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/member`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/member`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'getMoviesMember');
    return ret;
  }

  /**
   * Show movie details
   * Display the details of a movie from either its own ID, TheMovieDB ID, or IMDB ID.
   * @param data Data to provide to the API call
   */
  public async getMoviesMovie(data: GetMoviesMovieRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMoviesMovieRequestData>(data, ['id', 'tmdb_id', 'imdb_id', 'includes', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/movie`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/movie`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'getMoviesMovie');
    return ret;
  }

  /**
   * Display a random movie
   * Show a randomly selected movie.
   * @param data Data to provide to the API call
   */
  public async getMoviesRandom(data: GetMoviesRandomRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMoviesRandomRequestData>(data, ['nb', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/random`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/random`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'getMoviesRandom');
    return ret;
  }

  /**
   * Retrieve movie information
   * Get movie details by processing the given file name.
   * @param data Data to provide to the API call
   */
  public async getMoviesScraper(data: GetMoviesScraperRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMoviesScraperRequestData>(data, ['file', 'number', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/scraper`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/scraper`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'getMoviesScraper');
    return ret;
  }

  /**
   * Search for a movie
   * Search for a movie based on various criteria.
   * @param data Data to provide to the API call
   */
  public async getMoviesSearch(data: GetMoviesSearchRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMoviesSearchRequestData>(data, ['title', 'order', 'nbpp', 'page', 'recent', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/search`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/search`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'getMoviesSearch');
    return ret;
  }

  /**
   * Retrieve similar movies
   * Show movies marked as similar by BetaSeries members.
   * @param data Data to provide to the API call
   */
  public async getMoviesSimilars(data: GetMoviesSimilarsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMoviesSimilarsRequestData>(data, ['id', 'details', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/similars`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/similars`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'getMoviesSimilars');
    return ret;
  }

  /**
   * Display upcoming movies
   * Display the list of upcoming movies in theaters.
   * @param data Data to provide to the API call
   */
  public async getMoviesUpcoming(data: GetMoviesUpcomingRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMoviesUpcomingRequestData>(data, ['limit', 'order', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/upcoming`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/upcoming`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'getMoviesUpcoming');
    return ret;
  }

  /**
   * Add a favorite movie
   * Add a favorite movie to the profile of the identified member.
   * @param data Data to provide to the API call
   */
  public async postMoviesFavorite(data: PostMoviesFavoriteRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMoviesFavoriteRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/favorite`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/favorite`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'postMoviesFavorite');
    return ret;
  }

  /**
   * Add or update a movie
   * Add or update the movie in the member&#39;s movie list.
   * @param data Data to provide to the API call
   */
  public async postMoviesMovie(data: PostMoviesMovieRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMoviesMovieRequestData>(data, ['id', 'mail', 'twitter', 'state', 'profile', 'note', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/movie`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/movie`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'postMoviesMovie');
    return ret;
  }

  /**
   * Rate a movie
   * Give a rating to a movie.
   * @param data Data to provide to the API call
   */
  public async postMoviesNote(data: PostMoviesNoteRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMoviesNoteRequestData>(data, ['id', 'note', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/movies/note`;
    const tokenizedUrl = `${this.client.options.basePath}/movies/note`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MoviesApi.apiName, undefined, 'postMoviesNote');
    return ret;
  }

}
