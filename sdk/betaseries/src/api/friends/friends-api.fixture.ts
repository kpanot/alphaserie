import { FriendsApi } from './friends-api';

export class FriendsApiFixture implements Partial<Readonly<FriendsApi>> {

  /** @inheritDoc */
  public readonly apiName = "FriendsApi";

  /**
   * Fixture associated to function deleteFriendsBlock
   */
  public deleteFriendsBlock: jasmine.Spy = jasmine.createSpy('deleteFriendsBlock');
/**
   * Fixture associated to function deleteFriendsFriend
   */
  public deleteFriendsFriend: jasmine.Spy = jasmine.createSpy('deleteFriendsFriend');
/**
   * Fixture associated to function getFriendsList
   */
  public getFriendsList: jasmine.Spy = jasmine.createSpy('getFriendsList');
/**
   * Fixture associated to function getFriendsRequests
   */
  public getFriendsRequests: jasmine.Spy = jasmine.createSpy('getFriendsRequests');
/**
   * Fixture associated to function postFriendsBlock
   */
  public postFriendsBlock: jasmine.Spy = jasmine.createSpy('postFriendsBlock');
/**
   * Fixture associated to function postFriendsFriend
   */
  public postFriendsFriend: jasmine.Spy = jasmine.createSpy('postFriendsFriend');
}
