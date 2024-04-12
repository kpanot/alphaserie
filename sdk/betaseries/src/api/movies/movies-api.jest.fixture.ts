
import { MoviesApi, DeleteMoviesFavoriteRequestData, DeleteMoviesMovieRequestData, DeleteMoviesNoteRequestData, GetMoviesArticlesRequestData, GetMoviesCharactersRequestData, GetMoviesDiscoverRequestData, GetMoviesFavoritesRequestData, GetMoviesGenresRequestData, GetMoviesListRequestData, GetMoviesMemberRequestData, GetMoviesMovieRequestData, GetMoviesRandomRequestData, GetMoviesScraperRequestData, GetMoviesSearchRequestData, GetMoviesSimilarsRequestData, GetMoviesUpcomingRequestData, PostMoviesFavoriteRequestData, PostMoviesMovieRequestData, PostMoviesNoteRequestData } from './movies-api';

export class MoviesApiFixture implements Partial<Readonly<MoviesApi>> {

  /** @inheritDoc */
  public readonly apiName = "MoviesApi";

  /**
   * Fixture associated to function deleteMoviesFavorite
   */
  public deleteMoviesFavorite: jest.Mock<Promise<void>, [DeleteMoviesFavoriteRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteMoviesMovie
   */
  public deleteMoviesMovie: jest.Mock<Promise<void>, [DeleteMoviesMovieRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteMoviesNote
   */
  public deleteMoviesNote: jest.Mock<Promise<void>, [DeleteMoviesNoteRequestData]> = jest.fn();
/**
   * Fixture associated to function getMoviesArticles
   */
  public getMoviesArticles: jest.Mock<Promise<void>, [GetMoviesArticlesRequestData]> = jest.fn();
/**
   * Fixture associated to function getMoviesCharacters
   */
  public getMoviesCharacters: jest.Mock<Promise<void>, [GetMoviesCharactersRequestData]> = jest.fn();
/**
   * Fixture associated to function getMoviesDiscover
   */
  public getMoviesDiscover: jest.Mock<Promise<void>, [GetMoviesDiscoverRequestData]> = jest.fn();
/**
   * Fixture associated to function getMoviesFavorites
   */
  public getMoviesFavorites: jest.Mock<Promise<void>, [GetMoviesFavoritesRequestData]> = jest.fn();
/**
   * Fixture associated to function getMoviesGenres
   */
  public getMoviesGenres: jest.Mock<Promise<void>, [GetMoviesGenresRequestData]> = jest.fn();
/**
   * Fixture associated to function getMoviesList
   */
  public getMoviesList: jest.Mock<Promise<void>, [GetMoviesListRequestData]> = jest.fn();
/**
   * Fixture associated to function getMoviesMember
   */
  public getMoviesMember: jest.Mock<Promise<void>, [GetMoviesMemberRequestData]> = jest.fn();
/**
   * Fixture associated to function getMoviesMovie
   */
  public getMoviesMovie: jest.Mock<Promise<void>, [GetMoviesMovieRequestData]> = jest.fn();
/**
   * Fixture associated to function getMoviesRandom
   */
  public getMoviesRandom: jest.Mock<Promise<void>, [GetMoviesRandomRequestData]> = jest.fn();
/**
   * Fixture associated to function getMoviesScraper
   */
  public getMoviesScraper: jest.Mock<Promise<void>, [GetMoviesScraperRequestData]> = jest.fn();
/**
   * Fixture associated to function getMoviesSearch
   */
  public getMoviesSearch: jest.Mock<Promise<void>, [GetMoviesSearchRequestData]> = jest.fn();
/**
   * Fixture associated to function getMoviesSimilars
   */
  public getMoviesSimilars: jest.Mock<Promise<void>, [GetMoviesSimilarsRequestData]> = jest.fn();
/**
   * Fixture associated to function getMoviesUpcoming
   */
  public getMoviesUpcoming: jest.Mock<Promise<void>, [GetMoviesUpcomingRequestData]> = jest.fn();
/**
   * Fixture associated to function postMoviesFavorite
   */
  public postMoviesFavorite: jest.Mock<Promise<void>, [PostMoviesFavoriteRequestData]> = jest.fn();
/**
   * Fixture associated to function postMoviesMovie
   */
  public postMoviesMovie: jest.Mock<Promise<void>, [PostMoviesMovieRequestData]> = jest.fn();
/**
   * Fixture associated to function postMoviesNote
   */
  public postMoviesNote: jest.Mock<Promise<void>, [PostMoviesNoteRequestData]> = jest.fn();
}

