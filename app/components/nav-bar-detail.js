import Ember from 'ember';
import AnimationComponent from 'rappi-ember/mixins/animation-component';

export default Ember.Component.extend(AnimationComponent, {
  classNames: ['nav-bar-detail'],
  handleOnLeave: true,
  itemChanged: Ember.observer('item.expandend', function () {

    this.get('animationService').add(this.$(), this.get('animationClass'));
  })
});
