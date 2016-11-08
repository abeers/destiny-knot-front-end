import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('manipulate-team/edit-name', 'Integration | Component | manipulate team/edit name', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{manipulate-team/edit-name}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#manipulate-team/edit-name}}
      template block text
    {{/manipulate-team/edit-name}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
