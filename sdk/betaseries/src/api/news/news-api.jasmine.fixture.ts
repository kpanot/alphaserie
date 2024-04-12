import { NewsApi } from './news-api';

export class NewsApiFixture implements Partial<Readonly<NewsApi>> {

  /** @inheritDoc */
  public readonly apiName = "NewsApi";

  /**
   * Fixture associated to function getNewsLast
   */
  public getNewsLast: jasmine.Spy = jasmine.createSpy('getNewsLast');
}
