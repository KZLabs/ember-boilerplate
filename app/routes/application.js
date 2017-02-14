import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    handleError(reason) {
      let controller = this.controllerFor('application');
      controller.set('errorMessage', reason.errors[0].message);
      Ember.run.later(function(){
        Ember.$("#errorMessage").fadeOut("slow", function() {
          controller.set('errorMessage', null);
        });
      },3000);
    },

    handleSuccess(message) {
      let controller = this.controllerFor('application');
      controller.set('successMessage', message );
      Ember.run.later(function(){
        Ember.$("#successMessage").fadeOut("slow", function() {
          controller.set('successMessage', null);
        });
      },3000);
    }
  }
});
