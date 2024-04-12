import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface GetSubtitlesEpisodeRequestData {
  /** ID of the episode */
  'id': string;
  /** Display only certain languages: all|vovf|vo|vf (Optional) */
  'language'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetSubtitlesLastRequestData {
  /** Number of subtitles, maximum 100 */
  'number'?: string;
  /** Display only certain languages: all|vovf|vo|vf (Optional) */
  'language'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetSubtitlesSeasonRequestData {
  /** ID of the series */
  'id': string;
  /** Season number or 'all' to retrieve packages for all seasons (Optional, default is all) */
  'season'?: string;
  /** Display only certain languages: all|vovf|vo|vf (Optional) */
  'language'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetSubtitlesShowRequestData {
  /** ID of the show */
  'id': string;
  /** Display only certain languages: all|vovf|vo|vf (Optional) */
  'language'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostSubtitlesReportRequestData {
  /** ID of the subtitle */
  'id': string;
  /** Reason why the subtitle is incorrect */
  'reason'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use GetSubtitlesEpisodeRequestData
 */
export interface GetSubtitlesEpisode extends GetSubtitlesEpisodeRequestData {}

/**
 * @Deprecated, please use GetSubtitlesLastRequestData
 */
export interface GetSubtitlesLast extends GetSubtitlesLastRequestData {}

/**
 * @Deprecated, please use GetSubtitlesSeasonRequestData
 */
export interface GetSubtitlesSeason extends GetSubtitlesSeasonRequestData {}

/**
 * @Deprecated, please use GetSubtitlesShowRequestData
 */
export interface GetSubtitlesShow extends GetSubtitlesShowRequestData {}

/**
 * @Deprecated, please use PostSubtitlesReportRequestData
 */
export interface PostSubtitlesReport extends PostSubtitlesReportRequestData {}

export class SubtitlesApi implements Api {

  /** API name */
  public static readonly apiName = 'SubtitlesApi';

  /** @inheritDoc */
  public readonly apiName = SubtitlesApi.apiName;

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
   * Display subtitles for a given episode
   * Displays subtitles for a given episode.
   * @param data Data to provide to the API call
   */
  public async getSubtitlesEpisode(data: GetSubtitlesEpisodeRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetSubtitlesEpisodeRequestData>(data, ['id', 'language', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/subtitles/episode`;
    const tokenizedUrl = `${this.client.options.basePath}/subtitles/episode`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, SubtitlesApi.apiName, undefined, 'getSubtitlesEpisode');
    return ret;
  }

  /**
   * Display the latest subtitles retrieved by BetaSeries
   * Displays the latest subtitles retrieved by BetaSeries.
   * @param data Data to provide to the API call
   */
  public async getSubtitlesLast(data: GetSubtitlesLastRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetSubtitlesLastRequestData>(data, ['number', 'language', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/subtitles/last`;
    const tokenizedUrl = `${this.client.options.basePath}/subtitles/last`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, SubtitlesApi.apiName, undefined, 'getSubtitlesLast');
    return ret;
  }

  /**
   * Display subtitles for a season or all seasons
   * Displays subtitles for a specific season or all seasons.
   * @param data Data to provide to the API call
   */
  public async getSubtitlesSeason(data: GetSubtitlesSeasonRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['season'] = data['season'] !== undefined ? data['season'] : 'all';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetSubtitlesSeasonRequestData>(data, ['id', 'season', 'language', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/subtitles/season`;
    const tokenizedUrl = `${this.client.options.basePath}/subtitles/season`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, SubtitlesApi.apiName, undefined, 'getSubtitlesSeason');
    return ret;
  }

  /**
   * Display subtitles for a given show
   * Displays subtitles for a given show.
   * @param data Data to provide to the API call
   */
  public async getSubtitlesShow(data: GetSubtitlesShowRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetSubtitlesShowRequestData>(data, ['id', 'language', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/subtitles/show`;
    const tokenizedUrl = `${this.client.options.basePath}/subtitles/show`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, SubtitlesApi.apiName, undefined, 'getSubtitlesShow');
    return ret;
  }

  /**
   * Reports subtitles as incorrect to be removed from the list.
   * Reports subtitles as incorrect to be removed from the list.
   * @param data Data to provide to the API call
   */
  public async postSubtitlesReport(data: PostSubtitlesReportRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostSubtitlesReportRequestData>(data, ['id', 'reason', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/subtitles/report`;
    const tokenizedUrl = `${this.client.options.basePath}/subtitles/report`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, SubtitlesApi.apiName, undefined, 'postSubtitlesReport');
    return ret;
  }

}
