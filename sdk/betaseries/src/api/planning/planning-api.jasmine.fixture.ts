import { PlanningApi } from './planning-api';

export class PlanningApiFixture implements Partial<Readonly<PlanningApi>> {

  /** @inheritDoc */
  public readonly apiName = "PlanningApi";

  /**
   * Fixture associated to function getPlanningGeneral
   */
  public getPlanningGeneral: jasmine.Spy = jasmine.createSpy('getPlanningGeneral');
/**
   * Fixture associated to function getPlanningIncoming
   */
  public getPlanningIncoming: jasmine.Spy = jasmine.createSpy('getPlanningIncoming');
/**
   * Fixture associated to function getPlanningMember
   */
  public getPlanningMember: jasmine.Spy = jasmine.createSpy('getPlanningMember');
}
