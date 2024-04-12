import { TagsApi } from './tags-api';

export class TagsApiFixture implements Partial<Readonly<TagsApi>> {

  /** @inheritDoc */
  public readonly apiName = "TagsApi";

  /**
   * Fixture associated to function deleteTagsTag
   */
  public deleteTagsTag: jasmine.Spy = jasmine.createSpy('deleteTagsTag');
/**
   * Fixture associated to function getTagsList
   */
  public getTagsList: jasmine.Spy = jasmine.createSpy('getTagsList');
/**
   * Fixture associated to function postTagsTag
   */
  public postTagsTag: jasmine.Spy = jasmine.createSpy('postTagsTag');
}
