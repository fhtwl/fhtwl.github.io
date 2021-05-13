# 进入生成的文件夹 编译成静态文件
# vuepress build docs
npm run docs:build

# 保存所有的修改
echo "执行命令：git add -A"
git add -A 

# 把修改的文件提交
echo "执行命令：commit -m 'deploy'"
git commit -m 'deploy'

# 发布到 git@github.com:fhtwl/boke.git
git push -f git@github.com:fhtwl/boke.git master

# 源码发布成功
echo "源码发布成功"

####################

# 进入生成的文件夹
echo "执行命令：cd ./docs/.vuepress/dist\n"
cd ./docs/.vuepress/dist

# 初始化一个仓库，仅仅是做了一个初始化的操作，项目里的文件还没有被跟踪
echo "执行命令：git init\n"
git init

# 保存所有的修改
echo "执行命令：git add -A"
git add -A

# 把修改的文件提交
echo "执行命令：commit -m 'deploy'"
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:fhtwl/fhtwl.github.io.git master
git push -f git@github.com:fhtwl/fhtwl.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/<USERNAME>/<REPO>.git master:gh-pages

# 编译文件提交成功
echo "编译文件提交成功"

# 返回到上一次的工作目录
echo "回到刚才工作目录"
cd -