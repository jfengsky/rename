import React, { Component } from 'react'
import Thead from './container/Thead'
import Paths from './components/Paths'
import NameCmp from './components/NameCmp'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: []
    }
  }

  componentDidMount() {
    let path = './'
    fetch(`/path?path=${path}`)
      .then(data => data.json())
      .then(json => {
        this.setState({
          fileList: json
        })
      })
  }

  render() {
    let {
      fileList
    } = this.state
    return (
      <section className="am-container">
        <Paths />
        <NameCmp />
        <table className="am-table am-table-striped am-table-hover">
          <Thead />
          <tbody>
            {
              !!fileList.length && fileList.map(({ name, size, isDirectory, mtime }) => {
                return (
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      {isDirectory && <a href="###">{name}</a>}
                      {!isDirectory && <span>{name}</span>}
                    </td>
                    <td>
                      {!isDirectory && <span>{this.formatSize(size)}</span>}
                    </td>
                    <td>
                      {this.formatDate(mtime)}
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </section>
    );
  }

  handlerClick = e => {
    this.setState({
      title: 'webpack clicked'
    });
  }

  formatSize = data => {
    let tempSize = ''
    let kb = data / 1024
    if (kb < 1) {
      return data + 'B'
    } else if (kb >= 1 && kb < 1024) {
      return Math.floor(kb) + 'KB'
    } else if (kb >= 1024) {
      // let mb = kb / 1024
      // if(){

      // }
    }
  }

  formatDate = data => {
    return data.split('T')[0]
  }
}

export default App