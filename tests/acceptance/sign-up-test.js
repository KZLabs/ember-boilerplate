import { test } from 'qunit';
import moduleForAcceptance from 'ember-boilerplate/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sign up');

test('visiting /sign-up', function(assert) {
  visit('/sign-up');

  andThen(function() {
    assert.equal(currentURL(), '/sign-up');
  });
});
