import { Api, ApiClient, ApiTypes, computePiiParameterTokens,  RequestBody, RequestMetadata, } from '@ama-sdk/core';

export interface PostReportsReportRequestData {
  /** Type of element: character|comment|film|forum|quizz|show|suggest|suggest_film|member (Mandatory) */
  'type'?: string;
  /** ID of the concerned element (Mandatory) */
  'target_id'?: string;
  /** Reason for the report (Optional) */
  'reason'?: string;
  /** Source of the report: web, app, api... (Optional) */
  'source'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
export interface PostReportsUpdateRequestData {
  /** Type of element: movie|show (Mandatory) */
  'type'?: string;
  /** ID of the concerned element (Mandatory) */
  'id'?: string;
  /** Locale parameter to specify language preference */
  'locale'?: string;
}
/**
 * @Deprecated, please use PostReportsReportRequestData
 */
export interface PostReportsReport extends PostReportsReportRequestData {}

/**
 * @Deprecated, please use PostReportsUpdateRequestData
 */
export interface PostReportsUpdate extends PostReportsUpdateRequestData {}

export class ReportsApi implements Api {

  /** API name */
  public static readonly apiName = 'ReportsApi';

  /** @inheritDoc */
  public readonly apiName = ReportsApi.apiName;

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
   * Create a report for the element
   * Create a report for the element.
   * @param data Data to provide to the API call
   */
  public async postReportsReport(data: PostReportsReportRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostReportsReportRequestData>(data, ['type', 'target_id', 'reason', 'source', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/reports/report`;
    const tokenizedUrl = `${this.client.options.basePath}/reports/report`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ReportsApi.apiName, undefined, 'postReportsReport');
    return ret;
  }

  /**
   * Request an update for the element
   * Request an update for the element.
   * @param data Data to provide to the API call
   */
  public async postReportsUpdate(data: PostReportsUpdateRequestData, metadata?: RequestMetadata<string, string>): Promise<void> {
        data['locale'] = data['locale'] !== undefined ? data['locale'] : 'fr';
    const getParams = this.client.extractQueryParams<PostReportsUpdateRequestData>(data, ['type', 'id', 'locale']);
    const metadataHeaderAccept = metadata?.headerAccept || 'application/json';
    const headers: { [key: string]: string | undefined } = { 
      'Content-Type': metadata?.headerContentType || 'application/json',
      ...(metadataHeaderAccept ? {'Accept': metadataHeaderAccept} : {})
    };

    let body: RequestBody = '';
    const basePathUrl = `${this.client.options.basePath}/reports/update`;
    const tokenizedUrl = `${this.client.options.basePath}/reports/update`;
    const tokenizedOptions = this.client.tokenizeRequestOptions(tokenizedUrl, getParams,  this.piiParamTokens, data);

    const options = await this.client.prepareOptions(basePathUrl, 'POST', getParams, headers, body || undefined, tokenizedOptions, metadata);
    const url = this.client.prepareUrl(options.basePath, options.queryParams);

    const ret = this.client.processCall<void>(url, options, ApiTypes.DEFAULT, ReportsApi.apiName, undefined, 'postReportsUpdate');
    return ret;
  }

}
