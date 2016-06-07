/*jshint node:true*/
/* global require, module */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    lessOptions: {
      paths: [
        'bower_components/bootstrap/less'
      ]
    }
  });

  const bootstrapFonts = new Funnel('bower_components/bootstrap/fonts', {
    srcDir: '/',
    include: ['**/*.woff', '**/*.svg', '**/*.ttf', '**/*.woff2', '**/*.eot'],
    destDir: '/fonts'
  });

  return mergeTrees([
    app.toTree(),
    bootstrapFonts
  ]);
};
