# 小项目：简单计算器

## 🧮 项目介绍

制作一个功能完整的命令行计算器！

**功能需求**：
- 基本运算：加、减、乘、除
- 高级运算：幂、取余、开方
- 历史记录
- 连续计算

## 📝 基础版本

最简单的计算器：

```python
def calculate(num1, operator, num2):
    """执行计算"""
    if operator == "+":
        return num1 + num2
    elif operator == "-":
        return num1 - num2
    elif operator == "*":
        return num1 * num2
    elif operator == "/":
        if num2 == 0:
            return "错误：除数不能为零"
        return num1 / num2
    else:
        return "错误：无效的运算符"

def main():
    print("=" * 40)
    print("      简单计算器")
    print("  支持运算：+ - * /")
    print("  输入 'q' 退出")
    print("=" * 40)
    
    while True:
        print()
        
        # 获取第一个数
        input1 = input("请输入第一个数字：")
        if input1.lower() == 'q':
            break
        
        # 获取运算符
        operator = input("请输入运算符 (+, -, *, /)：")
        
        # 获取第二个数
        input2 = input("请输入第二个数字：")
        
        try:
            num1 = float(input1)
            num2 = float(input2)
            result = calculate(num1, operator, num2)
            print(f"\n结果：{num1} {operator} {num2} = {result}")
        except ValueError:
            print("\n错误：请输入有效的数字！")
    
    print("\n感谢使用，再见！")

if __name__ == "__main__":
    main()
```

## 🚀 进阶版本

添加更多功能：

```python
import math

def show_menu():
    """显示菜单"""
    print("\n" + "=" * 50)
    print("          🧮 高级计算器 🧮")
    print("=" * 50)
    print("\n可用运算：")
    print("  基础：+（加）-（减）*（乘）/（除）")
    print("  高级：^（幂）%（取余）//（整除）")
    print("  函数：sqrt（开方）abs（绝对值）")
    print("\n命令：")
    print("  h - 查看历史记录")
    print("  c - 清除历史")
    print("  q - 退出程序")
    print("=" * 50)

def calculate(expression):
    """计算表达式"""
    # 替换特殊运算符
    expression = expression.replace("^", "**")
    expression = expression.replace("sqrt", "math.sqrt")
    expression = expression.replace("abs", "abs")
    
    try:
        result = eval(expression)
        return result
    except ZeroDivisionError:
        return "错误：除数不能为零"
    except Exception as e:
        return f"错误：{e}"

def main():
    history = []
    show_menu()
    
    while True:
        print()
        user_input = input(">>> ").strip()
        
        if not user_input:
            continue
        
        # 处理命令
        if user_input.lower() == 'q':
            break
        elif user_input.lower() == 'h':
            if history:
                print("\n📜 计算历史：")
                for i, record in enumerate(history[-10:], 1):
                    print(f"  {i}. {record}")
            else:
                print("暂无历史记录")
            continue
        elif user_input.lower() == 'c':
            history.clear()
            print("历史记录已清除")
            continue
        elif user_input.lower() == 'help':
            show_menu()
            continue
        
        # 执行计算
        result = calculate(user_input)
        
        if isinstance(result, str) and result.startswith("错误"):
            print(f"❌ {result}")
        else:
            # 格式化输出
            if isinstance(result, float):
                if result == int(result):
                    result = int(result)
                else:
                    result = round(result, 10)
            
            record = f"{user_input} = {result}"
            history.append(record)
            print(f"✅ {result}")
    
    print("\n感谢使用，再见！👋")

if __name__ == "__main__":
    main()
```

## 🎨 最终版本（面向对象）

使用类来组织代码：

```python
import math
import re
from datetime import datetime

class Calculator:
    """高级计算器类"""
    
    def __init__(self):
        self.history = []
        self.memory = 0
        self.last_result = 0
    
    def show_banner(self):
        """显示欢迎界面"""
        print("""
╔════════════════════════════════════════════════╗
║            🧮 Python 高级计算器 🧮              ║
╠════════════════════════════════════════════════╣
║  基础运算：+ - * / （加减乘除）                 ║
║  高级运算：^ % // （幂、取余、整除）            ║
║  数学函数：sqrt sin cos tan log                ║
║  特殊变量：ans（上次结果）mem（内存）           ║
╠════════════════════════════════════════════════╣
║  命令：help / h(历史) / c(清除) / q(退出)       ║
╚════════════════════════════════════════════════╝
        """)
    
    def show_help(self):
        """显示帮助"""
        print("""
📖 使用帮助
─────────────────────────────────────────
【基础运算】
  5 + 3        加法
  10 - 4       减法
  6 * 7        乘法
  20 / 4       除法
  
【高级运算】
  2 ^ 10       幂运算 (2的10次方)
  17 % 5       取余 (17除以5的余数)
  17 // 5      整除 (17除以5取整)
  
【数学函数】
  sqrt(16)     开平方根
  sin(30)      正弦（角度）
  cos(60)      余弦（角度）
  tan(45)      正切（角度）
  log(100)     对数（以10为底）
  ln(10)       自然对数
  abs(-5)      绝对值
  
【特殊变量】
  ans          使用上次的计算结果
  mem          使用内存中的值
  
【内存操作】
  ms           保存当前结果到内存
  mc           清除内存
  mr           显示内存值

【其他命令】
  h            查看历史记录
  c            清除历史
  help         显示帮助
  q            退出程序
─────────────────────────────────────────
        """)
    
    def preprocess(self, expr):
        """预处理表达式"""
        # 替换特殊变量
        expr = expr.replace("ans", str(self.last_result))
        expr = expr.replace("mem", str(self.memory))
        
        # 替换运算符
        expr = expr.replace("^", "**")
        
        # 替换数学函数
        # sin/cos/tan 需要转换角度到弧度
        expr = re.sub(r'sin\(([^)]+)\)', 
                      r'math.sin(math.radians(\1))', expr)
        expr = re.sub(r'cos\(([^)]+)\)', 
                      r'math.cos(math.radians(\1))', expr)
        expr = re.sub(r'tan\(([^)]+)\)', 
                      r'math.tan(math.radians(\1))', expr)
        
        expr = expr.replace("sqrt", "math.sqrt")
        expr = expr.replace("log", "math.log10")
        expr = expr.replace("ln", "math.log")
        
        return expr
    
    def calculate(self, expression):
        """执行计算"""
        try:
            processed = self.preprocess(expression)
            result = eval(processed)
            
            # 格式化结果
            if isinstance(result, float):
                if abs(result - round(result)) < 1e-10:
                    result = int(round(result))
                else:
                    result = round(result, 10)
            
            # 保存结果
            self.last_result = result
            
            # 记录历史
            timestamp = datetime.now().strftime("%H:%M:%S")
            self.history.append({
                "time": timestamp,
                "expr": expression,
                "result": result
            })
            
            return result
            
        except ZeroDivisionError:
            return "❌ 错误：除数不能为零"
        except ValueError as e:
            return f"❌ 错误：无效的数值 - {e}"
        except SyntaxError:
            return "❌ 错误：表达式语法错误"
        except Exception as e:
            return f"❌ 错误：{e}"
    
    def show_history(self, count=10):
        """显示历史记录"""
        if not self.history:
            print("📜 暂无历史记录")
            return
        
        print(f"\n📜 最近 {min(count, len(self.history))} 条计算记录：")
        print("─" * 40)
        
        for record in self.history[-count:]:
            print(f"  [{record['time']}] {record['expr']} = {record['result']}")
        
        print("─" * 40)
    
    def handle_command(self, cmd):
        """处理命令"""
        cmd = cmd.lower().strip()
        
        if cmd == 'q':
            return False
        elif cmd == 'h':
            self.show_history()
        elif cmd == 'c':
            self.history.clear()
            print("✅ 历史记录已清除")
        elif cmd == 'help':
            self.show_help()
        elif cmd == 'ms':
            self.memory = self.last_result
            print(f"✅ 已保存 {self.memory} 到内存")
        elif cmd == 'mc':
            self.memory = 0
            print("✅ 内存已清除")
        elif cmd == 'mr':
            print(f"📝 内存值：{self.memory}")
        else:
            # 执行计算
            result = self.calculate(cmd)
            if isinstance(result, str) and result.startswith("❌"):
                print(result)
            else:
                print(f"   = {result}")
        
        return True
    
    def run(self):
        """运行计算器"""
        self.show_banner()
        
        while True:
            try:
                user_input = input("\n🔢 ").strip()
                
                if not user_input:
                    continue
                
                if not self.handle_command(user_input):
                    break
                    
            except KeyboardInterrupt:
                print("\n")
                break
        
        print("\n👋 感谢使用，再见！")
        
        if self.history:
            print(f"📊 本次共进行了 {len(self.history)} 次计算")

# 运行计算器
if __name__ == "__main__":
    calc = Calculator()
    calc.run()
```

## 🎯 功能展示

运行效果示例：

```
╔════════════════════════════════════════════════╗
║            🧮 Python 高级计算器 🧮              ║
╚════════════════════════════════════════════════╝

🔢 5 + 3
   = 8

🔢 ans * 2
   = 16

🔢 sqrt(144)
   = 12

🔢 2 ^ 10
   = 1024

🔢 sin(30)
   = 0.5

🔢 h

📜 最近 5 条计算记录：
──────────────────────────────────
  [14:30:01] 5 + 3 = 8
  [14:30:05] ans * 2 = 16
  [14:30:10] sqrt(144) = 12
  [14:30:15] 2 ^ 10 = 1024
  [14:30:20] sin(30) = 0.5
──────────────────────────────────
```

## 💡 学习要点

通过这个项目，你学会了：

1. **函数定义** - 模块化代码
2. **异常处理** - `try-except` 处理错误
3. **字符串处理** - 替换、正则表达式
4. **类与对象** - 面向对象编程
5. **列表操作** - 历史记录管理
6. **字典使用** - 存储结构化数据
7. **eval 函数** - 动态执行表达式

::: warning 安全提示
`eval()` 函数会执行任意 Python 代码，在实际项目中要谨慎使用。这里仅作为学习示例。
:::

## ✏️ 扩展练习

试着添加这些功能：

1. **括号支持** - 支持 (1+2)*3 这样的表达式
2. **常量** - 添加 pi、e 等数学常量
3. **单位转换** - 长度、温度、货币转换
4. **图形界面** - 使用 tkinter 做 GUI 版本
5. **保存历史** - 将历史记录保存到文件

---

## 🎉 恭喜完成！

你已经完成了所有的基础课程和实战项目！

### 接下来可以学习：

- **文件操作** - 读写文件
- **模块和包** - 组织代码
- **面向对象** - 更深入的 OOP
- **网络编程** - 爬虫、API
- **数据分析** - pandas、matplotlib
- **Web 开发** - Flask、Django

<div style="text-align: center; margin-top: 2rem;">
  <a href="/" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #306998, #4B8BBE); color: white; border-radius: 8px; text-decoration: none; font-weight: 500;">
    🏠 返回首页
  </a>
</div>

