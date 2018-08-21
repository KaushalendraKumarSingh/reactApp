import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
    //imageUrl: "https://picsum.photos/200" //,
    // address:{
    //   street:''
    //}
  };

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };

  render() {
    //React.createElement('div')
    return (
      <React.Fragment>
        {/* <span style={this.styles} className="badge badge-primary m-2"> //class keyword not used since JSX after compiling into JS the class keyword will clash with that of class in JS */}
        <span style={{ fontSize: 5 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-small">Increment</button>

        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <h1>hello world!</h1> */}
        {/* <span>{this.state.count}</span> */}
        {/* <span>{this.formatCount()}</span> */}
        {/* using JS object in JSX */}
      </React.Fragment>
    );
    //compiled to React.createElement; so importing React in the first line
  }

  formatCount() {
    const { count } = this.state;
    const x = <h1>Zero</h1>;
    // return count === 0 ? "Zero" : count;
    return count === 0 ? x : count;
  }
}

export default Counter;
