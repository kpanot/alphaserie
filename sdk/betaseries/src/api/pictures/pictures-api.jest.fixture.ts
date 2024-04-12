
import { PicturesApi, GetPicturesBadgesRequestData, GetPicturesCharactersRequestData, GetPicturesEpisodesRequestData, GetPicturesMembersRequestData, GetPicturesMoviesRequestData, GetPicturesPersonsRequestData, GetPicturesPlatformsRequestData, GetPicturesSeasonsRequestData, GetPicturesShowsRequestData } from './pictures-api';

export class PicturesApiFixture implements Partial<Readonly<PicturesApi>> {

  /** @inheritDoc */
  public readonly apiName = "PicturesApi";

  /**
   * Fixture associated to function getPicturesBadges
   */
  public getPicturesBadges: jest.Mock<Promise<void>, [GetPicturesBadgesRequestData]> = jest.fn();
/**
   * Fixture associated to function getPicturesCharacters
   */
  public getPicturesCharacters: jest.Mock<Promise<void>, [GetPicturesCharactersRequestData]> = jest.fn();
/**
   * Fixture associated to function getPicturesEpisodes
   */
  public getPicturesEpisodes: jest.Mock<Promise<void>, [GetPicturesEpisodesRequestData]> = jest.fn();
/**
   * Fixture associated to function getPicturesMembers
   */
  public getPicturesMembers: jest.Mock<Promise<void>, [GetPicturesMembersRequestData]> = jest.fn();
/**
   * Fixture associated to function getPicturesMovies
   */
  public getPicturesMovies: jest.Mock<Promise<void>, [GetPicturesMoviesRequestData]> = jest.fn();
/**
   * Fixture associated to function getPicturesPersons
   */
  public getPicturesPersons: jest.Mock<Promise<void>, [GetPicturesPersonsRequestData]> = jest.fn();
/**
   * Fixture associated to function getPicturesPlatforms
   */
  public getPicturesPlatforms: jest.Mock<Promise<void>, [GetPicturesPlatformsRequestData]> = jest.fn();
/**
   * Fixture associated to function getPicturesSeasons
   */
  public getPicturesSeasons: jest.Mock<Promise<void>, [GetPicturesSeasonsRequestData]> = jest.fn();
/**
   * Fixture associated to function getPicturesShows
   */
  public getPicturesShows: jest.Mock<Promise<void>, [GetPicturesShowsRequestData]> = jest.fn();
}

