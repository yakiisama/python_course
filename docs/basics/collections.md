# 列表与字典

## 📋 列表（List）

列表是最常用的数据结构，可以存储多个元素。

### 创建列表

```python
# 创建列表
fruits = ["苹果", "香蕉", "橙子"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]  # 可以混合类型
empty = []  # 空列表
```

### 访问元素

```python
fruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"]

# 通过索引访问（从 0 开始）
print(fruits[0])   # 苹果
print(fruits[2])   # 橙子
print(fruits[-1])  # 西瓜（最后一个）
print(fruits[-2])  # 葡萄（倒数第二个）

# 切片
print(fruits[1:3])   # ['香蕉', '橙子']
print(fruits[:3])    # ['苹果', '香蕉', '橙子']
print(fruits[2:])    # ['橙子', '葡萄', '西瓜']
print(fruits[::2])   # ['苹果', '橙子', '西瓜']（每隔一个）
```

### 修改列表

```python
fruits = ["苹果", "香蕉", "橙子"]

# 修改元素
fruits[1] = "草莓"
print(fruits)  # ['苹果', '草莓', '橙子']

# 添加元素
fruits.append("葡萄")      # 末尾添加
fruits.insert(1, "芒果")   # 指定位置插入
print(fruits)  # ['苹果', '芒果', '草莓', '橙子', '葡萄']

# 删除元素
fruits.remove("草莓")      # 按值删除
del fruits[0]              # 按索引删除
last = fruits.pop()        # 弹出最后一个
print(fruits)
```

### 常用操作

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]

# 基本操作
print(len(numbers))        # 8（长度）
print(sum(numbers))        # 31（求和）
print(min(numbers))        # 1（最小值）
print(max(numbers))        # 9（最大值）

# 查找
print(4 in numbers)        # True（是否存在）
print(numbers.index(5))    # 4（找索引）
print(numbers.count(1))    # 2（计数）

# 排序
numbers.sort()             # 原地排序
print(numbers)             # [1, 1, 2, 3, 4, 5, 6, 9]
numbers.sort(reverse=True) # 降序
print(numbers)             # [9, 6, 5, 4, 3, 2, 1, 1]

# 不改变原列表的排序
original = [3, 1, 2]
sorted_list = sorted(original)
print(original)     # [3, 1, 2]（未变）
print(sorted_list)  # [1, 2, 3]

# 反转
numbers.reverse()
print(numbers)
```

### 列表推导式

快速生成列表的方式：

```python
# 传统方式
squares = []
for x in range(10):
    squares.append(x ** 2)

# 列表推导式（更简洁）
squares = [x ** 2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# 带条件的列表推导式
even_squares = [x ** 2 for x in range(10) if x % 2 == 0]
print(even_squares)  # [0, 4, 16, 36, 64]
```

## 📖 字典（Dict）

字典存储**键值对**，就像真实的字典：通过"词"找到"解释"。

### 创建字典

```python
# 创建字典
person = {
    "name": "小明",
    "age": 18,
    "city": "北京"
}

# 也可以这样创建
person = dict(name="小明", age=18, city="北京")

# 空字典
empty = {}
```

### 访问元素

```python
person = {"name": "小明", "age": 18, "city": "北京"}

# 通过键访问
print(person["name"])      # 小明
print(person.get("age"))   # 18
print(person.get("job", "未知"))  # 未知（键不存在时返回默认值）

# 获取所有键、值、键值对
print(person.keys())       # dict_keys(['name', 'age', 'city'])
print(person.values())     # dict_values(['小明', 18, '北京'])
print(person.items())      # dict_items([('name', '小明'), ...])
```

### 修改字典

```python
person = {"name": "小明", "age": 18}

# 修改值
person["age"] = 19

# 添加新键值对
person["city"] = "北京"
person["job"] = "学生"

# 删除
del person["job"]
age = person.pop("age")  # 删除并返回值

# 更新多个键值对
person.update({"age": 20, "hobby": "编程"})

print(person)
```

### 遍历字典

```python
person = {"name": "小明", "age": 18, "city": "北京"}

# 遍历键
for key in person:
    print(key)

# 遍历值
for value in person.values():
    print(value)

# 遍历键值对
for key, value in person.items():
    print(f"{key}: {value}")
```

### 字典推导式

```python
# 创建字典
squares = {x: x ** 2 for x in range(5)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# 转换列表为字典
fruits = ["苹果", "香蕉", "橙子"]
fruit_dict = {i: fruit for i, fruit in enumerate(fruits)}
print(fruit_dict)  # {0: '苹果', 1: '香蕉', 2: '橙子'}
```

## 🎭 元组（Tuple）

元组和列表类似，但**不可修改**：

```python
# 创建元组
point = (3, 4)
colors = ("红", "绿", "蓝")

# 访问元素
print(point[0])  # 3
print(colors[1])  # 绿

# 不能修改！
# point[0] = 5  # ❌ 错误！

# 元组解包
x, y = point
print(x, y)  # 3 4

# 单元素元组需要逗号
single = (1,)
```

::: tip 何时用元组
- 不希望数据被修改时
- 作为字典的键（列表不行）
- 函数返回多个值时
:::

## 🎯 集合（Set）

集合存储**不重复**的元素：

```python
# 创建集合
numbers = {1, 2, 3, 3, 2, 1}
print(numbers)  # {1, 2, 3}（自动去重）

# 集合操作
a = {1, 2, 3}
b = {2, 3, 4}

print(a | b)  # 并集：{1, 2, 3, 4}
print(a & b)  # 交集：{2, 3}
print(a - b)  # 差集：{1}

# 添加和删除
numbers.add(4)
numbers.remove(1)
```

## 📊 实际应用示例

### 学生成绩管理

```python
students = [
    {"name": "小明", "score": 85},
    {"name": "小红", "score": 92},
    {"name": "小刚", "score": 78}
]

# 计算平均分
avg = sum(s["score"] for s in students) / len(students)
print(f"平均分：{avg:.1f}")

# 找最高分
top = max(students, key=lambda s: s["score"])
print(f"最高分：{top['name']} - {top['score']}分")

# 按成绩排序
sorted_students = sorted(students, key=lambda s: s["score"], reverse=True)
for i, s in enumerate(sorted_students):
    print(f"{i+1}. {s['name']}: {s['score']}分")
```

### 词频统计

```python
text = "Python is great and Python is easy"
words = text.lower().split()

# 方法 1：手动统计
word_count = {}
for word in words:
    word_count[word] = word_count.get(word, 0) + 1

print(word_count)
# {'python': 2, 'is': 2, 'great': 1, 'and': 1, 'easy': 1}
```

### 购物车

```python
cart = []

def add_item(name, price, quantity=1):
    cart.append({
        "name": name,
        "price": price,
        "quantity": quantity
    })

def get_total():
    return sum(item["price"] * item["quantity"] for item in cart)

def show_cart():
    print("=== 购物车 ===")
    for item in cart:
        subtotal = item["price"] * item["quantity"]
        print(f"{item['name']} x {item['quantity']} = ¥{subtotal}")
    print(f"总计：¥{get_total()}")

# 使用
add_item("苹果", 5, 3)
add_item("香蕉", 3, 2)
add_item("牛奶", 8)
show_cart()
```

## ✏️ 动手练习

**练习 1**：找出列表中的重复元素
```python
numbers = [1, 2, 3, 2, 4, 3, 5, 1]
seen = set()
duplicates = set()

for num in numbers:
    if num in seen:
        duplicates.add(num)
    seen.add(num)

print(f"重复的元素：{duplicates}")  # {1, 2, 3}
```

**练习 2**：合并两个字典
```python
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}

# 方法 1
merged = {**dict1, **dict2}

# 方法 2
merged = dict1.copy()
merged.update(dict2)

print(merged)  # {'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

**练习 3**：列表分组
```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

odd = [n for n in numbers if n % 2 == 1]
even = [n for n in numbers if n % 2 == 0]

print(f"奇数：{odd}")   # [1, 3, 5, 7, 9]
print(f"偶数：{even}")  # [2, 4, 6, 8, 10]
```

## 🎯 本节要点

| 类型 | 特点 | 示例 |
|------|------|------|
| 列表 | 有序、可修改 | `[1, 2, 3]` |
| 字典 | 键值对 | `{"name": "小明"}` |
| 元组 | 有序、不可修改 | `(1, 2, 3)` |
| 集合 | 无序、不重复 | `{1, 2, 3}` |

- 列表用 `[]`，字典用 `{}`
- 列表通过**索引**访问，字典通过**键**访问
- 推导式可以简化代码

## 下一步

基础语法都学完了！接下来做一些实战练习吧！

<div style="text-align: center; margin-top: 2rem;">
  <a href="/practice/exercises" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #306998, #4B8BBE); color: white; border-radius: 8px; text-decoration: none; font-weight: 500;">
    开始实战练习 →
  </a>
</div>

