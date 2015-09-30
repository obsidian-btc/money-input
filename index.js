'use strict';

var React = require('react');

var MoneyInput = React.createClass({
  propTypes: {
    setAmount: React.PropTypes.func.isRequired,
    defaultValue: React.PropTypes.number
  },

  getInitialState: function() {
    return {
      amount: 0,
      amountString: ""
    };
  },

  setAmount: function(e) {
    var trimmedString = e.target.value.replace(/\.[\s0]*$/, "");
    var floatValue = Math.abs(parseFloat(trimmedString));

    if (floatValue.toFixed(2).replace(/\.?0+$/, "") === trimmedString) {
      this.setState({
        amountString: e.target.value,
        amount: Math.round(floatValue*100)
      }, function() {
        this.props.setAmount(Math.round(floatValue*100));

      });

    } else if (trimmedString === "") {
      this.setState({
        amountString: "",
        amount: 0
      }, function() {
        this.props.setAmount(0);
      });

    }
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.defaultValue) {
      if (this.state.amount !== nextProps.defaultValue) {
        this.setState({amountString: (nextProps.defaultValue / 100).toFixed(2)});
      }
    }
  },

  render: function () {
    return (
      <input className="form-control"
        type="text"
        onChange={this.setAmount}
        value={this.state.amountString} />
    );
  }
});

module.exports = MoneyInput;
