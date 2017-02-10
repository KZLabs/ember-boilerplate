/**
 * Created by nicolasgaviriamejia on 2/9/17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    logout: function() {
      console.log("logout")
    }
  },
});
