import { ApiClient, ApiFetchClient, BaseApiFetchClientConstructor, isApiClient } from '@ama-sdk/core';

import * as api from '../api';

const MOCK_SERVER_BASE_PATH = 'http://localhost:10010/v2';
const MOCK_SERVER = new ApiFetchClient({basePath: MOCK_SERVER_BASE_PATH});

export interface Api {
  authenticationApi: api.AuthenticationApi;
  badgesApi: api.BadgesApi;
  commentsApi: api.CommentsApi;
  episodesApi: api.EpisodesApi;
  friendsApi: api.FriendsApi;
  membersApi: api.MembersApi;
  messagesApi: api.MessagesApi;
  moviesApi: api.MoviesApi;
  newsApi: api.NewsApi;
  personsApi: api.PersonsApi;
  picturesApi: api.PicturesApi;
  planningApi: api.PlanningApi;
  platformsApi: api.PlatformsApi;
  pollsApi: api.PollsApi;
  reportsApi: api.ReportsApi;
  searchApi: api.SearchApi;
  seasonsApi: api.SeasonsApi;
  showsApi: api.ShowsApi;
  subtitlesApi: api.SubtitlesApi;
  tagsApi: api.TagsApi;
  timelineApi: api.TimelineApi;
}

export const myApi: Api = {
  authenticationApi: new api.AuthenticationApi(MOCK_SERVER),
  badgesApi: new api.BadgesApi(MOCK_SERVER),
  commentsApi: new api.CommentsApi(MOCK_SERVER),
  episodesApi: new api.EpisodesApi(MOCK_SERVER),
  friendsApi: new api.FriendsApi(MOCK_SERVER),
  membersApi: new api.MembersApi(MOCK_SERVER),
  messagesApi: new api.MessagesApi(MOCK_SERVER),
  moviesApi: new api.MoviesApi(MOCK_SERVER),
  newsApi: new api.NewsApi(MOCK_SERVER),
  personsApi: new api.PersonsApi(MOCK_SERVER),
  picturesApi: new api.PicturesApi(MOCK_SERVER),
  planningApi: new api.PlanningApi(MOCK_SERVER),
  platformsApi: new api.PlatformsApi(MOCK_SERVER),
  pollsApi: new api.PollsApi(MOCK_SERVER),
  reportsApi: new api.ReportsApi(MOCK_SERVER),
  searchApi: new api.SearchApi(MOCK_SERVER),
  seasonsApi: new api.SeasonsApi(MOCK_SERVER),
  showsApi: new api.ShowsApi(MOCK_SERVER),
  subtitlesApi: new api.SubtitlesApi(MOCK_SERVER),
  tagsApi: new api.TagsApi(MOCK_SERVER),
  timelineApi: new api.TimelineApi(MOCK_SERVER)
};


/**
 * Retrieve mocked SDK Apis
 *
 * @param config configuration of the Api Client
 */
export function getMockedApi(config?: string | BaseApiFetchClientConstructor | ApiClient): Api {
  let apiConfigObj: ApiClient = MOCK_SERVER;
  if (typeof config === 'string') {
    apiConfigObj = new ApiFetchClient({basePath: config});
  } else if (isApiClient(config)) {
    apiConfigObj = config;
  } else if (config) {
    apiConfigObj = new ApiFetchClient(config);
  }
  return {
    authenticationApi: new api.AuthenticationApi(apiConfigObj),
    badgesApi: new api.BadgesApi(apiConfigObj),
    commentsApi: new api.CommentsApi(apiConfigObj),
    episodesApi: new api.EpisodesApi(apiConfigObj),
    friendsApi: new api.FriendsApi(apiConfigObj),
    membersApi: new api.MembersApi(apiConfigObj),
    messagesApi: new api.MessagesApi(apiConfigObj),
    moviesApi: new api.MoviesApi(apiConfigObj),
    newsApi: new api.NewsApi(apiConfigObj),
    personsApi: new api.PersonsApi(apiConfigObj),
    picturesApi: new api.PicturesApi(apiConfigObj),
    planningApi: new api.PlanningApi(apiConfigObj),
    platformsApi: new api.PlatformsApi(apiConfigObj),
    pollsApi: new api.PollsApi(apiConfigObj),
    reportsApi: new api.ReportsApi(apiConfigObj),
    searchApi: new api.SearchApi(apiConfigObj),
    seasonsApi: new api.SeasonsApi(apiConfigObj),
    showsApi: new api.ShowsApi(apiConfigObj),
    subtitlesApi: new api.SubtitlesApi(apiConfigObj),
    tagsApi: new api.TagsApi(apiConfigObj),
    timelineApi: new api.TimelineApi(apiConfigObj)
  };
}
