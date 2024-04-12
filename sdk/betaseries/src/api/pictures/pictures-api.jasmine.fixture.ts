import { PicturesApi } from './pictures-api';

export class PicturesApiFixture implements Partial<Readonly<PicturesApi>> {

  /** @inheritDoc */
  public readonly apiName = "PicturesApi";

  /**
   * Fixture associated to function getPicturesBadges
   */
  public getPicturesBadges: jasmine.Spy = jasmine.createSpy('getPicturesBadges');
/**
   * Fixture associated to function getPicturesCharacters
   */
  public getPicturesCharacters: jasmine.Spy = jasmine.createSpy('getPicturesCharacters');
/**
   * Fixture associated to function getPicturesEpisodes
   */
  public getPicturesEpisodes: jasmine.Spy = jasmine.createSpy('getPicturesEpisodes');
/**
   * Fixture associated to function getPicturesMembers
   */
  public getPicturesMembers: jasmine.Spy = jasmine.createSpy('getPicturesMembers');
/**
   * Fixture associated to function getPicturesMovies
   */
  public getPicturesMovies: jasmine.Spy = jasmine.createSpy('getPicturesMovies');
/**
   * Fixture associated to function getPicturesPersons
   */
  public getPicturesPersons: jasmine.Spy = jasmine.createSpy('getPicturesPersons');
/**
   * Fixture associated to function getPicturesPlatforms
   */
  public getPicturesPlatforms: jasmine.Spy = jasmine.createSpy('getPicturesPlatforms');
/**
   * Fixture associated to function getPicturesSeasons
   */
  public getPicturesSeasons: jasmine.Spy = jasmine.createSpy('getPicturesSeasons');
/**
   * Fixture associated to function getPicturesShows
   */
  public getPicturesShows: jasmine.Spy = jasmine.createSpy('getPicturesShows');
}
