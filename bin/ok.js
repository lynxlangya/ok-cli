#!/usr/bin/env node

const program = require('commander')

// 定义指令

program
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('add', 'add a new template')
  .command('delete', 'delete a template')
  .command('list', 'list all the templates')
  .command('init', 'generate a new project from a template')

program.parse(process.argv)