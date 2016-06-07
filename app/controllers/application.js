import Ember from 'ember';
import ENV from 'rappi-ember/config/environment';
import newsFixture from 'rappi-ember/mocks/news_mock';

export default Ember.Controller.extend({
  activeIndex: -1,
  dispatcher: Ember.inject.service(),
  activeItem: null,
	actions: {
		loadNews() {
			this.set('isLoading', true);

      if (!ENV.url) {
        this.set('isLoading', false);
        this.set('_news', newsFixture);
        this.set('news', Ember.A([]));

        Ember.run.next(this, this.insertItem, 0, newsFixture.get('length'));
        return;
      }

			Ember.$
			.get(ENV.url)
			.done(data => Ember.A(data))
			.done(data => {
				this.set('_news', data);
        this.set('news', Ember.A([]));

				Ember.run.next(this, this.insertItem, 0, data.get('length'));
			})
      .fail((err) => {

        alert(`Se presentó un error al obtener los datos\nstatus: ${err && err.status}\nmessage: ${err && (err.message || err.statusText)}`);
      })
			.always(() => this.set('isLoading', false));
		},
    setActive(item) {
      this.set('activeItem', item);
      this.get('dispatcher').trigger('newSelected', item);
    }
	},
  init() {
    this._super(...arguments);
    this.set('news', Ember.A([]));
    this.get('dispatcher').on('leaveAnimation', Ember.run.bind(this, this.updatePosition));
  },
  updatePosition() {
    const $element = Ember.$('.news-item.selected');
    const offset = $element.offset().top;

    if (offset < Ember.$(window).scrollTop()) {
      Ember.$('html, body').animate({
        scrollTop: offset - 20
      }, 0);
    }
  },
	insertItem(index, length) {
    const newItem = Ember.ObjectProxy.create({
      content: this.get('_news')[index],
      isExpanded: false
    });

		this.get('news').pushObject(newItem);

		if (index < length - 1) {
			Ember.run.later(this, this.insertItem, index + 1, length, 150);
		}
	}
});
