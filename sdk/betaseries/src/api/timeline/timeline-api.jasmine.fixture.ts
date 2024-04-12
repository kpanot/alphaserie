import { TimelineApi } from './timeline-api';

export class TimelineApiFixture implements Partial<Readonly<TimelineApi>> {

  /** @inheritDoc */
  public readonly apiName = "TimelineApi";

  /**
   * Fixture associated to function getTimelineEvent
   */
  public getTimelineEvent: jasmine.Spy = jasmine.createSpy('getTimelineEvent');
/**
   * Fixture associated to function getTimelineFeed
   */
  public getTimelineFeed: jasmine.Spy = jasmine.createSpy('getTimelineFeed');
/**
   * Fixture associated to function getTimelineFriends
   */
  public getTimelineFriends: jasmine.Spy = jasmine.createSpy('getTimelineFriends');
/**
   * Fixture associated to function getTimelineHome
   */
  public getTimelineHome: jasmine.Spy = jasmine.createSpy('getTimelineHome');
/**
   * Fixture associated to function getTimelineMember
   */
  public getTimelineMember: jasmine.Spy = jasmine.createSpy('getTimelineMember');
/**
   * Fixture associated to function getTimelineShow
   */
  public getTimelineShow: jasmine.Spy = jasmine.createSpy('getTimelineShow');
}
