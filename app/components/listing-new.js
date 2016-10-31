import Ember from 'ember';

export default Ember.Component.extend({
  displayListingForm: false,
  actions: {
    showListingForm() {
      this.set('displayListingForm', true);
    },
    saveListing() {
      var params = {
        seller: this.get('seller') ? this.get('seller') : "",
        description: this.get('description') ? this.get('description') : "",
        location: this.get('location') ? this.get('location') : "",
        note: this.get('note') ? this.get('note') : "",
        price: this.get('price') ? parseInt(this.get('price')) : 0,
        category: this.get('category'),
        postedOn: new Date()
      };
      this.sendAction('saveListing', params);
      this.set('displayListingForm', false);
    }
  }
});
