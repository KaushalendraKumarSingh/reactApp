import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tagString => (
          <li key={tagString}>{tagString}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
} //end of class

export default Counter;
