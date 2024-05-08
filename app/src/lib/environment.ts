interface Configuration {
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  apiBasePath: string;
  /** ApiKey used on the Betaseries website to connect to the Api, it is used in WebComponent context only */
  betaseries_official_api_key: string;
}

export const configuration: Configuration = {
  client_id: import.meta.env.VITE_CLIENT_ID,
  client_secret: import.meta.env.VITE_CLIENT_SECRET,
  redirect_uri: import.meta.env.VITE_REDIRECT_URI,
  betaseries_official_api_key: '72ede40de1b2', // found on https://www.betaseries.com,
  apiBasePath: 'https://api.betaseries.com'
};
