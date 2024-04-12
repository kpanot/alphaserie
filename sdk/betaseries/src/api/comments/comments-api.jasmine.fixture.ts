import { CommentsApi } from './comments-api';

export class CommentsApiFixture implements Partial<Readonly<CommentsApi>> {

  /** @inheritDoc */
  public readonly apiName = "CommentsApi";

  /**
   * Fixture associated to function deleteCommentsComment
   */
  public deleteCommentsComment: jasmine.Spy = jasmine.createSpy('deleteCommentsComment');
/**
   * Fixture associated to function deleteCommentsSubscription
   */
  public deleteCommentsSubscription: jasmine.Spy = jasmine.createSpy('deleteCommentsSubscription');
/**
   * Fixture associated to function deleteCommentsThumb
   */
  public deleteCommentsThumb: jasmine.Spy = jasmine.createSpy('deleteCommentsThumb');
/**
   * Fixture associated to function getCommentsComment
   */
  public getCommentsComment: jasmine.Spy = jasmine.createSpy('getCommentsComment');
/**
   * Fixture associated to function getCommentsComments
   */
  public getCommentsComments: jasmine.Spy = jasmine.createSpy('getCommentsComments');
/**
   * Fixture associated to function getCommentsReplies
   */
  public getCommentsReplies: jasmine.Spy = jasmine.createSpy('getCommentsReplies');
/**
   * Fixture associated to function getCommentsStatus
   */
  public getCommentsStatus: jasmine.Spy = jasmine.createSpy('getCommentsStatus');
/**
   * Fixture associated to function postCommentsComment
   */
  public postCommentsComment: jasmine.Spy = jasmine.createSpy('postCommentsComment');
/**
   * Fixture associated to function postCommentsCommentEvent
   */
  public postCommentsCommentEvent: jasmine.Spy = jasmine.createSpy('postCommentsCommentEvent');
/**
   * Fixture associated to function postCommentsSubscription
   */
  public postCommentsSubscription: jasmine.Spy = jasmine.createSpy('postCommentsSubscription');
/**
   * Fixture associated to function postCommentsThumb
   */
  public postCommentsThumb: jasmine.Spy = jasmine.createSpy('postCommentsThumb');
}
