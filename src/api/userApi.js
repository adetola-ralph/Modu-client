import request from 'superagent';

const url = 'url';

class UserApi {
  static login(user) {
    request.post(`${url}endpoint`)
      .set(user)
      .send();
  }
}

export default UserApi;
