'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIMoment(project) {
  this.project = project;
  this.name    = 'Ember CLI moment';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIMoment.prototype.treeFor = function treeFor(name) {
  if (name !== 'vendor') { return; }

  var treePath =  path.join('node_modules', 'ember-cli-moment', 'node_modules');

  return unwatchedTree(treePath);
};

EmberCLIMoment.prototype.included = function included(app) {
  this.app = app;

  this.app.import('vendor/moment/moment.js');
};

module.exports = EmberCLIMoment;
