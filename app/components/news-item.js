import Ember from 'ember';
import AnimationComponent from 'rappi-ember/mixins/animation-component';

export default Ember.Component.extend(AnimationComponent, {
	classNames: ['news-item'],
  dispatcher: Ember.inject.service(),
  animationService: Ember.inject.service('animation'),
  init() {
    this._super(...arguments);

    const newSelected = Ember.run.bind(this, this._handlenewSelected);

    this.get('dispatcher').on('newSelected', newSelected);
    this.set('newSelected', newSelected);
  },
  _handlenewSelected(item) {
    const _item = this.get('item');

    if (Ember.isEqual(item, this.get('item'))) {
      this.$().addClass('selected');
      _item.toggleProperty('isExpanded');
    } else {
      this.$().removeClass('selected');
      _item.set('isExpanded', false);
    }
  },
  willDestroy() {
    this.get('dispatcher').off('newSelected', this.get('newSelected'));

    this._super(...arguments);
  },
});
