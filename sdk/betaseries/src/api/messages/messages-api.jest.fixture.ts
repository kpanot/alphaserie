
import { MessagesApi, DeleteMessagesMessageRequestData, GetMessagesDiscussionRequestData, GetMessagesInboxRequestData, PostMessagesMessageRequestData, PostMessagesReadRequestData } from './messages-api';

export class MessagesApiFixture implements Partial<Readonly<MessagesApi>> {

  /** @inheritDoc */
  public readonly apiName = "MessagesApi";

  /**
   * Fixture associated to function deleteMessagesMessage
   */
  public deleteMessagesMessage: jest.Mock<Promise<void>, [DeleteMessagesMessageRequestData]> = jest.fn();
/**
   * Fixture associated to function getMessagesDiscussion
   */
  public getMessagesDiscussion: jest.Mock<Promise<void>, [GetMessagesDiscussionRequestData]> = jest.fn();
/**
   * Fixture associated to function getMessagesInbox
   */
  public getMessagesInbox: jest.Mock<Promise<void>, [GetMessagesInboxRequestData]> = jest.fn();
/**
   * Fixture associated to function postMessagesMessage
   */
  public postMessagesMessage: jest.Mock<Promise<void>, [PostMessagesMessageRequestData]> = jest.fn();
/**
   * Fixture associated to function postMessagesRead
   */
  public postMessagesRead: jest.Mock<Promise<void>, [PostMessagesReadRequestData]> = jest.fn();
}

