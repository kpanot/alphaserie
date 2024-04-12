import { SeasonsApi } from './seasons-api';

export class SeasonsApiFixture implements Partial<Readonly<SeasonsApi>> {

  /** @inheritDoc */
  public readonly apiName = "SeasonsApi";

  /**
   * Fixture associated to function deleteSeasonsHide
   */
  public deleteSeasonsHide: jasmine.Spy = jasmine.createSpy('deleteSeasonsHide');
/**
   * Fixture associated to function deleteSeasonsNote
   */
  public deleteSeasonsNote: jasmine.Spy = jasmine.createSpy('deleteSeasonsNote');
/**
   * Fixture associated to function deleteSeasonsWatched
   */
  public deleteSeasonsWatched: jasmine.Spy = jasmine.createSpy('deleteSeasonsWatched');
/**
   * Fixture associated to function postSeasonsHide
   */
  public postSeasonsHide: jasmine.Spy = jasmine.createSpy('postSeasonsHide');
/**
   * Fixture associated to function postSeasonsNote
   */
  public postSeasonsNote: jasmine.Spy = jasmine.createSpy('postSeasonsNote');
/**
   * Fixture associated to function postSeasonsWatched
   */
  public postSeasonsWatched: jasmine.Spy = jasmine.createSpy('postSeasonsWatched');
}
