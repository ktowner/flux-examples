var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppActions = require('../actions/AppActions');
var AppStore = require('./AppStore');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var http = require('http');


var CHANGE_EVENT = 'change';

var counts = {
  total: 0
};

function setUpCountStore(array) {
	array.forEach(function (id) {
		counts[id] = 0;
	});
}

var CardClickStore = assign({}, EventEmitter.prototype, {
  emitChange: function(type) {
    this.emit(type);
  },

  getTotal: function() {
    return counts.total;
  },
  
  getCardClickById: function(id) {
  	return counts[id];
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
      counts[obj.payload] = ++counts[obj.payload];
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

CardClickStore.dispatchToken = AppDispatcher.register(function(obj){
	if(obj.actionType === 'SERVER_ACTION') {
		AppDispatcher.waitFor([AppStore.dispatchToken]);
		setUpCountStore(AppStore.getAllCardIds());
	}
});

module.exports = CardClickStore;
