import Ember from 'ember';
import AnimationComponent from 'rappi-ember/mixins/animation-component';

export default Ember.Component.extend(AnimationComponent, {
  classNames: ['news-detail', 'clearfix'],
  handleOnLeave: true
});
