
import { AuthenticationApi, PostOauthAccessTokenRequestData, PostOauthDeviceRequestData } from './authentication-api';

export class AuthenticationApiFixture implements Partial<Readonly<AuthenticationApi>> {

  /** @inheritDoc */
  public readonly apiName = "AuthenticationApi";

  /**
   * Fixture associated to function postOauthAccessToken
   */
  public postOauthAccessToken: jest.Mock<Promise<void>, [PostOauthAccessTokenRequestData]> = jest.fn();
/**
   * Fixture associated to function postOauthDevice
   */
  public postOauthDevice: jest.Mock<Promise<void>, [PostOauthDeviceRequestData]> = jest.fn();
}

