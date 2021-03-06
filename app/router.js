import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('types');
  this.route('team', {path: '/teams/:team_id'}, function() {
    this.route('pokemon', {path:'/team_members/:member_id'});
    this.route('breakdown', {path:'/breakdown'});
  });
  this.route('teams');
});

export default Router;
