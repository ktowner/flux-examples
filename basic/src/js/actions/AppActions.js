var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  saySomething: function(text){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.SAY_SOMETHING,
      text: text
    });
  }
}

module.exports = AppActions
