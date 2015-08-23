var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppActions = require('../actions/AppActions');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var http = require('http');


var CHANGE_EVENT = 'change';

var dataStructure = {};

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function(type) {
    this.emit(type);
  },

  getMessage: function() {
      return dataStructure.message;
  },

  getApi: function() {
     return http.get("http://localhost:3000/api/", function(res){
        var response = "";
        res.on('data', function (chunk){
          response += chunk;
        });

        res.on('end', function (){
          AppActions.handleApiResponse(JSON.parse(response));
        });
        
     });
  },

  getCards: function() {
    return dataStructure.cards;
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback1, callback2) {
    this.on(CHANGE_EVENT, callback1);
    this.on('data', callback2);
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
      AppStore.getApi();
      break;
    case 'SAY_SOMETHING':
      dataStructure.message = obj.payload || "";
      AppStore.emitChange(CHANGE_EVENT);
      break;
    case 'SERVER_ACTION':
      dataStructure['cards']= obj.data.cards;
      AppStore.emitChange('data');
      break;
    case 'SOCKET_ACTION':
      AppStore.emitChange('socket');
      break;
    default:
      break;
  }
  return true;
});

module.exports = AppStore;
