const fs = require('fs')

// const readDirList = async path => {
//   debugger
//   const files= await fs.readdir(path)
//   debugger
// }


const readDirList = path => {
  return new Promise((resolve,reject) => {
    fs.readdir(path, (err, files) => {
      debugger
    })
  })
}
module.exports = readDirList