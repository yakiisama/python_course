# 列表与字典

## 🎯 什么是数据结构？

**什么是数据结构？**
数据结构就是用来组织和存储数据的方式。就像现实中有不同的容器：
- 列表：像购物清单，一个接一个
- 字典：像字典书，通过"词"找"解释"
- 元组：像固定座位表，不能改
- 集合：像去重后的名单，没有重复

## 📋 列表（List）

**什么是列表？**
列表是最常用的数据结构，可以存储多个元素。就像购物清单，可以写很多项。

列表是最常用的数据结构，可以存储多个元素。

### 创建列表

```python
# 创建列表
fruits = ["苹果", "香蕉", "橙子"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]  # 可以混合类型
empty = []  # 空列表
```

**这段代码在做什么？**
- `fruits` 是一个列表，里面有三个水果
- `numbers` 是一个列表，里面有五个数字
- `mixed` 是一个列表，可以放不同类型的数据
- `empty` 是一个空列表，里面什么都没有

**生活例子**：
- 购物清单：["苹果", "香蕉", "牛奶"]
- 待办事项：["写作业", "吃饭", "睡觉"]

### 访问元素

**什么是索引？**
索引就是位置编号，从 0 开始。就像排队，第一个人是 0 号，第二个人是 1 号。

```python
fruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"]

# 通过索引访问（从 0 开始）
print(fruits[0])   # 苹果（第一个）
print(fruits[2])   # 橙子（第三个）
print(fruits[-1])  # 西瓜（最后一个）
print(fruits[-2])  # 葡萄（倒数第二个）

# 切片
print(fruits[1:3])   # ['香蕉', '橙子']（从索引 1 到 2）
print(fruits[:3])    # ['苹果', '香蕉', '橙子']（从开始到索引 2）
print(fruits[2:])    # ['橙子', '葡萄', '西瓜']（从索引 2 到结束）
print(fruits[::2])   # ['苹果', '橙子', '西瓜']（每隔一个）
```

**什么是切片？**
切片就是"切一段"，就像切蛋糕，切一块下来。

**生活例子**：
- `fruits[0]`：第一个水果
- `fruits[-1]`：最后一个水果
- `fruits[1:3]`：第二个到第三个水果

### 修改列表

```python
fruits = ["苹果", "香蕉", "橙子"]

# 修改元素
fruits[1] = "草莓"  # 把第二个改成"草莓"
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

**这段代码在做什么？**
- `append()`：在末尾添加，就像在清单最后加一项
- `insert()`：在指定位置插入，就像在清单中间插一项
- `remove()`：按值删除，就像划掉清单上的某一项
- `del`：按索引删除，就像删除第几项
- `pop()`：弹出最后一个，就像拿走最后一项

### 常用操作

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]

# 基本操作
print(len(numbers))        # 8（长度，有几个元素）
print(sum(numbers))        # 31（求和）
print(min(numbers))        # 1（最小值）
print(max(numbers))        # 9（最大值）

# 查找
print(4 in numbers)        # True（是否存在）
print(numbers.index(5))    # 4（找索引，5 在第几个位置）
print(numbers.count(1))    # 2（计数，1 出现了几次）

# 排序
numbers.sort()             # 原地排序（从小到大）
print(numbers)             # [1, 1, 2, 3, 4, 5, 6, 9]
numbers.sort(reverse=True) # 降序（从大到小）
print(numbers)             # [9, 6, 5, 4, 3, 2, 1, 1]

# 不改变原列表的排序
original = [3, 1, 2]
sorted_list = sorted(original)  # 返回新列表
print(original)     # [3, 1, 2]（未变）
print(sorted_list)  # [1, 2, 3]

# 反转
numbers.reverse()  # 把列表反过来
print(numbers)
```

**什么是原地排序？**
原地排序就是直接修改原列表，不创建新列表。就像把书重新排列，原来的位置变了。

### 列表推导式

**什么是列表推导式？**
列表推导式是快速生成列表的方式，就像"一句话生成一个列表"。

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

**这段代码在做什么？**
- `[x ** 2 for x in range(10)]`：对每个 x，计算 x²，生成列表
- `[x ** 2 for x in range(10) if x % 2 == 0]`：只对偶数计算 x²

**什么时候用列表推导式？**
当你要生成一个列表，而且逻辑简单时，用列表推导式更简洁。

## 📖 字典（Dict）

**什么是字典？**
字典存储**键值对**，就像真实的字典：通过"词"找到"解释"。

**什么是键值对？**
键值对就是"键"和"值"的配对。就像字典里，"词"是键，"解释"是值。

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

**这段代码在做什么？**
- `person` 是一个字典，存储了一个人的信息
- `"name"` 是键，`"小明"` 是值
- 通过键可以找到对应的值

**生活例子**：
- 通讯录：{"姓名": "张三", "电话": "123456"}
- 学生信息：{"学号": "001", "姓名": "李四", "成绩": 90}

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

**这段代码在做什么？**
- `person["name"]`：通过键访问值
- `person.get("age")`：通过键访问值（更安全，键不存在不会报错）
- `person.get("job", "未知")`：键不存在时返回默认值

**什么时候用 []，什么时候用 get()？**
- `[]`：确定键存在时用，键不存在会报错
- `get()`：不确定键是否存在时用，更安全

### 修改字典

```python
person = {"name": "小明", "age": 18}

# 修改值
person["age"] = 19  # 把年龄改成 19

# 添加新键值对
person["city"] = "北京"
person["job"] = "学生"

# 删除
del person["job"]  # 删除"job"这个键值对
age = person.pop("age")  # 删除并返回值

# 更新多个键值对
person.update({"age": 20, "hobby": "编程"})

print(person)
```

**这段代码在做什么？**
- 修改值：直接赋值，就像更新信息
- 添加新键值对：直接赋值，就像添加新信息
- 删除：用 `del` 或 `pop()`
- 更新：用 `update()` 一次更新多个

### 遍历字典

**什么是遍历？**
遍历就是"一个一个看过去"，就像检查作业，一本一本看。

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

**这段代码在做什么？**
- `for key in person`：遍历所有键
- `for value in person.values()`：遍历所有值
- `for key, value in person.items()`：同时遍历键和值

### 字典推导式

**什么是字典推导式？**
字典推导式是快速生成字典的方式，就像列表推导式一样。

```python
# 创建字典
squares = {x: x ** 2 for x in range(5)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# 转换列表为字典
fruits = ["苹果", "香蕉", "橙子"]
fruit_dict = {i: fruit for i, fruit in enumerate(fruits)}
print(fruit_dict)  # {0: '苹果', 1: '香蕉', 2: '橙子'}
```

**这段代码在做什么？**
- `{x: x ** 2 for x in range(5)}`：对每个 x，生成键值对 `{x: x**2}`
- `{i: fruit for i, fruit in enumerate(fruits)}`：把列表转成字典

## 🎭 元组（Tuple）

**什么是元组？**
元组和列表类似，但**不可修改**。就像固定座位表，一旦定好就不能改。

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

**这段代码在做什么？**
- `point = (3, 4)`：创建一个元组，表示一个点
- `x, y = point`：元组解包，把两个值分别赋给 x 和 y

**什么时候用元组？**
- 不希望数据被修改时
- 作为字典的键（列表不行，因为列表可变）
- 函数返回多个值时

:::tip 何时用元组
- 不希望数据被修改时
- 作为字典的键（列表不行）
- 函数返回多个值时
:::

## 🎯 集合（Set）

**什么是集合？**
集合存储**不重复**的元素。就像去重后的名单，每个人只出现一次。

集合存储**不重复**的元素：

```python
# 创建集合
numbers = {1, 2, 3, 3, 2, 1}
print(numbers)  # {1, 2, 3}（自动去重）

# 集合操作
a = {1, 2, 3}
b = {2, 3, 4}

print(a | b)  # 并集：{1, 2, 3, 4}（两个集合的所有元素）
print(a & b)  # 交集：{2, 3}（两个集合都有的元素）
print(a - b)  # 差集：{1}（a 有但 b 没有的元素）

# 添加和删除
numbers.add(4)  # 添加元素
numbers.remove(1)  # 删除元素
```

**这段代码在做什么？**
- `{1, 2, 3, 3, 2, 1}`：创建集合，自动去重
- `a | b`：并集，就像合并两个名单
- `a & b`：交集，就像找两个名单的共同部分
- `a - b`：差集，就像找 a 有但 b 没有的

**什么时候用集合？**
- 需要去重时
- 需要做集合运算（并集、交集、差集）时

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

**这段代码在做什么？**
- 用一个列表存储多个学生的信息（每个学生是一个字典）
- 计算平均分、找最高分、按成绩排序

**什么是 lambda？**
`lambda` 是匿名函数，用来写简单的函数。`key=lambda s: s["score"]` 表示"按 score 排序"。

### 词频统计

```python
text = "Python is great and Python is easy"
words = text.lower().split()  # 转小写，按空格分割

# 方法 1：手动统计
word_count = {}
for word in words:
    word_count[word] = word_count.get(word, 0) + 1

print(word_count)
# {'python': 2, 'is': 2, 'great': 1, 'and': 1, 'easy': 1}
```

**这段代码在做什么？**
- 统计每个词出现的次数
- 用字典存储，键是词，值是次数

**生活例子**：
- 统计文章里每个词出现的次数
- 统计投票里每个选项的票数

### 购物车

```python
cart = []  # 购物车

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

**这段代码在做什么？**
- 用列表存储购物车里的商品（每个商品是一个字典）
- 可以添加商品、计算总价、显示购物车

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

odd = [n for n in numbers if n % 2 == 1]  # 奇数
even = [n for n in numbers if n % 2 == 0]  # 偶数

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

## 常见问题

### Q: 列表和元组有什么区别？

- 列表：可以修改（添加、删除、修改元素）
- 元组：不能修改（一旦创建就不能改）

就像购物清单可以改，但固定座位表不能改。

### Q: 什么时候用列表，什么时候用字典？

- 列表：顺序重要，或者只需要一个值（比如购物清单）
- 字典：需要通过"名字"找"值"（比如学生信息，通过名字找成绩）

### Q: 字典的键可以用什么类型？

- 可以用：字符串、数字、元组（不可变类型）
- 不能用：列表、字典（可变类型）

因为字典的键必须是不可变的，就像门牌号不能变一样。

### Q: 集合和列表有什么区别？

- 列表：有序，可以有重复
- 集合：无序，不能有重复

就像名单可以重复，但去重后的名单不能重复。

## 下一步

基础语法都学完了！接下来做一些实战练习吧！
