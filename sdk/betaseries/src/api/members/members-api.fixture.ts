import { MembersApi } from './members-api';

export class MembersApiFixture implements Partial<Readonly<MembersApi>> {

  /** @inheritDoc */
  public readonly apiName = "MembersApi";

  /**
   * Fixture associated to function deleteMembersAvatar
   */
  public deleteMembersAvatar: jasmine.Spy = jasmine.createSpy('deleteMembersAvatar');
/**
   * Fixture associated to function deleteMembersBanner
   */
  public deleteMembersBanner: jasmine.Spy = jasmine.createSpy('deleteMembersBanner');
/**
   * Fixture associated to function deleteMembersNotification
   */
  public deleteMembersNotification: jasmine.Spy = jasmine.createSpy('deleteMembersNotification');
/**
   * Fixture associated to function deleteProfileFiltersFilter
   */
  public deleteProfileFiltersFilter: jasmine.Spy = jasmine.createSpy('deleteProfileFiltersFilter');
/**
   * Fixture associated to function getMembersBadges
   */
  public getMembersBadges: jasmine.Spy = jasmine.createSpy('getMembersBadges');
/**
   * Fixture associated to function getMembersEmail
   */
  public getMembersEmail: jasmine.Spy = jasmine.createSpy('getMembersEmail');
/**
   * Fixture associated to function getMembersInfos
   */
  public getMembersInfos: jasmine.Spy = jasmine.createSpy('getMembersInfos');
/**
   * Fixture associated to function getMembersIsActive
   */
  public getMembersIsActive: jasmine.Spy = jasmine.createSpy('getMembersIsActive');
/**
   * Fixture associated to function getMembersNotifications
   */
  public getMembersNotifications: jasmine.Spy = jasmine.createSpy('getMembersNotifications');
/**
   * Fixture associated to function getMembersOptions
   */
  public getMembersOptions: jasmine.Spy = jasmine.createSpy('getMembersOptions');
/**
   * Fixture associated to function getMembersSearch
   */
  public getMembersSearch: jasmine.Spy = jasmine.createSpy('getMembersSearch');
/**
   * Fixture associated to function getMembersUsername
   */
  public getMembersUsername: jasmine.Spy = jasmine.createSpy('getMembersUsername');
/**
   * Fixture associated to function getMembersYear
   */
  public getMembersYear: jasmine.Spy = jasmine.createSpy('getMembersYear');
/**
   * Fixture associated to function postMembersAccessToken
   */
  public postMembersAccessToken: jasmine.Spy = jasmine.createSpy('postMembersAccessToken');
/**
   * Fixture associated to function postMembersAuth
   */
  public postMembersAuth: jasmine.Spy = jasmine.createSpy('postMembersAuth');
/**
   * Fixture associated to function postMembersAvatar
   */
  public postMembersAvatar: jasmine.Spy = jasmine.createSpy('postMembersAvatar');
/**
   * Fixture associated to function postMembersBanner
   */
  public postMembersBanner: jasmine.Spy = jasmine.createSpy('postMembersBanner');
/**
   * Fixture associated to function postMembersDelete
   */
  public postMembersDelete: jasmine.Spy = jasmine.createSpy('postMembersDelete');
/**
   * Fixture associated to function postMembersDestroy
   */
  public postMembersDestroy: jasmine.Spy = jasmine.createSpy('postMembersDestroy');
/**
   * Fixture associated to function postMembersEmail
   */
  public postMembersEmail: jasmine.Spy = jasmine.createSpy('postMembersEmail');
/**
   * Fixture associated to function postMembersLocale
   */
  public postMembersLocale: jasmine.Spy = jasmine.createSpy('postMembersLocale');
/**
   * Fixture associated to function postMembersLost
   */
  public postMembersLost: jasmine.Spy = jasmine.createSpy('postMembersLost');
/**
   * Fixture associated to function postMembersOauth
   */
  public postMembersOauth: jasmine.Spy = jasmine.createSpy('postMembersOauth');
/**
   * Fixture associated to function postMembersOption
   */
  public postMembersOption: jasmine.Spy = jasmine.createSpy('postMembersOption');
/**
   * Fixture associated to function postMembersPassword
   */
  public postMembersPassword: jasmine.Spy = jasmine.createSpy('postMembersPassword');
/**
   * Fixture associated to function postMembersSignup
   */
  public postMembersSignup: jasmine.Spy = jasmine.createSpy('postMembersSignup');
/**
   * Fixture associated to function postMembersSync
   */
  public postMembersSync: jasmine.Spy = jasmine.createSpy('postMembersSync');
}
