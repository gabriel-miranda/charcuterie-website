const lru = require('lru-cache');
const debugLogger = require('debug-logger');

const log = debugLogger('app:contentful:cache');

const DEFAULT_MAX_AGE = 1000 * 60; // 1 min

module.exports = class ContentfulCache {
  constructor(space, maxAge) {
    this.space = space;
    this.maxAge = maxAge;
    this.createNewInstance();
  }

  createNewInstance() {
    this.store = lru({
      maxAge: this.maxAge || DEFAULT_MAX_AGE,
    });
  }

  get(key) {
    return this.store.get(`${this.space}:${key}`);
  }

  set(key, value) {
    this.store.set(`${this.space}:${key}`, value);
  }

  del(keys) {
    try {
      keys.forEach(k => this.store.del(`${this.space}:${k}`));
    } catch (e) {
      log.log(e);
    }
  }
};
