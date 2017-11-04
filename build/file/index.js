const fs = require('fs')

const readDirList = path => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      let fileInfoList = []
      files.map(item => {
        let filePath = path + '/'
        let fileInfo = fs.statSync(filePath + item)
        fileInfoList.push({
          name: item,
          isDirectory: fileInfo.isDirectory(),
          size: fileInfo.size,
          mtime: fileInfo.mtime
        })
      })
      resolve(fileInfoList)
    })
  })
}

module.exports = readDirList