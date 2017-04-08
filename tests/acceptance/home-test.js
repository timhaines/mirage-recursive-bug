import { test } from 'qunit';
import moduleForAcceptance from 'mirage-recursive-bug/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /', function(assert) {
  server.create('organization');

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
