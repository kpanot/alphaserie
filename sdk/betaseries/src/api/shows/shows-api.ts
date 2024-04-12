import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface DeleteShowsArchiveRequestData {
  /** ID of the series (Optional if thetvdb_id specified) */
  'id'?: string;
  /** ID of the series on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteShowsFavoriteRequestData {
  /** ID of the series to remove. */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteShowsNoteRequestData {
  /** ID of the series (Optional if thetvdb_id specified) */
  'id'?: string;
  /** ID of the series on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteShowsRecommendationRequestData {
  /** Recommendation ID */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteShowsShowRequestData {
  /** ID of the series (Optional if thetvdb_id or imdb_id specified) */
  'id'?: string;
  /** ID of the series on TheTVDB (Optional if id or imdb_id specified) */
  'thetvdb_id'?: string;
  /** ID of the series on IMDB (Optional if thetvdb_id or id specified) */
  'imdb_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsArticlesRequestData {
  /** Series ID (Optional if url specified) */
  'id'?: string;
  /** Series URL. (Optional) */
  'url'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsCharactersRequestData {
  /** Series ID (Optional if thetvdb_id specified) */
  'id'?: string;
  /** Series ID on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsDiscoverRequestData {
  /** Limit the number of series to display (optional, default 100, maximum 200) */
  'limit'?: string;
  /** Starting number for the series list (optional, default 0) */
  'offset'?: string;
  /** Return only essential information */
  'summary'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsDiscoverPlatformsRequestData {
  /** Return only essential information */
  'summary'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsDisplayRequestData {
  /** Series ID. You can include multiple by separating them with a comma (Optional) */
  'id'?: string;
  /** Series ID on TheTVDB. You can include multiple by separating them with a comma (Optional) */
  'thetvdb_id'?: string;
  /** Series ID on IMDB. You can include multiple by separating them with a comma (Optional) */
  'imdb_id'?: string;
  /** Series URL. (Optional) */
  'url'?: string;
  /** Return only the essential information of the series. */
  'summary(default&#x3D;false)'?: string;
  /** If `summary = true`, add some additional blocks to the return: user, notes separated by a comma (optional). */
  'includes'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsEpisodesRequestData {
  /** ID of the series (Optional if thetvdb_id specified) */
  'id'?: string;
  /** ID of the series on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Season number (Optional) */
  'season'?: string;
  /** Episode number (Optional) */
  'episode'?: string;
  /** Display subtitles if specified (Optional) */
  'subtitles'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsFavoritesRequestData {
  /** Member's ID, optional, if not specified uses the identified member. */
  'id'?: string;
  /** Specify return order: alphabetical, progression, remaining_time, remaining_episodes (optional, default alphabetical) */
  'order'?: string;
  /** Limit the number of series to display (optional, default 100, maximum 200) */
  'limit'?: string;
  /** Starting number for the series list (optional, default 0) */
  'offset'?: string;
  /** Filter series by status: current, active, archived (optional) */
  'status'?: string;
  /** Return only essential series info */
  'summary'?: string;
  /** If summary = true, add certain additional blocks to the return: user, userVisited, notes, seasons separated by a comma (optional) */
  'includes'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsGenresRequestData {
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsListRequestData {
  /** Specify return order: alphabetical, popularity, followers (optional) */
  'order'?: string;
  /** Display only series modified since this date (UNIX timestamp — optional) */
  'since'?: string;
  /** Only series from the last two years */
  'recent'?: string;
  /** Display series starting with specified characters (optional) */
  'starting'?: string;
  /** Starting number for series list (optional, default 0) */
  'start'?: string;
  /** Limit number of series displayed (optional, default 100) */
  'limit'?: string;
  /** Display filter (optional, new=only series not in the account) */
  'filter'?: string;
  /** IDs of SVOD/VOD platforms where series are available */
  'platforms'?: string;
  /** Country for SVOD/VOD platforms */
  'country'?: string;
  /** Return only essential series info */
  'summary'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsMemberRequestData {
  /** Member's ID (optional, default identified member) */
  'id'?: string;
  /** Specify return order: alphabetical, progression, remaining_time, remaining_episodes, last_seen, last_added, rating, avg_rating, custom, next_date (optional, default alphabetical) */
  'order'?: string;
  /** Limit the number of series to display (optional, default 100, maximum 200) */
  'limit'?: string;
  /** Starting number for the series list (optional, default 0) */
  'offset'?: string;
  /** Filter series by status: current, active, archived, archived_and_completed, archived_and_not_started, completed, active_and_completed, not_started, stopped (optional) */
  'status'?: string;
  /** Exclude certain genres separated by a comma for the series return (optional) */
  'excluded_genres'?: string;
  /** Exclude certain networks separated by a comma for the series return (optional) */
  'excluded_networks'?: string;
  /** Exclude certain statuses for the series return (optional) */
  'excluded_status'?: string;
  /** Retrieve series with tags separated by a comma (optional) */
  'tags'?: string;
  /** Exclude series with tags separated by a comma (optional) */
  'excluded_tags'?: string;
  /** Return only essential series info */
  'summary'?: string;
  /** If summary = true, add certain additional blocks to the return: user, userVisited, notes, platforms, seasons separated by a comma (optional) */
  'includes'?: string;
  /** List of platform IDs where series must be available (Optional) */
  'platforms'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsPicturesRequestData {
  /** Series ID (Optional if thetvdb_id specified) */
  'id'?: string;
  /** Series ID on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Specify return order: -date (date DESC), date (date ASC) (optional, default sort by id ASC) */
  'order'?: string;
  /** Starting number for the image list (optional, default 0) */
  'start'?: string;
  /** Limit the number of images to display (optional, default all) */
  'limit'?: string;
  /** Image display format: hd or all (optional, default all) */
  'format'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsRandomRequestData {
  /** Number of series to display, default 1 */
  'nb'?: string;
  /** Return only essential series info */
  'summary'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsRecommendationsRequestData {
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsSearchRequestData {
  /** Searched title */
  'title'?: string;
  /** Return only essential series info */
  'summary'?: string;
  /** Return order (title|popularity|followers), default title */
  'order'?: string;
  /** Only series from the last two years */
  'recent'?: string;
  /** IDs of SVOD/VOD platforms where series are available */
  'platforms'?: string;
  /** Country for SVOD/VOD platforms */
  'country'?: string;
  /** Number of results per page, default 5, maximum 100 */
  'nbpp'?: string;
  /** Page number, default 1 */
  'page'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsSeasonsRequestData {
  /** Series ID (Optional if thetvdb_id specified) */
  'id'?: string;
  /** Series ID on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsSimilarsRequestData {
  /** Series ID (Optional if thetvdb_id specified) */
  'id'?: string;
  /** Series ID on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Return series details */
  'details'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsUnratedRequestData {
  /** Number of results per page, default 20 */
  'nbpp'?: string;
  /** Page number, default 1 */
  'page'?: string;
  /** Time limit, month for series ended in the last 30 days, all for all finished series (Optional, default month) */
  'date'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetShowsVideosRequestData {
  /** Series ID (Optional if thetvdb_id specified) */
  'id'?: string;
  /** Series ID on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Specify return order: -date (add date DESC), date (add date ASC) (optional, default sort by season/episode) */
  'order'?: string;
  /** Starting number for the video list (optional, default 0) */
  'start'?: string;
  /** Limit the number of videos to display (optional, default all) */
  'limit'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostShowsArchiveRequestData {
  /** ID of the series (Optional if thetvdb_id specified) */
  'id'?: string;
  /** ID of the series on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostShowsFavoriteRequestData {
  /** ID of the series to add. */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostShowsNoteRequestData {
  /** Rating assigned from 1 to 5 */
  'note': string;
  /** ID of the series (Optional if thetvdb_id specified) */
  'id'?: string;
  /** ID of the series on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostShowsRecommendationRequestData {
  /** ID of the series (Optional if thetvdb_id specified) */
  'id'?: string;
  /** ID of the series on TheTVDB (Optional if id specified) */
  'thetvdb_id'?: string;
  /** Friend's member ID */
  'to'?: string;
  /** Comments for the friend (Optional) */
  'comments'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostShowsShowRequestData {
  /** Series ID. You can include multiple by separating them with a comma (Optional if thetvdb_id or imdb_id specified) */
  'id'?: string;
  /** Series ID on TheTVDB. You can include multiple by separating them with a comma (Optional if id or imdb_id specified) */
  'thetvdb_id'?: string;
  /** Series ID on IMDB. You can include multiple by separating them with a comma (Optional if id or thetvdb_id specified) */
  'imdb_id'?: string;
  /** ID of the last watched episode. If multiple series, the order of episodes must be exactly the same (Optional) */
  'episode_id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostShowsTagsRequestData {
  /** ID of the series to tag. */
  'id'?: string;
  /** Series tags: Words separated by a comma. */
  'tags'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PutShowsRecommendationRequestData {
  /** Recommendation ID */
  'id'?: string;
  /** Status (accept or decline) */
  'status'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use DeleteShowsArchiveRequestData
 */
export interface DeleteShowsArchive extends DeleteShowsArchiveRequestData {}

/**
 * @Deprecated, please use DeleteShowsFavoriteRequestData
 */
export interface DeleteShowsFavorite extends DeleteShowsFavoriteRequestData {}

/**
 * @Deprecated, please use DeleteShowsNoteRequestData
 */
export interface DeleteShowsNote extends DeleteShowsNoteRequestData {}

/**
 * @Deprecated, please use DeleteShowsRecommendationRequestData
 */
export interface DeleteShowsRecommendation extends DeleteShowsRecommendationRequestData {}

/**
 * @Deprecated, please use DeleteShowsShowRequestData
 */
export interface DeleteShowsShow extends DeleteShowsShowRequestData {}

/**
 * @Deprecated, please use GetShowsArticlesRequestData
 */
export interface GetShowsArticles extends GetShowsArticlesRequestData {}

/**
 * @Deprecated, please use GetShowsCharactersRequestData
 */
export interface GetShowsCharacters extends GetShowsCharactersRequestData {}

/**
 * @Deprecated, please use GetShowsDiscoverRequestData
 */
export interface GetShowsDiscover extends GetShowsDiscoverRequestData {}

/**
 * @Deprecated, please use GetShowsDiscoverPlatformsRequestData
 */
export interface GetShowsDiscoverPlatforms extends GetShowsDiscoverPlatformsRequestData {}

/**
 * @Deprecated, please use GetShowsDisplayRequestData
 */
export interface GetShowsDisplay extends GetShowsDisplayRequestData {}

/**
 * @Deprecated, please use GetShowsEpisodesRequestData
 */
export interface GetShowsEpisodes extends GetShowsEpisodesRequestData {}

/**
 * @Deprecated, please use GetShowsFavoritesRequestData
 */
export interface GetShowsFavorites extends GetShowsFavoritesRequestData {}

/**
 * @Deprecated, please use GetShowsGenresRequestData
 */
export interface GetShowsGenres extends GetShowsGenresRequestData {}

/**
 * @Deprecated, please use GetShowsListRequestData
 */
export interface GetShowsList extends GetShowsListRequestData {}

/**
 * @Deprecated, please use GetShowsMemberRequestData
 */
export interface GetShowsMember extends GetShowsMemberRequestData {}

/**
 * @Deprecated, please use GetShowsPicturesRequestData
 */
export interface GetShowsPictures extends GetShowsPicturesRequestData {}

/**
 * @Deprecated, please use GetShowsRandomRequestData
 */
export interface GetShowsRandom extends GetShowsRandomRequestData {}

/**
 * @Deprecated, please use GetShowsRecommendationsRequestData
 */
export interface GetShowsRecommendations extends GetShowsRecommendationsRequestData {}

/**
 * @Deprecated, please use GetShowsSearchRequestData
 */
export interface GetShowsSearch extends GetShowsSearchRequestData {}

/**
 * @Deprecated, please use GetShowsSeasonsRequestData
 */
export interface GetShowsSeasons extends GetShowsSeasonsRequestData {}

/**
 * @Deprecated, please use GetShowsSimilarsRequestData
 */
export interface GetShowsSimilars extends GetShowsSimilarsRequestData {}

/**
 * @Deprecated, please use GetShowsUnratedRequestData
 */
export interface GetShowsUnrated extends GetShowsUnratedRequestData {}

/**
 * @Deprecated, please use GetShowsVideosRequestData
 */
export interface GetShowsVideos extends GetShowsVideosRequestData {}

/**
 * @Deprecated, please use PostShowsArchiveRequestData
 */
export interface PostShowsArchive extends PostShowsArchiveRequestData {}

/**
 * @Deprecated, please use PostShowsFavoriteRequestData
 */
export interface PostShowsFavorite extends PostShowsFavoriteRequestData {}

/**
 * @Deprecated, please use PostShowsNoteRequestData
 */
export interface PostShowsNote extends PostShowsNoteRequestData {}

/**
 * @Deprecated, please use PostShowsRecommendationRequestData
 */
export interface PostShowsRecommendation extends PostShowsRecommendationRequestData {}

/**
 * @Deprecated, please use PostShowsShowRequestData
 */
export interface PostShowsShow extends PostShowsShowRequestData {}

/**
 * @Deprecated, please use PostShowsTagsRequestData
 */
export interface PostShowsTags extends PostShowsTagsRequestData {}

/**
 * @Deprecated, please use PutShowsRecommendationRequestData
 */
export interface PutShowsRecommendation extends PutShowsRecommendationRequestData {}

export class ShowsApi implements Api {

  /** API name */
  public static readonly apiName = 'ShowsApi';

  /** @inheritDoc */
  public readonly apiName = ShowsApi.apiName;

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
   * Remove a series from the archives of the member&#39;s account
   * Remove a series from the archives of the member&#39;s account.
   * @param data Data to provide to the API call
   */
  public async deleteShowsArchive(data: DeleteShowsArchiveRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteShowsArchiveRequestData>(data, ['id', 'thetvdb_id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/archive`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/archive`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'deleteShowsArchive');
    return ret;
  }

  /**
   * Remove a favorite series from the profile of the identified member
   * Remove a favorite series from the profile of the identified member.
   * @param data Data to provide to the API call
   */
  public async deleteShowsFavorite(data: DeleteShowsFavoriteRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteShowsFavoriteRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/favorite`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/favorite`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'deleteShowsFavorite');
    return ret;
  }

  /**
   * Delete a series rating
   * Delete a series rating.
   * @param data Data to provide to the API call
   */
  public async deleteShowsNote(data: DeleteShowsNoteRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteShowsNoteRequestData>(data, ['id', 'thetvdb_id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/note`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/note`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'deleteShowsNote');
    return ret;
  }

  /**
   * Delete a sent or received series recommendation
   * Delete a sent or received series recommendation.
   * @param data Data to provide to the API call
   */
  public async deleteShowsRecommendation(data: DeleteShowsRecommendationRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteShowsRecommendationRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/recommendation`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/recommendation`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'deleteShowsRecommendation');
    return ret;
  }

  /**
   * Remove a series from the member&#39;s account
   * Remove a series from the member&#39;s account.
   * @param data Data to provide to the API call
   */
  public async deleteShowsShow(data: DeleteShowsShowRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteShowsShowRequestData>(data, ['id', 'thetvdb_id', 'imdb_id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/show`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/show`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'deleteShowsShow');
    return ret;
  }

  /**
   * Display blog articles that talk about the series
   * Display blog articles that talk about the series.
   * @param data Data to provide to the API call
   */
  public async getShowsArticles(data: GetShowsArticlesRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsArticlesRequestData>(data, ['id', 'url', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/articles`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/articles`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsArticles');
    return ret;
  }

  /**
   * Retrieve characters of the series
   * Retrieve characters of the series
   * @param data Data to provide to the API call
   */
  public async getShowsCharacters(data: GetShowsCharactersRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsCharactersRequestData>(data, ['id', 'thetvdb_id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/characters`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/characters`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsCharacters');
    return ret;
  }

  /**
   * Display the list of series to discover
   * Display the list of series to discover.
   * @param data Data to provide to the API call
   */
  public async getShowsDiscover(data: GetShowsDiscoverRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['summary'] = data['summary'] !== undefined ? data['summary'] : 'false';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsDiscoverRequestData>(data, ['limit', 'offset', 'summary', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/discover`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/discover`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsDiscover');
    return ret;
  }

  /**
   * Display the list of series to discover on major SVoD platforms
   * Display the list of series to discover on major SVoD platforms.
   * @param data Data to provide to the API call
   */
  public async getShowsDiscoverPlatforms(data: GetShowsDiscoverPlatformsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['summary'] = data['summary'] !== undefined ? data['summary'] : 'false';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsDiscoverPlatformsRequestData>(data, ['summary', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/discover_platforms`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/discover_platforms`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsDiscoverPlatforms');
    return ret;
  }

  /**
   * Display information about a series
   * Display information about a series.
   * @param data Data to provide to the API call
   */
  public async getShowsDisplay(data: GetShowsDisplayRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsDisplayRequestData>(data, ['id', 'thetvdb_id', 'imdb_id', 'url', 'summary(default&#x3D;false)', 'includes', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/display`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/display`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsDisplay');
    return ret;
  }

  /**
   * Display episodes of a series
   * Display episodes of a series.
   * @param data Data to provide to the API call
   */
  public async getShowsEpisodes(data: GetShowsEpisodesRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsEpisodesRequestData>(data, ['id', 'thetvdb_id', 'season', 'episode', 'subtitles', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/episodes`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/episodes`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsEpisodes');
    return ret;
  }

  /**
   * Retrieve the favorite series of the member
   * Retrieve the favorite series of the member.
   * @param data Data to provide to the API call
   */
  public async getShowsFavorites(data: GetShowsFavoritesRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['summary'] = data['summary'] !== undefined ? data['summary'] : 'false';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsFavoritesRequestData>(data, ['id', 'order', 'limit', 'offset', 'status', 'summary', 'includes', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/favorites`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/favorites`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsFavorites');
    return ret;
  }

  /**
   * Display the list of available series genres
   * Display the list of available series genres.
   * @param data Data to provide to the API call
   */
  public async getShowsGenres(data: GetShowsGenresRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsGenresRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/genres`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/genres`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsGenres');
    return ret;
  }

  /**
   * Display the list of all series
   * Display the list of all series.
   * @param data Data to provide to the API call
   */
  public async getShowsList(data: GetShowsListRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['recent'] = data['recent'] !== undefined ? data['recent'] : 'false';
        data['summary'] = data['summary'] !== undefined ? data['summary'] : 'false';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsListRequestData>(data, ['order', 'since', 'recent', 'starting', 'start', 'limit', 'filter', 'platforms', 'country', 'summary', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/list`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/list`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsList');
    return ret;
  }

  /**
   * Display the list of all series of the member
   * Display the list of all series of the member.
   * @param data Data to provide to the API call
   */
  public async getShowsMember(data: GetShowsMemberRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['summary'] = data['summary'] !== undefined ? data['summary'] : 'false';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsMemberRequestData>(data, ['id', 'order', 'limit', 'offset', 'status', 'excluded_genres', 'excluded_networks', 'excluded_status', 'tags', 'excluded_tags', 'summary', 'includes', 'platforms', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/member`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/member`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsMember');
    return ret;
  }

  /**
   * Retrieve images of the series
   * Retrieve images of the series
   * @param data Data to provide to the API call
   */
  public async getShowsPictures(data: GetShowsPicturesRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsPicturesRequestData>(data, ['id', 'thetvdb_id', 'order', 'start', 'limit', 'format', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/pictures`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/pictures`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsPictures');
    return ret;
  }

  /**
   * Display a random series
   * Display a random series.
   * @param data Data to provide to the API call
   */
  public async getShowsRandom(data: GetShowsRandomRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['nb'] = data['nb'] !== undefined ? data['nb'] : '1';
        data['summary'] = data['summary'] !== undefined ? data['summary'] : 'false';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsRandomRequestData>(data, ['nb', 'summary', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/random`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/random`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsRandom');
    return ret;
  }

  /**
   * Retrieve recommendations received by the identified user
   * Retrieve recommendations received by the identified user.
   * @param data Data to provide to the API call
   */
  public async getShowsRecommendations(data: GetShowsRecommendationsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsRecommendationsRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/recommendations`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/recommendations`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsRecommendations');
    return ret;
  }

  /**
   * Search for a series, with member information if a token is provided
   * Search for a series, with member information if a token is provided.
   * @param data Data to provide to the API call
   */
  public async getShowsSearch(data: GetShowsSearchRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['summary'] = data['summary'] !== undefined ? data['summary'] : 'false';
        data['recent'] = data['recent'] !== undefined ? data['recent'] : 'false';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsSearchRequestData>(data, ['title', 'summary', 'order', 'recent', 'platforms', 'country', 'nbpp', 'page', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/search`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/search`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsSearch');
    return ret;
  }

  /**
   * Display the seasons of the series
   * Display the seasons of the series.
   * @param data Data to provide to the API call
   */
  public async getShowsSeasons(data: GetShowsSeasonsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsSeasonsRequestData>(data, ['id', 'thetvdb_id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/seasons`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/seasons`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsSeasons');
    return ret;
  }

  /**
   * Retrieve series marked as similar
   * Retrieve series marked as similar.
   * @param data Data to provide to the API call
   */
  public async getShowsSimilars(data: GetShowsSimilarsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['details'] = data['details'] !== undefined ? data['details'] : 'false';
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsSimilarsRequestData>(data, ['id', 'thetvdb_id', 'details', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/similars`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/similars`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsSimilars');
    return ret;
  }

  /**
   * Retrieve the list of finished and unrated series
   * Retrieve the list of finished and unrated series.
   * @param data Data to provide to the API call
   */
  public async getShowsUnrated(data: GetShowsUnratedRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsUnratedRequestData>(data, ['nbpp', 'page', 'date', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/unrated`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/unrated`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsUnrated');
    return ret;
  }

  /**
   * Retrieve videos associated with the series
   * Retrieve videos associated with the series.
   * @param data Data to provide to the API call
   */
  public async getShowsVideos(data: GetShowsVideosRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetShowsVideosRequestData>(data, ['id', 'thetvdb_id', 'order', 'start', 'limit', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/videos`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/videos`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'getShowsVideos');
    return ret;
  }

  /**
   * Archive a series in the member&#39;s account
   * Archive a series in the member&#39;s account.
   * @param data Data to provide to the API call
   */
  public async postShowsArchive(data: PostShowsArchiveRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostShowsArchiveRequestData>(data, ['id', 'thetvdb_id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/archive`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/archive`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'postShowsArchive');
    return ret;
  }

  /**
   * Add a favorite series to the profile of the identified member
   * Add a favorite series to the profile of the identified member.
   * @param data Data to provide to the API call
   */
  public async postShowsFavorite(data: PostShowsFavoriteRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostShowsFavoriteRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/favorite`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/favorite`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'postShowsFavorite');
    return ret;
  }

  /**
   * Rate a series
   * Rate a series.
   * @param data Data to provide to the API call
   */
  public async postShowsNote(data: PostShowsNoteRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostShowsNoteRequestData>(data, ['id', 'thetvdb_id', 'note', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/note`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/note`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'postShowsNote');
    return ret;
  }

  /**
   * Create a series recommendation from a member to a friend
   * Create a series recommendation from a member to a friend.
   * @param data Data to provide to the API call
   */
  public async postShowsRecommendation(data: PostShowsRecommendationRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostShowsRecommendationRequestData>(data, ['id', 'thetvdb_id', 'to', 'comments', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/recommendation`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/recommendation`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'postShowsRecommendation');
    return ret;
  }

  /**
   * Add a series to the member&#39;s account
   * Add a series to the member&#39;s account.
   * @param data Data to provide to the API call
   */
  public async postShowsShow(data: PostShowsShowRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostShowsShowRequestData>(data, ['id', 'thetvdb_id', 'imdb_id', 'episode_id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/show`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/show`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'postShowsShow');
    return ret;
  }

  /**
   * Update tags for the given series of the identified member
   * Update tags for the given series of the identified member.
   * @param data Data to provide to the API call
   */
  public async postShowsTags(data: PostShowsTagsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostShowsTagsRequestData>(data, ['id', 'tags', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/tags`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/tags`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'postShowsTags');
    return ret;
  }

  /**
   * Change the status of a received series recommendation
   * Change the status of a received series recommendation.
   * @param data Data to provide to the API call
   */
  public async putShowsRecommendation(data: PutShowsRecommendationRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PutShowsRecommendationRequestData>(data, ['id', 'status', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/shows/recommendation`;
    const tokenizedUrl = `${this.client.options.basePath}/shows/recommendation`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'PUT', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ShowsApi.apiName, undefined, 'putShowsRecommendation');
    return ret;
  }

}
