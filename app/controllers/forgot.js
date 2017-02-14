import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    forgot(){
      let data = this.get('model');
      let that = this;
      this.store.adapterFor('application.js')
        .postRequest('forgot-password',data)
        .then(function (response) {
          that.send('handleSuccess', response);
          that.transitionToRoute('wait-email');
        }).catch(function (reason) {
          that.send('handleError', reason);
          console.log(reason);

      })
    }
  }
});
