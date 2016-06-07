import Ember from 'ember';

export default Ember.Service.extend({
  add(element, className, callback) {
    element
    .addClass(className)
    .on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
      if (typeof callback === 'function') {
        callback();
      }
      else {
        element.removeClass(className);
      }
    });
  }
});
