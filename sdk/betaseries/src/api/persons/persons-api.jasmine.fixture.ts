import { PersonsApi } from './persons-api';

export class PersonsApiFixture implements Partial<Readonly<PersonsApi>> {

  /** @inheritDoc */
  public readonly apiName = "PersonsApi";

  /**
   * Fixture associated to function getPersonsArticles
   */
  public getPersonsArticles: jasmine.Spy = jasmine.createSpy('getPersonsArticles');
/**
   * Fixture associated to function getPersonsPerson
   */
  public getPersonsPerson: jasmine.Spy = jasmine.createSpy('getPersonsPerson');
}
