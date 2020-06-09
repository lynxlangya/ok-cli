# ok-cli

```yaml
# 创建项目
mkdir ok-cli

# 执行 init
npm init
```

## 安装依赖

```yaml
# chalk
npm install chalk

# commander
npm install commander

# download-git-repo
npm install download-git-repo

# inquirer
npm install inquirer

# ora
npm install ora
```

## 修改 package.json

```js
"bin": {
  "ok": "bin/ok.js",
  "ok-add": "bin/ok-add.js",
  "ok-delete": "bin/ok-delete.js",
  "ok-init": "bin/ok-init.js",
  "ok-list": "bin/ok-list.js"
},
```

## 绑定命令

```yaml
# 执行绑定
npm link

# 解除绑定命令 (提示)
npm unlink
```

## 看看代码, 完事

## add

```yaml
ok add

$ 输入模板名称: 随意
$ 输入模板地址: 可以先用 (wangdaoo/el-filter);

模板地址格式:
github用户名/项目
```

> 删除, 列表 没必要讲!

## init

```yaml
# 演示
ok init dao test

格式:
ok init 模板名称 项目路径
```
