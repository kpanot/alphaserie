import { PollsApi } from './polls-api';

export class PollsApiFixture implements Partial<Readonly<PollsApi>> {

  /** @inheritDoc */
  public readonly apiName = "PollsApi";

  /**
   * Fixture associated to function getPollsLast
   */
  public getPollsLast: jasmine.Spy = jasmine.createSpy('getPollsLast');
/**
   * Fixture associated to function getPollsList
   */
  public getPollsList: jasmine.Spy = jasmine.createSpy('getPollsList');
/**
   * Fixture associated to function getPollsPoll
   */
  public getPollsPoll: jasmine.Spy = jasmine.createSpy('getPollsPoll');
/**
   * Fixture associated to function getPollsTarget
   */
  public getPollsTarget: jasmine.Spy = jasmine.createSpy('getPollsTarget');
/**
   * Fixture associated to function postPollsAnswer
   */
  public postPollsAnswer: jasmine.Spy = jasmine.createSpy('postPollsAnswer');
}
