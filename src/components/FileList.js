import React, { Component } from 'react'
import { connect } from 'react-redux'

import { change_selected, change_file_list } from '../action'

class FileList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileList: props.fileList
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      fileList: nextProps.fileList
    })
  }

  render() {
    let {
      fileList
    } = this.state
    return (
      <table className="am-table am-table-striped am-table-hover">
        <thead>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              文件/目录名
            </td>
            <td>
              新文件名
            </td>
            <td>
              大小
            </td>
            <td>
              修改日期
            </td>
          </tr>
        </thead>
        <tbody>
          {
            !!fileList.length && fileList.map(({ name, size, isDirectory, mtime, isSelect, id, newName, exName }, index) => {

              let fullReName = ''
              if (newName && exName) {
                fullReName = `${newName}.${exName}`
              }
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" value={isSelect} onClick={this.clickHandlerToggle.bind(this, id)} />
                  </td>
                  <td>
                    {isDirectory && <a href="###">{name}</a>}
                    {!isDirectory && <span>{name}</span>}
                  </td>
                  <td>{fullReName}</td>
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
    let kb = data / 1024
    let mb = kb / 1024
    let gb = mb / 1024
    if (kb < 1) {
      return data + 'B'
    } else if (kb >= 1 && kb < 1024) {
      return Math.floor(kb) + 'KB'
    } else if (kb >= 1024) {
      if (mb >= 1 && mb < 1024) {
        return Math.floor(mb) + 'MB'
      } else if (mb >= 1024) {
        return Math.floor(gb) + 'GB'
      }
    }
  }

  formatDate = data => {
    return data.split('T')[0]
  }

  clickHandlerToggle = id => {
    let {
      fileList,
      selectList
    } = this.props
    fileList.map(item => {
      if (item.id === id) {
        item.isSelect = !item.isSelect
      }
    })

    this.props.upFileList(fileList)

    let tempSelectList = []
    fileList.map(item => {
      if (item.isSelect) {
        tempSelectList.push(item)
      }
    })
    this.props.upSelected(tempSelectList)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    fileList: state.fileList,
    selectList: state.selectList
  }
}
const mapDispatchToProps = dispatch => ({
  upSelected: data => {
    dispatch(change_selected(data))
  },
  upFileList: data => {
    dispatch(change_file_list(data))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(FileList)