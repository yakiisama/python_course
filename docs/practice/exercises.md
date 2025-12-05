# 练习题集

## 🎯 入门级练习

这些练习帮助你巩固基础知识。

### 练习 1：问候程序

**要求**：编写一个程序，询问用户姓名和年龄，然后输出个性化问候。

```python
name = input("请输入你的名字：")
age = int(input("请输入你的年龄："))

print(f"你好，{name}！")
print(f"你今年 {age} 岁，10年后你就 {age + 10} 岁了！")
```

---

### 练习 2：简单计算器

**要求**：编写一个程序，输入两个数字和运算符，输出计算结果。

```python
num1 = float(input("请输入第一个数字："))
operator = input("请输入运算符 (+, -, *, /)：")
num2 = float(input("请输入第二个数字："))

if operator == "+":
    result = num1 + num2
elif operator == "-":
    result = num1 - num2
elif operator == "*":
    result = num1 * num2
elif operator == "/":
    if num2 != 0:
        result = num1 / num2
    else:
        result = "错误：除数不能为零"
else:
    result = "无效的运算符"

print(f"结果：{result}")
```

---

### 练习 3：判断闰年

**要求**：输入年份，判断是否为闰年。

::: tip 闰年规则
- 能被 4 整除但不能被 100 整除
- 或者能被 400 整除
:::

```python
year = int(input("请输入年份："))

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"{year} 年是闰年 ✅")
else:
    print(f"{year} 年不是闰年 ❌")
```

---

### 练习 4：打印乘法表

**要求**：打印 1-9 的乘法表。

```python
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j}×{i}={i*j}", end="\t")
    print()
```

---

## 🚀 进阶级练习

这些练习需要综合运用多个知识点。

### 练习 5：统计成绩

**要求**：输入多个学生的成绩，计算平均分、最高分、最低分。

```python
scores = []
print("请输入学生成绩（输入 -1 结束）：")

while True:
    score = float(input("成绩："))
    if score == -1:
        break
    scores.append(score)

if scores:
    print(f"\n共 {len(scores)} 名学生")
    print(f"平均分：{sum(scores)/len(scores):.1f}")
    print(f"最高分：{max(scores)}")
    print(f"最低分：{min(scores)}")
else:
    print("没有输入成绩！")
```

---

### 练习 6：密码强度检测

**要求**：检测密码强度，根据以下规则评分：
- 长度 ≥ 8：+1 分
- 包含数字：+1 分
- 包含小写字母：+1 分
- 包含大写字母：+1 分
- 包含特殊字符：+1 分

```python
password = input("请输入密码：")
score = 0

if len(password) >= 8:
    score += 1

if any(c.isdigit() for c in password):
    score += 1

if any(c.islower() for c in password):
    score += 1

if any(c.isupper() for c in password):
    score += 1

special_chars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
if any(c in special_chars for c in password):
    score += 1

strength = ["很弱", "弱", "一般", "强", "很强"]
print(f"密码强度：{strength[score]} ({score}/5)")
```

---

### 练习 7：查找质数

**要求**：找出 1-100 之间的所有质数。

```python
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

primes = [n for n in range(1, 101) if is_prime(n)]
print(f"1-100 之间的质数：")
print(primes)
print(f"共 {len(primes)} 个")
```

---

### 练习 8：单词统计

**要求**：统计一段文本中每个单词出现的次数。

```python
text = """Python is a programming language.
Python is easy to learn.
Python is powerful and fun."""

# 清理并分割
words = text.lower().replace(".", "").split()

# 统计
word_count = {}
for word in words:
    word_count[word] = word_count.get(word, 0) + 1

# 按次数排序输出
sorted_words = sorted(word_count.items(), key=lambda x: x[1], reverse=True)
print("单词统计结果：")
for word, count in sorted_words:
    print(f"  {word}: {count} 次")
```

---

## 🏆 挑战级练习

这些练习有一定难度，尝试独立完成！

### 练习 9：斐波那契数列

**要求**：输出前 n 项斐波那契数列。

```python
def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib

n = int(input("请输入项数："))
result = fibonacci(n)
print(f"前 {n} 项斐波那契数列：")
print(result)
```

---

### 练习 10：回文检测

**要求**：判断一个字符串是否为回文（正反读一样）。

```python
def is_palindrome(text):
    # 只保留字母和数字，转为小写
    cleaned = ''.join(c.lower() for c in text if c.isalnum())
    return cleaned == cleaned[::-1]

# 测试
test_cases = [
    "level",
    "A man a plan a canal Panama",
    "hello",
    "12321",
    "上海自来水来自海上"
]

for text in test_cases:
    result = "是" if is_palindrome(text) else "不是"
    print(f"'{text}' {result}回文")
```

---

### 练习 11：冒泡排序

**要求**：不使用内置排序函数，实现冒泡排序。

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        # 标记是否发生交换
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        # 如果没有交换，说明已经有序
        if not swapped:
            break
    return arr

# 测试
numbers = [64, 34, 25, 12, 22, 11, 90]
print(f"原数组：{numbers}")
print(f"排序后：{bubble_sort(numbers.copy())}")
```

---

### 练习 12：模拟银行账户

**要求**：创建一个简单的银行账户系统，支持存款、取款、查询余额。

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.history = []
    
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.history.append(f"存入 ¥{amount}")
            print(f"成功存入 ¥{amount}")
        else:
            print("存款金额必须大于0")
    
    def withdraw(self, amount):
        if amount > self.balance:
            print("余额不足！")
        elif amount <= 0:
            print("取款金额必须大于0")
        else:
            self.balance -= amount
            self.history.append(f"取出 ¥{amount}")
            print(f"成功取出 ¥{amount}")
    
    def get_balance(self):
        print(f"当前余额：¥{self.balance}")
        return self.balance
    
    def show_history(self):
        print(f"\n{self.owner} 的交易记录：")
        for record in self.history:
            print(f"  - {record}")
        print(f"当前余额：¥{self.balance}")

# 使用示例
account = BankAccount("小明", 1000)
account.deposit(500)
account.withdraw(200)
account.withdraw(2000)  # 余额不足
account.show_history()
```

---

## 📝 答案与解析

每道练习题的答案都在题目下方。建议你：

1. **先自己尝试** - 不要直接看答案
2. **对比答案** - 看看有什么不同的解法
3. **理解思路** - 重要的是理解为什么这样写
4. **举一反三** - 尝试修改或扩展功能

::: tip 学习建议
- 每道题至少花 10 分钟尝试
- 遇到困难先查阅前面的章节
- 代码能运行后，想想能否优化
:::

## 下一步

做完这些练习，来试试做一个完整的小项目吧！

<div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap;">
  <a href="/practice/guess-number" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #306998, #4B8BBE); color: white; border-radius: 8px; text-decoration: none; font-weight: 500;">
    猜数字游戏 →
  </a>
  <a href="/practice/calculator" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #FFD43B, #FFC933); color: #1a1a1a; border-radius: 8px; text-decoration: none; font-weight: 500;">
    简单计算器 →
  </a>
</div>

