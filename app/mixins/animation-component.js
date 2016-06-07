import Ember from 'ember';

const {
  service
} = Ember.inject;

export default Ember.Mixin.create({
  animationClass: 'did-insert',
  handleOnLeave: false,
  animationService: service('animation'),
  dispatcher: service(),
  enterAnimation: function () {
    this.get('animationService').add(this.$(), this.get('animationClass'));
  }.on('didInsertElement'),
  leaveAnimation: function () {
    if (!this.get('handleOnLeave')) {
      return;
    }

    const clone = this.$().clone();

    this.$().parent().append(clone);
    this.get('animationService').add(clone, 'will-destroy', () => {

      clone.remove();
      this.get('dispatcher').trigger('leaveAnimation');
    });
  }.on('willDestroyElement')
});
