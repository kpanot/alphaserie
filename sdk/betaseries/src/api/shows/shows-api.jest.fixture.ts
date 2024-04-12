
import { ShowsApi, DeleteShowsArchiveRequestData, DeleteShowsFavoriteRequestData, DeleteShowsNoteRequestData, DeleteShowsRecommendationRequestData, DeleteShowsShowRequestData, GetShowsArticlesRequestData, GetShowsCharactersRequestData, GetShowsDiscoverRequestData, GetShowsDiscoverPlatformsRequestData, GetShowsDisplayRequestData, GetShowsEpisodesRequestData, GetShowsFavoritesRequestData, GetShowsGenresRequestData, GetShowsListRequestData, GetShowsMemberRequestData, GetShowsPicturesRequestData, GetShowsRandomRequestData, GetShowsRecommendationsRequestData, GetShowsSearchRequestData, GetShowsSeasonsRequestData, GetShowsSimilarsRequestData, GetShowsUnratedRequestData, GetShowsVideosRequestData, PostShowsArchiveRequestData, PostShowsFavoriteRequestData, PostShowsNoteRequestData, PostShowsRecommendationRequestData, PostShowsShowRequestData, PostShowsTagsRequestData, PutShowsRecommendationRequestData } from './shows-api';

export class ShowsApiFixture implements Partial<Readonly<ShowsApi>> {

  /** @inheritDoc */
  public readonly apiName = "ShowsApi";

  /**
   * Fixture associated to function deleteShowsArchive
   */
  public deleteShowsArchive: jest.Mock<Promise<void>, [DeleteShowsArchiveRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteShowsFavorite
   */
  public deleteShowsFavorite: jest.Mock<Promise<void>, [DeleteShowsFavoriteRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteShowsNote
   */
  public deleteShowsNote: jest.Mock<Promise<void>, [DeleteShowsNoteRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteShowsRecommendation
   */
  public deleteShowsRecommendation: jest.Mock<Promise<void>, [DeleteShowsRecommendationRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteShowsShow
   */
  public deleteShowsShow: jest.Mock<Promise<void>, [DeleteShowsShowRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsArticles
   */
  public getShowsArticles: jest.Mock<Promise<void>, [GetShowsArticlesRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsCharacters
   */
  public getShowsCharacters: jest.Mock<Promise<void>, [GetShowsCharactersRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsDiscover
   */
  public getShowsDiscover: jest.Mock<Promise<void>, [GetShowsDiscoverRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsDiscoverPlatforms
   */
  public getShowsDiscoverPlatforms: jest.Mock<Promise<void>, [GetShowsDiscoverPlatformsRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsDisplay
   */
  public getShowsDisplay: jest.Mock<Promise<void>, [GetShowsDisplayRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsEpisodes
   */
  public getShowsEpisodes: jest.Mock<Promise<void>, [GetShowsEpisodesRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsFavorites
   */
  public getShowsFavorites: jest.Mock<Promise<void>, [GetShowsFavoritesRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsGenres
   */
  public getShowsGenres: jest.Mock<Promise<void>, [GetShowsGenresRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsList
   */
  public getShowsList: jest.Mock<Promise<void>, [GetShowsListRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsMember
   */
  public getShowsMember: jest.Mock<Promise<void>, [GetShowsMemberRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsPictures
   */
  public getShowsPictures: jest.Mock<Promise<void>, [GetShowsPicturesRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsRandom
   */
  public getShowsRandom: jest.Mock<Promise<void>, [GetShowsRandomRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsRecommendations
   */
  public getShowsRecommendations: jest.Mock<Promise<void>, [GetShowsRecommendationsRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsSearch
   */
  public getShowsSearch: jest.Mock<Promise<void>, [GetShowsSearchRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsSeasons
   */
  public getShowsSeasons: jest.Mock<Promise<void>, [GetShowsSeasonsRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsSimilars
   */
  public getShowsSimilars: jest.Mock<Promise<void>, [GetShowsSimilarsRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsUnrated
   */
  public getShowsUnrated: jest.Mock<Promise<void>, [GetShowsUnratedRequestData]> = jest.fn();
/**
   * Fixture associated to function getShowsVideos
   */
  public getShowsVideos: jest.Mock<Promise<void>, [GetShowsVideosRequestData]> = jest.fn();
/**
   * Fixture associated to function postShowsArchive
   */
  public postShowsArchive: jest.Mock<Promise<void>, [PostShowsArchiveRequestData]> = jest.fn();
/**
   * Fixture associated to function postShowsFavorite
   */
  public postShowsFavorite: jest.Mock<Promise<void>, [PostShowsFavoriteRequestData]> = jest.fn();
/**
   * Fixture associated to function postShowsNote
   */
  public postShowsNote: jest.Mock<Promise<void>, [PostShowsNoteRequestData]> = jest.fn();
/**
   * Fixture associated to function postShowsRecommendation
   */
  public postShowsRecommendation: jest.Mock<Promise<void>, [PostShowsRecommendationRequestData]> = jest.fn();
/**
   * Fixture associated to function postShowsShow
   */
  public postShowsShow: jest.Mock<Promise<void>, [PostShowsShowRequestData]> = jest.fn();
/**
   * Fixture associated to function postShowsTags
   */
  public postShowsTags: jest.Mock<Promise<void>, [PostShowsTagsRequestData]> = jest.fn();
/**
   * Fixture associated to function putShowsRecommendation
   */
  public putShowsRecommendation: jest.Mock<Promise<void>, [PutShowsRecommendationRequestData]> = jest.fn();
}

