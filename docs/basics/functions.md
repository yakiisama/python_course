# 函数

## 📦 什么是函数？

函数是一段**可重复使用**的代码块，就像一个小机器：
- 输入一些东西（参数）
- 执行某些操作
- 输出结果（返回值）

**生活类比**：
- 咖啡机：放入咖啡豆 → 磨豆、冲泡 → 得到咖啡
- 计算器：输入数字和运算 → 计算 → 显示结果

## 📝 定义函数

使用 `def` 关键字定义函数：

```python
def say_hello():
    print("Hello, World!")
    print("欢迎学习 Python！")

# 调用函数
say_hello()
```

### 函数命名规则

- 使用小写字母
- 多个单词用下划线连接
- 名字要有意义

```python
# ✅ 好的命名
def calculate_area():
    pass

def get_user_info():
    pass

# ❌ 不好的命名
def func1():
    pass

def DoSomething():
    pass
```

## 🎁 参数和返回值

### 带参数的函数

```python
def greet(name):
    print(f"你好，{name}！")

greet("小明")  # 输出：你好，小明！
greet("小红")  # 输出：你好，小红！
```

### 多个参数

```python
def add(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

add(3, 5)  # 输出：3 + 5 = 8
```

### 返回值

```python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # 8

# 返回值可以直接使用
print(add(10, 20))  # 30
```

### 多个返回值

```python
def get_min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = get_min_max([3, 1, 4, 1, 5, 9])
print(f"最小值：{minimum}，最大值：{maximum}")
```

## 🏷️ 参数类型

### 位置参数

按顺序传入：

```python
def describe_pet(animal, name):
    print(f"我有一只{animal}，叫{name}")

describe_pet("猫", "咪咪")    # 我有一只猫，叫咪咪
describe_pet("咪咪", "猫")    # 我有一只咪咪，叫猫（顺序错了！）
```

### 关键字参数

指定参数名，顺序无所谓：

```python
describe_pet(name="旺财", animal="狗")  # 我有一只狗，叫旺财
```

### 默认参数

给参数设置默认值：

```python
def greet(name, greeting="你好"):
    print(f"{greeting}，{name}！")

greet("小明")              # 你好，小明！
greet("小明", "早上好")    # 早上好，小明！
```

::: warning 注意
默认参数必须放在非默认参数后面！
```python
# ✅ 正确
def func(a, b, c=10):
    pass

# ❌ 错误
def func(a=10, b, c):
    pass
```
:::

### 可变参数

接收任意数量的参数：

```python
# *args - 接收多个位置参数（元组）
def add_all(*numbers):
    return sum(numbers)

print(add_all(1, 2, 3))      # 6
print(add_all(1, 2, 3, 4, 5))  # 15

# **kwargs - 接收多个关键字参数（字典）
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="小明", age=18, city="北京")
```

## 🔍 变量作用域

变量在哪里能用：

```python
global_var = "我是全局变量"

def my_function():
    local_var = "我是局部变量"
    print(global_var)  # ✅ 可以访问全局变量
    print(local_var)   # ✅ 可以访问局部变量

my_function()
print(global_var)  # ✅ 可以访问
# print(local_var)  # ❌ 错误！局部变量在函数外不可用
```

### 修改全局变量

```python
count = 0

def increment():
    global count  # 声明使用全局变量
    count += 1

increment()
print(count)  # 1
```

## 📚 常用内置函数

Python 自带很多实用函数：

```python
# 数学相关
print(abs(-5))         # 5（绝对值）
print(max(1, 2, 3))    # 3（最大值）
print(min(1, 2, 3))    # 1（最小值）
print(sum([1, 2, 3]))  # 6（求和）
print(round(3.7))      # 4（四舍五入）
print(pow(2, 3))       # 8（幂运算）

# 类型转换
print(int("123"))      # 123
print(float("3.14"))   # 3.14
print(str(123))        # "123"
print(list("abc"))     # ['a', 'b', 'c']

# 其他
print(len("Hello"))    # 5（长度）
print(type(123))       # <class 'int'>（类型）
print(range(5))        # range(0, 5)
print(sorted([3,1,2])) # [1, 2, 3]（排序）
```

## 📊 实际应用示例

### 计算圆的面积

```python
import math

def circle_area(radius):
    """计算圆的面积"""
    return math.pi * radius ** 2

r = float(input("请输入半径："))
area = circle_area(r)
print(f"圆的面积是：{area:.2f}")
```

### 判断质数

```python
def is_prime(n):
    """判断一个数是否为质数"""
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

# 测试
for num in range(1, 20):
    if is_prime(num):
        print(f"{num} 是质数")
```

### 温度转换

```python
def celsius_to_fahrenheit(c):
    """摄氏度转华氏度"""
    return c * 9 / 5 + 32

def fahrenheit_to_celsius(f):
    """华氏度转摄氏度"""
    return (f - 32) * 5 / 9

# 使用
print(celsius_to_fahrenheit(0))    # 32.0
print(fahrenheit_to_celsius(100))  # 37.78
```

## ✏️ 动手练习

**练习 1**：计算阶乘
```python
def factorial(n):
    if n <= 1:
        return 1
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(factorial(5))  # 120
```

**练习 2**：判断回文
```python
def is_palindrome(text):
    """判断字符串是否是回文"""
    text = text.lower().replace(" ", "")
    return text == text[::-1]

print(is_palindrome("level"))   # True
print(is_palindrome("hello"))   # False
print(is_palindrome("A man a plan a canal Panama"))  # True
```

**练习 3**：计算平均分
```python
def calculate_average(*scores):
    """计算平均分，排除最高和最低分"""
    if len(scores) < 3:
        return sum(scores) / len(scores)
    
    sorted_scores = sorted(scores)
    valid_scores = sorted_scores[1:-1]  # 去掉最高最低
    return sum(valid_scores) / len(valid_scores)

print(calculate_average(9.5, 9.0, 8.5, 9.2, 8.8))  # 8.9
```

## 🎯 本节要点

| 概念 | 说明 | 示例 |
|------|------|------|
| 定义函数 | 使用 def | `def greet():` |
| 参数 | 函数的输入 | `def add(a, b):` |
| 返回值 | 函数的输出 | `return result` |
| 默认参数 | 有默认值的参数 | `def f(x=10):` |
| 可变参数 | 任意数量参数 | `def f(*args):` |
| 作用域 | 变量的有效范围 | 全局 vs 局部 |

- 函数使代码更**模块化**、**可复用**
- 好的函数应该**只做一件事**
- 给函数取有意义的名字

## 下一步

函数学会了，接下来学习列表和字典！

<div style="text-align: center; margin-top: 2rem;">
  <a href="/basics/collections" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #306998, #4B8BBE); color: white; border-radius: 8px; text-decoration: none; font-weight: 500;">
    学习列表与字典 →
  </a>
</div>

