import { BadgesApi } from './badges-api';

export class BadgesApiFixture implements Partial<Readonly<BadgesApi>> {

  /** @inheritDoc */
  public readonly apiName = "BadgesApi";

  /**
   * Fixture associated to function getBadgesBadge
   */
  public getBadgesBadge: jasmine.Spy = jasmine.createSpy('getBadgesBadge');
}
