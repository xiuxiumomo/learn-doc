import{_ as s,c as n,a0 as p,o as l}from"./chunks/framework.CroFxgLA.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/base.md","filePath":"src/javascript/base.md","lastUpdated":1727592456000}'),e={name:"src/javascript/base.md"};function i(t,a,c,o,r,d){return l(),n("div",null,a[0]||(a[0]=[p(`<h2 id="javascript的语法和数据类型" tabindex="-1">Javascript的语法和数据类型 <a class="header-anchor" href="#javascript的语法和数据类型" aria-label="Permalink to &quot;Javascript的语法和数据类型&quot;">​</a></h2><h3 id="_1-注释" tabindex="-1">1.注释 <a class="header-anchor" href="#_1-注释" aria-label="Permalink to &quot;1.注释&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//单行注释</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>多行注释</span></span>
<span class="line"><span>*/</span></span></code></pre></div><h3 id="_2-声明" tabindex="-1">2.声明 <a class="header-anchor" href="#_2-声明" aria-label="Permalink to &quot;2.声明&quot;">​</a></h3><p>Javascript的三种声明方式</p><ul><li>var 声明一个变量，可赋一个初始值</li><li>let 声明一个块作用域的局部变量，可赋一个初始值</li><li>const 声明一个块作用域的只读命名的常量</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> let var 当没有赋初始值时，默认会添加undefined</span></span>
<span class="line"><span> 而 const a 会出现无效的引用Uncaught SyntaxError</span></span>
<span class="line"><span> let a //undefined</span></span>
<span class="line"><span> var a //undefined</span></span>
<span class="line"><span> const a //Uncaught SyntaxError</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> //检测undefined 和 null</span></span>
<span class="line"><span> Number()方法去验证 undefined 返回NAN null返回0</span></span></code></pre></div><h3 id="_2-1全局和局部的概念" tabindex="-1">2.1全局和局部的概念 <a class="header-anchor" href="#_2-1全局和局部的概念" aria-label="Permalink to &quot;2.1全局和局部的概念&quot;">​</a></h3><ul><li>全局变量：即声明在函数之外，当前文档所有地方都可以访问；</li><li>局部遍历：即声明在函数内部，仅在当前函数内可以访问；</li></ul><p>ES6之前，并没有块级作用域概念且只能用var声明变量</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if(true) {</span></span>
<span class="line"><span>    var a = 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(a) 1</span></span>
<span class="line"><span>if(true) {</span></span>
<span class="line"><span>    let a = 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(a) //Uncaught SyntaxError</span></span></code></pre></div><h3 id="_2-2变量提升函数提升的概念" tabindex="-1">2.2变量提升函数提升的概念 <a class="header-anchor" href="#_2-2变量提升函数提升的概念" aria-label="Permalink to &quot;2.2变量提升函数提升的概念&quot;">​</a></h3><p>ES6之前存在变量提升的概念</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>console.log(b) //undefined</span></span>
<span class="line"><span>var b = 1</span></span>
<span class="line"><span>console.log(b) //1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(b) //Uncaught SyntaxError</span></span>
<span class="line"><span>let b =1</span></span>
<span class="line"><span>console.log(b) 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//函数声明和函数表达式声明</span></span>
<span class="line"><span>getA() //正常</span></span>
<span class="line"><span>function getA() {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>getA() //Uncaught SyntaxError</span></span>
<span class="line"><span>var g = function() {}</span></span></code></pre></div><h3 id="_2-3全局变量" tabindex="-1">2.3全局变量 <a class="header-anchor" href="#_2-3全局变量" aria-label="Permalink to &quot;2.3全局变量&quot;">​</a></h3><ul><li>ES5中顶层对象的属性等价于全局变量(浏览器window,Node中式global)</li><li>ES6 var function 声明依旧为顶层对象的属性，但是let/const/class 声明的全局变量不属于顶层对象，ES6中全局变量和顶层对象的属性是分开的。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//ES5</span></span>
<span class="line"><span>var a = &#39;aaa&#39;</span></span>
<span class="line"><span>window.a // aaa</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//ES6 </span></span>
<span class="line"><span>let b = &#39;aaa&#39;</span></span>
<span class="line"><span>window.b //undefined</span></span></code></pre></div><h3 id="_2-4-常量" tabindex="-1">2.4.常量 <a class="header-anchor" href="#_2-4-常量" aria-label="Permalink to &quot;2.4.常量&quot;">​</a></h3><p>ES6之后我们可以使用const来声明一个只读常量，并且在声明时必须赋值，之后在相同的作用域不能赋值也不能重新声明否则会报错。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const a //Uncaught SyntaxError</span></span>
<span class="line"><span>const b =&#39;aaa&#39;</span></span>
<span class="line"><span>b = &#39;ccc&#39; //Uncaught TypeError</span></span></code></pre></div><p>尽管const不能修改值，但是对于对象和数组却能修改属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const a = {name:&#39;lee&#39;,age: 20}</span></span>
<span class="line"><span>a.age = 30</span></span>
<span class="line"><span>console.log(a) // {name: &#39;lee&#39;,age: 30}</span></span></code></pre></div><h3 id="_3-数据结构和数据类型" tabindex="-1">3.数据结构和数据类型 <a class="header-anchor" href="#_3-数据结构和数据类型" aria-label="Permalink to &quot;3.数据结构和数据类型&quot;">​</a></h3><p>JavaScript总共有7种的数据类型</p><ul><li>6种原型数据类型 <ul><li>1.Boolean</li><li>2.null</li><li>3.undefined</li><li>4.Number</li><li>5.String</li><li>6.Symbol (ES6唯一且不可变的数据)</li></ul></li><li>Object对象类型 <ul><li>1.Obejct</li></ul></li></ul><h3 id="_3-1-数据类型转换" tabindex="-1">3.1.数据类型转换 <a class="header-anchor" href="#_3-1-数据类型转换" aria-label="Permalink to &quot;3.1.数据类型转换&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a =&#39;1&#39;</span></span>
<span class="line"><span>let b = 2</span></span>
<span class="line"><span>a+b //12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>转换小技巧</span></span>
<span class="line"><span>+a++b //3</span></span></code></pre></div><h3 id="_4-字面量" tabindex="-1">4.字面量 <a class="header-anchor" href="#_4-字面量" aria-label="Permalink to &quot;4.字面量&quot;">​</a></h3><blockquote><p>字面量是用来表示如何表达这个值，简单理解就是变量赋值时右边的都是字面量。</p></blockquote><ul><li>1.数组字面量</li><li>2.布尔字面量</li><li>3.浮点数字面量</li><li>4.整数字面量</li><li>5.对象字面量</li><li>6.正则字面量</li><li>7.字符串字面量</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a= 1 //右边都是字面量</span></span>
<span class="line"><span>let a= [1,,3]</span></span>
<span class="line"><span>//使用，会默认赋值为undefined并且会计算长度</span></span></code></pre></div><h3 id="_5-检测数据类型可靠函数" tabindex="-1">5.检测数据类型可靠函数 <a class="header-anchor" href="#_5-检测数据类型可靠函数" aria-label="Permalink to &quot;5.检测数据类型可靠函数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export function(params) {</span></span>
<span class="line"><span>     let res =  Object.prototype.toString.call(params);</span></span>
<span class="line"><span>     return res;</span></span>
<span class="line"><span>    &lt;!-- toString.call(&#39;foo&#39;);     // &quot;[object String]&quot;</span></span>
<span class="line"><span>    toString.call([1, 2]);    // &quot;[object Array]&quot;</span></span>
<span class="line"><span>    toString.call(3);         // &quot;[object Number]&quot;</span></span>
<span class="line"><span>    toString.call(true);      // &quot;[object Boolean]&quot;</span></span>
<span class="line"><span>    toString.call(undefined); // &quot;[object Undefined]&quot;</span></span>
<span class="line"><span>    toString.call(null);      // &quot;[object Null]&quot; --&gt;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,33)]))}const b=s(e,[["render",i]]);export{h as __pageData,b as default};
