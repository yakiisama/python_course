# 循环

## 🔄 什么是循环？

循环让你可以**重复执行**一段代码。

想象一下：
- 重复喊 "加油" 10 次
- 一个一个检查作业
- 不停地猜数字直到猜对

这些都需要用到循环！

## 📝 for 循环

用于遍历序列（如列表、字符串）或重复固定次数：

### 重复固定次数

```python
# 打印 5 次 "Hello"
for i in range(5):
    print("Hello")

# range(5) 生成 0, 1, 2, 3, 4
for i in range(5):
    print(f"第 {i + 1} 次循环")
```

### range() 函数详解

```python
# range(n)：从 0 到 n-1
for i in range(5):       # 0, 1, 2, 3, 4
    print(i)

# range(start, end)：从 start 到 end-1
for i in range(1, 6):    # 1, 2, 3, 4, 5
    print(i)

# range(start, end, step)：指定步长
for i in range(0, 10, 2):  # 0, 2, 4, 6, 8
    print(i)

for i in range(10, 0, -1):  # 倒数：10, 9, 8, ..., 1
    print(i)
```

### 遍历列表

```python
fruits = ["苹果", "香蕉", "橙子"]

for fruit in fruits:
    print(f"我喜欢吃{fruit}")
```

### 遍历字符串

```python
word = "Python"

for letter in word:
    print(letter)
# 输出：P y t h o n（每个字母一行）
```

### 带索引遍历

```python
fruits = ["苹果", "香蕉", "橙子"]

for index, fruit in enumerate(fruits):
    print(f"{index + 1}. {fruit}")
# 输出：
# 1. 苹果
# 2. 香蕉
# 3. 橙子
```

## 📝 while 循环

当条件满足时，持续执行：

```python
count = 1

while count <= 5:
    print(f"第 {count} 次")
    count += 1  # 重要：必须改变条件，否则死循环！

print("循环结束")
```

### 用户输入直到满足条件

```python
password = ""

while password != "123456":
    password = input("请输入密码：")

print("密码正确！")
```

::: danger 避免死循环
一定要确保循环条件最终会变为 False，否则程序会无限循环！
```python
# ❌ 死循环示例
while True:
    print("停不下来了！")

# ✅ 正确示例
count = 0
while count < 5:
    print(count)
    count += 1  # 这行很重要！
```
:::

## 🛑 break 和 continue

### break - 跳出循环

```python
# 找到第一个偶数就停止
for i in range(1, 10):
    if i % 2 == 0:
        print(f"找到偶数：{i}")
        break
    print(f"{i} 不是偶数")
```

### continue - 跳过本次循环

```python
# 跳过偶数，只打印奇数
for i in range(1, 10):
    if i % 2 == 0:
        continue  # 跳过后面的代码，直接下一次循环
    print(i)
# 输出：1, 3, 5, 7, 9
```

## 🔁 嵌套循环

循环里面套循环：

```python
# 九九乘法表
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}×{i}={i*j}", end="\t")
    print()  # 换行
```

输出：
```
1×1=1	
1×2=2	2×2=4	
1×3=3	2×3=6	3×3=9	
...
```

### 打印图案

```python
# 打印三角形
n = 5
for i in range(1, n + 1):
    print("*" * i)

# 输出：
# *
# **
# ***
# ****
# *****
```

## 📊 实际应用示例

### 计算总和

```python
# 计算 1 + 2 + 3 + ... + 100
total = 0
for i in range(1, 101):
    total += i
print(f"1到100的和是：{total}")  # 5050
```

### 找出最大值

```python
numbers = [3, 7, 2, 9, 1, 5]
max_num = numbers[0]

for num in numbers:
    if num > max_num:
        max_num = num

print(f"最大值是：{max_num}")  # 9
```

### 猜数字游戏

```python
import random

secret = random.randint(1, 100)
attempts = 0

while True:
    guess = int(input("猜一个 1-100 的数："))
    attempts += 1
    
    if guess < secret:
        print("太小了！")
    elif guess > secret:
        print("太大了！")
    else:
        print(f"恭喜！猜对了！用了 {attempts} 次")
        break
```

### 密码验证（限制次数）

```python
correct_password = "abc123"
max_attempts = 3

for attempt in range(max_attempts):
    password = input(f"请输入密码（剩余 {max_attempts - attempt} 次机会）：")
    
    if password == correct_password:
        print("登录成功！")
        break
else:
    # for 循环正常结束（没有 break）时执行
    print("密码错误次数过多，账户已锁定！")
```

## ✏️ 动手练习

**练习 1**：打印偶数
```python
# 打印 1-20 之间的所有偶数
for i in range(2, 21, 2):
    print(i)
```

**练习 2**：计算阶乘
```python
n = int(input("请输入一个正整数："))
factorial = 1

for i in range(1, n + 1):
    factorial *= i

print(f"{n}! = {factorial}")
```

**练习 3**：倒计时
```python
import time

for i in range(10, 0, -1):
    print(i)
    time.sleep(1)  # 暂停1秒

print("发射！🚀")
```

**练习 4**：统计字符
```python
text = input("请输入一段文字：")
letter_count = 0
digit_count = 0
other_count = 0

for char in text:
    if char.isalpha():
        letter_count += 1
    elif char.isdigit():
        digit_count += 1
    else:
        other_count += 1

print(f"字母：{letter_count}，数字：{digit_count}，其他：{other_count}")
```

## 🎯 本节要点

| 语句 | 用途 | 示例 |
|------|------|------|
| `for` | 遍历序列或固定次数 | `for i in range(10):` |
| `while` | 条件满足时循环 | `while count < 10:` |
| `break` | 跳出循环 | 用于提前结束 |
| `continue` | 跳过本次循环 | 用于跳过某些情况 |
| `range()` | 生成数字序列 | `range(1, 10, 2)` |

- `for` 适合知道循环次数的情况
- `while` 适合不确定次数的情况
- 注意避免死循环！

## 下一步

循环学会了，接下来学习函数！

<div style="text-align: center; margin-top: 2rem;">
  <a href="/basics/functions" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #306998, #4B8BBE); color: white; border-radius: 8px; text-decoration: none; font-weight: 500;">
    学习函数 →
  </a>
</div>

