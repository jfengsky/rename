const createAction = (name, data) => ({
  type: name,
  value: data
})

export const CHANGE_FILE_LIST = 'CHANGE_FILE_LIST'
export const change_file_list = data => createAction(CHANGE_FILE_LIST, data)

export const CHANGE_SELECTED = 'CHANGE_SELECTED'
export const change_selected = data => createAction(CHANGE_SELECTED, data)

export const CHANGE_PATH = 'CHANGE_PATH'
export const change_path = path => createAction(CHANGE_PATH, path)