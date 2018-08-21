import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  // constructor() {
  //   super(); //need to call super before using 'this'
  //   //console.log("Constructor", this);//this is defined here
  //   //so using binding

  //   //note: functions in JS are objects: having property and methods
  //   this.handleIncrement = this.handleIncrement.bind(this); //to set the value of 'this'
  //   //this 'bind' method will return the instance of the handleIncrement function
  // }

  handleIncrement = () => {
    //(e)
    //console.log("Increment Clicked", this); //'this' refers to the current 'counter' object
    //obj.method();-->this to object
    //function();---> this to windows ;if strict mode is on then it'll be undefined
    //console.log(e);
    this.setState({ count: this.state.count + 1 });
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };
  render() {
    return (
      <React.Fragment>
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
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
} //end of class

export default Counter;
