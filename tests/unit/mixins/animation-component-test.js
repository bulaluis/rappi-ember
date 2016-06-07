import Ember from 'ember';
import AnimationComponentMixin from 'rappi-ember/mixins/animation-component';
import { module, test } from 'qunit';

module('Unit | Mixin | animation component');

// Replace this with your real tests.
test('it works', function(assert) {
  let AnimationComponentObject = Ember.Object.extend(AnimationComponentMixin);
  let subject = AnimationComponentObject.create();
  assert.ok(subject);
});
