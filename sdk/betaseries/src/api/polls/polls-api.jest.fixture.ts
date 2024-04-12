
import { PollsApi, GetPollsLastRequestData, GetPollsListRequestData, GetPollsPollRequestData, GetPollsTargetRequestData, PostPollsAnswerRequestData } from './polls-api';

export class PollsApiFixture implements Partial<Readonly<PollsApi>> {

  /** @inheritDoc */
  public readonly apiName = "PollsApi";

  /**
   * Fixture associated to function getPollsLast
   */
  public getPollsLast: jest.Mock<Promise<void>, [GetPollsLastRequestData]> = jest.fn();
/**
   * Fixture associated to function getPollsList
   */
  public getPollsList: jest.Mock<Promise<void>, [GetPollsListRequestData]> = jest.fn();
/**
   * Fixture associated to function getPollsPoll
   */
  public getPollsPoll: jest.Mock<Promise<void>, [GetPollsPollRequestData]> = jest.fn();
/**
   * Fixture associated to function getPollsTarget
   */
  public getPollsTarget: jest.Mock<Promise<void>, [GetPollsTargetRequestData]> = jest.fn();
/**
   * Fixture associated to function postPollsAnswer
   */
  public postPollsAnswer: jest.Mock<Promise<void>, [PostPollsAnswerRequestData]> = jest.fn();
}

