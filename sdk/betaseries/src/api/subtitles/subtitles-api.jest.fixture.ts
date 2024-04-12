
import { SubtitlesApi, GetSubtitlesEpisodeRequestData, GetSubtitlesLastRequestData, GetSubtitlesSeasonRequestData, GetSubtitlesShowRequestData, PostSubtitlesReportRequestData } from './subtitles-api';

export class SubtitlesApiFixture implements Partial<Readonly<SubtitlesApi>> {

  /** @inheritDoc */
  public readonly apiName = "SubtitlesApi";

  /**
   * Fixture associated to function getSubtitlesEpisode
   */
  public getSubtitlesEpisode: jest.Mock<Promise<void>, [GetSubtitlesEpisodeRequestData]> = jest.fn();
/**
   * Fixture associated to function getSubtitlesLast
   */
  public getSubtitlesLast: jest.Mock<Promise<void>, [GetSubtitlesLastRequestData]> = jest.fn();
/**
   * Fixture associated to function getSubtitlesSeason
   */
  public getSubtitlesSeason: jest.Mock<Promise<void>, [GetSubtitlesSeasonRequestData]> = jest.fn();
/**
   * Fixture associated to function getSubtitlesShow
   */
  public getSubtitlesShow: jest.Mock<Promise<void>, [GetSubtitlesShowRequestData]> = jest.fn();
/**
   * Fixture associated to function postSubtitlesReport
   */
  public postSubtitlesReport: jest.Mock<Promise<void>, [PostSubtitlesReportRequestData]> = jest.fn();
}

