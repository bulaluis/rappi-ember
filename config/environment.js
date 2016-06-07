/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'rappi-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
      }
    },

    // *******************************************
    // Server url
    // *******************************************

    // url: 'https://myapi.com',

    // *******************************************

    APP: {
    }
  };

  if (environment === 'development') {

  }

  if (environment === 'test') {
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
  }

  return ENV;
};
