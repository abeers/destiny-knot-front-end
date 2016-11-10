import Ember from 'ember';

export function equals(params) {
  if (arguments.length < 2) {
    throw new Error("Handlebars Helper equal needs 2 parameters");
  }
  return ( params[0] === params[1] );
}

export default Ember.Helper.helper(equals);
