import Ember from 'ember';
import AnimationComponent from 'rappi-ember/mixins/animation-component';

const { bind, debounce } = Ember.run;

export default Ember.Component.extend(AnimationComponent, {
  classNames: ['news-container'],
  didInsertElement() {

    this.updateResize();

    // Add listener
    Ember.$(window).on('resize', bind(this, this.updateResize));
  },
  willDestroyElement() {

    // Remove listener
    Ember.$(window).off('resize', bind(this, this.updateResize));
  },
  updateResize() {

    debounce(this, function() {

      this.$().css('min-height', Ember.$(window).height() - 40);
    }, 100);
  }
});
