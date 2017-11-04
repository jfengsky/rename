import React, { Component } from 'react'
import { connect } from 'react-redux'
import Thead from '../container/Thead'

class FileList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let {
      fileList
    } = this.props
    return (
      <table className="am-table am-table-striped am-table-hover">
        <Thead />
        <tbody>
          {
            !!fileList.length && fileList.map(({ name, size, isDirectory, mtime }, index) => {
              return (
                <tr key={index}>
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
    )
  }
  formatSize = data => {
    let tempSize = ''
    let kb = data / 1024
    let mb = data / 1024 * 1024
    if (kb < 1) {
      return data + 'B'
    } else if (kb >= 1 && kb < 1024) {
      return Math.floor(kb) + 'KB'
    } else if (kb >= 1024) {
      if( mb >= 1 && mb < 1024){
        return Math.floor(kb) + 'MB'
      } else {
        // return Math.floor(mb) + 'MB'
      }
    }
  }

  formatDate = data => {
    return data.split('T')[0]
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    fileList: state.fileList
  }
}
export default connect(mapStateToProps)(FileList)