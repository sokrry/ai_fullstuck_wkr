# git 大厂代码提交代码原则

- 开发目录
    PWD 当前的目录地址 一切皆文件
    git init 
    初始化代码目录为代码仓库
    - 反馈成功初始化一个代码仓库
        git 仓库不能嵌套
        .git 文件夹 仓库的秘密，不要去动它
        默认 master/main 主分支
        HEAD 指针指向第一次提交
        暂存区和仓库两部分
- 本地代码仓库
- git 是一个版本控制系统，开源
    仓库里面放的文件的多个版本
- 为什么把一个文件添加到仓库需要
    git add 
    git commit 两步呢？
    严格的代码提交
    git add 添加一个文件/修改  文件
    html css js 三个文件一起构成 一次任务， login页面
    的开发
    git commit -m ‘login页开发完成’
    1: n 仓库 
    git add 把文件添加进暂存区 stage
    git commit 仓库了

- git 是一个分布式的
    本地仓库
    远程仓库
    合作伙伴的仓库

- 严格
    在做代码提交之前一定要人间清醒
    当前的修改和上一次的修改 改了哪 些地方,
    git diff 比较修改 在提交前 用

- commit -m ''  不能乱写，写清楚完成了什么任务
    - leader 以后就看-m 后的东西了解 我们的工作
- git status 随时了解暂存仓库的状态

- git log
    git log --oneline,简短打印
    打印所有的提交
    唯一的ID hash
    HEAD 指针， 只想目前的最后一次提交
    master 代表分支 main


- 可以通过git reset 快速来到任务一个版本
    version control 秒懂了 ， 小猪

- git reset --hard id 可以让我们拥有时光机
    git reglog  查看所有操作记录

- changes + untraked
改变项 + 未追踪e
