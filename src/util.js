export const filterFileList = data => {
  data.map((item, index) => {
    item.id = index
    item.isSelect = false
  })
  return data
}

export const createName = (str, start) => {
  let strLength = str.length
  let zeros = ''
  for(let index = 0; index < strLength; index++){
    zeros += '0'
  }
  zeros += String(start)
  return zeros.slice(0 - strLength)
}