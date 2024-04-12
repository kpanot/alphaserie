
import { CommentsApi, DeleteCommentsCommentRequestData, DeleteCommentsSubscriptionRequestData, DeleteCommentsThumbRequestData, GetCommentsCommentRequestData, GetCommentsCommentsRequestData, GetCommentsRepliesRequestData, GetCommentsStatusRequestData, PostCommentsCommentRequestData, PostCommentsCommentEventRequestData, PostCommentsSubscriptionRequestData, PostCommentsThumbRequestData } from './comments-api';

export class CommentsApiFixture implements Partial<Readonly<CommentsApi>> {

  /** @inheritDoc */
  public readonly apiName = "CommentsApi";

  /**
   * Fixture associated to function deleteCommentsComment
   */
  public deleteCommentsComment: jest.Mock<Promise<void>, [DeleteCommentsCommentRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteCommentsSubscription
   */
  public deleteCommentsSubscription: jest.Mock<Promise<void>, [DeleteCommentsSubscriptionRequestData]> = jest.fn();
/**
   * Fixture associated to function deleteCommentsThumb
   */
  public deleteCommentsThumb: jest.Mock<Promise<void>, [DeleteCommentsThumbRequestData]> = jest.fn();
/**
   * Fixture associated to function getCommentsComment
   */
  public getCommentsComment: jest.Mock<Promise<void>, [GetCommentsCommentRequestData]> = jest.fn();
/**
   * Fixture associated to function getCommentsComments
   */
  public getCommentsComments: jest.Mock<Promise<void>, [GetCommentsCommentsRequestData]> = jest.fn();
/**
   * Fixture associated to function getCommentsReplies
   */
  public getCommentsReplies: jest.Mock<Promise<void>, [GetCommentsRepliesRequestData]> = jest.fn();
/**
   * Fixture associated to function getCommentsStatus
   */
  public getCommentsStatus: jest.Mock<Promise<void>, [GetCommentsStatusRequestData]> = jest.fn();
/**
   * Fixture associated to function postCommentsComment
   */
  public postCommentsComment: jest.Mock<Promise<void>, [PostCommentsCommentRequestData]> = jest.fn();
/**
   * Fixture associated to function postCommentsCommentEvent
   */
  public postCommentsCommentEvent: jest.Mock<Promise<void>, [PostCommentsCommentEventRequestData]> = jest.fn();
/**
   * Fixture associated to function postCommentsSubscription
   */
  public postCommentsSubscription: jest.Mock<Promise<void>, [PostCommentsSubscriptionRequestData]> = jest.fn();
/**
   * Fixture associated to function postCommentsThumb
   */
  public postCommentsThumb: jest.Mock<Promise<void>, [PostCommentsThumbRequestData]> = jest.fn();
}

