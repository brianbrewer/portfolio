var Metalsmith = require('metalsmith')
var Handlebars = require('handlebars')

var markdown = require('metalsmith-markdown')
var layouts = require('metalsmith-layouts')
var assets = require('metalsmith-assets')
var rootPath = require('metalsmith-rootpath')
var collections = require('metalsmith-collections')
var permalinks = require('metalsmith-permalinks')
var pagination = require('metalsmith-pagination')
var snippet = require('metalsmith-snippet')
var tags = require('metalsmith-tags')
var sass = require('metalsmith-sass')
var wordcount = require('metalsmith-word-count')

var sitemap = require('metalsmith-sitemap')
var define = require('metalsmith-define')

Handlebars.registerHelper('debug', function () {
  var args = []
  var i = 0
  for (; i < arguments.length - 1; i++) {
    args.push(arguments[i])
  }
  console.log(args)
})

Handlebars.registerHelper('encode', function (string) {
  return encodeURIComponent(string)
})

var _sitename = 'Brian Brewer'
var _url = 'http://localhost:8080'

// Build site
Metalsmith(__dirname)
  .use(define({
    site: {
      name: _sitename,
      url: _url
    }
  }))
  .use(markdown())
  .use(assets({
    source: './src/assets',
    destination: './assets'
  }))
  .use(sass({
    outputDir: 'assets/css/',
    outputStyle: 'expanded'
  }))
  .use(collections({
    post: {
      sortBy: 'date',
      reverse: true,
      pattern: 'posts/*/*.html'
    },
    work: {
      sortBy: 'date',
      reverse: true,
      pattern: 'work/*.html'
    }
  }))
  .use(tags({
    handle: 'tags',
    path: 'tags/:tag/index.html',
    pathPage: 'tags/:tag/:num/index.html',
    perPage: 5,
    layout: './blog.hbs',
    sortBy: 'date',
    reverse: true,
    skipMetadata: true
  }))
  .use(pagination({
    'collections.post': {
      perPage: 5,
      layout: 'blog.hbs',
      first: 'blog/index.html',
      path: 'blog/:num/index.html',
      pageMetadata: {
        title: 'Blog',
        listTitle: 'Latest Blog Posts',
        listSingular: 'Post',
        listPlural: 'Posts'
      }
    }
  }))
  .use(permalinks({
    pattern: ':collection/:date/:title',
    relative: true
  }))
  .use(rootPath())
  .use(snippet({
    maxLength: 500,
    suffix: '...'
  }))
  .use(wordcount())
  .use(layouts({
    engine: 'handlebars',
    directory: './layouts',
    partials: './layouts/partials',
    pattern: '**/*.html'
  }))
  .use(sitemap({
    hostname: _url
  }))
  .destination('./build')
  .build(function (err) {
    if (err) {
      console.log('Error:', err)
    } else {
      console.log('Success!')
    }
  }
)
