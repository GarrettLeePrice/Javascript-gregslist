import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', {async: true}),
  description: DS.attr(),
  price: DS.attr(),
  location: DS.attr(),
  note: DS.attr(),
  seller: DS.attr()

});
