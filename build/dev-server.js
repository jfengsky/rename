// 基本依赖
const express = require('express')
const webpack = require('webpack')
const bodyParser = require('body-parser')
const config = require('./webpack.config.dev')
const readDirList = require('./file')
const reName = require('./file/reName')
const port = 3400

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const compiler = webpack(config)
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true,
    chunks: false
  }
})

app.use(devMiddleware)

app.route('*').get( async (req, res, next) => {
  let data = await readDirList(req.query.path)
  res.send(data)
})

app.route('*').post( async (req, res) => {
  let data = await reName(req.body)
  res.send(data)
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`listen at http://localhost:${port}`)
})