import { SearchApi } from './search-api';

export class SearchApiFixture implements Partial<Readonly<SearchApi>> {

  /** @inheritDoc */
  public readonly apiName = "SearchApi";

  /**
   * Fixture associated to function getSearchAll
   */
  public getSearchAll: jasmine.Spy = jasmine.createSpy('getSearchAll');
/**
   * Fixture associated to function getSearchMovies
   */
  public getSearchMovies: jasmine.Spy = jasmine.createSpy('getSearchMovies');
/**
   * Fixture associated to function getSearchShows
   */
  public getSearchShows: jasmine.Spy = jasmine.createSpy('getSearchShows');
}
