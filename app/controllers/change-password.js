import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    change_password: function () {
      var values = this.get('model')

      if (values.password == values.confirmPassword){
        let data = values.password;
        this.store.adapterFor('application')
          .postRequest('change-pass' +
            'word',data)
          .then(function (response) {
            console.log(response);
          }).catch(function (reason) {
            console.log(reason)
        })
      }
    }
  }
});
