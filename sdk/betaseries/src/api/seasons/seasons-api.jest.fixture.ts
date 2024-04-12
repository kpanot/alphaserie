
import { SeasonsApi, DeleteSeasonsHideRequestData, DeleteSeasonsNoteRequestData, DeleteSeasonsWatchedRequestData, PostSeasonsHideRequestData, PostSeasonsNoteRequestData, PostSeasonsWatchedRequestData } from './seasons-api';

export class SeasonsApiFixture implements Partial<Readonly<SeasonsApi>> {

  /** @inheritDoc */
  public readonly apiName = "SeasonsApi";

  /**
   * Fixture associated to function deleteSeasonsHide
   */
  public deleteSeasonsHide: jest.Mock<Promise<void>, [DeleteSeasonsHideRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteSeasonsNote
   */
  public deleteSeasonsNote: jest.Mock<Promise<void>, [DeleteSeasonsNoteRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteSeasonsWatched
   */
  public deleteSeasonsWatched: jest.Mock<Promise<void>, [DeleteSeasonsWatchedRequestData]> = jest.fn();
/**
   * Fixture associated to function postSeasonsHide
   */
  public postSeasonsHide: jest.Mock<Promise<void>, [PostSeasonsHideRequestData]> = jest.fn();
/**
   * Fixture associated to function postSeasonsNote
   */
  public postSeasonsNote: jest.Mock<Promise<void>, [PostSeasonsNoteRequestData]> = jest.fn();
/**
   * Fixture associated to function postSeasonsWatched
   */
  public postSeasonsWatched: jest.Mock<Promise<void>, [PostSeasonsWatchedRequestData]> = jest.fn();
}

