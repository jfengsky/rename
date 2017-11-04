import React, { Component } from 'react'

import Paths from './components/Paths'
import NameCmp from './components/NameCmp'
import FileList from './components/FileList'


import { FETCH_FILE_LIST } from './store/request'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: []
    }
  }

  componentDidMount() {
    // let path = './'
    // FETCH_FILE_LIST(path).then( data => {
    //   this.setState({
    //     fileList: data
    //   })
    // })
  }

  render() {
    let {
      fileList
    } = this.state
    return (
      <section className="am-container">
        <Paths />
        <NameCmp />
        <FileList />
      </section>
    );
  }

  
}

export default App