var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {

	init: function(){
		AppDispatcher.handleViewAction({
	      actionType:AppConstants.INIT
	    });
	},

    saySomething: function(text){
	    AppDispatcher.handleViewAction({
	      actionType:AppConstants.SAY_SOMETHING,
	      text: text
	    });
	 },

	 cardClick: function() {
	 	AppDispatcher.handleViewAction({
	 		actionType: AppConstants.CARD_CLICK
	 	});
	 },

	 recieveSocket: function(data){
	 	AppDispatcher.handleServerAction({
	 		actionType: AppContstans.SOCKET_ACTION,
	 		source: 'WEB_SOCKET',
	 		payload: data
	 	});
	 },

	 handleApiResponse: function(data){
	 	AppDispatcher.handleServerAction({
	 		actionType: AppConstants.API_RESPONSE,
	 		source: 'API',
	 		payload: data
	 	});
	 }
}

module.exports = AppActions
