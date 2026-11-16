# 入门

## 变量

- `int`  存储整数，不带小数点
- `double` 浮点数 带小数点
- `string` 字符串类型
- `char` 单个字符
- `bool` 只有`true` 和`false`

```c#
public class DataBase
{
  public static void Run()
  {
    int a = 12;
    double b = 12.1;
    char c = 'c';
    string s = "hello jack";
    bool bb = true;
    Console.WriteLine($"{a},{b},{c},{s},{bb}");
  }
}

//12,12.1,c,hello jack,True 打印的是大写的True
```

## 常量

和`js`类似，表明固定的数据。

```c#
const double a = 3.14;
 const int age = 18;
```

## 声明多个变量

```c#
int a = 5,b=10,c=20;
```

## 标识符

所有 `C#` 变量都必须使用唯一的名称进行标识。

- 名称可以包含字母、数字和下划线字符 (_)
- 名称必须以字母或下划线开头
- 名称应以小写字母开头，并且不能包含空格
- 名称区分大小写（"myVar" 和 "myvar "是不同的变量）
- 保留字（如 C# 关键字，如 int 或 double）不能用作名称

实例

```c#
// 很好
int minutesPerHour = 60;

// 还可以，但不太容易理解 m 到底是什么
int m = 60;
```

## 数据类型

| 数据类型 | 大小   | 描述                                                                  |
| -------- | ------ | --------------------------------------------------------------------- |
| int      | 4 字节 | 存储从 -2,147,483,648 到 2,147,483,647 的整数                         |
| long     | 8 字节 | 存储从 -9,223,372,036,854,775,808 到 9,223,372,036,854,775,807 的整数 |
| float    | 4 字节 | 存储分数数值。足以存储 6 到 7 位小数                                  |
| double   | 8 字节 | 存储分数数值。足以存储 15 位小数                                      |
| bool     | 1 位   | 存储 true 或 false 值                                                 |
| char     | 2 字节 | 存储单个字符/字母，用单引号括起来                                     |
| string   | 2 字节 | 字符	存储一系列字符，用双引号括起来                                   |

## 类型转换

在 C# 中，有两种类型的转换：

隐式转换（自动）- 将较小的类型转换为较大的类型 （从小到大）
char -> int -> long -> float -> double

显式转换（手动）- 将较大的类型转换为较小的类型
double -> float -> long -> int -> char

```c#
public class DataBase
{
  public static void Run()
  {
    int a = 12;
    
    double b = a;

    Console.WriteLine($"{a},{b}");
  }
}
// 12 12 隐转换
```

## 用户输入

```c#
Console.WriteLine("请输入内容：");
string? s = Console.ReadLine();
Console.WriteLine($"接收到的内容,{s}");
```

## 算数运算

| 运算符 | 名称 | 描述                                | 例子 | 试一试 |
| ------ | ---- | ----------------------------------- | ---- | ------ |
| +      | 加法 | 将两个值相加                        |      |        |
| -      | 减法 | 从一个值中减去另一个值	x - y	试一试 |      |        |
| *      | 乘法 | 将两个值相乘	x * y	试一试           |      |        |
| /      | 除法 | 将一个值除以另一个值	x / y	试一试   |      |        |
| %      | 取余 | 返回除法的余数	x % y	试一试         |      |        |
| ++     | 递增 | 将变量的值加 1	x++	试一试           |      |        |
| --     | 递减 | 将变量的值减 1	x--                  |      |        |

## 赋值运算

| 运算符 | 例子    | 等同于     |     |
| ------ | ------- | ---------- | --- |
| =      | x = 5   | x = 5      |     |
| +=     | x += 3  | x = x + 3  |     |
| -=     | x -= 3  | x = x - 3  |     |
| *=     | x *= 3  | x = x * 3  |     |
| /=     | x /= 3  | x = x / 3  |     |
| %=     | x %= 3  | x = x % 3  |     |
| &=     | x &= 3  | x = x & 3  |     |
| \|=    | x \|= 3 | x = x \| 3 |     |
| ^=     | x ^= 3  | x = x ^ 3  |     |
| >>=    | x >>= 3 | x = x >> 3 |     |
| <<=    | x <<= 3 | x = x << 3 |     |

## 比较运算

比较的结果返回值为 True 或 False。这些值被称为布尔值。

```csharp
int x = 6;
int y = 3;

Console.WriteLine(x>y); // True
```

| 运算符 | 名称       | 例子   |
| ------ | ---------- | ------ |
| ==     | 等于       | x == y |
| !=     | 不等于     | x != y |
| >      | 大于       | x > y  |
| <      | 小于       | x < y  |
| >=     | 大于或等于 | x >= y |
| <=     | 小于或等于 | x <= y |

## 逻辑运算

和js的逻辑运算一直，即： `&&`  `||`   `! `

| 运算符 | 名称   | 描述                                 | 例子            |     |
| ------ | ------ | ------------------------------------ | --------------- | --- |
| &&     | 逻辑与 | 如果两个语句都为真，则返回 True      | x < 5 && x < 10 |     |
| \|     | 逻辑或 | 如果其中一个语句为真，则返回 True    | x < 5 \| x < 4  |     |
| !      | 逻辑非 | 反转结果，如果结果为真，则返回 False |                 |     |

## 数学运算

即`Math` 函数

`Math.Max(x,y)` 找出两个数中的最大值

`Math.min(x,y)`  找出两个数中的最小值

`Math.Sqrt(x)` 返回x的平方跟；

`Math.Abs(x)` 返回x的绝对值。

`Math.round()` 将数字四舍五入到最接近的整数。

```csharp
 var s = Math.Round(8.88);
  Console.WriteLine($"接收到的内容,{s}"); //9
```

## 字符串

**字符串长度**

在 C# 中，字符串实际上是对象，它包含可对字符串执行操作的属性和方法。例如，可以使用 `Length` 属性确定字符串的长度：

```csharp
string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
Console.WriteLine("The length of the txt string is: " + txt.Length);
```

`ToUpper()` 和 `ToLower()`

和`js` 类似 返回大小写。

**字符串拼接**

```csharp
string firstName = "Bill ";
string lastName = "Gates";
string name = firstName + lastName;
Console.WriteLine(name);
```

使用`Concat` 来拼接两个字符串

```csharp
string firstName = "Bill ";
string lastName = "Gates";
string name = string.Concat(firstName, lastName);
Console.WriteLine(name);
```

数字和字符串相加：得到是字符串和`js` 逻辑一致，数字会被转成字符串再和字符串相加

```csharp
    int x = 10;
    string y = "20";
    string z = x + y;  // z 将是 1020（一个字符串）
    Console.WriteLine(z);
```

**字符串模板语法**

和js中的语法类似，但是是以`$` 开头

```csharp
string firstName = "Bill";
string lastName = "Gates";
string name = $"My full name is: {firstName} {lastName}";
Console.WriteLine(name);
```

**访问字符串**

和js一样，字符串也是数组，可以用`x[index]` 来访问。

```csharp
var str = "love";
var s = str[0]; //l
```

 `IndexOf()` 方法

您还可以使用` 方法查找字符串中特定字符的索引位置：

```csharp
string myString = "Hello";
Console.WriteLine(myString.IndexOf("e"));  // 输出 "1"
```

## 转义字符

| 转义字符 | 结果 | 描述   |
| -------- | ---- | ------ |
| \'       | '    | 单引号 |
| \"       | "    | 双引号 |
| \\       | \    | 反斜杠 |

```csharp
string txt = "We are the so-called \"Vikings\" from the north.";
```

## 布尔值

C# 提供了一个 bool 数据类型，它可以取值 `true` 或 `false`。

```csharp
bool isCSharpFun = true;
bool isFishTasty = false;
Console.WriteLine(isCSharpFun);   // 输出 True
Console.WriteLine(isFishTasty);   // 输出 False
```

## `if` 语句

C# 支持通常数学中的逻辑条件：

- 小于：`a < b`
- 小于或等于：`a <= b`
- 大于：`a > b`
- 大于或等于：`a >= b`
- 等于：`a == b`
- 不等于：`a != b`

```csharp
if (20 > 18) 
{
  Console.WriteLine("20 大于 18");
}
```

**else语句**

```csharp
if (condition)
{
  // 如果条件为真，则执行此代码块
} 
else 
{
  // 如果条件为假，则执行此代码块
}
```

**else if语句**

```csharp
if (条件 1)
{
  // 如果条件 1 为真，则执行此代码块
}
else if (条件 2)
{
  // 如果条件 1 为假且条件 2 为真，则执行此代码块
}
else
{
  // 如果条件 1 为假且条件2也为假，则执行此代码块
}
```

**三元表达式**

```csharp
int time = 20;
string result = (time < 18) ? "日安" : "晚安";
Console.WriteLine(result);
```

## switch语句

```csharp
switch(表达式)
{
  case x:
    // 代码块
    break;
  case y:
    // 代码块
    break;
  default:
    // 代码块
    break;
}
```

## while循环

```csharp
int i = 0;
while (i < 5) 
{
  Console.WriteLine(i);
  i++;
}
```

## for循环

```csharp
 for (int i = 1; i <= 5; i++)
    {
      Console.WriteLine(i);
    }
```

## foreach循环

```csharp
string[] cars = {"Volvo", "BMW", "Ford", "Tesla"};
foreach (string i in cars) 
{
  Console.WriteLine(i);
```

## 数组

数组用于在单个变量中存储多个值，而不是为每个值声明单独的变量。

要声明数组，请使用**方括号**定义变量类型：

```csharp
string[] cars =  ["Volvo", "BMW", "Ford", "Tesla"];
int[] nums = [1,2,3]
```

访问数组元素

```csharp
cars[0]  //"Volvo"
nums[1] //2
```

更改元素

```csharp
cars[0] = "Opel";
```

数组长度

```csharp
cars.Length
```

其他的创建数组方法

```csharp
   //创建固定长度的字符串数组
    string[] cars = new string[4];
    //固定大小且有默认值
    string[] cars2 = new string[4] { "vivo", "bmw", "Tesla", "nissian" };
    //不指定长度，但有默认值

    string[] cars3 = new string[] { "vivo", "bmw", "Tesla", "nissian" };
    //不指定长度，有默认值，省略new关键词

    string[] cars4 = { "vivo", "bmw", "Tesla", "nissian" };
    //新语法
    string[] cars5 = ["vivo", "bmw", "Tesla", "nissian"];
```

for循环遍历数组

```csharp
//新语法
    string[] cars5 = ["vivo", "bmw", "Tesla", "nissian"];
    for (int i = 0; i < cars5.Length; i++)
    {
      Console.WriteLine(cars5[i]);
    }
```

foreach遍历数组

```csharp
  //新语法
    string[] cars5 = ["vivo", "bmw", "Tesla", "nissian"];
    foreach (string i in cars5)
    {
      Console.WriteLine(i);
    }
```

## 排序

```csharp
    int[] myNums = [2, 1, 4, 8, 9, 3];
    var a = myNums.Max();
    Console.WriteLine(a);
   //注意系统默认自动使用了Linq排序方法
```

## 多维数组

```csharp
 int[,] numbers = { {1, 4, 2}, {3, 6, 8} };
    Console.WriteLine(numbers[0,1]);
```



注意这里和js有区别，js是通过 `num[0][1]` 访问

# 方法

**方法**是仅在被调用时运行的代码块。

```csharp
class Program
{
  static void MyMethod() 
  {
    // 要执行的代码
  }
}
```

## 方法参数

可以将信息作为参数传递给方法。参数在方法内部充当变量的角色。

```csharp
  public static void Run(string name)
  {

   
    Console.WriteLine($"当前名称，${name}");
  }
}
```

## 默认值

```csharp
  public static void Run(string name="jack")
  {
    

    Console.WriteLine($"当前名称，{name}");
  }
}
```

## 返回值

```csharp
 public static string Run(string name="jack")
  {
    return $"hello,{name}";

   // Console.WriteLine($"当前名称，{name}");
  }
}
```

## 具名参数

可以不安顺序写参数

```csharp
  public static void Run(string name1,string name2,string name3)
  {
   

   Console.WriteLine($"当前名称，{name1},{name2},{name3}");
  }
  


DataBase.Run(name1: "jack", name2: "jack2", name3: "jack3"); //可以不安顺序写
//DataBase.Run("j1", "j2", "j3");  //按照顺序写
```

## 方法重载

通过**方法重载**，多个方法可以拥有相同的名称但参数不同：

```csharp
int MyMethod(int x)
float MyMethod(float x)
double MyMethod(double x, double y)
```

# 类

## oop

OOP 代表面向对象编程（<mark style="margin: 0px; padding: 0px 4px; border: 0px; box-sizing: border-box; color: darkslateblue; background-color: rgba(222, 222, 222, 0.3); font-family: &quot;Segoe UI&quot;, -apple-system, Arial, Verdana, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">O</mark>bject-<mark style="margin: 0px; padding: 0px 4px; border: 0px; box-sizing: border-box; color: darkslateblue; background-color: rgba(222, 222, 222, 0.3); font-family: &quot;Segoe UI&quot;, -apple-system, Arial, Verdana, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">O</mark>riented <mark style="margin: 0px; padding: 0px 4px; border: 0px; box-sizing: border-box; color: darkslateblue; background-color: rgba(222, 222, 222, 0.3); font-family: &quot;Segoe UI&quot;, -apple-system, Arial, Verdana, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">P</mark>rogramming）。

面向对象编程相比过程式编程有几个优点：

- OOP 更快，更容易执行
- OOP 为程序提供了清晰的结构
- OOP 有助于保持 C# 代码的干燥，使代码更易于维护、修改和调试
- OOP 使得用更少的代码和更短的开发时间创建完全可重用的应用程序成为可能

什么是类和对象？



## 类和对象

**创建类**

要创建类请使用 `class` 关键词

```csharp
class Car 
{
  string color = "red";
}
```

当在类中直接声明一个变量时，它通常被称为**字段**（或属性）。

**创建对象**

创建一个名为 `myObj` 的对象，并使用它来打印 `color` 的值：

```csharp
class Car
{
   public string color = "red";
}

public class DataBase
{
  public static void Run()
  {
    var newCar = new Car();
    Console.WriteLine($"颜色是：{newCar.color}");
  }
}
```

**多个对象**

```csharp
class Car
{
  public string color = "red";
}

public class DataBase
{
  public static void Run()
  {
    Car newCar = new Car();
    Car newCar2 = new Car();
    Console.WriteLine($"颜色是：{newCar.color},{newCar2.color}");
  }
}
```

## 类成员

```csharp
class Car
{
  public string color = "red"; //字段
  public int maxSpeed = 200; //字段
 // 方法
  public void FullThr()
  {
    Console.WriteLine("汽车再开");
  }
}
```

**实例**

```csharp
class Car
{
  public string color="";
  public int maxSpee=0;

  public void FullThr()
  {
    Console.WriteLine("汽车再开");
  }
}

public class DataBase
{
  public static void Run()
  {
    Car newCar = new Car();
    newCar.color = "red";
    newCar.maxSpeed = 200;
    Console.WriteLine(newCar.color);
    Console.WriteLine(newCar.maxSpeed);
  }
}
```

**对象方法**

```csharp
class Car
{
  public string color="";
  public int maxSpeed;

  public void FullThr()
  {
    Console.WriteLine("汽车再开");
  }
}

public class DataBase
{
  public static void Run()
  {
    Car newCar = new Car();
    newCar.color = "red";
    newCar.maxSpeed = 200;
    //调用方法
    newCar.FullThr();
  }
}
```

## 构造函数

构造函数是一种特殊的方法，用于初始化对象。

```csharp
class Car
{
  public string model;

  public Car()
  {
    model = "Mut";
  }
  public void FullThr()
  {
    Console.WriteLine("汽车再开");
  }
}

public class DataBase
{
  public static void Run()
  {
    Car carObj = new Car();
    Console.WriteLine(carObj.model);
  }
}
```

请注意，构造函数的名称必须**与类名匹配**，并且它不能具有**返回类型**（如 `void` 或 `int`）。

**构造函数参数**

初始化字段的时候，也可以从外部传入

```csharp
class Car
{
  public string model;

  public Car(string modelName)
  {
    model = modelName;
  }
  public void FullThr()
  {
    Console.WriteLine("汽车再开");
  }
}

public class DataBase
{
  public static void Run()
  {
    Car carObj = new Car("Fute");
    Console.WriteLine(carObj.model);
  }
}
```

**多参数**

```csharp
class Car
{
  public string model;
  public int speed;

  public Car(string modelName,int speedNum)
  {
    model = modelName;
    speed= speedNum;
  }
  public void FullThr()
  {
    Console.WriteLine("汽车再开");
  }
}

public class DataBase
{
  public static void Run()
  {
    Car carObj = new Car(modelName: "FuTe",speedNum: 20);
    Console.WriteLine(carObj.model);
  }
}
```

**新版本写法**

```csharp
class Car
{
  public string Model { get; set; } = "";
  public int Speed { get; set; }


  public void FullThr()
  {
    Console.WriteLine("汽车再开");
  }
}

public class DataBase
{
  public static void Run()
  {
    Car myCar = new Car
    {
      Model = "Tesla",
      Speed = 20
    };
    Console.WriteLine(myCar.Speed);
  }
}

//或者

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }

    // 构造函数
    public User(int id, string name, string email)
    {
        Id = id;
        Name = name;
        Email = email;
    }
}
// 使用
User u = new User(1, "张三", "zhangsan@shturl.");
```

## 修饰符

| 修饰符      | 描述                                                   |
| ----------- | ------------------------------------------------------ |
| `public`    | 代码对所有类可见                                       |
| `private`   | 代码只在同一类内部可见                                 |
| `protected` | 代码在同一类内部或从该类继承的类中可见。               |
| `internal`  | 代码只在其自己的程序集中可见，但从其他程序集中不可见。 |

**public**

所有成员可见

```csharp
public string color="";
```

**Private**

如果您使用 `private` 访问修饰符声明一个字段，那么它只能在同一类内部被访问：

```csharp
class Car
{
  //只能在Car这个类中使用
  private string  model = "Mun";



  public void FullThr()
  {
    Console.WriteLine("汽车再开");
  }
}

public class DataBase
{
  public static void Run()
  {
    Car myCar = new Car();
    //报错

    Console.WriteLine(myCar.model);
  }
}
```

如果您不指定访问修饰符，则类的所有成员默认都是私有的。

```csharp
class Car
{
  string model;  // 私有 (private)
  string year;   // 私有 (private)
}
```

## 属性

在我们开始解释属性之前，您应该对**封装**有一个基本的了解。

**封装**的含义是确保“敏感”数据对用户隐藏。为了实现这一目标，您必须：

- 将字段/变量声明为 `private`
- 通过属性提供公共 `get` 和 `set` 方法来访问和更新私有字段的值

`private` 变量只能在同一个类内部访问（外部类无法访问它）。但是，有时我们需要访问它们——这可以通过属性来实现。

属性就像变量和方法的组合，它有两种方法：`get` 和 `set` 方法：

```csharp
class Car
{

  private string name;



  public string Name
  {
    get { return name; }
    set { name = value; }
  }
}

public class DataBase
{
  public static void Run()
  {
    var c = new Car();
    c.Name="Elon";
    Console.WriteLine(c.Name);
  }
}
```

**自动属性**

```csharp
class Person
{
  public string Name { get; set; } = "";
}

public class DataBase
{
  public static void Run()
  {
    var p = new Person();
    p.Name = "jack";
    Console.WriteLine(p.Name);
  }
}
```

## 继承

在 C# 中，可以从一个类继承字段和方法到另一个类。我们将“继承概念”分为两类：

- **派生类**（子类）- 从另一个类继承的类
- **基类**（父类）- 被继承的类

要从类继承，请使用 `:` 符号。

```csharp
class Vehicle
{
 public string brand = "Ford";
 public void honk()
  {
    Console.WriteLine("Go,Go,Go!");
  }
}

class Car: Vehicle
{
  public string modelName ="Mus";
}


public class DataBase
{
  public static void Run()
  {
   var newC = new Car();
   newC.honk();
   Console.WriteLine(newC.brand);
  }
}
```

**seale  关键字**

果您不希望其他类从某个类继承，请使用 `sealed` 关键字：

```csharp
sealed class Vehicle 
{
  ...
}

class Car : Vehicle 
{
  ...
}
```

## 多态

多态，即重写父类的基础方法。

```csharp
class Animal
{

 public void GetVoice()
  {
    Console.WriteLine("发出声音");
  }
}

class Dog: Animal
{
  public void GetVoice()
  {
    Console.WriteLine("汪汪汪！");
  }
}

class Pig: Animal
{
  public void GetVoice()
  {
    Console.WriteLine("嗯嗯嗯！");
  }
}



public class DataBase
{
  public static void Run()
  {
  var d = new Dog();
  var p = new Pig();
  d.GetVoice();
  p.GetVoice();
  }
}
```

关键字标识

```csharp
class Animal
{
 // virtual  表示可以被重写
  public virtual void GetVoice()
  {
    Console.WriteLine("发出声音");
  }
}
// override  重写
class Dog : Animal
{
  public  override void GetVoice()
  {
    Console.WriteLine("汪汪汪！");
  }
}

class Pig : Animal
{
  public override void GetVoice()
  {
    Console.WriteLine("嗯嗯嗯！");
  }
}



public class DataBase
{
  public static void Run()
  {
    var a = new Animal();
    var d = new Dog();
    var p = new Pig();
    a.GetVoice();
    d.GetVoice();
    p.GetVoice();
  }
}
```

## 抽象

**数据抽象**是隐藏某些细节并仅向用户显示基本信息的过程。

抽象可以通过**抽象类**或[**接口**](https://www.w3school.com.cn/cs/cs_interface.asp "C# 接口")来实现

`abstract` 关键字用于类和方法：

- **抽象类**：是一个受限制的类，不能用来创建对象（要访问它，必须从另一个类继承）。
- **抽象方法**：只能在抽象类中使用，并且没有方法体。主体由派生类（继承而来）提供。

抽象类无法被new 出来只能作为基类，且没有主体。

```csharp
abstract class Animal
{
  public abstract void GetVoice();
  public void Sleep()
  {
    Console.WriteLine("睡觉");
  }
}


class Pig: Animal
{
  public override void GetVoice()
  {
     Console.WriteLine("en en en !");
  }
}


public class DataBase
{
  public static void Run()
  {
    
   
    var p = new Pig();
  
    p.GetVoice();
  }
}
```

## 接口

接口（Interfaces）是 C# 中实现[抽象化](https://www.w3school.com.cn/cs/cs_abstract.asp "C# 抽象")的另一种方式。

`interface` 是一个完全的**抽象类**，它只能包含抽象方法和属性（具有空主体）：

接口必须以大写的`I` 开头,且子类需要实现全部的抽象方法。

```csharp
interface IAnimal
{
  void GetVoice();
  void Run();
  
}

class Pig : IAnimal
{
  public  void GetVoice()
  {
    Console.WriteLine("en en en !");
  }
  public  void Run()
  {
    Console.WriteLine("en en en !");
  }
 
}

public class DataBase
{
  public static void Run()
  {


    var p = new Pig();

    p.GetVoice();
  }
}
```

## 多接口

要实现多个接口，请用逗号分隔它们：

```csharp
interface IAnimal
{
  void GetVoice();
 
  
}

interface IBnimal
{
  void Run();
}

class Pig : IAnimal,IBnimal
{
  public  void GetVoice()
  {
    Console.WriteLine("en en en !");
  }
  public  void Run()
  {
    Console.WriteLine("en en en !");
  }
 
}

public class DataBase
{
  public static void Run()
  {


    var p = new Pig();

    p.GetVoice();
    p.Run();
  }
}
```

## 枚举

枚举（`enum`）是一种特殊的“类”，表示一组**常量**（不可更改/只读变量）。

要创建一个 `enum`，请使用 `enum` 关键字（而不是 `class` 或 `interface`），并使用逗号分隔枚举项：

```csharp
enum Level
{
  Low,
  Medium,
  Hight
}

public class DataBase
{
  public static void Run()
  {
    var myLevel = Level.Low;
    Console.WriteLine(myLevel);

  }
}
```

**枚举的值**

默认情况下，枚举的第一项值为 0。第二项值为 1，依此类推。

```csharp
enum Months
{
  January,    // 0
  February,   // 1
  March,      // 2
  April,      // 3
  May,        // 4
  June,       // 5
  July        // 6
}


nt myNum = (int) Months.April;
  Console.WriteLine(myNum);
```

**自己设置枚举值**

```csharp
enum Months
{
  January,    // 0
  February,   // 1
  March=6,    // 6
  April,      // 7 自动往后加
  May,        // 8
  June,       // 9
  July        // 10
}
```

## 文件

**文件操作**

来自 `System.IO` 命名空间的 `File` 类，允许我们对文件进行操作：

```csharp
using System.IO;  // 包含 System.IO 命名空间

File.SomeFileMethod();  // 使用带有方法的文件类
```

`File` 类有许多用于创建文件和获取文件信息的有用方法。例如：

| 方法             | 描述                                                             |
| ---------------- | ---------------------------------------------------------------- |
| `AppendText()`   | 在现有文件末尾附加文本。                                         |
| `Copy()`         | 复制文件。                                                       |
| `Create()`       | 创建或覆盖文件。                                                 |
| `Delete()`       | 删除文件。                                                       |
| `Exists()`       | 测试文件是否存在。                                               |
| `ReadAllText()`  | 读取文件的内容。                                                 |
| `Replace()`      | 用另一个文件的内容替换文件的内容。                               |
| `WriteAllText()` | 创建一个新文件并将内容写入其中。如果该文件已经存在，它将被覆盖。 |

```csharp
public class DataBase
{
  public static void Run()
  {
   
   string myTxt = File.ReadAllText("1.txt"); //读当前文件
   Console.WriteLine(myTxt);

  }
}
```

## 异常处理

执行 C# 代码时，可能会发生不同的错误：程序员编写的代码错误、由于错误输入而导致的错误或其他不可预见的事情。

当发生错误时，C# 通常会停止并生成错误消息。其技术术语是：C# 将**抛出异常**（抛出错误）。



**try-catch**

```csharp
try 
{
  // 尝试的代码块
}
catch (Exception e)
{
  // 处理错误的代码块
}
```



**throw关键词**

`throw` 语句允许您创建自定义错误。

`throw` 语句与异常类一起使用。C# 中有很多可用的**异常类**：

- `ArithmeticException`
- `FileNotFoundException`
- `IndexOutOfRangeException`
- `TimeOutException` 

```csharp
static void checkAge(int age)  
{  
  if (age < 18)  
  {  
    throw new ArithmeticException("访问被拒绝 - 您必须年满 18 岁。");  
  }  
  else  
  {  
    Console.WriteLine("访问被授予 - 您已经够年龄了！");  
  }  
}  
  
static void Main(string[] args)  
{  
  checkAge(15);  
}
```
