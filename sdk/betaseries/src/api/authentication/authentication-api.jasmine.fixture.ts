import { AuthenticationApi } from './authentication-api';

export class AuthenticationApiFixture implements Partial<Readonly<AuthenticationApi>> {

  /** @inheritDoc */
  public readonly apiName = "AuthenticationApi";

  /**
   * Fixture associated to function postOauthAccessToken
   */
  public postOauthAccessToken: jasmine.Spy = jasmine.createSpy('postOauthAccessToken');
/**
   * Fixture associated to function postOauthDevice
   */
  public postOauthDevice: jasmine.Spy = jasmine.createSpy('postOauthDevice');
}
