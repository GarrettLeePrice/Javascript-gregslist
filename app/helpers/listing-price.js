import Ember from 'ember';

export function listingPrice(params/*, hash*/) {
  var listingPrice = params[0].get('price');

  if (listingPrice >= 2000){
    return '$$$$';
  } else if (listingPrice >= 1500){
    return '$$$';
  } else if (listingPrice >= 1000){
    return '$$';
  } else if (listingPrice <= 999){
    return '$';
  }
}

export default Ember.Helper.helper(listingPrice);
