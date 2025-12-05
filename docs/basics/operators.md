# 运算符

## 🧮 算术运算符

用于进行数学计算：

```python
a = 10
b = 3

print(a + b)   # 加法：13
print(a - b)   # 减法：7
print(a * b)   # 乘法：30
print(a / b)   # 除法：3.333...
print(a // b)  # 整除：3（只取整数部分）
print(a % b)   # 取余：1（余数）
print(a ** b)  # 幂运算：1000（10 的 3 次方）
```

### 运算优先级

```python
# 和数学一样：先乘除，后加减，有括号先算括号
result = 2 + 3 * 4      # 14
result = (2 + 3) * 4    # 20
result = 2 ** 3 ** 2    # 512（从右到左：3**2=9，2**9=512）
```

## 📊 比较运算符

用于比较两个值，返回 True 或 False：

```python
a = 10
b = 5

print(a > b)   # 大于：True
print(a < b)   # 小于：False
print(a >= b)  # 大于等于：True
print(a <= b)  # 小于等于：False
print(a == b)  # 等于：False
print(a != b)  # 不等于：True
```

### 字符串比较

```python
# 字符串按照字典顺序比较
print("apple" < "banana")  # True
print("abc" == "abc")      # True
print("A" < "a")           # True（大写字母在前）
```

## 🔗 逻辑运算符

用于组合多个条件：

### and - 与（两个都要满足）

```python
age = 25
income = 10000

# 同时满足才为 True
print(age > 18 and income > 5000)  # True
print(age > 18 and income > 20000) # False
```

### or - 或（满足一个即可）

```python
is_student = True
is_teacher = False

# 满足其一即为 True
print(is_student or is_teacher)  # True
```

### not - 非（取反）

```python
is_raining = False
print(not is_raining)  # True
```

### 实际应用

```python
age = 20
has_id = True
has_money = True

# 能否买酒：年满 18 且有身份证
can_buy_alcohol = age >= 18 and has_id
print(f"能买酒：{can_buy_alcohol}")  # True

# 能否看电影：有钱或有会员
is_vip = False
can_watch = has_money or is_vip
print(f"能看电影：{can_watch}")  # True
```

## ➕ 赋值运算符

```python
x = 10

x += 5   # 等同于 x = x + 5，结果：15
x -= 3   # 等同于 x = x - 3，结果：12
x *= 2   # 等同于 x = x * 2，结果：24
x /= 4   # 等同于 x = x / 4，结果：6.0
x //= 2  # 等同于 x = x // 2，结果：3.0
x %= 2   # 等同于 x = x % 2，结果：1.0
x **= 3  # 等同于 x = x ** 3，结果：1.0
```

## 🔍 成员运算符

检查元素是否在序列中：

```python
# in - 在里面
fruits = ["苹果", "香蕉", "橙子"]
print("苹果" in fruits)     # True
print("葡萄" in fruits)     # False

# not in - 不在里面
print("葡萄" not in fruits) # True

# 字符串也可以用
text = "Hello, World!"
print("Hello" in text)      # True
print("Python" in text)     # False
```

## 🎭 身份运算符

检查两个对象是否是同一个对象：

```python
a = [1, 2, 3]
b = [1, 2, 3]
c = a

# == 比较值是否相等
print(a == b)  # True（值相同）

# is 比较是否是同一个对象
print(a is b)  # False（不同对象）
print(a is c)  # True（c 指向 a）
```

::: tip 何时用 is
一般用 `==` 比较值，`is` 主要用于比较 `None`：
```python
value = None
if value is None:
    print("值为空")
```
:::

## 📋 运算符优先级

从高到低：

| 优先级 | 运算符 | 描述 |
|-------|--------|------|
| 1 | `**` | 幂运算 |
| 2 | `+x` `-x` | 正负号 |
| 3 | `*` `/` `//` `%` | 乘除 |
| 4 | `+` `-` | 加减 |
| 5 | `<` `<=` `>` `>=` `!=` `==` | 比较 |
| 6 | `not` | 逻辑非 |
| 7 | `and` | 逻辑与 |
| 8 | `or` | 逻辑或 |

::: tip 建议
遇到复杂表达式时，**多用括号**让代码更清晰：
```python
# 不清晰
result = a + b * c > d and e

# 清晰
result = ((a + (b * c)) > d) and e
```
:::

## ✏️ 动手练习

**练习 1**：判断奇偶数
```python
num = int(input("请输入一个整数："))
is_even = num % 2 == 0
print(f"{num} 是偶数：{is_even}")
```

**练习 2**：判断闰年
```python
year = int(input("请输入年份："))
# 闰年条件：能被 4 整除但不能被 100 整除，或者能被 400 整除
is_leap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)
print(f"{year} 是闰年：{is_leap}")
```

**练习 3**：成绩等级判断
```python
score = int(input("请输入成绩："))
is_excellent = score >= 90
is_good = score >= 80 and score < 90
is_pass = score >= 60 and score < 80

print(f"优秀：{is_excellent}")
print(f"良好：{is_good}")
print(f"及格：{is_pass}")
```

## 🎯 本节要点

- **算术运算符**：`+` `-` `*` `/` `//` `%` `**`
- **比较运算符**：`>` `<` `>=` `<=` `==` `!=`
- **逻辑运算符**：`and` `or` `not`
- **赋值运算符**：`=` `+=` `-=` `*=` 等
- **成员运算符**：`in` `not in`
- 遇到复杂表达式，善用括号

## 下一步

有了运算符，我们可以进行条件判断了！

<div style="text-align: center; margin-top: 2rem;">
  <a href="/basics/conditions" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #306998, #4B8BBE); color: white; border-radius: 8px; text-decoration: none; font-weight: 500;">
    学习条件判断 →
  </a>
</div>

