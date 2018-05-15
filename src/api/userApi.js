import request from 'superagent';

const url = 'https://modu-server-staging.herokuapp.com/api/';
const endpoint = 'People';

// const userHard = {
//   "firstname": "string",
//   "surname": "string",
//   "phone": "string",
//   "email": "string3@strings.com",
//   "profilePicture": "string",
//   "realm": "string",
//   "username": "string3",
//   "emailVerified": true,
//   "password": "string"
// }

class UserApi {
  static createUser (user) {
    console.log(`${url}${endpoint}`)
    return request.get(`${url}${endpoint}`)
      .send(userHard)
      .set('Content-Type', 'application/json')
  }
}

export default UserApi;
