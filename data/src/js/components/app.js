/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var CardClickStore = require('../stores/ClickCountStore');
var Card = require('./card');

var App = React.createClass({
    sendMessage:function(){
      AppActions.saySomething('Hello World');
      AppActions.cardClick();
    },

    handleClick: function(){
      console.log("handleClick is called");
      AppActions.cardClick();
    },

    getInitialState: function(){
      return {
        cards: [],
        clicks: CardClickStore.getTotal()
      };
    },

    componentWillMount: function(){
      AppActions.init();
    },

    componentDidMount: function() {
      AppStore.addChangeListener(this.onMessage, this.onServerResponse);
      CardClickStore.addChangeListener(this.onClickChange);
    },

    componentWillUnmount: function() {
      AppStore.removeChangeListener(this.onMessage, this.onServerResponse);
      CardClickStore.removeChangeListener(this.onClickChange);
    },

    render:function(){
      var cards = [];
      this.state.cards.forEach(function(card){
        cards.push(<Card content={card} />);
      });
      return (
        <div className="wrapper">
          <h3 onClick={this.handleClick}>Total Clicks: {this.state.clicks}</h3>
          <h3 onClick={this.sendMessage}>Click Here to Say Something</h3>
          {cards}
        </div>
      )
    },

    onMessage: function() {
        console.log(AppStore.getMessage());
    },

    onClickChange: function() {
      this.setState({clicks: CardClickStore.getTotal()});
    },

    onServerResponse: function() {
      this.setState({cards: AppStore.getCards()});
    }
  });

module.exports = App;
