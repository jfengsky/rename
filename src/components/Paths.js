import path from 'path'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FETCH_FILE_LIST } from '../store/request'

import { change_file_list } from '../action'

class Paths extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="am-form" >
        <div className="am-form-group">
          <input type="text" className="am-form-field" ref='pathName' defaultValue="F:\q30\w" placeholder="输入目录" />
        </div>
        <div className="am-form-group">
          <button className="am-btn am-btn-primary" onClick={this.changePath}>确定</button>
        </div>
      </div>
    )
  }

  changePath = e => {
    let newPath = this.refs.pathName.value.trim()
    if(newPath){
      FETCH_FILE_LIST(newPath).then(data => {
        this.props.upFileList(data)
      })
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => ({
  upFileList: path => {
    dispatch(change_file_list(path))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Paths)