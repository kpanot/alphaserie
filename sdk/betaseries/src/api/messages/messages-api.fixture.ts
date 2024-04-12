import { MessagesApi } from './messages-api';

export class MessagesApiFixture implements Partial<Readonly<MessagesApi>> {

  /** @inheritDoc */
  public readonly apiName = "MessagesApi";

  /**
   * Fixture associated to function deleteMessagesMessage
   */
  public deleteMessagesMessage: jasmine.Spy = jasmine.createSpy('deleteMessagesMessage');
/**
   * Fixture associated to function getMessagesDiscussion
   */
  public getMessagesDiscussion: jasmine.Spy = jasmine.createSpy('getMessagesDiscussion');
/**
   * Fixture associated to function getMessagesInbox
   */
  public getMessagesInbox: jasmine.Spy = jasmine.createSpy('getMessagesInbox');
/**
   * Fixture associated to function postMessagesMessage
   */
  public postMessagesMessage: jasmine.Spy = jasmine.createSpy('postMessagesMessage');
/**
   * Fixture associated to function postMessagesRead
   */
  public postMessagesRead: jasmine.Spy = jasmine.createSpy('postMessagesRead');
}
