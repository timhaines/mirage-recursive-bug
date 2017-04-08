import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  slug: DS.attr(),
  subscription: DS.belongsTo('subscription', {async: false}),
});
