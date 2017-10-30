import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'webpack first'
    }
  }
  
  componentDidMount () {
    fetch('/path?path=./')
  }
  
  render() {
    return (
      <h1>
        {this.state.title}
        <input type="button" onClick={this.handlerClick} />
      </h1>
    );
  }

  handlerClick = e => {
    this.setState({
      title: 'webpack clicked'
    });
  }
}

export default App