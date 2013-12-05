// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

goog.provide('templates');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
templates.anotation = function(opt_data, opt_ignored) {
  return '\t<div id="split-container" class="goog-splitpane"><div class="goog-splitpane-first-container"><img src="' + soy.$$escapeHtml(opt_data.imageUrl) + '" id="anotation-img" class="img-full"></div><div class="goog-splitpane-second-container"><h2><a href=\'/dir/' + soy.$$escapeHtml(opt_data.dir) + '\'>' + soy.$$escapeHtml(opt_data.dir) + '</a>/' + soy.$$escapeHtml(opt_data.file) + ' (' + soy.$$escapeHtml(opt_data.position) + ')</h2><h6>user ' + soy.$$escapeHtml(opt_data.username) + ' | <span id="timer"></span> |<a href="/help" target="_blank">help</a> | <a href=\'/login\'>log out</a></h6><div id="tree-container" style="width:400px"></div><br><input type="text" id="main-input" class="form-control" placeholder="Add new text"><a href="#" id="more-options-show">More options</a><div class="well hide" id="more-options"><div id="char-picker"></div><textarea id="notes" placeholder="Notes" class="form-control" rows="3">' + ((opt_data.notes) ? soy.$$escapeHtml(opt_data.notes) : '') + '</textarea><div class="checkbox"><label><input type="checkbox" ' + ((opt_data.dontUnderstandLanguage) ? 'checked' : '') + ' id="dontUnderstandLanguage">I don\'t understand the language in the picture</label><br><label><input type="checkbox" ' + ((opt_data.noText) ? 'checked' : '') + ' id="noText">No text</label></div></div><center><div id="save-buttons" class="btn-group"><input type="button" id="prev" value="< Previous" class="btn btn-default"><input type="button" id="save" value="Save"  class="btn btn-default"><input type="button" id="next" value="Next >"  class="btn btn-default"></div></center></div><div class="goog-splitpane-handle"></div></div>';
};
