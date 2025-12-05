# 安装 Python

:::warning 注意
没有安卓笔记本，这里不做教学，只教苹果人
:::

:::info 几个提示
1. 日常常挂梯子，因为所有资源、仓库都在国外
2. 把搜索引擎换成 chrome
:::


## 🎯 安装准备

磨刀不误砍柴工，在安装 Python 之前，我们需要先准备几个工具。

### 1. Warp：现代化的终端工具 

https://www.warp.dev/ 。先把这个下载了

**什么是终端？**
终端（Terminal）是你和电脑"对话"的工具。就像图形界面用鼠标点击，终端用文字命令来控制电脑。安装软件、运行 Python 程序、管理文件，都需要在终端里输入命令。

**什么是 Warp？**
Mac 自带的终端（Terminal）很拉，没有 AI，格式化等等，所以先上来换一个终端使用。




### 2. Homebrew：Mac 的"应用商店"（命令行版）

**什么是 Homebrew？**
如果说 App Store 是 Mac 的图形界面应用商店，那 Homebrew（简称 brew）就是程序员专用的命令行应用商店。想安装 Python？`brew install python`。一个命令搞定，不用到处找下载链接，不用手动配置环境变量。

以下都在 `warp` 中运行

**安装方法：**
```bash
# 在终端里运行这行命令（可能需要输入密码）：
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

安装完成后，按照终端提示的说明，把 Homebrew 添加到你的 PATH 环境变量中
通常会显示类似以下这样的命令，复制运行即可，不用管什么意思，提示什么就把该命令一顿 `ctrl cv` 到终端运行即可。
```bash
# 示例
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

安装完成后，怎么验证我们能不能正常使用，直接用以下命令测试一下

**验证安装：**
```bash
brew --version
```
如果看到版本号，说明 Homebrew 安装成功！


如果有 homebrew 之后，我们如果再安装上面的 warp，就可以只使用命令安装，省去了找下载链接，一直点点点

```bash
brew install --cask warp
```


### 3. Cursor：AI 驱动的代码编辑器

**什么是 Cursor？**

Cursor 是一个被 AI 加持的代码编辑器。写代码时它会自动补全，遇到问题可以直接问 AI，写错了会立即提示。

解释一下什么是编辑器，编辑器是用来写代码的工具。就像写文档用 Word，PPT 用 Power Point，写代码也需要专门的编辑器。

普通的记事本只能打字，而代码编辑器能识别代码语法、高亮显示、自动补全，还能帮你发现错误。

**为什么要安装？**

编辑器有很多，为什么用 Cursor？在很久之前都用 VS Code、PyCharm，AI 出来后尽量直接使用 AI 加持编辑器 ~~更方便，~~ 其实是更懒

安装完成之后，打开 Cursor，在左侧面板找到插件市场，搜索 `Python` 安装，为什么要装这个，因为他只是个编辑器，可以写任何语言，安装后知道你会用 Python，所以会有语法高亮，会提示语法错误，就和你学英语老师告诉你语法错误是一样的。

**安装方法：**
1. 访问 [Cursor 官网](https://cursor.com/download)
2. 下载 Mac 版本
3. 拖拽到应用程序文件夹
4. 打开 Cursor，开始你的 AI 编程之旅！

由于我们安装了`homebrew`，可以直接运行来安装，安装结束后，就能看到多了一个应用
```bash
brew install --cask cursor
```

:::tip 小提示
Cursor 的基础功能是免费的，但使用高级 AI 功能需要付费。不过对于初学者来说，免费版已经足够强大了！
:::



## 📥 安装 Python

好了，现在你的 Mac 已经武装完毕！让我们来安装 Python。

### Mac 用户

Mac 系统通常自带 Python，但版本可能较旧。推荐使用 Homebrew 安装最新版本：

```bash
# 使用 Homebrew 安装 Python
brew install python
```

安装完成后，Homebrew 会自动帮你配置好环境。



## ✅ 验证安装

安装完成后，我们来验证是否成功：

```bash
python3 --version
```

如果看到版本号（如 `Python 3.12.0`），说明安装成功！


## 📝 第一次使用

让我们来测试一下 Python 是否正常工作：

1. 打开 Warp（或者 Mac 自带的终端）
2. 输入 `python3` 并回车
3. 你会看到类似这样的提示：

```
Python 3.12.0 (main, Oct 2 2023, 00:00:00)
>>> 
```

4. 输入以下代码并回车：

```python
print("Hello, Python!")
```

5. 如果看到输出 `Hello, Python!`，说明 Python 安装成功！

6. 输入 `exit()` 或按 `Ctrl + D` 退出 Python 交互式环境



## 常见问题

### Q: 安装 Homebrew 时提示"command not found"？

这通常是因为 Homebrew 还没有添加到 PATH。按照安装完成后的提示，运行那两行 `echo` 和 `eval` 命令即可。

### Q: Mac 上输入 `python` 显示的是 Python 2？

Mac 系统自带的 `python` 命令指向的是 Python 2（已经过时了）。我们使用 `python3` 命令来运行 Python 3。

### Q: Warp 和终端有什么区别？

Warp 是一个现代化的终端替代品，功能更强大、界面更美观。但如果你习惯用 Mac 自带的终端，也可以继续使用，不影响学习 Python。

### Q: 一定要安装 Cursor 吗？

不是必须的，但强烈推荐！特别是对于初学者，AI 助手能帮你快速理解代码、发现错误，学习效率会大大提升。如果你更喜欢传统的编辑器，VS Code 或 PyCharm 也是不错的选择。



## 下一步

安装好 Python 了吗？让我们来写第一个程序吧！
