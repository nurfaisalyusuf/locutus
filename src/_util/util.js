var glob = require('glob')
var path = require('path')
var fs = require('fs')
var async = require('async')
var YAML = require('js-yaml')
var mkdirp = require('mkdirp')
var _ = require('lodash')

function Util (config) {
  // Overwrite properties with config
  for (var k in config) {
    this[k] = config[k]
  }
}

// Should be overridden by a more sofisticated function
// such as cli.debug when run in node.js
Util.prototype.debug =
Util.prototype.info =
Util.prototype.ok = function (a) {
  console.error(a)
}
Util.prototype.error = function (a) {
  console.error(a)
  return false
}
Util.prototype.fatal = function (a) {
  this.error(a)
  process.exit(1)
}

// Should be overridden by a more sofisticated function
// such as assert.deepEqual when run in node.js
Util.prototype.equal = function (a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}

// Environment-specific file opener. function name needs to
// be translated to code. The difficulty is in finding the
// category.
Util.prototype.opener = function (fileOrName, requesterParams, cb) {
  var self = this
  var pattern

  var language = requesterParams.language || '*'

  if (path.basename(fileOrName, '.js').indexOf('.') !== -1) {
    // unicode.utf8.RuneCountInString or strings.sprintf
    pattern = self.__src + '/' + language + '/' + fileOrName.replace(/\./g, '/') + '.js'
  } else if (fileOrName.indexOf('/') === -1) {
    // sprintf
    pattern = self.__src + '/' + language + '/*/' + fileOrName + '.js'
  } else {
    // php/strings/sprintf
    pattern = fileOrName
  }

  pattern = pattern.replace('golang/strings/Index.js', 'golang/strings/Index2.js')

  self.debug('loading: ' + pattern)

  glob(pattern, {}, function (err, files) {
    if (err) {
      return self.error('Could not glob for ' + pattern + '. ' + err)
    }

    if (files.length !== 1) {
      return cb(new Error('Found ' + files.length + ' occurances of ' + fileOrName + ' via pattern: ' + pattern))
    }

    var filepath = files[0]

    if (path.basename(filepath) === 'index.js') {
      return cb(null)
    }

    if (!filepath) {
      return cb(new Error('Could not find ' + pattern))
    }

    fs.readFile(filepath, 'utf-8', function (err, code) {
      if (err) {
        return cb(new Error('Error while opening ' + filepath + '. ' + err))
      }
      return cb(null, filepath, code)
    })
  })
}

Util.prototype.injectweb = function (args, options) {
  var self = this
  var pattern = self.__src + '/**/*.js'

  self.glob(pattern, function (err, params, file) {
    if (err) {
      return self.error('Could not glob for ' + pattern + '. ' + err)
    }

    var authors = {}
    var keys = ['original by', 'improved by', 'bugfixed by', 'revised by', 'input by']
    keys.forEach(function (key) {
      if (params.headKeys[key]) {
        authors[key] = _.flattenDeep(params.headKeys[key])
      }
    })

    var webfuncPath = self.__root + '/website/_functions/' + params.language + '/' + params.category + '/' + params.func_name + '.html'
    var data = {
      warning: 'This file is auto generated by `npm run web:inject`, do not edit by hand',
      examples: (params.headKeys.example || []).map(function (lines, i) { return lines.join('\n') }),
      returns: (params.headKeys.returns || []).map(function (lines, i) { return lines.join('\n') }),
      dependencies: [],
      authors: authors || {},
      notes: (params.headKeys.note || []).map(function (lines, i) { return lines.join('\n') }),
      layout: 'function',
      function: params.func_name,
      category: params.category,
      language: params.language,
      permalink: params.language + '/' + params.category + '/' + params.func_name + '/',
      redirect_from: [
        '/functions/' + params.language + '/' + params.func_name + '/',
        '/functions/' + params.category + '/' + params.func_name + '/',
        '/' + params.language + '/' + params.func_name + '/'
      ]
    }

    if (params.language === 'php') {
      data.redirect_from.push('/functions/' + params.func_name + '/')
    }

    try {
      var yml = YAML.safeDump(data).trim()
    } catch (e) {
      console.log(data)
      throw new Error('Unable to form valid YAML of above data. ' + e)
    }
    var buf = '---' + '\n' + yml + '\n' + '---' + '\n'

    buf += params.code

    mkdirp(path.dirname(webfuncPath), function (err) {
      if (err) {
        throw new Error('Could not mkdir  for ' + webfuncPath + '. ' + err)
      }
      fs.writeFileSync(webfuncPath, buf)
    })
  })
}

Util.prototype.glob = function (pattern, workerCb) {
  var bailed = false
  var self = this
  glob(pattern, {}, function (err, files) {
    if (bailed) {
      return
    }
    if (err) {
      bailed = true
      return workerCb(err)
    }
    var names = []
    for (var i in files) {
      var file = files[i]
      var name = path.basename(file, '.js')
      if (file.indexOf('/_') === -1 && name !== 'index') {
        names.push({name: name, file: file})
      }
    }
    names.forEach(function (props) {
      self.load(props.file, {}, function (err, params) {
        if (err) {
          bailed = true
          return workerCb(err)
        }

        return workerCb(null, params, props.file)
      })
    })
  })
}

Util.prototype.writetests = function (args, options) {
  var self = this
  var pattern = self.__src + '/' + options.language + '/' + options.category.replace(/\./g, '/') + '/' + options.name + '.js'

  var q = async.queue(self._writeTest.bind(self), 1)
  q.drain = function () {
    self.info('Written all language tests.')
  }

  self.glob(pattern, function (err, params, file) {
    if (err) {
      return self.error('Could not glob for ' + pattern + '. ' + err)
    }

    q.push(params)
  })
}

Util.prototype._commentBlocks = function (code) {
  var cnt = 0
  var comment = []
  var commentBlocks = []
  var i = 0
  var lines = []
  var raise = false
  for (i in (lines = code.replace('\r', '').split('\n'))) {
    // Detect if line is a comment, and return the actual comment
    if ((comment = lines[i].match(/^\s*(\/\/|\/\*|\*)\s*(.*)$/))) {
      if (raise === true) {
        cnt = commentBlocks.length
        raise = false
      }
      if (!commentBlocks[cnt]) {
        commentBlocks[cnt] = {clean: [], raw: []}
      }

      commentBlocks[cnt].clean.push(comment[2].trim())
      commentBlocks[cnt].raw.push(lines[i])
    } else {
      raise = true
    }
  }

  return commentBlocks
}

Util.prototype._headKeys = function (headLines) {
  var i
  var keys = {}
  var match = []
  var dmatch = []
  var key = ''
  var val = ''
  var num = 0

  for (i in headLines) {
    if (!(match = headLines[i].match(/^\s*\W?\s*([a-z\ 0-9]+)\s*:\s*(.*)\s*$/))) {
      continue
    }
    key = match[1]
    val = match[2]

    if ((dmatch = key.match(/^(\w+)\s+(\d+)$/))) {
      // Things like examples and notes can be grouped
      key = dmatch[1]
      num = dmatch[2] - 1
    } else {
      num = 0
    }

    if (!keys[key]) {
      keys[key] = []
    }
    if (!keys[key][num]) {
      keys[key][num] = []
    }
    keys[key][num].push(val)
  }

  return keys
}

Util.prototype._loadDependencies = function (fileOrName, requesterParams, dependencies, cb) {
  var self = this

  if (!requesterParams.headKeys['depends on'] || !requesterParams.headKeys['depends on'].length) {
    if (cb) {
      cb(null, {})
    }
    return
  }

  var i
  var depCodePath
  var loaded = 0
  for (i in requesterParams.headKeys['depends on']) {
    depCodePath = requesterParams.headKeys['depends on'][i][0]

    self.load(depCodePath, requesterParams, function (err, params) {
      if (err) {
        return cb(err)
      }

      dependencies[depCodePath] = params
      self._loadDependencies(depCodePath, params, dependencies)

      if (cb && ++loaded === requesterParams.headKeys['depends on'].length) {
        cb(null, dependencies)
      }
    })
  }
}

Util.prototype.parse = function (filepath, code, cb) {
  if (!code) {
    return cb(new Error('Unable to parse ' + filepath + '. Received no code'))
  }

  if (filepath.indexOf('/') === -1) {
    return cb(new Error('Parse only accepts relative filepaths. Received: -\'' + filepath + '\''))
  }

  var parts = filepath.split('/')
  var language = parts.shift()
  // var filepath = parts.join('/')
  var codepath = parts.join('.')
  var name = parts.pop()
  var category = parts.join('.')

  // console.log({
  //   filepath: filepath,
  //   parts: parts,
  //   language: language,
  //   codepath: codepath,
  //   name: name,
  //   category: category
  // })

  var patFuncStart = /^\s*module\.exports = function\s*([^\s)]+)\s*\(([^\)]*)\)\s*\{\s*/i
  var patFuncEnd = /\s*}\s*$/
  var commentBlocks = this._commentBlocks(code)

  if (!commentBlocks[0]) {
    return cb(new Error('Unable to parse ' + filepath + '. Did not find any comment blocks in: ' + code))
  }

  var head = commentBlocks[0].raw.join('\n')
  var body = code.replace(head, '')
  body = body.replace(patFuncStart, '')
  body = body.replace(patFuncEnd, '')
  var headKeys = this._headKeys(commentBlocks[0].clean)

  // Parse fucntion signature
  var funcSigMatch = code.match(patFuncStart)
  if (!funcSigMatch) {
    return cb(new Error('Unable to parse ' + name))
  }

  var params = {
    headKeys: headKeys,
    body: body,
    head: head,
    name: name,
    filepath: filepath,
    codepath: codepath,
    code: code,
    language: language,
    category: category,
    func_signature: funcSigMatch[0],
    func_name: funcSigMatch[1],
    func_arguments: funcSigMatch[2].split(/,\s*/),
    commentBlocks: commentBlocks
  }

  this._loadDependencies(filepath, params, {}, function (err, dependencies) {
    if (err) {
      return cb(err)
    }

    params.dependencies = dependencies
    return cb(null, params)
  })
}

Util.prototype.loadMultiple = function (paths, cb) {
  var self = this
  var paramsMultiple = {}
  var loaded = 0
  for (var i in paths) {
    var path = paths[i]
    self.load(path, {}, function (err, params) {
      if (err) {
        return cb(err)
      }

      paramsMultiple[params.path] = params

      if (++loaded === paths.length) {
        // console.log('loaded: ' + path)
        // console.log(paramsMultiple)
        return cb(null, paramsMultiple)
      }
    })
  }
}

Util.prototype.load = function (fileOrName, requesterParams, cb) {
  var self = this
  self.opener(fileOrName, requesterParams, function (err, fullpath, code) {
    if (err) {
      return cb(err)
    }

    var filepath = path.relative(self.__src, fullpath)
    // console.log({
    //   src: self.__src,
    //   fullpath: fullpath,
    //   filepath: filepath
    // })

    self.parse(filepath, code, cb)
  })
}

Util.prototype._writeTest = function (params, cb) {
  var self = this

  if (!params.func_name) {
    throw new Error('No func_name in ' + JSON.stringify(params))
  }
  if (!params.headKeys) {
    throw new Error('No headKeys in ' + params.func_name)
  }
  if (!params.headKeys.example) {
    throw new Error('No example in ' + params.func_name)
  }

  var testProps = ''
  if (params.headKeys.test) {
    testProps = params.headKeys.test[0][0]
  }

  var describeSkip = ''
  if (testProps.indexOf('skip-all') !== -1) {
    describeSkip = '.skip'
  }

  var codez = []

  for (var global in self.globals) {
    codez.push(global + ' = ' + self.globals[global] + '')
  }

  // Not ideal: http://stackoverflow.com/questions/8083410/how-to-set-default-timezone-in-node-js
  codez.push('process.env.TZ = \'UTC\'')

  codez.push('window.window' + ' = window')

  codez.push('var ' + 'expect' + ' = require(\'chai\').expect')
  if (params.language === 'php') {
    codez.push('var ' + 'ini_set' + ' = require(\'' + self.__src + '/' + 'php/info/ini_set' + '\')')
    codez.push('var ' + 'ini_get' + ' = require(\'' + self.__src + '/' + 'php/info/ini_get' + '\')')
    if ([ 'array_search' ].indexOf(params.func_name) !== -1) {
      codez.push('var ' + 'array' + ' = require(\'' + self.__src + '/' + 'php/array/array' + '\')')
    }
  }
  codez.push('var ' + params.func_name + ' = require(\'' + self.__src + '/' + params.filepath + '\')')

  codez.push('')

  codez.push('describe' + describeSkip + '(\'' + params.language + '.' + params.codepath + '\', function () {')
  // codez.push('  describe(\'' + params.category + '\', function () {')
  // codez.push('    describe' + params. + '(\'' + params.func_name + '\', function () {')

  // Run each example
  for (var i in params.headKeys.example) {
    if (!params.headKeys.returns[i] || !params.headKeys.returns[i].length) {
      throw new Error('There is no return for example ' + i, test, params)
    }

    var humanIndex = parseInt(i, 10) + 1
    var itSkip = ''
    if (testProps.indexOf('skip-' + humanIndex) !== -1) {
      itSkip = '.skip'
    }

    codez.push('  it' + itSkip + '(\'should pass example ' + (humanIndex) + '\', function (done) {')

    codez.push('    ' + params.headKeys.example[i].join('\n' + '    '))

    var testExpected = params.headKeys.returns[i].join('\n')

    codez.push('    var expected = ' + testExpected + '')

    // Execute line by line (see date.js why)
    // We need result be the last result of the example code
    for (var j in params.headKeys.example[i]) {
      var testRun = params.headKeys.example[i][j]

      if (+j === params.headKeys.example[i].length - 1) {
        // last action gets saved
        codez.push('    var result = ' + testRun + '')
      } else {
        codez.push(testRun + '')
      }
    }

    codez.push('    expect(result).to.deep.equal(expected)')
    codez.push('    done()')
    codez.push('  })')
  }

  // codez.push('    })')
  // codez.push('  })')
  codez.push('})')

  var code = codez.join('\n')
    .replace(/window\.setTimeout/g, 'setTimeout')

  var basename = path.basename(params.filepath)
  var subdir = path.dirname(params.filepath)
  var testpath = this.__test + '/languages/' + subdir + '/test-' + basename
  var testdir = path.dirname(testpath)
  mkdirp(testdir, function (err) {
    if (err) {
      throw new Error(err)
    }
    self.debug('writing: ' + testpath)
    fs.writeFile(testpath, code, 'utf-8', cb)
  })
}

module.exports = Util
