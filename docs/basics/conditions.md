# 条件判断

## 🎯 什么是条件判断？

**什么是条件判断？**
条件判断就是"如果...就..."的逻辑。就像生活中我们经常做判断：
- 如果下雨，就带伞
- 如果有空，就去运动
- 如果成绩及格，就可以毕业

Python 也能做这样的判断！让程序根据不同的情况做不同的事情。

## 📝 if 语句

**什么是 if 语句？**
`if` 就是"如果"的意思。如果条件满足，就执行后面的代码。

最基本的条件判断：

```python
age = 18

if age >= 18:
    print("你已成年")
    print("可以考驾照了")
```

**这段代码在说什么？**
- 如果年龄大于等于 18
- 就打印"你已成年"和"可以考驾照了"

:::warning 注意缩进
Python 用**缩进**来表示代码块，通常用 4 个空格。缩进必须一致！

**什么是缩进？**
缩进就是代码前面的空格，就像写作文时每段开头空两格一样。Python 用缩进来表示"这段代码属于哪个 if"。

```python
if True:
    print("正确的缩进")  # 这行属于 if
    print("这也在 if 里面")  # 这行也属于 if
print("这在 if 外面")  # 这行不属于 if，没有缩进
```

**为什么缩进这么重要？**
因为 Python 没有像其他语言那样用大括号 `{}` 来表示代码块，而是用缩进。缩进错了，程序就不知道哪些代码属于哪个 if 了。
:::

## 📝 if-else 语句

**什么是 else？**
`else` 就是"否则"的意思。如果条件不满足，就执行 else 后面的代码。

如果条件不满足，执行另一段代码：

```python
age = 16

if age >= 18:
    print("你已成年")
else:
    print("你还未成年")
    print(f"还差 {18 - age} 年成年")
```

**这段代码在说什么？**
- 如果年龄大于等于 18，就打印"你已成年"
- 否则（年龄小于 18），就打印"你还未成年"和还差几年

**生活例子**：
- 如果下雨，就带伞；否则，就不带
- 如果有钱，就买；否则，就不买

## 📝 if-elif-else 语句

**什么是 elif？**
`elif` 是 "else if" 的缩写，表示"否则如果"。用来处理多个条件分支。

多个条件分支：

```python
score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")
```

**这段代码在说什么？**
- 如果分数 >= 90，就打印"优秀"
- 否则如果分数 >= 80，就打印"良好"
- 否则如果分数 >= 60，就打印"及格"
- 否则（分数 < 60），就打印"不及格"

**注意**：
- `elif` 是 "else if" 的缩写
- 条件从上往下检查，遇到第一个满足的就执行，后面的就不看了
- `else` 是兜底的，所有条件都不满足时执行

**生活例子**：
- 如果成绩 >= 90：优秀
- 否则如果成绩 >= 80：良好
- 否则如果成绩 >= 60：及格
- 否则：不及格

## 🔗 嵌套条件

**什么是嵌套？**
嵌套就是"里面套里面"，就像俄罗斯套娃一样。条件语句里面可以再写条件语句。

条件语句可以嵌套：

```python
has_ticket = True
age = 15

if has_ticket:
    if age >= 18:
        print("欢迎入场观看成人电影")
    else:
        print("欢迎入场观看普通电影")
else:
    print("请先购票")
```

**这段代码在说什么？**
- 如果有票：
  - 如果年龄 >= 18，就打印"欢迎入场观看成人电影"
  - 否则，就打印"欢迎入场观看普通电影"
- 否则（没票），就打印"请先购票"

:::tip 简化嵌套
过多嵌套会让代码难读，就像套娃套太多层就不好看了。可以用 `and` 简化：
```python
if has_ticket and age >= 18:
    print("欢迎入场观看成人电影")
elif has_ticket:
    print("欢迎入场观看普通电影")
else:
    print("请先购票")
```
:::

## 🎯 条件表达式（三元运算符）

**什么是三元运算符？**
三元运算符是简单的 if-else 的简写，可以写成一行。就像把"如果...否则..."压缩成一句话。

简单的 if-else 可以写成一行：

```python
age = 20

# 传统写法
if age >= 18:
    status = "成年"
else:
    status = "未成年"

# 简写（三元运算符）
status = "成年" if age >= 18 else "未成年"

print(status)  # 成年
```

**语法**：`值1 if 条件 else 值2`
- 如果条件为真，返回值1
- 否则，返回值2

**什么时候用？**
当 if-else 很简单，只是赋值时，可以用三元运算符让代码更简洁。

## 📊 实际应用示例

### 登录验证

```python
username = input("请输入用户名：")
password = input("请输入密码：")

if username == "admin" and password == "123456":
    print("登录成功！")
else:
    print("用户名或密码错误！")
```

**这段代码在做什么？**
检查用户名和密码是否正确。就像登录网站一样，输入对了才能进去。

### BMI 计算器

**什么是 BMI？**
BMI（Body Mass Index）是身体质量指数，用来判断体重是否正常。

```python
height = float(input("请输入身高（米）："))
weight = float(input("请输入体重（公斤）："))

bmi = weight / (height ** 2)  # BMI = 体重 / 身高的平方

print(f"你的 BMI 是：{bmi:.1f}")

if bmi < 18.5:
    print("体重过轻")
elif bmi < 24:
    print("体重正常")
elif bmi < 28:
    print("超重")
else:
    print("肥胖")
```

**这段代码在做什么？**
根据身高和体重计算 BMI，然后判断体重是否正常。

### 季节判断

```python
month = int(input("请输入月份（1-12）："))

if month in [3, 4, 5]:
    print("春天 🌸")
elif month in [6, 7, 8]:
    print("夏天 ☀️")
elif month in [9, 10, 11]:
    print("秋天 🍂")
elif month in [12, 1, 2]:
    print("冬天 ❄️")
else:
    print("无效的月份！")
```

**这段代码在做什么？**
根据月份判断季节。就像看日历一样，知道现在是哪个季节。

### 石头剪刀布

```python
import random

choices = ["石头", "剪刀", "布"]
computer = random.choice(choices)  # 电脑随机选一个
player = input("请出拳（石头/剪刀/布）：")

print(f"电脑出：{computer}")

if player == computer:
    print("平局！")
elif (player == "石头" and computer == "剪刀") or \
     (player == "剪刀" and computer == "布") or \
     (player == "布" and computer == "石头"):
    print("你赢了！🎉")
else:
    print("你输了！😢")
```

**这段代码在做什么？**
一个简单的猜拳游戏。电脑随机出，你输入，然后判断谁赢。

**游戏规则**：
- 石头赢剪刀
- 剪刀赢布
- 布赢石头

## ✏️ 动手练习

**练习 1**：判断正负零
```python
num = float(input("请输入一个数："))

if num > 0:
    print("正数")
elif num < 0:
    print("负数")
else:
    print("零")
```

**练习 2**：找最大值
```python
a = int(input("请输入第一个数："))
b = int(input("请输入第二个数："))
c = int(input("请输入第三个数："))

if a >= b and a >= c:
    print(f"最大值是 {a}")
elif b >= a and b >= c:
    print(f"最大值是 {b}")
else:
    print(f"最大值是 {c}")
```

**练习 3**：简单的计算器
```python
num1 = float(input("请输入第一个数："))
op = input("请输入运算符（+ - * /）：")
num2 = float(input("请输入第二个数："))

if op == "+":
    result = num1 + num2
elif op == "-":
    result = num1 - num2
elif op == "*":
    result = num1 * num2
elif op == "/":
    if num2 != 0:
        result = num1 / num2
    else:
        result = "错误：除数不能为零！"
else:
    result = "无效的运算符！"

print(f"结果：{result}")
```

## 🎯 本节要点

| 语句 | 用途 | 示例 |
|------|------|------|
| `if` | 单个条件 | `if x > 0:` |
| `if-else` | 二选一 | `if x > 0: ... else: ...` |
| `if-elif-else` | 多选一 | `if ... elif ... else:` |
| 三元表达式 | 简单条件 | `a if 条件 else b` |

- 注意缩进（4 个空格）
- `elif` = else if
- 可以用 `and`、`or` 组合多个条件

## 常见问题

### Q: 为什么我的代码报错"IndentationError"？

这是缩进错误。Python 对缩进要求很严格：
- 同一层代码的缩进必须一致
- 通常用 4 个空格（不要用 Tab，容易出问题）
- 如果 if 后面有代码，必须缩进

### Q: 多个 elif 会都执行吗？

不会！只会执行第一个满足条件的。就像选择题，选对了就不看其他选项了。

### Q: 什么时候用嵌套，什么时候用 and？

- 嵌套：条件之间有层次关系（比如先检查有没有票，再检查年龄）
- and：条件之间是并列关系（比如年龄 >= 18 并且有身份证）

能用 and 就用 and，嵌套太多不好读。

### Q: 三元运算符什么时候用？

当 if-else 很简单，只是赋值时，可以用三元运算符。但如果逻辑复杂，还是用 if-else 更清晰。

## 下一步

条件判断学会了，接下来学习循环！
