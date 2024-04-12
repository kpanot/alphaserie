
import { MembersApi, DeleteMembersAvatarRequestData, DeleteMembersBannerRequestData, DeleteMembersNotificationRequestData, DeleteProfileFiltersFilterRequestData, GetMembersBadgesRequestData, GetMembersEmailRequestData, GetMembersInfosRequestData, GetMembersIsActiveRequestData, GetMembersNotificationsRequestData, GetMembersOptionsRequestData, GetMembersSearchRequestData, GetMembersUsernameRequestData, GetMembersYearRequestData, PostMembersAccessTokenRequestData, PostMembersAuthRequestData, PostMembersAvatarRequestData, PostMembersBannerRequestData, PostMembersDeleteRequestData, PostMembersDestroyRequestData, PostMembersEmailRequestData, PostMembersLocaleRequestData, PostMembersLostRequestData, PostMembersOauthRequestData, PostMembersOptionRequestData, PostMembersPasswordRequestData, PostMembersSignupRequestData, PostMembersSyncRequestData } from './members-api';

export class MembersApiFixture implements Partial<Readonly<MembersApi>> {

  /** @inheritDoc */
  public readonly apiName = "MembersApi";

  /**
   * Fixture associated to function deleteMembersAvatar
   */
  public deleteMembersAvatar: jest.Mock<Promise<void>, [DeleteMembersAvatarRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteMembersBanner
   */
  public deleteMembersBanner: jest.Mock<Promise<void>, [DeleteMembersBannerRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteMembersNotification
   */
  public deleteMembersNotification: jest.Mock<Promise<void>, [DeleteMembersNotificationRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteProfileFiltersFilter
   */
  public deleteProfileFiltersFilter: jest.Mock<Promise<void>, [DeleteProfileFiltersFilterRequestData]> = jest.fn();
/**
   * Fixture associated to function getMembersBadges
   */
  public getMembersBadges: jest.Mock<Promise<void>, [GetMembersBadgesRequestData]> = jest.fn();
/**
   * Fixture associated to function getMembersEmail
   */
  public getMembersEmail: jest.Mock<Promise<void>, [GetMembersEmailRequestData]> = jest.fn();
/**
   * Fixture associated to function getMembersInfos
   */
  public getMembersInfos: jest.Mock<Promise<void>, [GetMembersInfosRequestData]> = jest.fn();
/**
   * Fixture associated to function getMembersIsActive
   */
  public getMembersIsActive: jest.Mock<Promise<void>, [GetMembersIsActiveRequestData]> = jest.fn();
/**
   * Fixture associated to function getMembersNotifications
   */
  public getMembersNotifications: jest.Mock<Promise<void>, [GetMembersNotificationsRequestData]> = jest.fn();
/**
   * Fixture associated to function getMembersOptions
   */
  public getMembersOptions: jest.Mock<Promise<void>, [GetMembersOptionsRequestData]> = jest.fn();
/**
   * Fixture associated to function getMembersSearch
   */
  public getMembersSearch: jest.Mock<Promise<void>, [GetMembersSearchRequestData]> = jest.fn();
/**
   * Fixture associated to function getMembersUsername
   */
  public getMembersUsername: jest.Mock<Promise<void>, [GetMembersUsernameRequestData]> = jest.fn();
/**
   * Fixture associated to function getMembersYear
   */
  public getMembersYear: jest.Mock<Promise<void>, [GetMembersYearRequestData]> = jest.fn();
/**
   * Fixture associated to function postMembersAccessToken
   */
  public postMembersAccessToken: jest.Mock<Promise<void>, [PostMembersAccessTokenRequestData]> = jest.fn();
/**
   * Fixture associated to function postMembersAuth
   */
  public postMembersAuth: jest.Mock<Promise<void>, [PostMembersAuthRequestData]> = jest.fn();
/**
   * Fixture associated to function postMembersAvatar
   */
  public postMembersAvatar: jest.Mock<Promise<void>, [PostMembersAvatarRequestData]> = jest.fn();
/**
   * Fixture associated to function postMembersBanner
   */
  public postMembersBanner: jest.Mock<Promise<void>, [PostMembersBannerRequestData]> = jest.fn();
/**
   * Fixture associated to function postMembersDelete
   */
  public postMembersDelete: jest.Mock<Promise<void>, [PostMembersDeleteRequestData]> = jest.fn();
/**
   * Fixture associated to function postMembersDestroy
   */
  public postMembersDestroy: jest.Mock<Promise<void>, [PostMembersDestroyRequestData]> = jest.fn();
/**
   * Fixture associated to function postMembersEmail
   */
  public postMembersEmail: jest.Mock<Promise<void>, [PostMembersEmailRequestData]> = jest.fn();
/**
   * Fixture associated to function postMembersLocale
   */
  public postMembersLocale: jest.Mock<Promise<void>, [PostMembersLocaleRequestData]> = jest.fn();
/**
   * Fixture associated to function postMembersLost
   */
  public postMembersLost: jest.Mock<Promise<void>, [PostMembersLostRequestData]> = jest.fn();
/**
   * Fixture associated to function postMembersOauth
   */
  public postMembersOauth: jest.Mock<Promise<void>, [PostMembersOauthRequestData]> = jest.fn();
/**
   * Fixture associated to function postMembersOption
   */
  public postMembersOption: jest.Mock<Promise<void>, [PostMembersOptionRequestData]> = jest.fn();
/**
   * Fixture associated to function postMembersPassword
   */
  public postMembersPassword: jest.Mock<Promise<void>, [PostMembersPasswordRequestData]> = jest.fn();
/**
   * Fixture associated to function postMembersSignup
   */
  public postMembersSignup: jest.Mock<Promise<void>, [PostMembersSignupRequestData]> = jest.fn();
/**
   * Fixture associated to function postMembersSync
   */
  public postMembersSync: jest.Mock<Promise<void>, [PostMembersSyncRequestData]> = jest.fn();
}

