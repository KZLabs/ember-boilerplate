import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
      authenticator = 'authenticator:token';
      this.get('session').authenticate(authenticator, credentials);
      this.transitionToRoute('home');
    }
  },
  emailValidation: [{
    message: 'Please provide a valid email format xxxx@xxx.xx',
    validate: (inputValue) => {
      let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(inputValue);
    }
  }],
});
