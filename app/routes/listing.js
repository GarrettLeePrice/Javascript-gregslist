import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      listing: this.store.findRecord('listing', params.listing_id)
    });
  },
  summary: Ember.computed('listing.seller', 'listing.location', function() { return this.get('listing.seller') + ' - ' + this.get('listing.location'); }),
  actions: {
    updateListing(listing, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          listing.set(key,params[key]);
        }
      });
      listing.save();
      this.transitionTo('listing', listing.id);
    },
    deleteListing(listing) {
      if(confirm('Are you sure?')) {
        listing.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
