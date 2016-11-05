import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('navbar-footer/team-member', 'Integration | Component | navbar footer/team member', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{navbar-footer/team-member}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#navbar-footer/team-member}}
      template block text
    {{/navbar-footer/team-member}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
