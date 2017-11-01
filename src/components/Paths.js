import React, { Component } from 'react'
import { connect } from 'react-redux'

class Paths extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="am-form" >
        <div className="am-form-group">
          <input type="text" className="am-form-field" placeholder="输入目录" />
        </div>
        <div className="am-form-group">
          <button className="am-btn am-btn-primary">确定</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    path: state.path,
    fileList: state.fileList
  }
}

export default connect(mapStateToProps)(Paths)