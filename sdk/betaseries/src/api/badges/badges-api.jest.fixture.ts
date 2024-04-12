
import { BadgesApi, GetBadgesBadgeRequestData } from './badges-api';

export class BadgesApiFixture implements Partial<Readonly<BadgesApi>> {

  /** @inheritDoc */
  public readonly apiName = "BadgesApi";

  /**
   * Fixture associated to function getBadgesBadge
   */
  public getBadgesBadge: jest.Mock<Promise<void>, [GetBadgesBadgeRequestData]> = jest.fn();
}

