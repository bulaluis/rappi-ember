import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['item'],
	didInsertElement() {
		const $element = this.$();

		$element
		.addClass('did-insert')
		.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
			$element.removeClass('did-insert');
		});
	}
});
