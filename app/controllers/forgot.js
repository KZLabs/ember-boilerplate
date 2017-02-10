import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    forgot(){
      let data = this.get('model');
      this.store.adapterFor('application.js')
        .postRequest('forgot-password',data)
        .then(function (response) {
          that.transitionToRoute('home');
        }).catch(function (reason) {
          console.log(reason);
      })
    }
  }
});
