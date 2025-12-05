# 条件判断

## 🔀 什么是条件判断？

生活中我们经常做判断：
- 如果下雨，就带伞
- 如果有空，就去运动
- 如果成绩及格，就可以毕业

Python 也能做这样的判断！

## 📝 if 语句

最基本的条件判断：

```python
age = 18

if age >= 18:
    print("你已成年")
    print("可以考驾照了")
```

::: warning 注意缩进
Python 用**缩进**来表示代码块，通常用 4 个空格。缩进必须一致！
```python
if True:
    print("正确的缩进")
    print("这也在 if 里面")
print("这在 if 外面")
```
:::

## 📝 if-else 语句

如果条件不满足，执行另一段代码：

```python
age = 16

if age >= 18:
    print("你已成年")
else:
    print("你还未成年")
    print(f"还差 {18 - age} 年成年")
```

## 📝 if-elif-else 语句

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

**注意**：
- `elif` 是 "else if" 的缩写
- 条件从上往下检查，遇到第一个满足的就执行
- `else` 是兜底的，所有条件都不满足时执行

## 🔗 嵌套条件

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

::: tip 简化嵌套
过多嵌套会让代码难读，可以用 `and` 简化：
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

### BMI 计算器

```python
height = float(input("请输入身高（米）："))
weight = float(input("请输入体重（公斤）："))

bmi = weight / (height ** 2)

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

### 石头剪刀布

```python
import random

choices = ["石头", "剪刀", "布"]
computer = random.choice(choices)
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

## 下一步

条件判断学会了，接下来学习循环！

<div style="text-align: center; margin-top: 2rem;">
  <a href="/basics/loops" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #306998, #4B8BBE); color: white; border-radius: 8px; text-decoration: none; font-weight: 500;">
    学习循环 →
  </a>
</div>

