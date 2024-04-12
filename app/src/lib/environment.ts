interface Configuration {
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  apiBasePath: string;
}

export const configuration: Configuration = {
  client_id: import.meta.env.VITE_CLIENT_ID,
  client_secret: import.meta.env.VITE_CLIENT_SECRET,
  redirect_uri: import.meta.env.VITE_REDIRECT_URI,
  apiBasePath: 'https://api.betaseries.com'
};