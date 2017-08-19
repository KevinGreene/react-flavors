import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// ES 5
var createReactClass = require('create-react-class');
var Es5 = createReactClass({
    render: function() {
        return <h1>Hello, {this.props.name}</h1>;
    }
});

// ES 5
var Es5NoJSX = createReactClass({
    render: function() {
        return React.createElement('h1', null, `Hello, from ${this.props.name}`);
    }
});

class Es6NoJSX extends Component {
    render() {
        return React.createElement('h1', null, `Hello, from ${this.props.name}`);
    }
}

class Es6 extends Component {
    render() {
        return <h1>Hello, from {this.props.name}</h1>;
    }
}

let Es6Function = ({name}) =>
    (<h1>Hello, from {name}</h1>);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Es5 name="Es5"/>
        <Es5NoJSX name="Es5NoJSX"/>
        <Es6NoJSX name="Es6NoJSX"/>
        <Es6 name="Es6"/>
        <Es6Function name="Es6Function"/>
      </div>
    );
  }
}

export default App;
