
import { NewsApi, GetNewsLastRequestData } from './news-api';

export class NewsApiFixture implements Partial<Readonly<NewsApi>> {

  /** @inheritDoc */
  public readonly apiName = "NewsApi";

  /**
   * Fixture associated to function getNewsLast
   */
  public getNewsLast: jest.Mock<Promise<void>, [GetNewsLastRequestData]> = jest.fn();
}

