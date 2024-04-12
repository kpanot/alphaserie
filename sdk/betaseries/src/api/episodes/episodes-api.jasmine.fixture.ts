import { EpisodesApi } from './episodes-api';

export class EpisodesApiFixture implements Partial<Readonly<EpisodesApi>> {

  /** @inheritDoc */
  public readonly apiName = "EpisodesApi";

  /**
   * Fixture associated to function deleteEpisodesDownloaded
   */
  public deleteEpisodesDownloaded: jasmine.Spy = jasmine.createSpy('deleteEpisodesDownloaded');
/**
   * Fixture associated to function deleteEpisodesHidden
   */
  public deleteEpisodesHidden: jasmine.Spy = jasmine.createSpy('deleteEpisodesHidden');
/**
   * Fixture associated to function deleteEpisodesNote
   */
  public deleteEpisodesNote: jasmine.Spy = jasmine.createSpy('deleteEpisodesNote');
/**
   * Fixture associated to function deleteEpisodesWatched
   */
  public deleteEpisodesWatched: jasmine.Spy = jasmine.createSpy('deleteEpisodesWatched');
/**
   * Fixture associated to function getEpisodesDisplay
   */
  public getEpisodesDisplay: jasmine.Spy = jasmine.createSpy('getEpisodesDisplay');
/**
   * Fixture associated to function getEpisodesLatest
   */
  public getEpisodesLatest: jasmine.Spy = jasmine.createSpy('getEpisodesLatest');
/**
   * Fixture associated to function getEpisodesList
   */
  public getEpisodesList: jasmine.Spy = jasmine.createSpy('getEpisodesList');
/**
   * Fixture associated to function getEpisodesNext
   */
  public getEpisodesNext: jasmine.Spy = jasmine.createSpy('getEpisodesNext');
/**
   * Fixture associated to function getEpisodesScraper
   */
  public getEpisodesScraper: jasmine.Spy = jasmine.createSpy('getEpisodesScraper');
/**
   * Fixture associated to function getEpisodesSearch
   */
  public getEpisodesSearch: jasmine.Spy = jasmine.createSpy('getEpisodesSearch');
/**
   * Fixture associated to function getEpisodesUnrated
   */
  public getEpisodesUnrated: jasmine.Spy = jasmine.createSpy('getEpisodesUnrated');
/**
   * Fixture associated to function postEpisodesDownloaded
   */
  public postEpisodesDownloaded: jasmine.Spy = jasmine.createSpy('postEpisodesDownloaded');
/**
   * Fixture associated to function postEpisodesHidden
   */
  public postEpisodesHidden: jasmine.Spy = jasmine.createSpy('postEpisodesHidden');
/**
   * Fixture associated to function postEpisodesNote
   */
  public postEpisodesNote: jasmine.Spy = jasmine.createSpy('postEpisodesNote');
/**
   * Fixture associated to function postEpisodesWatched
   */
  public postEpisodesWatched: jasmine.Spy = jasmine.createSpy('postEpisodesWatched');
}
