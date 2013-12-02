goog.provide('app.start');

goog.require('app.Anotator');
goog.require('goog.ui.SplitPane');
goog.require('templates');

/**
 * @param {Object} config
 */
app.start = function(config) {
	new app.Anotator();
};

goog.exportSymbol('app.start', app.start);
