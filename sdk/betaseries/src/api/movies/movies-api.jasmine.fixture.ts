import { MoviesApi } from './movies-api';

export class MoviesApiFixture implements Partial<Readonly<MoviesApi>> {

  /** @inheritDoc */
  public readonly apiName = "MoviesApi";

  /**
   * Fixture associated to function deleteMoviesFavorite
   */
  public deleteMoviesFavorite: jasmine.Spy = jasmine.createSpy('deleteMoviesFavorite');
/**
   * Fixture associated to function deleteMoviesMovie
   */
  public deleteMoviesMovie: jasmine.Spy = jasmine.createSpy('deleteMoviesMovie');
/**
   * Fixture associated to function deleteMoviesNote
   */
  public deleteMoviesNote: jasmine.Spy = jasmine.createSpy('deleteMoviesNote');
/**
   * Fixture associated to function getMoviesArticles
   */
  public getMoviesArticles: jasmine.Spy = jasmine.createSpy('getMoviesArticles');
/**
   * Fixture associated to function getMoviesCharacters
   */
  public getMoviesCharacters: jasmine.Spy = jasmine.createSpy('getMoviesCharacters');
/**
   * Fixture associated to function getMoviesDiscover
   */
  public getMoviesDiscover: jasmine.Spy = jasmine.createSpy('getMoviesDiscover');
/**
   * Fixture associated to function getMoviesFavorites
   */
  public getMoviesFavorites: jasmine.Spy = jasmine.createSpy('getMoviesFavorites');
/**
   * Fixture associated to function getMoviesGenres
   */
  public getMoviesGenres: jasmine.Spy = jasmine.createSpy('getMoviesGenres');
/**
   * Fixture associated to function getMoviesList
   */
  public getMoviesList: jasmine.Spy = jasmine.createSpy('getMoviesList');
/**
   * Fixture associated to function getMoviesMember
   */
  public getMoviesMember: jasmine.Spy = jasmine.createSpy('getMoviesMember');
/**
   * Fixture associated to function getMoviesMovie
   */
  public getMoviesMovie: jasmine.Spy = jasmine.createSpy('getMoviesMovie');
/**
   * Fixture associated to function getMoviesRandom
   */
  public getMoviesRandom: jasmine.Spy = jasmine.createSpy('getMoviesRandom');
/**
   * Fixture associated to function getMoviesScraper
   */
  public getMoviesScraper: jasmine.Spy = jasmine.createSpy('getMoviesScraper');
/**
   * Fixture associated to function getMoviesSearch
   */
  public getMoviesSearch: jasmine.Spy = jasmine.createSpy('getMoviesSearch');
/**
   * Fixture associated to function getMoviesSimilars
   */
  public getMoviesSimilars: jasmine.Spy = jasmine.createSpy('getMoviesSimilars');
/**
   * Fixture associated to function getMoviesUpcoming
   */
  public getMoviesUpcoming: jasmine.Spy = jasmine.createSpy('getMoviesUpcoming');
/**
   * Fixture associated to function postMoviesFavorite
   */
  public postMoviesFavorite: jasmine.Spy = jasmine.createSpy('postMoviesFavorite');
/**
   * Fixture associated to function postMoviesMovie
   */
  public postMoviesMovie: jasmine.Spy = jasmine.createSpy('postMoviesMovie');
/**
   * Fixture associated to function postMoviesNote
   */
  public postMoviesNote: jasmine.Spy = jasmine.createSpy('postMoviesNote');
}
