import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  actions: {
    logout: function() {
      console.log("logout");
      this.get('session').invalidate();
    }
  },
});
