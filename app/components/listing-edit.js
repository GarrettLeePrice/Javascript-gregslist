import Ember from 'ember';

export default Ember.Component.extend({
  displayListingEdit: false,
  actions: {
    showListingEdit() {
      this.set('displayListingEdit', true);
    },
    hideListingEdit() {
      this.set('displayListingEdit', false);
    },
    updateListing(listing) {
      var params = {
        seller: this.get('seller'),
        description: this.get('description'),
        location: this.get('location'),
        note: this.get('note'),
        price: this.get('price')
      };
      this.sendAction('updateListing', listing, params);
      this.set('displayListingEdit', false);
    }
  }
});
