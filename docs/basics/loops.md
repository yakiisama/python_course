# 循环

## 🎯 什么是循环？

**什么是循环？**
循环让你可以**重复执行**一段代码。就像重复做同一件事，直到完成。

想象一下：
- 重复喊 "加油" 10 次
- 一个一个检查作业
- 不停地猜数字直到猜对

这些都需要用到循环！

**为什么要用循环？**
如果没有循环，你要打印 100 次"Hello"，就要写 100 行 `print("Hello")`。有了循环，写一行就够了！

## 📝 for 循环

**什么是 for 循环？**
`for` 循环用来遍历序列（如列表、字符串）或重复固定次数。就像数数一样，从 1 数到 10。

### 重复固定次数

```python
# 打印 5 次 "Hello"
for i in range(5):
    print("Hello")

# range(5) 生成 0, 1, 2, 3, 4
for i in range(5):
    print(f"第 {i + 1} 次循环")
```

**这段代码在做什么？**
- `range(5)` 生成 0, 1, 2, 3, 4 这 5 个数字
- `for i in range(5)` 表示：i 依次取这 5 个数字
- 每次循环，i 的值都会变

### range() 函数详解

**什么是 range()？**
`range()` 用来生成一串数字，就像数数一样。

```python
# range(n)：从 0 到 n-1
for i in range(5):       # 0, 1, 2, 3, 4（5 个数）
    print(i)

# range(start, end)：从 start 到 end-1
for i in range(1, 6):    # 1, 2, 3, 4, 5（从 1 开始，到 5 结束）
    print(i)

# range(start, end, step)：指定步长
for i in range(0, 10, 2):  # 0, 2, 4, 6, 8（每次加 2）
    print(i)

for i in range(10, 0, -1):  # 倒数：10, 9, 8, ..., 1（每次减 1）
    print(i)
```

**什么是步长？**
步长就是每次增加多少。就像上楼梯，可以一次上一阶（步长 1），也可以一次上两阶（步长 2）。

### 遍历列表

**什么是遍历？**
遍历就是"一个一个看过去"，就像检查作业，一本一本看。

```python
fruits = ["苹果", "香蕉", "橙子"]

for fruit in fruits:
    print(f"我喜欢吃{fruit}")
```

**这段代码在做什么？**
- `fruits` 是一个列表，里面有 3 个水果
- `for fruit in fruits` 表示：fruit 依次取列表里的每个水果
- 第一次循环，fruit = "苹果"
- 第二次循环，fruit = "香蕉"
- 第三次循环，fruit = "橙子"

### 遍历字符串

**字符串也能遍历？**
可以！字符串就是字符的序列，可以一个一个看。

```python
word = "Python"

for letter in word:
    print(letter)
# 输出：P y t h o n（每个字母一行）
```

**这段代码在做什么？**
- `word` 是一个字符串 "Python"
- `for letter in word` 表示：letter 依次取字符串里的每个字符
- 就像把单词拆成字母，一个一个打印

### 带索引遍历

**什么是索引？**
索引就是位置编号，从 0 开始。就像排队，第一个人是 0 号，第二个人是 1 号。

```python
fruits = ["苹果", "香蕉", "橙子"]

for index, fruit in enumerate(fruits):
    print(f"{index + 1}. {fruit}")
# 输出：
# 1. 苹果
# 2. 香蕉
# 3. 橙子
```

**什么是 enumerate()？**
`enumerate()` 可以同时得到索引和值。就像点名，既知道是第几个，又知道名字。

## 📝 while 循环

**什么是 while 循环？**
`while` 循环是"当...时，就一直做"。就像"当还有作业时，就一直写"。

当条件满足时，持续执行：

```python
count = 1

while count <= 5:
    print(f"第 {count} 次")
    count += 1  # 重要：必须改变条件，否则死循环！

print("循环结束")
```

**这段代码在做什么？**
- `while count <= 5` 表示：当 count 小于等于 5 时，就一直循环
- 每次循环，打印"第 X 次"，然后把 count 加 1
- 当 count 变成 6 时，条件不满足了，循环结束

**为什么要把 count 加 1？**
如果不加 1，count 永远是 1，条件永远满足，循环就停不下来了！这就是"死循环"。

### 用户输入直到满足条件

```python
password = ""

while password != "123456":
    password = input("请输入密码：")

print("密码正确！")
```

**这段代码在做什么？**
- 当密码不等于 "123456" 时，就一直让用户输入
- 直到输入正确，循环才结束

**生活例子**：
- 当密码错误时，就一直输入
- 当没找到答案时，就一直找

:::danger 避免死循环
一定要确保循环条件最终会变为 False，否则程序会无限循环！

**什么是死循环？**
死循环就是永远停不下来的循环。就像跑步机，如果不停，就一直跑。

```python
# ❌ 死循环示例
while True:
    print("停不下来了！")

# ✅ 正确示例
count = 0
while count < 5:
    print(count)
    count += 1  # 这行很重要！让 count 变大，最终条件不满足
```
:::

## 🛑 break 和 continue

**什么是 break 和 continue？**
- `break`：跳出循环，就像紧急刹车
- `continue`：跳过本次循环，就像跳过这一题，做下一题

### break - 跳出循环

```python
# 找到第一个偶数就停止
for i in range(1, 10):
    if i % 2 == 0:
        print(f"找到偶数：{i}")
        break  # 找到了，就不找了
    print(f"{i} 不是偶数")
```

**这段代码在做什么？**
- 从 1 到 9，找第一个偶数
- 找到后，用 `break` 跳出循环，不再继续

**生活例子**：
- 找到钥匙就不找了
- 找到答案就不继续了

### continue - 跳过本次循环

```python
# 跳过偶数，只打印奇数
for i in range(1, 10):
    if i % 2 == 0:
        continue  # 是偶数，跳过，不打印
    print(i)
# 输出：1, 3, 5, 7, 9
```

**这段代码在做什么？**
- 从 1 到 9，如果是偶数，就跳过（不打印）
- 只打印奇数

**生活例子**：
- 检查作业，遇到空白的就跳过
- 数钱，遇到假币就跳过

## 🔁 嵌套循环

**什么是嵌套循环？**
嵌套循环就是循环里面套循环，就像"外层循环一次，内层循环全部"。

循环里面套循环：

```python
# 九九乘法表
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}×{i}={i*j}", end="\t")
    print()  # 换行
```

**这段代码在做什么？**
- 外层循环：i 从 1 到 9
- 内层循环：j 从 1 到 i
- 打印 `j×i=i*j`，然后换行

输出：
```
1×1=1	
1×2=2	2×2=4	
1×3=3	2×3=6	3×3=9	
...
```

**生活例子**：
- 外层：检查每个班级
- 内层：检查班级里的每个学生

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

**这段代码在做什么？**
- i 从 1 到 5
- 每次打印 i 个星号
- 第一行 1 个，第二行 2 个，以此类推

## 📊 实际应用示例

### 计算总和

```python
# 计算 1 + 2 + 3 + ... + 100
total = 0
for i in range(1, 101):
    total += i  # 每次把 i 加到 total 里
print(f"1到100的和是：{total}")  # 5050
```

**这段代码在做什么？**
- 从 1 加到 100
- 每次循环，把当前的数字加到 total 里
- 最后打印总和

### 找出最大值

```python
numbers = [3, 7, 2, 9, 1, 5]
max_num = numbers[0]  # 假设第一个是最大的

for num in numbers:
    if num > max_num:
        max_num = num  # 如果找到更大的，就更新

print(f"最大值是：{max_num}")  # 9
```

**这段代码在做什么？**
- 假设第一个数是最大的
- 遍历所有数字，如果找到更大的，就更新最大值
- 就像找最高的，一个一个比

### 猜数字游戏

```python
import random

secret = random.randint(1, 100)  # 电脑随机选一个 1-100 的数
attempts = 0

while True:
    guess = int(input("猜一个 1-100 的数："))
    attempts += 1  # 猜的次数加 1
    
    if guess < secret:
        print("太小了！")
    elif guess > secret:
        print("太大了！")
    else:
        print(f"恭喜！猜对了！用了 {attempts} 次")
        break  # 猜对了，跳出循环
```

**这段代码在做什么？**
- 电脑随机选一个数
- 你猜，电脑告诉你"太大了"或"太小了"
- 直到猜对为止

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

**这段代码在做什么？**
- 最多尝试 3 次
- 如果密码正确，就登录成功并跳出
- 如果 3 次都错了，就锁定账户

**什么是 for-else？**
`for-else` 是 Python 的特殊语法。如果 for 循环正常结束（没有 break），就执行 else。

## ✏️ 动手练习

**练习 1**：打印偶数
```python
# 打印 1-20 之间的所有偶数
for i in range(2, 21, 2):  # 从 2 开始，到 20，每次加 2
    print(i)
```

**练习 2**：计算阶乘
```python
n = int(input("请输入一个正整数："))
factorial = 1

for i in range(1, n + 1):
    factorial *= i  # factorial = factorial * i

print(f"{n}! = {factorial}")
```

**什么是阶乘？**
阶乘就是 `n! = 1 × 2 × 3 × ... × n`。比如 `5! = 1 × 2 × 3 × 4 × 5 = 120`。

**练习 3**：倒计时
```python
import time

for i in range(10, 0, -1):  # 从 10 倒数到 1
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
    if char.isalpha():  # 是字母
        letter_count += 1
    elif char.isdigit():  # 是数字
        digit_count += 1
    else:  # 其他字符
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

## 常见问题

### Q: for 和 while 什么时候用哪个？

- `for`：知道循环次数时用（比如打印 10 次、遍历列表）
- `while`：不知道循环次数，只知道条件时用（比如猜数字直到猜对）

### Q: 什么是死循环？怎么避免？

死循环就是永远停不下来的循环。避免方法：
- `while` 循环里一定要改变条件
- 确保条件最终会变成 False
- 可以用 `break` 提前退出

### Q: break 和 continue 有什么区别？

- `break`：跳出整个循环，后面的循环都不执行了
- `continue`：跳过本次循环，继续下一次循环

### Q: range(5) 为什么是 0 到 4，不是 1 到 5？

因为 Python 的索引从 0 开始。`range(5)` 生成 5 个数：0, 1, 2, 3, 4。如果想从 1 开始，用 `range(1, 6)`。

## 下一步

循环学会了，接下来学习函数！
