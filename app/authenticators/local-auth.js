import Ember from 'ember';
import Devise from 'ember-simple-auth/authenticators/devise';

const { RSVP: { Promise }, run } = Ember;

export default Devise.extend({
  serverTokenEndpoint: 'http://localhost:3000/v1/login',
  authenticate(credentials) {
    return new Promise((resolve, reject) => {
      var data= {};
      data['password'] = credentials.password ;
      data['email'] = credentials.identification;
      return this.makeRequest(data)
        .then((response) => {
            run(null, resolve, response);
        })
        .catch((err) => {
          reject(err);
        });
    });

  },
});
