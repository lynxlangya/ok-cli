#!/usr/bin/env node

/**修改控制台字符串样式 */
const chalk = require('chalk')

const ora = require('ora')

/**下载 */
const download = require('download-git-repo')
const { program } = require('commander')

/**读取根目录下的 template.json */
const temObj = require(`${__dirname}/../template`)

program
  .usage('<template-name> [project-name]')
program.parse(process.argv)

/**没有输入时 */
if (program.args.length < 1) return program.help()

let temName = program.args[0]
let objName = program.args[1]

if (!temObj[temName]) {
  console.log(chalk.red('\n 模板不能为空 \n'))
  return
}
if (!objName) {
  console.log(chalk.red('\n 你秀到我了, 空项目? \n'))
  return
}

url = temObj[temName]

console.log(chalk.white('\n SHOW TIME! \n'))

/**加载图标亮起来 */
const spinner = ora("Downloading...")

spinner.start()

/**执行下载 */
download(
  url,
  objName,
  err => {
    if (err) {
      spinner.fail()
      console.log(chalk.red(`oh My God! 歇菜了, 看看错误: \n ${err}`))
      return
    }
    
    /**结束图标 */
    spinner.succeed()
    console.log(chalk.green('\n NICE! \n'))
    console.log(chalk.gray('\n oh my love~~~'))
    console.log(`\n cd ${objName} \n`)
  }
)