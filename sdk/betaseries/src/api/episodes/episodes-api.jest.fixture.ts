
import { EpisodesApi, DeleteEpisodesDownloadedRequestData, DeleteEpisodesHiddenRequestData, DeleteEpisodesNoteRequestData, DeleteEpisodesWatchedRequestData, GetEpisodesDisplayRequestData, GetEpisodesLatestRequestData, GetEpisodesListRequestData, GetEpisodesNextRequestData, GetEpisodesScraperRequestData, GetEpisodesSearchRequestData, GetEpisodesUnratedRequestData, PostEpisodesDownloadedRequestData, PostEpisodesHiddenRequestData, PostEpisodesNoteRequestData, PostEpisodesWatchedRequestData } from './episodes-api';

export class EpisodesApiFixture implements Partial<Readonly<EpisodesApi>> {

  /** @inheritDoc */
  public readonly apiName = "EpisodesApi";

  /**
   * Fixture associated to function deleteEpisodesDownloaded
   */
  public deleteEpisodesDownloaded: jest.Mock<Promise<void>, [DeleteEpisodesDownloadedRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteEpisodesHidden
   */
  public deleteEpisodesHidden: jest.Mock<Promise<void>, [DeleteEpisodesHiddenRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteEpisodesNote
   */
  public deleteEpisodesNote: jest.Mock<Promise<void>, [DeleteEpisodesNoteRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteEpisodesWatched
   */
  public deleteEpisodesWatched: jest.Mock<Promise<void>, [DeleteEpisodesWatchedRequestData]> = jest.fn();
/**
   * Fixture associated to function getEpisodesDisplay
   */
  public getEpisodesDisplay: jest.Mock<Promise<void>, [GetEpisodesDisplayRequestData]> = jest.fn();
/**
   * Fixture associated to function getEpisodesLatest
   */
  public getEpisodesLatest: jest.Mock<Promise<void>, [GetEpisodesLatestRequestData]> = jest.fn();
/**
   * Fixture associated to function getEpisodesList
   */
  public getEpisodesList: jest.Mock<Promise<void>, [GetEpisodesListRequestData]> = jest.fn();
/**
   * Fixture associated to function getEpisodesNext
   */
  public getEpisodesNext: jest.Mock<Promise<void>, [GetEpisodesNextRequestData]> = jest.fn();
/**
   * Fixture associated to function getEpisodesScraper
   */
  public getEpisodesScraper: jest.Mock<Promise<void>, [GetEpisodesScraperRequestData]> = jest.fn();
/**
   * Fixture associated to function getEpisodesSearch
   */
  public getEpisodesSearch: jest.Mock<Promise<void>, [GetEpisodesSearchRequestData]> = jest.fn();
/**
   * Fixture associated to function getEpisodesUnrated
   */
  public getEpisodesUnrated: jest.Mock<Promise<void>, [GetEpisodesUnratedRequestData]> = jest.fn();
/**
   * Fixture associated to function postEpisodesDownloaded
   */
  public postEpisodesDownloaded: jest.Mock<Promise<void>, [PostEpisodesDownloadedRequestData]> = jest.fn();
/**
   * Fixture associated to function postEpisodesHidden
   */
  public postEpisodesHidden: jest.Mock<Promise<void>, [PostEpisodesHiddenRequestData]> = jest.fn();
/**
   * Fixture associated to function postEpisodesNote
   */
  public postEpisodesNote: jest.Mock<Promise<void>, [PostEpisodesNoteRequestData]> = jest.fn();
/**
   * Fixture associated to function postEpisodesWatched
   */
  public postEpisodesWatched: jest.Mock<Promise<void>, [PostEpisodesWatchedRequestData]> = jest.fn();
}

