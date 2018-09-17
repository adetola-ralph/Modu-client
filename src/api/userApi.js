import request from 'superagent';

const url = 'https://modu-server-staging.herokuapp.com/api/';
const createUserEndpoint = 'People';
const loginEndpoint = 'People/login';

class UserApi {
  createUser = (user) => {
    return request.post(`${url}${createUserEndpoint}`)
      .send(user)
      .set('Content-Type', 'application/json')
  }

  login = (details) => {
    return request.post(`${url}${loginEndpoint}`)
      .send(details)
      .set('Content-Type', 'application/json')
  }
}

export default new UserApi();
