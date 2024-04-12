
import { TagsApi, DeleteTagsTagRequestData, GetTagsListRequestData, PostTagsTagRequestData } from './tags-api';

export class TagsApiFixture implements Partial<Readonly<TagsApi>> {

  /** @inheritDoc */
  public readonly apiName = "TagsApi";

  /**
   * Fixture associated to function deleteTagsTag
   */
  public deleteTagsTag: jest.Mock<Promise<void>, [DeleteTagsTagRequestData]> = jest.fn();
/**
   * Fixture associated to function getTagsList
   */
  public getTagsList: jest.Mock<Promise<void>, [GetTagsListRequestData]> = jest.fn();
/**
   * Fixture associated to function postTagsTag
   */
  public postTagsTag: jest.Mock<Promise<void>, [PostTagsTagRequestData]> = jest.fn();
}

