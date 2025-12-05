# 小项目：猜数字游戏

## 🎮 项目介绍

我们来做一个经典的猜数字游戏！

**游戏规则**：
1. 电脑随机生成一个 1-100 的数字
2. 玩家猜测数字
3. 电脑提示"太大"或"太小"
4. 直到猜对为止，显示猜了多少次

## 📝 基础版本

先来实现最简单的版本：

```python
import random

# 生成随机数
secret_number = random.randint(1, 100)
attempts = 0

print("=" * 40)
print("    欢迎来到猜数字游戏！")
print("    我想了一个 1-100 的数字")
print("=" * 40)

while True:
    # 获取用户输入
    guess = int(input("\n请猜一个数字："))
    attempts += 1
    
    # 判断
    if guess < secret_number:
        print("❌ 太小了，再大一点！")
    elif guess > secret_number:
        print("❌ 太大了，再小一点！")
    else:
        print(f"\n🎉 恭喜你猜对了！答案就是 {secret_number}")
        print(f"你一共猜了 {attempts} 次")
        break

print("\n游戏结束，感谢游玩！")
```

## 🚀 进阶版本

让我们添加更多功能：

```python
import random

def play_game():
    """游戏主函数"""
    # 设置难度
    print("\n请选择难度：")
    print("1. 简单 (1-50，10次机会)")
    print("2. 普通 (1-100，7次机会)")
    print("3. 困难 (1-200，5次机会)")
    
    choice = input("请选择 (1/2/3)：")
    
    if choice == "1":
        max_num, max_attempts = 50, 10
    elif choice == "3":
        max_num, max_attempts = 200, 5
    else:
        max_num, max_attempts = 100, 7
    
    secret = random.randint(1, max_num)
    attempts = 0
    history = []
    
    print(f"\n我想了一个 1-{max_num} 的数字")
    print(f"你有 {max_attempts} 次机会，开始猜吧！\n")
    
    while attempts < max_attempts:
        remaining = max_attempts - attempts
        
        try:
            guess = int(input(f"[剩余 {remaining} 次] 请猜："))
        except ValueError:
            print("⚠️  请输入有效的数字！")
            continue
        
        # 验证范围
        if guess < 1 or guess > max_num:
            print(f"⚠️  请输入 1-{max_num} 之间的数字！")
            continue
        
        attempts += 1
        history.append(guess)
        
        if guess < secret:
            diff = secret - guess
            if diff > 20:
                print("❄️  太小了，差得远呢！")
            else:
                print("🔥 太小了，快接近了！")
        elif guess > secret:
            diff = guess - secret
            if diff > 20:
                print("❄️  太大了，差得远呢！")
            else:
                print("🔥 太大了，快接近了！")
        else:
            print(f"\n🎉🎉🎉 恭喜你猜对了！")
            print(f"答案是 {secret}")
            print(f"你用了 {attempts} 次猜中")
            
            # 评价
            if attempts == 1:
                print("🏆 太厉害了，一次就中！")
            elif attempts <= 3:
                print("⭐ 表现优秀！")
            elif attempts <= 5:
                print("👍 不错不错！")
            else:
                print("😅 下次可以更快哦！")
            
            return True
    
    # 机会用完
    print(f"\n💔 很遗憾，机会用完了...")
    print(f"正确答案是 {secret}")
    print(f"你猜过的数字：{history}")
    return False

def main():
    """主程序"""
    print("=" * 50)
    print("       🎮 欢迎来到猜数字游戏！ 🎮")
    print("=" * 50)
    
    wins = 0
    games = 0
    
    while True:
        if play_game():
            wins += 1
        games += 1
        
        print(f"\n📊 战绩：{wins}/{games} 胜")
        
        play_again = input("\n再玩一局？(y/n)：").lower()
        if play_again != 'y':
            break
    
    print(f"\n最终战绩：{wins}/{games} 胜")
    print("感谢游玩，下次再见！👋")

if __name__ == "__main__":
    main()
```

## 🎨 最终版本（带提示系统）

最完整的版本，包含更多功能：

```python
import random
import time

class GuessNumberGame:
    """猜数字游戏类"""
    
    DIFFICULTIES = {
        "1": {"name": "简单", "range": 50, "attempts": 10},
        "2": {"name": "普通", "range": 100, "attempts": 7},
        "3": {"name": "困难", "range": 200, "attempts": 5},
    }
    
    def __init__(self):
        self.wins = 0
        self.games = 0
        self.best_score = float('inf')
    
    def show_title(self):
        """显示标题"""
        print("\n" + "=" * 50)
        print("       🎯 猜数字大挑战 🎯")
        print("=" * 50)
    
    def choose_difficulty(self):
        """选择难度"""
        print("\n📋 请选择难度：")
        for key, value in self.DIFFICULTIES.items():
            print(f"  {key}. {value['name']} "
                  f"(1-{value['range']}，{value['attempts']}次机会)")
        
        while True:
            choice = input("\n请输入 (1/2/3)：").strip()
            if choice in self.DIFFICULTIES:
                return self.DIFFICULTIES[choice]
            print("⚠️  无效选择，请重新输入！")
    
    def get_hint(self, guess, secret, max_num):
        """获取提示"""
        diff = abs(guess - secret)
        percentage = diff / max_num * 100
        
        direction = "小" if guess < secret else "大"
        
        if percentage > 30:
            return f"❄️  太{direction}了，差得远呢！"
        elif percentage > 15:
            return f"🌤️  太{direction}了，还有距离"
        elif percentage > 5:
            return f"🔥 太{direction}了，很接近了！"
        else:
            return f"🌟 太{direction}了，就差一点点！"
    
    def play_round(self):
        """进行一轮游戏"""
        difficulty = self.choose_difficulty()
        max_num = difficulty["range"]
        max_attempts = difficulty["attempts"]
        
        secret = random.randint(1, max_num)
        attempts = 0
        history = []
        
        print(f"\n{'─' * 40}")
        print(f"难度：{difficulty['name']}")
        print(f"范围：1 - {max_num}")
        print(f"机会：{max_attempts} 次")
        print(f"{'─' * 40}")
        
        time.sleep(0.5)
        print("\n🤔 我已经想好了一个数字...")
        time.sleep(0.5)
        print("开始猜吧！\n")
        
        while attempts < max_attempts:
            remaining = max_attempts - attempts
            
            # 显示猜测历史
            if history:
                print(f"📜 已猜过：{history}")
            
            try:
                guess_str = input(f"[剩余 {remaining} 次] 你的答案：")
                guess = int(guess_str)
            except ValueError:
                print("⚠️  请输入有效的数字！\n")
                continue
            
            if guess < 1 or guess > max_num:
                print(f"⚠️  请输入 1-{max_num} 之间的数字！\n")
                continue
            
            if guess in history:
                print("⚠️  这个数字你已经猜过了！\n")
                continue
            
            attempts += 1
            history.append(guess)
            
            if guess == secret:
                self.celebrate(attempts)
                if attempts < self.best_score:
                    self.best_score = attempts
                    print(f"🏆 新纪录！最佳成绩：{attempts} 次！")
                return True
            
            print(self.get_hint(guess, secret, max_num))
            print()
        
        # 失败
        print(f"\n💔 游戏结束...")
        time.sleep(0.5)
        print(f"正确答案是：{secret}")
        print(f"你猜过的数字：{history}")
        return False
    
    def celebrate(self, attempts):
        """庆祝胜利"""
        print("\n" + "🎉" * 20)
        time.sleep(0.3)
        print(f"\n  🎊 恭喜你猜对了！用了 {attempts} 次！ 🎊\n")
        
        if attempts == 1:
            print("  👑 不可思议！一发入魂！")
        elif attempts <= 3:
            print("  ⭐ 太强了！你是高手！")
        elif attempts <= 5:
            print("  🌟 表现出色！")
        else:
            print("  👍 成功过关！")
        
        print("\n" + "🎉" * 20)
    
    def show_stats(self):
        """显示统计"""
        print(f"\n📊 游戏统计")
        print(f"{'─' * 30}")
        print(f"  总局数：{self.games}")
        print(f"  胜场数：{self.wins}")
        if self.games > 0:
            rate = self.wins / self.games * 100
            print(f"  胜率：{rate:.1f}%")
        if self.best_score < float('inf'):
            print(f"  最佳成绩：{self.best_score} 次")
    
    def run(self):
        """运行游戏"""
        self.show_title()
        
        while True:
            if self.play_round():
                self.wins += 1
            self.games += 1
            
            self.show_stats()
            
            print()
            again = input("🔄 再来一局？(y/n)：").lower().strip()
            if again != 'y':
                break
        
        print("\n👋 感谢游玩，下次再见！")

# 运行游戏
if __name__ == "__main__":
    game = GuessNumberGame()
    game.run()
```

## 💡 学习要点

通过这个项目，你学会了：

1. **随机数生成** - `random.randint()`
2. **循环控制** - `while` 循环和 `break`
3. **条件判断** - `if-elif-else`
4. **异常处理** - `try-except`
5. **列表操作** - 记录猜测历史
6. **函数封装** - 将功能模块化
7. **类的使用** - 面向对象编程

## ✏️ 扩展练习

试着添加这些功能：

1. **计时功能** - 记录用时
2. **排行榜** - 保存最佳成绩
3. **双人模式** - 一人出题一人猜
4. **提示系统** - 花费机会换取提示

---

<div style="text-align: center; margin-top: 2rem;">
  <a href="/practice/calculator" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #306998, #4B8BBE); color: white; border-radius: 8px; text-decoration: none; font-weight: 500;">
    下一个项目：简单计算器 →
  </a>
</div>

