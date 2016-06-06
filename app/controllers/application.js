import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		load() {
			this.set('isLoading', true);

			Ember.$
			.get('https://api.github.com/users')
			.done(data => Ember.A(data))
			.done(data => {
				this.set('_news', data);

				Ember.run.next(this, this.insertItem, 0, data.get('length'));
			})
			.always(() => this.set('isLoading', false));
		}
	},
	insertItem(index, length) {
		this.get('news').pushObject(this.get('_news')[index]);

		if (index < length - 1) {
			Ember.run.later(this, this.insertItem, index + 1, length, 100);
		}
	}
});
