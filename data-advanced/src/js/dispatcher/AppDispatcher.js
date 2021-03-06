var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {	

  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      actionType: action.actionType,
  	  payload: action.text || action.id || null
    });
  },

  handleServerAction: function(action) {
  	this.dispatch({
  		source: action.source,
  		actionType: action.actionType,
  		data: action.payload
  	})
  }
});

module.exports = AppDispatcher;
