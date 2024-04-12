
import { PlatformsApi, DeletePlatformsServiceRequestData, GetPlatformsListRequestData, GetPlatformsServicesRequestData, PostPlatformsServiceRequestData } from './platforms-api';

export class PlatformsApiFixture implements Partial<Readonly<PlatformsApi>> {

  /** @inheritDoc */
  public readonly apiName = "PlatformsApi";

  /**
   * Fixture associated to function deletePlatformsService
   */
  public deletePlatformsService: jest.Mock<Promise<void>, [DeletePlatformsServiceRequestData]> = jest.fn();
/**
   * Fixture associated to function getPlatformsList
   */
  public getPlatformsList: jest.Mock<Promise<void>, [GetPlatformsListRequestData]> = jest.fn();
/**
   * Fixture associated to function getPlatformsServices
   */
  public getPlatformsServices: jest.Mock<Promise<void>, [GetPlatformsServicesRequestData]> = jest.fn();
/**
   * Fixture associated to function postPlatformsService
   */
  public postPlatformsService: jest.Mock<Promise<void>, [PostPlatformsServiceRequestData]> = jest.fn();
}

