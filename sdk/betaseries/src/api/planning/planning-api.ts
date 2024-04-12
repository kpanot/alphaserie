import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface GetPlanningGeneralRequestData {
  /** Origin date (YYYY-MM-DD — Optional, default \"now\") */
  'date'?: string;
  /** Number of days before (Optional, default 8) */
  'before'?: string;
  /** Number of days after (Optional, default 8) */
  'after'?: string;
  /** Type of episodes to display: \"all\" or \"premieres\" (Optional, default \"all\") */
  'type'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPlanningIncomingRequestData {
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface GetPlanningMemberRequestData {
  /** Member's ID (Optional if identified) */
  'id'?: string;
  /** Display only unseen episodes */
  'unseen'?: string;
  /** Display the schedule for the specified month (format YYYY-MM) */
  'month'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use GetPlanningGeneralRequestData
 */
export interface GetPlanningGeneral extends GetPlanningGeneralRequestData {}

/**
 * @Deprecated, please use GetPlanningIncomingRequestData
 */
export interface GetPlanningIncoming extends GetPlanningIncomingRequestData {}

/**
 * @Deprecated, please use GetPlanningMemberRequestData
 */
export interface GetPlanningMember extends GetPlanningMemberRequestData {}

export class PlanningApi implements Api {

  /** API name */
  public static readonly apiName = 'PlanningApi';

  /** @inheritDoc */
  public readonly apiName = PlanningApi.apiName;

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
   * Display all episodes broadcasted
   * Display all episodes broadcasted in the last 8 days and up to the next 8 days.
   * @param data Data to provide to the API call
   */
  public async getPlanningGeneral(data: GetPlanningGeneralRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPlanningGeneralRequestData>(data, ['date', 'before', 'after', 'type', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/planning/general`;
    const tokenizedUrl = `${this.client.options.basePath}/planning/general`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PlanningApi.apiName, undefined, 'getPlanningGeneral');
    return ret;
  }

  /**
   * Display only the first episode of the upcoming series
   * Display only the first episode of the upcoming series to be broadcasted.
   * @param data Data to provide to the API call
   */
  public async getPlanningIncoming(data: GetPlanningIncomingRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPlanningIncomingRequestData>(data, ['locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/planning/incoming`;
    const tokenizedUrl = `${this.client.options.basePath}/planning/incoming`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PlanningApi.apiName, undefined, 'getPlanningIncoming');
    return ret;
  }

  /**
   * Display the schedule
   * Display the schedule of the identified member or another member.
   * @param data Data to provide to the API call
   */
  public async getPlanningMember(data: GetPlanningMemberRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<GetPlanningMemberRequestData>(data, ['id', 'unseen', 'month', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/planning/member`;
    const tokenizedUrl = `${this.client.options.basePath}/planning/member`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'GET', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, PlanningApi.apiName, undefined, 'getPlanningMember');
    return ret;
  }

}
