import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('type-bar-ind', 'Integration | Component | type bar ind', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{type-bar-ind}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#type-bar-ind}}
      template block text
    {{/type-bar-ind}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
