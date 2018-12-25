import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  constructor(props) {
    console.log("App - Constructor");
    super(props);
  }
  componentDidMount() {
    console.log("App - Mounted");
  }
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };
  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id != counterId);

    this.setState({
      counters: counters
    });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index].value++;
    this.setState({
      counters: counters
    });
  };
  handleDecrease = counter => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index].value--;
    if (counters[index].value < 0) {
      this.handleDelete(counter.id);
      return;
    }
    this.setState({
      counters: counters
    });
  };
  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrease={this.handleDecrease}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
