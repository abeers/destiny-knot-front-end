import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  identifier: '',

  actions: {
    submit () {
      this.sendAction('submit', this.get('identifier'), this.get('member').get('id'));
    }
  },
});
