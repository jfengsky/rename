import { CHANGE_FILE_LIST, CHANGE_SELECTED, CHANGE_PATH } from './action'

const initialState = {
  filePath: '',
  fileList: [],
  selectList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILE_LIST:
      return Object.assign({}, state, {
        fileList: [...action.value]
      })
    case CHANGE_SELECTED:
      return Object.assign({}, state, {
        selectList: [...action.value]
      })
    case CHANGE_PATH:
      return Object.assign({}, state, {
        filePath: action.value
      })
    default:
      return state
  }
}