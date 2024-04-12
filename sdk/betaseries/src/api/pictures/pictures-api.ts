import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface GetPicturesBadgesRequestData {
  /** ID of the badge */
  'id': string;
  /** Level of the badge (optional if badge is non-tiered) */
  'level'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPicturesCharactersRequestData {
  /** ID of the character */
  'id': string;
  /** Type show or movie (optional, default show) */
  'type'?: string;
  /** Desired width (optional, default 250) */
  'width'?: string;
  /** Desired height (optional, default 375) */
  'height'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPicturesEpisodesRequestData {
  /** ID of the episode */
  'id': string;
  /** Desired width (optional) */
  'width'?: string;
  /** Desired height (optional) */
  'height'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPicturesMembersRequestData {
  /** ID of the member */
  'id': string;
  /** Desired width (optional) */
  'width'?: string;
  /** Desired height (optional) */
  'height'?: string;
  /** Type of format if no photo is mentioned: jpeg, png, or svg (optional, default jpeg) */
  'placeholder'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPicturesMoviesRequestData {
  /** ID of the movie */
  'id': string;
  /** Desired width (optional, default 250) */
  'width'?: string;
  /** Desired height (optional, default 375) */
  'height'?: string;
  /** Language for the poster (optional, default original) */
  'language'?: string;
  /** User's language (optional, but mandatory if language is specified) */
  'locale'?: string;
}
export interface GetPicturesPersonsRequestData {
  /** ID of the person */
  'id': string;
  /** Desired width (optional, default 250) */
  'width'?: string;
  /** Desired height (optional, default 375) */
  'height'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPicturesPlatformsRequestData {
  /** ID of the platform */
  'id': string;
  /** Desired width (optional, default 100) */
  'width'?: string;
  /** Desired height (optional, default 100) */
  'height'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPicturesSeasonsRequestData {
  /** ID of the show */
  'show_id': string;
  /** Season number */
  'season': string;
  /** Desired width (optional, default 250) */
  'width'?: string;
  /** Desired height (optional, default 375) */
  'height'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPicturesShowsRequestData {
  /** ID of the show */
  'id': string;
  /** Desired width (optional) */
  'width'?: string;
  /** Desired height (optional) */
  'height'?: string;
  /** Take the image voted on by the community (banner or show, optional) */
  'picked'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use GetPicturesBadgesRequestData
 */
export interface GetPicturesBadges extends GetPicturesBadgesRequestData {}

/**
 * @Deprecated, please use GetPicturesCharactersRequestData
 */
export interface GetPicturesCharacters extends GetPicturesCharactersRequestData {}

/**
 * @Deprecated, please use GetPicturesEpisodesRequestData
 */
export interface GetPicturesEpisodes extends GetPicturesEpisodesRequestData {}

/**
 * @Deprecated, please use GetPicturesMembersRequestData
 */
export interface GetPicturesMembers extends GetPicturesMembersRequestData {}

/**
 * @Deprecated, please use GetPicturesMoviesRequestData
 */
export interface GetPicturesMovies extends GetPicturesMoviesRequestData {}

/**
 * @Deprecated, please use GetPicturesPersonsRequestData
 */
export interface GetPicturesPersons extends GetPicturesPersonsRequestData {}

/**
 * @Deprecated, please use GetPicturesPlatformsRequestData
 */
export interface GetPicturesPlatforms extends GetPicturesPlatformsRequestData {}

/**
 * @Deprecated, please use GetPicturesSeasonsRequestData
 */
export interface GetPicturesSeasons extends GetPicturesSeasonsRequestData {}

/**
 * @Deprecated, please use GetPicturesShowsRequestData
 */
export interface GetPicturesShows extends GetPicturesShowsRequestData {}

export class PicturesApi implements Api {

  /** API name */
  public static readonly apiName = 'PicturesApi';

  /** @inheritDoc */
  public readonly apiName = PicturesApi.apiName;

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
   * Return an image of the badge (32x32)
   * Returns an image of the badge (32x32).
   * @param data Data to provide to the API call
   */
  public async getPicturesBadges(data: GetPicturesBadgesRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPicturesBadgesRequestData>(data, ['id', 'level', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/pictures/badges`;
    const tokenizedUrl = `${this.client.options.basePath}/pictures/badges`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PicturesApi.apiName, undefined, 'getPicturesBadges');
    return ret;
  }

  /**
   * Return an image of the character
   * Returns an image of the character.
   * @param data Data to provide to the API call
   */
  public async getPicturesCharacters(data: GetPicturesCharactersRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['type'] = data['type'] !== undefined ? data['type'] : 'show';
        data['width'] = data['width'] !== undefined ? data['width'] : '250';
        data['height'] = data['height'] !== undefined ? data['height'] : '375';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPicturesCharactersRequestData>(data, ['id', 'type', 'width', 'height', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/pictures/characters`;
    const tokenizedUrl = `${this.client.options.basePath}/pictures/characters`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PicturesApi.apiName, undefined, 'getPicturesCharacters');
    return ret;
  }

  /**
   * Return a picture of the episode
   * Returns a picture of the episode.
   * @param data Data to provide to the API call
   */
  public async getPicturesEpisodes(data: GetPicturesEpisodesRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPicturesEpisodesRequestData>(data, ['id', 'width', 'height', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/pictures/episodes`;
    const tokenizedUrl = `${this.client.options.basePath}/pictures/episodes`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PicturesApi.apiName, undefined, 'getPicturesEpisodes');
    return ret;
  }

  /**
   * Return a picture of the member
   * Returns a picture of the member.
   * @param data Data to provide to the API call
   */
  public async getPicturesMembers(data: GetPicturesMembersRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['placeholder'] = data['placeholder'] !== undefined ? data['placeholder'] : 'jpeg';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPicturesMembersRequestData>(data, ['id', 'width', 'height', 'placeholder', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/pictures/members`;
    const tokenizedUrl = `${this.client.options.basePath}/pictures/members`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PicturesApi.apiName, undefined, 'getPicturesMembers');
    return ret;
  }

  /**
   * Return an image of the movie
   * Returns an image of the movie.
   * @param data Data to provide to the API call
   */
  public async getPicturesMovies(data: GetPicturesMoviesRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['width'] = data['width'] !== undefined ? data['width'] : '250';
        data['height'] = data['height'] !== undefined ? data['height'] : '375';
        data['language'] = data['language'] !== undefined ? data['language'] : 'original';
    const getParams = this.client.extractQueryParams<GetPicturesMoviesRequestData>(data, ['id', 'width', 'height', 'language', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/pictures/movies`;
    const tokenizedUrl = `${this.client.options.basePath}/pictures/movies`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PicturesApi.apiName, undefined, 'getPicturesMovies');
    return ret;
  }

  /**
   * Return an image of the person
   * Returns an image of the person.
   * @param data Data to provide to the API call
   */
  public async getPicturesPersons(data: GetPicturesPersonsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['width'] = data['width'] !== undefined ? data['width'] : '250';
        data['height'] = data['height'] !== undefined ? data['height'] : '375';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPicturesPersonsRequestData>(data, ['id', 'width', 'height', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/pictures/persons`;
    const tokenizedUrl = `${this.client.options.basePath}/pictures/persons`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PicturesApi.apiName, undefined, 'getPicturesPersons');
    return ret;
  }

  /**
   * Return an image of the SVOD or VOD platform
   * Returns an image of the SVOD or VOD platform.
   * @param data Data to provide to the API call
   */
  public async getPicturesPlatforms(data: GetPicturesPlatformsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['width'] = data['width'] !== undefined ? data['width'] : '100';
        data['height'] = data['height'] !== undefined ? data['height'] : '100';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPicturesPlatformsRequestData>(data, ['id', 'width', 'height', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/pictures/platforms`;
    const tokenizedUrl = `${this.client.options.basePath}/pictures/platforms`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PicturesApi.apiName, undefined, 'getPicturesPlatforms');
    return ret;
  }

  /**
   * Return an image of the show&#39;s season
   * Returns an image of the season of the show.
   * @param data Data to provide to the API call
   */
  public async getPicturesSeasons(data: GetPicturesSeasonsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['width'] = data['width'] !== undefined ? data['width'] : '250';
        data['height'] = data['height'] !== undefined ? data['height'] : '375';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPicturesSeasonsRequestData>(data, ['show_id', 'season', 'width', 'height', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/pictures/seasons`;
    const tokenizedUrl = `${this.client.options.basePath}/pictures/seasons`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PicturesApi.apiName, undefined, 'getPicturesSeasons');
    return ret;
  }

  /**
   * Return a picture of the show
   * Returns a picture of the show.
   * @param data Data to provide to the API call
   */
  public async getPicturesShows(data: GetPicturesShowsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPicturesShowsRequestData>(data, ['id', 'width', 'height', 'picked', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/pictures/shows`;
    const tokenizedUrl = `${this.client.options.basePath}/pictures/shows`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PicturesApi.apiName, undefined, 'getPicturesShows');
    return ret;
  }

}
