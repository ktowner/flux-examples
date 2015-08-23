var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppActions = require('../actions/AppActions');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var http = require('http');


var CHANGE_EVENT = 'change';

var counts = {
  total: 0
};

var CardClickStore = assign({}, EventEmitter.prototype, {
  emitChange: function(type) {
    this.emit(type);
  },

  getTotal: function() {
    return counts.total;
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

AppDispatcher.register(function(obj){
  var actionSource = obj.source;
  var actionType = obj.actionType;
  
  switch (actionType){
    case 'INIT':
      break;
    case 'CARD_CLICK':
      counts.total = ++counts.total;
      CardClickStore.emitChange(CHANGE_EVENT);
      break;
    case 'SOCKET_ACTION':
      counts.total = ++counts.total;
      CardClickStore.emitChange(CHANGE_EVENT);
      break;
    default:
      break;
  }
  return true;
});

module.exports = CardClickStore;
