import { BASE_URL } from 'config';
import ApiClient from './index';

class Client extends ApiClient {
  constructor(req) {
    super(BASE_URL, { cacheEnabled: Boolean(req) });
  }

  menu = {
    get: query => this.get('/menu', { params: query }),
  }

  products = {
    get: query => this.get('/products', { params: query }),
  }
}

export default Client;
