import React, { Component } from "react";

import Counter from "./counter";
class Counters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary m-2">
          Reset
        </button>

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id} // have to add this for react.
            // id={counter.id}
            // value={counter.value}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrease={this.props.onDecrease}
            counter={counter}
          >
            {/* <h3>Counter #{counter.id}</h3> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
