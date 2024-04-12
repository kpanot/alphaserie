import { SubtitlesApi } from './subtitles-api';

export class SubtitlesApiFixture implements Partial<Readonly<SubtitlesApi>> {

  /** @inheritDoc */
  public readonly apiName = "SubtitlesApi";

  /**
   * Fixture associated to function getSubtitlesEpisode
   */
  public getSubtitlesEpisode: jasmine.Spy = jasmine.createSpy('getSubtitlesEpisode');
/**
   * Fixture associated to function getSubtitlesLast
   */
  public getSubtitlesLast: jasmine.Spy = jasmine.createSpy('getSubtitlesLast');
/**
   * Fixture associated to function getSubtitlesSeason
   */
  public getSubtitlesSeason: jasmine.Spy = jasmine.createSpy('getSubtitlesSeason');
/**
   * Fixture associated to function getSubtitlesShow
   */
  public getSubtitlesShow: jasmine.Spy = jasmine.createSpy('getSubtitlesShow');
/**
   * Fixture associated to function postSubtitlesReport
   */
  public postSubtitlesReport: jasmine.Spy = jasmine.createSpy('postSubtitlesReport');
}
