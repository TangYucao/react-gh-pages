import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    // this.state = {  }
    // this.handleIncrement.bind(this);
  }

  // styles = {
  //   fontSize: "20px",
  //   fontWeight: "bold"
  // };
  renderTags() {
    if (this.state.tags.length == 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrease(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrease
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.renderTags()}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
