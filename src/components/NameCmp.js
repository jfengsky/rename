import React, { Component } from 'react'

class NameCmp extends Component {
  render() {
    return (
      <div className="am-form" >
        <div className="am-form-group">
          <input type="text" className="am-form-field" placeholder="输入新的文件名" />
        </div>
        <div className="am-form-group">
          <button className="am-btn am-btn-warning">修改</button>
        </div>
      </div>
    )
  }
}

export default NameCmp