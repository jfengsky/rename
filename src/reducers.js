import { CHANGE_PATH, change_path } from './action'

const initialState = {
  path: './',
  fileList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PATH':
      return Object.assign({}, state, {
        path: action.value
      })
    default:
      return state
  }
}