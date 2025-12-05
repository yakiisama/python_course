# 函数

## 🎯 什么是函数？

**什么是函数？**
函数是一段**可重复使用**的代码块，就像一个小机器：
- 输入一些东西（参数）
- 执行某些操作
- 输出结果（返回值）

**生活类比**：
- 咖啡机：放入咖啡豆 → 磨豆、冲泡 → 得到咖啡
- 计算器：输入数字和运算 → 计算 → 显示结果
- 洗衣机：放入衣服和洗衣液 → 清洗 → 得到干净衣服

**为什么要用函数？**
如果没有函数，每次要做同样的事，就要把代码写一遍。有了函数，写一次，可以反复用。就像有了洗衣机，不用每次都手洗。

## 📝 定义函数

**什么是定义函数？**
定义函数就是"造一个机器"，告诉 Python 这个函数做什么。

使用 `def` 关键字定义函数：

```python
def say_hello():
    print("Hello, World!")
    print("欢迎学习 Python！")

# 调用函数
say_hello()
```

**这段代码在做什么？**
- `def say_hello():` 定义了一个函数，名字叫 `say_hello`
- 函数里面有两行代码，打印两句话
- `say_hello()` 调用这个函数，执行里面的代码

**什么是调用函数？**
调用函数就是"使用这个机器"，让函数执行。就像按洗衣机的按钮，让它开始工作。

### 函数命名规则

**函数名怎么起？**
和变量名一样，要有意义，让人一看就知道这个函数做什么。

- 使用小写字母
- 多个单词用下划线连接
- 名字要有意义

```python
# ✅ 好的命名
def calculate_area():  # 计算面积
    pass

def get_user_info():  # 获取用户信息
    pass

# ❌ 不好的命名
def func1():  # 不知道做什么
    pass

def DoSomething():  # 不符合 Python 习惯（应该小写）
    pass
```

**什么是 pass？**
`pass` 是占位符，表示"这里什么都不做"。就像写作文时，先写个标题，内容后面再填。

## 🎁 参数和返回值

**什么是参数？**
参数就是函数的"输入"，就像咖啡机需要咖啡豆一样。

**什么是返回值？**
返回值就是函数的"输出"，就像咖啡机做出来的咖啡。

### 带参数的函数

```python
def greet(name):
    print(f"你好，{name}！")

greet("小明")  # 输出：你好，小明！
greet("小红")  # 输出：你好，小红！
```

**这段代码在做什么？**
- `def greet(name):` 定义函数，`name` 是参数（输入）
- 函数里打印"你好，{name}！"
- `greet("小明")` 调用函数，把 "小明" 传给 `name`

**生活例子**：
- 函数：洗衣机
- 参数：衣服
- 返回值：干净衣服

### 多个参数

```python
def add(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

add(3, 5)  # 输出：3 + 5 = 8
```

**这段代码在做什么？**
- `def add(a, b):` 定义函数，有两个参数 `a` 和 `b`
- 函数里计算 `a + b`，然后打印结果
- `add(3, 5)` 调用函数，把 3 传给 `a`，5 传给 `b`

### 返回值

```python
def add(a, b):
    return a + b  # 返回结果

result = add(3, 5)
print(result)  # 8

# 返回值可以直接使用
print(add(10, 20))  # 30
```

**这段代码在做什么？**
- `return a + b` 返回计算结果
- `result = add(3, 5)` 把返回值存到 `result` 里
- 返回值可以直接用，比如 `print(add(10, 20))`

**什么是 return？**
`return` 就是"返回"，把结果传出去。就像咖啡机做好了咖啡，从出口流出来。

### 多个返回值

```python
def get_min_max(numbers):
    return min(numbers), max(numbers)  # 返回两个值

minimum, maximum = get_min_max([3, 1, 4, 1, 5, 9])
print(f"最小值：{minimum}，最大值：{maximum}")
```

**这段代码在做什么？**
- `return min(numbers), max(numbers)` 返回两个值
- `minimum, maximum = ...` 把两个返回值分别存到两个变量里

**生活例子**：
- 函数：称重器
- 输入：一堆苹果
- 输出：最轻的和最重的

## 🏷️ 参数类型

### 位置参数

**什么是位置参数？**
位置参数就是按顺序传入的参数。就像排队，第一个给第一个，第二个给第二个。

按顺序传入：

```python
def describe_pet(animal, name):
    print(f"我有一只{animal}，叫{name}")

describe_pet("猫", "咪咪")    # 我有一只猫，叫咪咪
describe_pet("咪咪", "猫")    # 我有一只咪咪，叫猫（顺序错了！）
```

**注意**：顺序很重要！第一个参数给 `animal`，第二个给 `name`。

### 关键字参数

**什么是关键字参数？**
关键字参数就是指定参数名，顺序无所谓。就像点菜，说"要一份宫保鸡丁"，不用管顺序。

指定参数名，顺序无所谓：

```python
describe_pet(name="旺财", animal="狗")  # 我有一只狗，叫旺财
```

**什么时候用关键字参数？**
- 参数很多时，用关键字参数更清楚
- 不确定顺序时，用关键字参数不会错

### 默认参数

**什么是默认参数？**
默认参数就是有默认值的参数。如果不传，就用默认值。就像洗衣机，不选模式就用标准模式。

给参数设置默认值：

```python
def greet(name, greeting="你好"):
    print(f"{greeting}，{name}！")

greet("小明")              # 你好，小明！（用默认值）
greet("小明", "早上好")    # 早上好，小明！（用传入的值）
```

**这段代码在做什么？**
- `greeting="你好"` 是默认参数，默认值是 "你好"
- 不传 `greeting` 时，用默认值
- 传了 `greeting` 时，用传入的值

:::warning 注意
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

**什么是可变参数？**
可变参数就是可以传任意数量的参数。就像买东西，可以买 1 个，也可以买 10 个。

接收任意数量的参数：

```python
# *args - 接收多个位置参数（元组）
def add_all(*numbers):
    return sum(numbers)

print(add_all(1, 2, 3))      # 6
print(add_all(1, 2, 3, 4, 5))  # 15
```

**什么是 *args？**
`*args` 表示可以传任意多个位置参数，Python 会把它们打包成一个元组。

```python
# **kwargs - 接收多个关键字参数（字典）
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="小明", age=18, city="北京")
```

**什么是 **kwargs？**
`**kwargs` 表示可以传任意多个关键字参数，Python 会把它们打包成一个字典。

## 🔍 变量作用域

**什么是作用域？**
作用域就是变量在哪里能用。就像房间里的东西，在房间里能用，出了房间就不能用了。

变量在哪里能用：

```python
global_var = "我是全局变量"  # 全局变量，到处都能用

def my_function():
    local_var = "我是局部变量"  # 局部变量，只在函数里能用
    print(global_var)  # ✅ 可以访问全局变量
    print(local_var)   # ✅ 可以访问局部变量

my_function()
print(global_var)  # ✅ 可以访问
# print(local_var)  # ❌ 错误！局部变量在函数外不可用
```

**什么是全局变量和局部变量？**
- 全局变量：在函数外面定义的，到处都能用
- 局部变量：在函数里面定义的，只在函数里能用

**生活例子**：
- 全局变量：家里的公共物品，谁都能用
- 局部变量：你房间里的东西，只有你能用

### 修改全局变量

```python
count = 0  # 全局变量

def increment():
    global count  # 声明使用全局变量
    count += 1

increment()
print(count)  # 1
```

**为什么要用 global？**
如果想在函数里修改全局变量，必须用 `global` 声明。否则 Python 会认为你要创建一个新的局部变量。

## 📚 常用内置函数

**什么是内置函数？**
内置函数就是 Python 自带的函数，不用定义就能用。就像手机自带的功能，不用下载就能用。

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
print(int("123"))      # 123（字符串转整数）
print(float("3.14"))   # 3.14（字符串转浮点数）
print(str(123))        # "123"（数字转字符串）
print(list("abc"))     # ['a', 'b', 'c']（字符串转列表）

# 其他
print(len("Hello"))    # 5（长度）
print(type(123))       # <class 'int'>（类型）
print(range(5))        # range(0, 5)（生成数字序列）
print(sorted([3,1,2])) # [1, 2, 3]（排序）
```

**为什么要用内置函数？**
因为常用，Python 已经帮你写好了，直接用就行。就像计算器，不用自己算，按按钮就行。

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

**这段代码在做什么？**
- 定义一个函数计算圆的面积
- 公式：面积 = π × 半径²
- 用户输入半径，函数返回面积

**什么是 docstring？**
`"""计算圆的面积"""` 是文档字符串，用来解释函数做什么。就像说明书一样。

### 判断质数

**什么是质数？**
质数是只能被 1 和它自己整除的数，比如 2, 3, 5, 7, 11。

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

**这段代码在做什么？**
- 定义一个函数判断一个数是不是质数
- 从 2 到 √n 检查，看能不能整除
- 如果能整除，就不是质数

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

**这段代码在做什么？**
- 定义两个函数，互相转换温度
- 公式：华氏度 = 摄氏度 × 9/5 + 32

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

**什么是回文？**
回文就是正着读和反着读都一样，比如 "level"、"上海自来水来自海上"。

```python
def is_palindrome(text):
    """判断字符串是否是回文"""
    text = text.lower().replace(" ", "")  # 转小写，去空格
    return text == text[::-1]  # 反转后比较

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

## 常见问题

### Q: 函数一定要有返回值吗？

不一定。如果函数只是做某些操作（比如打印），可以没有返回值。如果需要结果，就用 `return`。

### Q: 什么时候用参数，什么时候用全局变量？

- 参数：函数需要的数据，从外面传进来
- 全局变量：多个函数都要用的数据

一般优先用参数，因为更灵活、更安全。

### Q: *args 和 **kwargs 什么时候用？

- `*args`：不知道要传多少个位置参数时
- `**kwargs`：不知道要传多少个关键字参数时

比如写一个通用的打印函数，可以打印任意多个信息。

### Q: 函数可以调用自己吗？

可以！这叫"递归"。但要小心，必须有结束条件，否则会无限递归。

## 下一步

函数学会了，接下来学习列表和字典！
