import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props); //the property value and selected in counters.jsx
    return (
      <React.Fragment>
        {this.props.children}
        {/* rendered the line between <Counter> and </Counter> in counters.jsx */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({})} //product-->e
          className="btn btn-secondary btn-small"
        >
          Increment
        </button>
        <br />
        <br />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
} //end of class

export default Counter;
