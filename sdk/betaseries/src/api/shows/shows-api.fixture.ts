import { ShowsApi } from './shows-api';

export class ShowsApiFixture implements Partial<Readonly<ShowsApi>> {

  /** @inheritDoc */
  public readonly apiName = "ShowsApi";

  /**
   * Fixture associated to function deleteShowsArchive
   */
  public deleteShowsArchive: jasmine.Spy = jasmine.createSpy('deleteShowsArchive');
/**
   * Fixture associated to function deleteShowsFavorite
   */
  public deleteShowsFavorite: jasmine.Spy = jasmine.createSpy('deleteShowsFavorite');
/**
   * Fixture associated to function deleteShowsNote
   */
  public deleteShowsNote: jasmine.Spy = jasmine.createSpy('deleteShowsNote');
/**
   * Fixture associated to function deleteShowsRecommendation
   */
  public deleteShowsRecommendation: jasmine.Spy = jasmine.createSpy('deleteShowsRecommendation');
/**
   * Fixture associated to function deleteShowsShow
   */
  public deleteShowsShow: jasmine.Spy = jasmine.createSpy('deleteShowsShow');
/**
   * Fixture associated to function getShowsArticles
   */
  public getShowsArticles: jasmine.Spy = jasmine.createSpy('getShowsArticles');
/**
   * Fixture associated to function getShowsCharacters
   */
  public getShowsCharacters: jasmine.Spy = jasmine.createSpy('getShowsCharacters');
/**
   * Fixture associated to function getShowsDiscover
   */
  public getShowsDiscover: jasmine.Spy = jasmine.createSpy('getShowsDiscover');
/**
   * Fixture associated to function getShowsDiscoverPlatforms
   */
  public getShowsDiscoverPlatforms: jasmine.Spy = jasmine.createSpy('getShowsDiscoverPlatforms');
/**
   * Fixture associated to function getShowsDisplay
   */
  public getShowsDisplay: jasmine.Spy = jasmine.createSpy('getShowsDisplay');
/**
   * Fixture associated to function getShowsEpisodes
   */
  public getShowsEpisodes: jasmine.Spy = jasmine.createSpy('getShowsEpisodes');
/**
   * Fixture associated to function getShowsFavorites
   */
  public getShowsFavorites: jasmine.Spy = jasmine.createSpy('getShowsFavorites');
/**
   * Fixture associated to function getShowsGenres
   */
  public getShowsGenres: jasmine.Spy = jasmine.createSpy('getShowsGenres');
/**
   * Fixture associated to function getShowsList
   */
  public getShowsList: jasmine.Spy = jasmine.createSpy('getShowsList');
/**
   * Fixture associated to function getShowsMember
   */
  public getShowsMember: jasmine.Spy = jasmine.createSpy('getShowsMember');
/**
   * Fixture associated to function getShowsPictures
   */
  public getShowsPictures: jasmine.Spy = jasmine.createSpy('getShowsPictures');
/**
   * Fixture associated to function getShowsRandom
   */
  public getShowsRandom: jasmine.Spy = jasmine.createSpy('getShowsRandom');
/**
   * Fixture associated to function getShowsRecommendations
   */
  public getShowsRecommendations: jasmine.Spy = jasmine.createSpy('getShowsRecommendations');
/**
   * Fixture associated to function getShowsSearch
   */
  public getShowsSearch: jasmine.Spy = jasmine.createSpy('getShowsSearch');
/**
   * Fixture associated to function getShowsSeasons
   */
  public getShowsSeasons: jasmine.Spy = jasmine.createSpy('getShowsSeasons');
/**
   * Fixture associated to function getShowsSimilars
   */
  public getShowsSimilars: jasmine.Spy = jasmine.createSpy('getShowsSimilars');
/**
   * Fixture associated to function getShowsUnrated
   */
  public getShowsUnrated: jasmine.Spy = jasmine.createSpy('getShowsUnrated');
/**
   * Fixture associated to function getShowsVideos
   */
  public getShowsVideos: jasmine.Spy = jasmine.createSpy('getShowsVideos');
/**
   * Fixture associated to function postShowsArchive
   */
  public postShowsArchive: jasmine.Spy = jasmine.createSpy('postShowsArchive');
/**
   * Fixture associated to function postShowsFavorite
   */
  public postShowsFavorite: jasmine.Spy = jasmine.createSpy('postShowsFavorite');
/**
   * Fixture associated to function postShowsNote
   */
  public postShowsNote: jasmine.Spy = jasmine.createSpy('postShowsNote');
/**
   * Fixture associated to function postShowsRecommendation
   */
  public postShowsRecommendation: jasmine.Spy = jasmine.createSpy('postShowsRecommendation');
/**
   * Fixture associated to function postShowsShow
   */
  public postShowsShow: jasmine.Spy = jasmine.createSpy('postShowsShow');
/**
   * Fixture associated to function postShowsTags
   */
  public postShowsTags: jasmine.Spy = jasmine.createSpy('postShowsTags');
/**
   * Fixture associated to function putShowsRecommendation
   */
  public putShowsRecommendation: jasmine.Spy = jasmine.createSpy('putShowsRecommendation');
}
