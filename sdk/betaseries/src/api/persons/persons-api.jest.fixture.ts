
import { PersonsApi, GetPersonsArticlesRequestData, GetPersonsPersonRequestData } from './persons-api';

export class PersonsApiFixture implements Partial<Readonly<PersonsApi>> {

  /** @inheritDoc */
  public readonly apiName = "PersonsApi";

  /**
   * Fixture associated to function getPersonsArticles
   */
  public getPersonsArticles: jest.Mock<Promise<void>, [GetPersonsArticlesRequestData]> = jest.fn();
/**
   * Fixture associated to function getPersonsPerson
   */
  public getPersonsPerson: jest.Mock<Promise<void>, [GetPersonsPersonRequestData]> = jest.fn();
}

