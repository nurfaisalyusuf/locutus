#!/usr/bin/env node
var cli = require('cli').enable('status', 'help', 'version', 'glob', 'timeout')
var path = require('path')
var Util = require('./util')
var equal = require('deep-equal')
// var fs = require('fs')
// var _ = require('underscore')

// --debug works out of the box. See -h
cli.parse({
  action: ['a', 'Test / Build', 'string', 'test'],
  name: ['n', 'Function name to test', 'path', '*'],
  category: ['c', 'Category to test', 'path', '*'],
  language: ['l', 'Language to test', 'path', '*'],
  abort: ['a', 'Abort on first failure']
})

var util = new Util({
  debug: cli.debug,
  error: cli.error,
  fatal: cli.fatal,
  info: cli.info,
  ok: cli.ok,
  equal: equal,
  __src: path.dirname(__dirname),
  __root: path.dirname(path.dirname(__dirname)),
  __test: path.dirname(path.dirname(__dirname)) + '/test',
  globals: {
    'XMLHttpRequest': '{}',
    'window': '{' +
      'window: {},' +
      'document: {' +
        'lastModified: 1388954399,' +
        'getElementsByTagName: function(){return [];}' +
      '},' +
      'location: {' +
        'href: ""' +
      '}' +
    '}'
  }
})

cli.main(function (args, options) {
  util[options.action](args, options)
})
