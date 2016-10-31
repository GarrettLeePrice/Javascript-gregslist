import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['postedOn:desc'],
  sortedListings: Ember.computed.sort('listings', 'sortBy')
});
