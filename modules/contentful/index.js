const { createClient } = require('contentful');
const debugLogger = require('debug-logger');
const ContentfulCache = require('./cache');

const log = debugLogger('app:contentful:wrapper');

const DEFAULT_MAX_AGE = 1000 * 60;

module.exports = class ContentfulWrapper {
  constructor({
    space,
    accessToken,
    cacheMaxAge = DEFAULT_MAX_AGE,
    Store = ContentfulCache,
    invalidationOpts,
    removeUnresolved = true,
    preview = false,
  }) {
    if (!space || !accessToken) {
      throw new Error(`Missing parameters for ${this.constructor.name}`);
    }
    this.space = space;
    this.client = createClient({
      space,
      accessToken,
      removeUnresolved,
      host: preview ? 'preview.contentful.com' : 'cdn.contentful.com',
    });
    this.clearAllCache = this.clearAllCache.bind(this);
    this.clearCache = this.clearCache.bind(this);
    this.cache = new Store(this.space, cacheMaxAge);

    if (invalidationOpts) {
      const { invalidationClient, url } = invalidationOpts;
      invalidationClient.init(url, this.clearCache, this.clearAllCache);
    }
  }

  clearCache(keys) {
    this.cache.del(keys);
  }

  clearAllCache() {
    this.cache.createNewInstance();
  }

  async get(query, cacheName, decorators) {
    try {
      const tmpCache = await this.cache.get(cacheName);
      if (tmpCache) {
        log.info(`Entity ${cacheName} cached`);
        return tmpCache;
      }
      log.info(`Entity ${cacheName} not cached`);
      const data = await this.client.getEntries(query);
      const results = data.items.map((item) => {
        const newItem = { ...item.fields };
        if (decorators) {
          const keys = Object.keys(decorators);
          keys.forEach((key) => {
            if (newItem[key]) {
              // If there is any decorator for a specific field, we apply it
              newItem[key] = decorators[key](newItem[key]);
            }
          });
        }
        return newItem;
      });
      this.cache.set(cacheName, results);
      return results;
    } catch (e) {
      log.error(e);
      return [];
    }
  }
};
