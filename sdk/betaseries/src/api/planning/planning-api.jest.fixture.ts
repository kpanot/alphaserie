
import { PlanningApi, GetPlanningGeneralRequestData, GetPlanningIncomingRequestData, GetPlanningMemberRequestData } from './planning-api';

export class PlanningApiFixture implements Partial<Readonly<PlanningApi>> {

  /** @inheritDoc */
  public readonly apiName = "PlanningApi";

  /**
   * Fixture associated to function getPlanningGeneral
   */
  public getPlanningGeneral: jest.Mock<Promise<void>, [GetPlanningGeneralRequestData]> = jest.fn();
/**
   * Fixture associated to function getPlanningIncoming
   */
  public getPlanningIncoming: jest.Mock<Promise<void>, [GetPlanningIncomingRequestData]> = jest.fn();
/**
   * Fixture associated to function getPlanningMember
   */
  public getPlanningMember: jest.Mock<Promise<void>, [GetPlanningMemberRequestData]> = jest.fn();
}

