
import { SearchApi, GetSearchAllRequestData, GetSearchMoviesRequestData, GetSearchShowsRequestData } from './search-api';

export class SearchApiFixture implements Partial<Readonly<SearchApi>> {

  /** @inheritDoc */
  public readonly apiName = "SearchApi";

  /**
   * Fixture associated to function getSearchAll
   */
  public getSearchAll: jest.Mock<Promise<void>, [GetSearchAllRequestData]> = jest.fn();
/**
   * Fixture associated to function getSearchMovies
   */
  public getSearchMovies: jest.Mock<Promise<void>, [GetSearchMoviesRequestData]> = jest.fn();
/**
   * Fixture associated to function getSearchShows
   */
  public getSearchShows: jest.Mock<Promise<void>, [GetSearchShowsRequestData]> = jest.fn();
}

