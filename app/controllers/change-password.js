import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  queryParams: ['token'],
  token: null,
  actions: {
    change_password: function () {
      var values = this.get('model');
      console.log(this.get('token'));
      if (values.password === values.confirmPassword){
        let data = {
          newPassword:values.password,
          resetPasswordToken: this.get('token')
        };
        this.store.adapterFor('application')
          .postRequest('reset-password',data)
          .then(function (response) {
            console.log(response);
          }).catch(function (reason) {
            console.log(reason);
        });
      }else{

      }
    }
  }
});
