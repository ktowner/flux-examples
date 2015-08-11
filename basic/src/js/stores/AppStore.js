var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');


var CHANGE_EVENT = 'change';

var dataStructure = {};

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getMessage: function() {
      return dataStructure.message;
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

AppDispatcher.register(function(payload){
  var actionSource = payload.source;
  var action = payload.action;
  var actionType = action.actionType;
  var data = action.text;

  dataStructure.message = data;

  AppStore.emitChange();
  return true;
});

module.exports = AppStore;
