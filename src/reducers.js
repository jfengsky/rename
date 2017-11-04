import { CHANGE_FILE_LIST } from './action'

const initialState = {
  fileList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILE_LIST:
      return Object.assign({}, state, {
        fileList: action.value
      })
    default:
      return state
  }
}