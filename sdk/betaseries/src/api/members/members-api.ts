import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface DeleteMembersAvatarRequestData {
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteMembersBannerRequestData {
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteMembersNotificationRequestData {
  /** Notification ID */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface DeleteProfileFiltersFilterRequestData {
  /** Type of media (show or movie) */
  'type'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMembersBadgesRequestData {
  /** Member ID */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMembersEmailRequestData {
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMembersInfosRequestData {
  /** Member ID (optional) */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMembersIsActiveRequestData {
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMembersNotificationsRequestData {
  /** Last ID (Optional) */
  'since_id'?: string;
  /** Number of notifications, maximum 100 (Optional, default 10) */
  'number'?: string;
  /** Descending or ascending sort (ASC or DESC, default DESC) */
  'sort'?: string;
  /** Return only certain types separated by a comma (Optional) */
  'types'?: string;
  /** Display all notifications, not just unread ones (Optional, default false) */
  'all'?: string;
  /** Automatic deletion of notifications (Optional, default false) */
  'auto_delete'?: string;
  /** Automatic marking of notifications as seen (Optional, default false) */
  'auto_mark'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMembersOptionsRequestData {
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMembersSearchRequestData {
  /** Username, minimum 2 characters. You can use % as a wildcard. */
  'login'?: string;
  /** Number of results to return. Default 10. */
  'limit'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMembersUsernameRequestData {
  /** Username */
  'username'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetMembersYearRequestData {
  /** Member ID (optional) */
  'id'?: string;
  /** Year for the statistics calculation */
  'year'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMembersAccessTokenRequestData {
  /** Your API key. */
  'client_id'?: string;
  /** The secret key provided in your key information. */
  'client_secret'?: string;
  /** The callback address you had already provided for the first part. */
  'redirect_uri'?: string;
  /** Code obtained from the first part of authentication. */
  'code'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMembersAuthRequestData {
  /** Identifier (login or e-mail) */
  'login'?: string;
  /** MD5 encrypted password */
  'password'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMembersAvatarRequestData {
  /** Image to be used for the user's avatar. */
  'avatar'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMembersBannerRequestData {
  /** Image to be used for the user's banner. */
  'avatar'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMembersDeleteRequestData {
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMembersDestroyRequestData {
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMembersEmailRequestData {
  /** The new email address */
  'email'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMembersLocaleRequestData {
  /** Locale */
  'locale'?: string;
}
export interface PostMembersLostRequestData {
  /** Email address or username */
  'find'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMembersOauthRequestData {
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMembersOptionRequestData {
  /** Option name (downloaded, global, specials, notation, timelag, friendship, comment_language) */
  'name'?: string;
  /** Option value (1 or 0, for friendship: open|requests|friends|nobody, for episodes_tri: name, date, empty, for comment_language: all, site_locale and locale available on Betaseries) */
  'value'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMembersPasswordRequestData {
  /** The current password of the member */
  'current_password'?: string;
  /** The new password for the member */
  'new_password'?: string;
  /** The confirmation of the new password for the member */
  'confirmed_password'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMembersSignupRequestData {
  /** Username */
  'login'?: string;
  /** MD5 password — Optional: If not provided, it will be generated and sent in the email */
  'password'?: string;
  /** Email address */
  'email'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostMembersSyncRequestData {
  /** POST array of email addresses to search */
  'mails[]'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use DeleteMembersAvatarRequestData
 */
export interface DeleteMembersAvatar extends DeleteMembersAvatarRequestData {}

/**
 * @Deprecated, please use DeleteMembersBannerRequestData
 */
export interface DeleteMembersBanner extends DeleteMembersBannerRequestData {}

/**
 * @Deprecated, please use DeleteMembersNotificationRequestData
 */
export interface DeleteMembersNotification extends DeleteMembersNotificationRequestData {}

/**
 * @Deprecated, please use DeleteProfileFiltersFilterRequestData
 */
export interface DeleteProfileFiltersFilter extends DeleteProfileFiltersFilterRequestData {}

/**
 * @Deprecated, please use GetMembersBadgesRequestData
 */
export interface GetMembersBadges extends GetMembersBadgesRequestData {}

/**
 * @Deprecated, please use GetMembersEmailRequestData
 */
export interface GetMembersEmail extends GetMembersEmailRequestData {}

/**
 * @Deprecated, please use GetMembersInfosRequestData
 */
export interface GetMembersInfos extends GetMembersInfosRequestData {}

/**
 * @Deprecated, please use GetMembersIsActiveRequestData
 */
export interface GetMembersIsActive extends GetMembersIsActiveRequestData {}

/**
 * @Deprecated, please use GetMembersNotificationsRequestData
 */
export interface GetMembersNotifications extends GetMembersNotificationsRequestData {}

/**
 * @Deprecated, please use GetMembersOptionsRequestData
 */
export interface GetMembersOptions extends GetMembersOptionsRequestData {}

/**
 * @Deprecated, please use GetMembersSearchRequestData
 */
export interface GetMembersSearch extends GetMembersSearchRequestData {}

/**
 * @Deprecated, please use GetMembersUsernameRequestData
 */
export interface GetMembersUsername extends GetMembersUsernameRequestData {}

/**
 * @Deprecated, please use GetMembersYearRequestData
 */
export interface GetMembersYear extends GetMembersYearRequestData {}

/**
 * @Deprecated, please use PostMembersAccessTokenRequestData
 */
export interface PostMembersAccessToken extends PostMembersAccessTokenRequestData {}

/**
 * @Deprecated, please use PostMembersAuthRequestData
 */
export interface PostMembersAuth extends PostMembersAuthRequestData {}

/**
 * @Deprecated, please use PostMembersAvatarRequestData
 */
export interface PostMembersAvatar extends PostMembersAvatarRequestData {}

/**
 * @Deprecated, please use PostMembersBannerRequestData
 */
export interface PostMembersBanner extends PostMembersBannerRequestData {}

/**
 * @Deprecated, please use PostMembersDeleteRequestData
 */
export interface PostMembersDelete extends PostMembersDeleteRequestData {}

/**
 * @Deprecated, please use PostMembersDestroyRequestData
 */
export interface PostMembersDestroy extends PostMembersDestroyRequestData {}

/**
 * @Deprecated, please use PostMembersEmailRequestData
 */
export interface PostMembersEmail extends PostMembersEmailRequestData {}

/**
 * @Deprecated, please use PostMembersLocaleRequestData
 */
export interface PostMembersLocale extends PostMembersLocaleRequestData {}

/**
 * @Deprecated, please use PostMembersLostRequestData
 */
export interface PostMembersLost extends PostMembersLostRequestData {}

/**
 * @Deprecated, please use PostMembersOauthRequestData
 */
export interface PostMembersOauth extends PostMembersOauthRequestData {}

/**
 * @Deprecated, please use PostMembersOptionRequestData
 */
export interface PostMembersOption extends PostMembersOptionRequestData {}

/**
 * @Deprecated, please use PostMembersPasswordRequestData
 */
export interface PostMembersPassword extends PostMembersPasswordRequestData {}

/**
 * @Deprecated, please use PostMembersSignupRequestData
 */
export interface PostMembersSignup extends PostMembersSignupRequestData {}

/**
 * @Deprecated, please use PostMembersSyncRequestData
 */
export interface PostMembersSync extends PostMembersSyncRequestData {}

export class MembersApi implements Api {

  /** API name */
  public static readonly apiName = 'MembersApi';

  /** @inheritDoc */
  public readonly apiName = MembersApi.apiName;

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
   * Deletes user avatar
   * Deletes the identified user&#39;s avatar.
   * @param data Data to provide to the API call
   */
  public async deleteMembersAvatar(data: DeleteMembersAvatarRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteMembersAvatarRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/avatar`;
    const tokenizedUrl = `${this.client.options.basePath}/members/avatar`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'deleteMembersAvatar');
    return ret;
  }

  /**
   * Remove the banner
   * Delete the banner of the identified user.
   * @param data Data to provide to the API call
   */
  public async deleteMembersBanner(data: DeleteMembersBannerRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteMembersBannerRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/banner`;
    const tokenizedUrl = `${this.client.options.basePath}/members/banner`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'deleteMembersBanner');
    return ret;
  }

  /**
   * Deletes a notification
   * Deletes a notification.
   * @param data Data to provide to the API call
   */
  public async deleteMembersNotification(data: DeleteMembersNotificationRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteMembersNotificationRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/notification`;
    const tokenizedUrl = `${this.client.options.basePath}/members/notification`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'deleteMembersNotification');
    return ret;
  }

  /**
   * Deletes filter
   * Deletes the filter for the connected member for the type of media.
   * @param data Data to provide to the API call
   */
  public async deleteProfileFiltersFilter(data: DeleteProfileFiltersFilterRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<DeleteProfileFiltersFilterRequestData>(data, ['type', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/profile-filters/filter`;
    const tokenizedUrl = `${this.client.options.basePath}/profile-filters/filter`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'DELETE', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'deleteProfileFiltersFilter');
    return ret;
  }

  /**
   * Displays member badges
   * Displays member badges.
   * @param data Data to provide to the API call
   */
  public async getMembersBadges(data: GetMembersBadgesRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMembersBadgesRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/badges`;
    const tokenizedUrl = `${this.client.options.basePath}/members/badges`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'getMembersBadges');
    return ret;
  }

  /**
   * Retrieve the email address
   * Fetch the email address of the identified member.
   * @param data Data to provide to the API call
   */
  public async getMembersEmail(data: GetMembersEmailRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMembersEmailRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/email`;
    const tokenizedUrl = `${this.client.options.basePath}/members/email`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'getMembersEmail');
    return ret;
  }

  /**
   * Returns member information
   * Returns information of a member, defaulting to the identified member. Use movies/member to retrieve movies and shows/member for series.
   * @param data Data to provide to the API call
   */
  public async getMembersInfos(data: GetMembersInfosRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMembersInfosRequestData>(data, ['id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/infos`;
    const tokenizedUrl = `${this.client.options.basePath}/members/infos`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'getMembersInfos');
    return ret;
  }

  /**
   * Checks token activity
   * Checks if the token is active.
   * @param data Data to provide to the API call
   */
  public async getMembersIsActive(data: GetMembersIsActiveRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMembersIsActiveRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/is_active`;
    const tokenizedUrl = `${this.client.options.basePath}/members/is_active`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'getMembersIsActive');
    return ret;
  }

  /**
   * Displays latest notifications
   * Displays the latest member notifications. Types: badge, banner, bugs, character, comment, donations, episode, facebook, film, forum, friend, message, quiz, recommend, site, subtitles, video.
   * @param data Data to provide to the API call
   */
  public async getMembersNotifications(data: GetMembersNotificationsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMembersNotificationsRequestData>(data, ['since_id', 'number', 'sort', 'types', 'all', 'auto_delete', 'auto_mark', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/notifications`;
    const tokenizedUrl = `${this.client.options.basePath}/members/notifications`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'getMembersNotifications');
    return ret;
  }

  /**
   * Retrieves member options
   * Retrieves member options (subtitles).
   * @param data Data to provide to the API call
   */
  public async getMembersOptions(data: GetMembersOptionsRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMembersOptionsRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/options`;
    const tokenizedUrl = `${this.client.options.basePath}/members/options`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'getMembersOptions');
    return ret;
  }

  /**
   * Member search
   * Searches for members.
   * @param data Data to provide to the API call
   */
  public async getMembersSearch(data: GetMembersSearchRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMembersSearchRequestData>(data, ['login', 'limit', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/search`;
    const tokenizedUrl = `${this.client.options.basePath}/members/search`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'getMembersSearch');
    return ret;
  }

  /**
   * Returns available usernames
   * Returns available username options on BetaSeries.
   * @param data Data to provide to the API call
   */
  public async getMembersUsername(data: GetMembersUsernameRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMembersUsernameRequestData>(data, ['username', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/username`;
    const tokenizedUrl = `${this.client.options.basePath}/members/username`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'getMembersUsername');
    return ret;
  }

  /**
   * Returns yearly member statistics
   * Returns the year&#39;s statistics of a member, defaulting to the identified member.
   * @param data Data to provide to the API call
   */
  public async getMembersYear(data: GetMembersYearRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetMembersYearRequestData>(data, ['id', 'year', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/year`;
    const tokenizedUrl = `${this.client.options.basePath}/members/year`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'getMembersYear');
    return ret;
  }

  /**
   * OAuth2 Access Token
   * Retrieves an access token with the code provided by OAuth 2 authentication.
   * @param data Data to provide to the API call
   */
  public async postMembersAccessToken(data: PostMembersAccessTokenRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMembersAccessTokenRequestData>(data, ['client_id', 'client_secret', 'redirect_uri', 'code', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/access_token`;
    const tokenizedUrl = `${this.client.options.basePath}/members/access_token`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'postMembersAccessToken');
    return ret;
  }

  /**
   * Standard member authentication
   * Standard member authentication.
   * @param data Data to provide to the API call
   */
  public async postMembersAuth(data: PostMembersAuthRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMembersAuthRequestData>(data, ['login', 'password', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/auth`;
    const tokenizedUrl = `${this.client.options.basePath}/members/auth`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'postMembersAuth');
    return ret;
  }

  /**
   * Uploads and replaces user avatar
   * Uploads and replaces the identified user&#39;s avatar.
   * @param data Data to provide to the API call
   */
  public async postMembersAvatar(data: PostMembersAvatarRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMembersAvatarRequestData>(data, ['avatar', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/avatar`;
    const tokenizedUrl = `${this.client.options.basePath}/members/avatar`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'postMembersAvatar');
    return ret;
  }

  /**
   * Uploads user banner
   * Uploads and replaces the identified user&#39;s banner.
   * @param data Data to provide to the API call
   */
  public async postMembersBanner(data: PostMembersBannerRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMembersBannerRequestData>(data, ['avatar', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/banner`;
    const tokenizedUrl = `${this.client.options.basePath}/members/banner`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'postMembersBanner');
    return ret;
  }

  /**
   * Initiates account deletion process
   * Initiates the account deletion process (sends an email with a link for permanent deletion).
   * @param data Data to provide to the API call
   */
  public async postMembersDelete(data: PostMembersDeleteRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMembersDeleteRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/delete`;
    const tokenizedUrl = `${this.client.options.basePath}/members/delete`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'postMembersDelete');
    return ret;
  }

  /**
   * Destroys active token
   * Destroys the active token.
   * @param data Data to provide to the API call
   */
  public async postMembersDestroy(data: PostMembersDestroyRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMembersDestroyRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/destroy`;
    const tokenizedUrl = `${this.client.options.basePath}/members/destroy`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'postMembersDestroy');
    return ret;
  }

  /**
   * Change the email address
   * Update the email address of the identified member.
   * @param data Data to provide to the API call
   */
  public async postMembersEmail(data: PostMembersEmailRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMembersEmailRequestData>(data, ['email', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/email`;
    const tokenizedUrl = `${this.client.options.basePath}/members/email`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'postMembersEmail');
    return ret;
  }

  /**
   * Change the locale
   * Set a new locale for the identified member.
   * @param data Data to provide to the API call
   */
  public async postMembersLocale(data: PostMembersLocaleRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
    const getParams = this.client.extractQueryParams<PostMembersLocaleRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/locale`;
    const tokenizedUrl = `${this.client.options.basePath}/members/locale`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'postMembersLocale');
    return ret;
  }

  /**
   * Password reset email
   * Sends an email to reset the password.
   * @param data Data to provide to the API call
   */
  public async postMembersLost(data: PostMembersLostRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMembersLostRequestData>(data, ['find', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/lost`;
    const tokenizedUrl = `${this.client.options.basePath}/members/lost`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'postMembersLost');
    return ret;
  }

  /**
   * OAuth Authentication
   * OAuth authentication. Redirects the user to the callback URL specified in your account with the GET parameter token.
   * @param data Data to provide to the API call
   */
  public async postMembersOauth(data: PostMembersOauthRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMembersOauthRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/oauth`;
    const tokenizedUrl = `${this.client.options.basePath}/members/oauth`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'postMembersOauth');
    return ret;
  }

  /**
   * Modifies user option
   * Modifies a user option.
   * @param data Data to provide to the API call
   */
  public async postMembersOption(data: PostMembersOptionRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMembersOptionRequestData>(data, ['name', 'value', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/option`;
    const tokenizedUrl = `${this.client.options.basePath}/members/option`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'postMembersOption');
    return ret;
  }

  /**
   * Change the password
   * Update the password for the identified member.
   * @param data Data to provide to the API call
   */
  public async postMembersPassword(data: PostMembersPasswordRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMembersPasswordRequestData>(data, ['current_password', 'new_password', 'confirmed_password', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/password`;
    const tokenizedUrl = `${this.client.options.basePath}/members/password`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'postMembersPassword');
    return ret;
  }

  /**
   * Creates new member account
   * Creates a new member account on BetaSeries.
   * @param data Data to provide to the API call
   */
  public async postMembersSignup(data: PostMembersSignupRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMembersSignupRequestData>(data, ['login', 'password', 'email', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/signup`;
    const tokenizedUrl = `${this.client.options.basePath}/members/signup`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'postMembersSignup');
    return ret;
  }

  /**
   * Searches members among friends
   * Searches members among the account&#39;s friends.
   * @param data Data to provide to the API call
   */
  public async postMembersSync(data: PostMembersSyncRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostMembersSyncRequestData>(data, ['mails[]', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/members/sync`;
    const tokenizedUrl = `${this.client.options.basePath}/members/sync`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, MembersApi.apiName, undefined, 'postMembersSync');
    return ret;
  }

}
