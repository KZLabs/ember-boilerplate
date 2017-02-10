// app/adapters/application.js
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'ember-boilerplate/config/environment';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
  host: ENV.APP.apiHost,
  namespace: ENV.APP.apiNamespace,

  getRequest: function (path,data) {
    let url = this.host + '/' + this.namespace + '/' + path;
    return this.ajax.get(path,{data:data});
  },
  postRequest: function (path,data) {
    let url = this.host + '/' + this.namespace + '/' + path;
    return this.ajax(url,'POST',{data:data})
  }

});
