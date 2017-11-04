const createAction = (name, data) => ({
  type: name,
  value: data
})

export const CHANGE_FILE_LIST = 'CHANGE_FILE_LIST'
export const change_file_list = data => createAction(CHANGE_FILE_LIST, data)