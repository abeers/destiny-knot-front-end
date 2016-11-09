import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  name: '',

  actions: {
    editName () {
      this.sendAction('editName', this.get('name'), this.get('team'));
    },
    reset () {
      this.set('name', '');
    },
  },
});
