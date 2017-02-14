import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
export default Ember.Route.extend(UnauthenticatedRouteMixin,{
  session: Ember.inject.service('session'),
  model(){
    return {identification:'john.doe@gmail.com',password:'123456'}
  }
});
