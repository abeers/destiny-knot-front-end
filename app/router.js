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
  // this.route('pokemons');
  this.route('types');
  // this.route('pokemon', { path: '/pokemons/:pokemon_id'});
  this.route('team', {path: '/teams/:team_id'});
  this.route('team', {path: '/teams/:team_id'}, function() {
    this.route('pokemon', {path:'/team_members/:member_id'});
    this.route('breakdown');
  });
});

export default Router;
