#!/usr/bin/env node

/**交互式命令行 */
const inquirer = require('inquirer')

/**修改控制台字符串样式 */
const chalk = require('chalk')

/**node 内置文件模块 */
const fs = require('fs')

/**读取根目录下的 template.json */
const temObj = require(`${__dirname}/../template`)

/**自定义交互问题 */
let question = [
  {
    name: 'name',
    type: 'input',
    message: '输入模板名称, 宝贝儿~',
    validate (v) {
      if (v === '') {
        return '输入模板名称! 有点憨啊你~'
      } else if (temObj[v]) {
        return '乖乖, 别整重名了啊! 你太难了'
      } else {
        return true
      }
    }
  },
  {
    name: 'url',
    type: 'input',
    message: '输入模板地址, 宝贝儿~',
    validate (v) {
      if (v === '') return '你倒是输入啊你!'
      else return true
    }
  }
]

inquirer
  .prompt(question).then(data => {
    /**data 憨仔输入的对象 */
    let { name, url } = data

    /**过滤 unicode 字符串 */
    temObj[name] = url.replace(/[\u0000-\u0019]/g, '')

    /**把模板信息写入 template.json 中 */
    fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(temObj), 'utf-8', err => {
      if (err) console.error(err)
      console.log('\n')
      console.log(chalk.green('好小子, 干的漂亮 \n'))
      console.log(chalk.grey('往下瞅: \n'))
      console.log(temObj)
      console.log('\n')
    })
  }
)