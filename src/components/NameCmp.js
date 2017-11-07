import React, { Component } from 'react'
import { connect } from 'react-redux'
import { change_selected } from '../action'
import { createName } from '../util'
import { FETCH_RENAME } from '../store/request'

class NameCmp extends Component {
  render() {
    return (
      <div className="am-g" >
        <div className="am-form-group am-u-sm-6">
          <input type="text" className="am-form-field" onChange={this.handleChange} placeholder="输入新的文件名" />
        </div>
        <div className="am-form-group am-u-sm-2">
          <input type="text" className="am-form-field" onChange={this.handleExChange} placeholder="输入新的扩展名" />
        </div>
        <div className="am-form-group ">
          <button className="am-btn am-btn-warning" onClick={this.handleClickRename}>修改</button>
        </div>
      </div>
    )
  }

  handleChange = e => {
    let {
      selectList
    } = this.props
    let value = e.target.value.trim()
    if (value) {
      let regList = value.match(/([A-Za-z]+|(\#)+)/g)
      if (regList && regList.length && selectList.length) {
        selectList.map((selItem, selIndex) => {
          let newName = ''
          regList.map((item, index) => {
            if (/\#/g.test(item)) {
              newName += createName(item, selIndex)
            } else {
              newName += item
            }
          })
          selItem.newName = newName
        })
      }
      this.props.upSelected(selectList)
    }
  }

  handleExChange = e => {
    let {
      selectList
    } = this.props
    let value = e.target.value.trim()
    if (value && selectList.length) {
      selectList.map(item => {
        item.exName = value
      })
      this.props.upSelected(selectList)
    }
  }

  handleClickRename = e => {
    let {
      selectList
    } = this.props
    let param = []
    selectList.map(({ name, newName, exName }) => {
      param.push({
        name: name,
        rename: `${newName}.${exName}`
      })
    })
    FETCH_RENAME({
      path: this.props.filePath,
      list: param
    }).then(data => {
      window.location.reload()
    })
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    selectList: state.selectList,
    filePath: state.filePath
  }
}
const mapDispatchToProps = dispatch => ({
  upSelected: data => {
    dispatch(change_selected(data))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(NameCmp)