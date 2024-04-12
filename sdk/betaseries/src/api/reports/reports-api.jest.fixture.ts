
import { ReportsApi, PostReportsReportRequestData, PostReportsUpdateRequestData } from './reports-api';

export class ReportsApiFixture implements Partial<Readonly<ReportsApi>> {

  /** @inheritDoc */
  public readonly apiName = "ReportsApi";

  /**
   * Fixture associated to function postReportsReport
   */
  public postReportsReport: jest.Mock<Promise<void>, [PostReportsReportRequestData]> = jest.fn();
/**
   * Fixture associated to function postReportsUpdate
   */
  public postReportsUpdate: jest.Mock<Promise<void>, [PostReportsUpdateRequestData]> = jest.fn();
}

