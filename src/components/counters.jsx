import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(e => (
          <Counter key={e.id} value={e.value} selected={true}>
            <h4>Counter #{e.id}</h4>
          </Counter>
          //used props in couinter.jsx to access the vaue and selected
          // default selected == true
        ))}
        {}
      </div>
    );
  }
}

export default Counters;
