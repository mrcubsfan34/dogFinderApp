import React, { Component } from 'react';
import Navbar from "./Navbar";
import Routes from "./Routes";
import charlie from "./Images/Charlie.jpg";
import bella from "./Images/Bella.jpg";
import sugar from "./Images/Sugar.jpg";
import './App.css';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Charlie",
        age: 3,
        src: charlie,
        facts: [
          "Charlie is very cuddly.",
          "Charlie loves to swim.",
          "Charlie loves to eat bananas."
        ]
      },
      {
        name: "Bella",
        age: 6,
        src: bella,
        facts: [
          "Bella is a premadonna.",
          "Bella smells like tulips.",
          "Bella loves the beach."
        ]
      },
      {
        name: "Sugar",
        age: 1,
        src: sugar,
        facts: [
          "Sugar loves dog food.",
          "Sugar yips alot",
          "Sugar loves her owner."
        ]
      },
    ]
  };
    render() {
      
      return (
        <div>
          <Navbar dogs={this.props.dogs} />
          <div className="container">
            <Routes dogs={this.props.dogs} />
          </div>
        </div>
      );
    }
}

export default App;
