import { ReportsApi } from './reports-api';

export class ReportsApiFixture implements Partial<Readonly<ReportsApi>> {

  /** @inheritDoc */
  public readonly apiName = "ReportsApi";

  /**
   * Fixture associated to function postReportsReport
   */
  public postReportsReport: jasmine.Spy = jasmine.createSpy('postReportsReport');
/**
   * Fixture associated to function postReportsUpdate
   */
  public postReportsUpdate: jasmine.Spy = jasmine.createSpy('postReportsUpdate');
}
