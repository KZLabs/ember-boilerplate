import { test } from 'qunit';
import moduleForAcceptance from 'ember-boilerplate/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/login');
  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
