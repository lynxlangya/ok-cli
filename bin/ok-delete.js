#!/usr/bin/env node

/**交互式命令行 */
const inquirer = require('inquirer')

/**修改控制台字符串样式 */
const chalk = require('chalk')

/**node 内置文件模块 */
const fs = require('fs')

/**读取根目录下的 template.json */
const temObj = require(`${__dirname}/../template`)

/**删除问题 */
let question = [
  {
    name: 'name',
    type: 'input',
    message: '你要删除撒子?',
    validate (v) {
      if (v === '') {
        return '那你是删不删?'
      } else if (!temObj[v]) {
        return '鸡毛操作? 没找到'
      } else return true
    }
  }
]

inquirer
  .prompt(question).then(data => {
    let { name } = data
    delete temObj[name]

    /**跟新template.json文件 */
    fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(temObj), 'utf-8', err => {
      if (err) console.error(err)
      console.log('\n')
      console.log(chalk.green('删啦, 删啦. 得劲 \n'))
      console.log(chalk.red('就剩这点啦! \n'))
      console.log(temObj)
      console.log('\n')
    })
  })