import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Ember from 'ember';

module('Integration | Component | test-component', function(hooks) {
  setupRenderingTest(hooks);

  test('rejects doesn\'t catch exception', async function(assert) {
      assert.expect(1);
    assert.rejects(render(hbs`<TestComponent />`));
  });

  test('Workaround: errorHandler works at first, but gets called twice (2nd:  TypeError: Cannot read property \'firstNode\' of null)', async function(assert) {
      assert.expect(1);
    const originalErrorHandler = Ember.onerror;
    try {
        Ember.onerror = function(error){
            assert.ok(true, 'On Error:' + error);
        }
        await render(hbs`<TestComponent />`);
    } finally {
        Error.onerror = originalErrorHandler;
    }
  });
  
  test('with additional <div>s all works as expected', async function(assert) {
      assert.expect(1);
    const originalErrorHandler = Ember.onerror;
    try {
        Ember.onerror = function(error){
            assert.ok(true, 'On Error:' + error);
        }
        await render(hbs`<div><TestComponent /></div>`);
    } finally {
        Error.onerror = originalErrorHandler;
    }
  });
});
