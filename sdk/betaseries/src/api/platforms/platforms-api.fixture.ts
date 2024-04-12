import { PlatformsApi } from './platforms-api';

export class PlatformsApiFixture implements Partial<Readonly<PlatformsApi>> {

  /** @inheritDoc */
  public readonly apiName = "PlatformsApi";

  /**
   * Fixture associated to function deletePlatformsService
   */
  public deletePlatformsService: jasmine.Spy = jasmine.createSpy('deletePlatformsService');
/**
   * Fixture associated to function getPlatformsList
   */
  public getPlatformsList: jasmine.Spy = jasmine.createSpy('getPlatformsList');
/**
   * Fixture associated to function getPlatformsServices
   */
  public getPlatformsServices: jasmine.Spy = jasmine.createSpy('getPlatformsServices');
/**
   * Fixture associated to function postPlatformsService
   */
  public postPlatformsService: jasmine.Spy = jasmine.createSpy('postPlatformsService');
}
