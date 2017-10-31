// 基本依赖
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config.dev')
const readDirList = require('./file')
const port = 3400

const app = express()
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

app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`listen at http://localhost:${port}`)
})