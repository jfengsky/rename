const fs = require('fs')
const reName = data => {
  return new Promise((resolve, reject) => {
    let {
      path: filePath,
      list
    } = data
    list.map(item => {
      fs.renameSync(filePath + '\\' + item.name, filePath + '\\' + item.rename)
    })
    resolve({data: 'success'})
  })
}

module.exports = reName