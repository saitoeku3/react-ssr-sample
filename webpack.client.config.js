'use strict'

const { resolve } = require('path')
const { smart } = require('webpack-merge');
const commmon = require('./webpack.config')

const config = process.env.NODE_ENV === 'production'
  ? require('./webpack.client.prod.config')
  : require('./webpack.client.dev.config')

const base = {
  output: {
    path: resolve('dist', 'client')
  }
}

module.exports = smart(commmon, base, config)
