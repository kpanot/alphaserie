
import { TimelineApi, GetTimelineEventRequestData, GetTimelineFeedRequestData, GetTimelineFriendsRequestData, GetTimelineHomeRequestData, GetTimelineMemberRequestData, GetTimelineShowRequestData } from './timeline-api';

export class TimelineApiFixture implements Partial<Readonly<TimelineApi>> {

  /** @inheritDoc */
  public readonly apiName = "TimelineApi";

  /**
   * Fixture associated to function getTimelineEvent
   */
  public getTimelineEvent: jest.Mock<Promise<void>, [GetTimelineEventRequestData]> = jest.fn();
/**
   * Fixture associated to function getTimelineFeed
   */
  public getTimelineFeed: jest.Mock<Promise<void>, [GetTimelineFeedRequestData]> = jest.fn();
/**
   * Fixture associated to function getTimelineFriends
   */
  public getTimelineFriends: jest.Mock<Promise<void>, [GetTimelineFriendsRequestData]> = jest.fn();
/**
   * Fixture associated to function getTimelineHome
   */
  public getTimelineHome: jest.Mock<Promise<void>, [GetTimelineHomeRequestData]> = jest.fn();
/**
   * Fixture associated to function getTimelineMember
   */
  public getTimelineMember: jest.Mock<Promise<void>, [GetTimelineMemberRequestData]> = jest.fn();
/**
   * Fixture associated to function getTimelineShow
   */
  public getTimelineShow: jest.Mock<Promise<void>, [GetTimelineShowRequestData]> = jest.fn();
}

