
import { FriendsApi, DeleteFriendsBlockRequestData, DeleteFriendsFriendRequestData, GetFriendsListRequestData, GetFriendsRequestsRequestData, PostFriendsBlockRequestData, PostFriendsFriendRequestData } from './friends-api';

export class FriendsApiFixture implements Partial<Readonly<FriendsApi>> {

  /** @inheritDoc */
  public readonly apiName = "FriendsApi";

  /**
   * Fixture associated to function deleteFriendsBlock
   */
  public deleteFriendsBlock: jest.Mock<Promise<void>, [DeleteFriendsBlockRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteFriendsFriend
   */
  public deleteFriendsFriend: jest.Mock<Promise<void>, [DeleteFriendsFriendRequestData]> = jest.fn();
/**
   * Fixture associated to function getFriendsList
   */
  public getFriendsList: jest.Mock<Promise<void>, [GetFriendsListRequestData]> = jest.fn();
/**
   * Fixture associated to function getFriendsRequests
   */
  public getFriendsRequests: jest.Mock<Promise<void>, [GetFriendsRequestsRequestData]> = jest.fn();
/**
   * Fixture associated to function postFriendsBlock
   */
  public postFriendsBlock: jest.Mock<Promise<void>, [PostFriendsBlockRequestData]> = jest.fn();
/**
   * Fixture associated to function postFriendsFriend
   */
  public postFriendsFriend: jest.Mock<Promise<void>, [PostFriendsFriendRequestData]> = jest.fn();
}

