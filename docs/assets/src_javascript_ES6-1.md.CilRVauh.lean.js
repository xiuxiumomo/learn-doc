import{_ as s,c as n,a0 as e,o as p}from"./chunks/framework.xOXxqCsI.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/ES6-1.md","filePath":"src/javascript/ES6-1.md","lastUpdated":1727592456000}'),l={name:"src/javascript/ES6-1.md"};function t(i,a,c,d,o,h){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="es6-系列" tabindex="-1">ES6 系列 <a class="header-anchor" href="#es6-系列" aria-label="Permalink to &quot;ES6 系列&quot;">​</a></h2><h3 id="_1-let-和-const-的區別" tabindex="-1">1.let 和 const 的區別 <a class="header-anchor" href="#_1-let-和-const-的區別" aria-label="Permalink to &quot;1.let 和 const 的區別&quot;">​</a></h3><blockquote><p>let 和 const 都是塊級作用域且在當前作用域有效不能重複聲明</p></blockquote><h3 id="_1-1-let-命令" tabindex="-1">1.1 let 命令 <a class="header-anchor" href="#_1-1-let-命令" aria-label="Permalink to &quot;1.1 let 命令&quot;">​</a></h3><ul><li>不存在变量提升</li><li>不允许重复声明</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    let a = 1;</span></span>
<span class="line"><span>    let b = 2;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_1-2const-命令" tabindex="-1">1.2const 命令 <a class="header-anchor" href="#_1-2const-命令" aria-label="Permalink to &quot;1.2const 命令&quot;">​</a></h3><p>const 只能声明一个只读的常量,声明一个变量后无法修改，且不能再用 let 声明</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const PI = 3.14;</span></span></code></pre></div><h3 id="_2-变量的解构赋值" tabindex="-1">2.变量的解构赋值 <a class="header-anchor" href="#_2-变量的解构赋值" aria-label="Permalink to &quot;2.变量的解构赋值&quot;">​</a></h3><h3 id="_2-1-数组" tabindex="-1">2.1 数组 <a class="header-anchor" href="#_2-1-数组" aria-label="Permalink to &quot;2.1 数组&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//以前</span></span>
<span class="line"><span>let a = 1;</span></span>
<span class="line"><span>let b = 2;</span></span>
<span class="line"><span>//es6</span></span>
<span class="line"><span>let [a,b] = [1,2];</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>let [a,b,...c] = [1]</span></span>
<span class="line"><span>console.log(a,b,c) //1 undefined [] 如果结构不成功就是undefined</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//如果两边模式不相等会报错</span></span>
<span class="line"><span>let [a] = 1;</span></span>
<span class="line"><span>let [a] = false;</span></span>
<span class="line"><span>let [a] = NaN;</span></span>
<span class="line"><span>let [a] = {}</span></span>
<span class="line"><span>//使用默认值</span></span>
<span class="line"><span>let [a=1] = [] //a=1</span></span>
<span class="line"><span>let [a=1] = [undefined] a =1 默认值不起作用</span></span>
<span class="line"><span>let [a = 1] = [null] a = null</span></span></code></pre></div><h3 id="_2-2-对象" tabindex="-1">2.2 对象 <a class="header-anchor" href="#_2-2-对象" aria-label="Permalink to &quot;2.2 对象&quot;">​</a></h3><p>与数组的解构不同，对象解构不需要严格按照顺序取值，而按照变量名去取对应的属性名若娶不到则为 undefined.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let {a,b} = {a: 1,b: 2} // a = 1 b =2</span></span>
<span class="line"><span>let {a} = {b: 1,c: 2} //a undefined</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//指定解构默认值</span></span>
<span class="line"><span>let { a = 1} = {}</span></span>
<span class="line"><span>let {a,b=1} = {a: 2}</span></span></code></pre></div><h3 id="_2-3-字符串的解构" tabindex="-1">2.3 字符串的解构 <a class="header-anchor" href="#_2-3-字符串的解构" aria-label="Permalink to &quot;2.3 字符串的解构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const [a,b,c,d,e] = &#39;hello&#39;;</span></span></code></pre></div><h3 id="_2-4-数值和布尔值的解构赋值" tabindex="-1">2.4 数值和布尔值的解构赋值 <a class="header-anchor" href="#_2-4-数值和布尔值的解构赋值" aria-label="Permalink to &quot;2.4 数值和布尔值的解构赋值&quot;">​</a></h3><p>解构赋值的规则市，只要等号右边的值不是对象或数组，就先将其转化为对象。由于 undefiend 和 null 无法转化为对象，对他们解构会报错。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let {toString: s} = 123</span></span>
<span class="line"><span>s ===Number.prototype.toString</span></span></code></pre></div><h3 id="_2-5-函数参数的解构赋值" tabindex="-1">2.5 函数参数的解构赋值 <a class="header-anchor" href="#_2-5-函数参数的解构赋值" aria-label="Permalink to &quot;2.5 函数参数的解构赋值&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function fn([a,b]) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fn([1,2])</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>function fn({a=0,b=1}) {</span></span>
<span class="line"><span>    return a+b;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fn({a: 3,b: 4})</span></span></code></pre></div><h3 id="_2-6-应用" tabindex="-1">2.6 应用 <a class="header-anchor" href="#_2-6-应用" aria-label="Permalink to &quot;2.6 应用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//交换</span></span>
<span class="line"><span>let a= 1,b =2;</span></span>
<span class="line"><span>[a,b] = [b,a]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//函数</span></span>
<span class="line"><span>function fn() {</span></span>
<span class="line"><span>    return {a: 1,b: 2}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let {a,b} = fn()</span></span>
<span class="line"><span>//json</span></span>
<span class="line"><span>let json = {name: &#39;jack&#39;,age: 20}</span></span>
<span class="line"><span>let {name,age} = json;</span></span>
<span class="line"><span>//遍历map结构</span></span>
<span class="line"><span>const m = new Map();</span></span>
<span class="line"><span>m.set(&#39;a&#39;,1)</span></span>
<span class="line"><span>m.set(&#39;b&#39;,2)</span></span>
<span class="line"><span>for(let [k,v] of m) {</span></span>
<span class="line"><span>    console.log(k+&#39;-&#39;+v)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//获取模块</span></span>
<span class="line"><span>const {log,sin,cos} = require(&#39;math&#39;);</span></span></code></pre></div><h3 id="_3-字符串拓展" tabindex="-1">3.字符串拓展 <a class="header-anchor" href="#_3-字符串拓展" aria-label="Permalink to &quot;3.字符串拓展&quot;">​</a></h3><h3 id="_3-1-includes-startswith-endswith" tabindex="-1">3.1 includes(),startsWith(),endsWith() <a class="header-anchor" href="#_3-1-includes-startswith-endswith" aria-label="Permalink to &quot;3.1 includes(),startsWith(),endsWith()&quot;">​</a></h3><p>在判断字符串是否包含另一个字符串时 Es6 之前用 typeof Es6 后又多了三种方法</p><ul><li>includes() 返回布尔值 是否找到</li><li>startsWith() 返回布尔值 是否在头部</li><li>endsWith() 返回布尔值 是否在尾部</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = &#39;hello jack&#39;</span></span>
<span class="line"><span>a.includes(&#39;jack&#39;) //true</span></span>
<span class="line"><span>a.startsWith(&#39;jack&#39;)  //false</span></span>
<span class="line"><span>a.startsWith(&#39;hello&#39;)//true</span></span>
<span class="line"><span>a.endsWith(&#39;jack&#39;)//true</span></span></code></pre></div><h3 id="_3-2repeat" tabindex="-1">3.2repeat() <a class="header-anchor" href="#_3-2repeat" aria-label="Permalink to &quot;3.2repeat()&quot;">​</a></h3><p>返回某个字符串 n 次</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = &#39;ab&#39;</span></span>
<span class="line"><span>a.repeat(3) //ababab</span></span></code></pre></div><h3 id="_3-3padstart-padend" tabindex="-1">3.3padStart(),padEnd() <a class="header-anchor" href="#_3-3padstart-padend" aria-label="Permalink to &quot;3.3padStart(),padEnd()&quot;">​</a></h3><p>用于将字符串头部或尾部补全长度， padStart()为头部补全， padEnd()为尾部补全。 这两个方法接收 2 个参数，第一个指定字符串最小长度，第二个用于补全的字符串。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//基础用法</span></span>
<span class="line"><span>let a = &#39;x&#39;;</span></span>
<span class="line"><span>a.padStart(5,&#39;ab&#39;) //&#39;ababx&#39;</span></span>
<span class="line"><span>a.padEnd(5,&#39;ab&#39;) //&#39;xabab&#39;</span></span>
<span class="line"><span>let a  = &#39;abxxxab&#39;</span></span>
<span class="line"><span>a.padStart(5,&#39;dd&#39;) // &#39;abxdd&#39; //截取多余的在补上</span></span>
<span class="line"><span></span></span>
<span class="line"><span>a.padStart(4) //&#39;    a&#39; 如不不指定就用空格代替</span></span></code></pre></div><h3 id="_3-4-字符串拼接" tabindex="-1">3.4 字符串拼接 <a class="header-anchor" href="#_3-4-字符串拼接" aria-label="Permalink to &quot;3.4 字符串拼接&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let x = &#39;dddd&#39;</span></span>
<span class="line"><span>let a = \`a b c d \${x}\`</span></span></code></pre></div><h3 id="_4-正则拓展" tabindex="-1">4.正则拓展 <a class="header-anchor" href="#_4-正则拓展" aria-label="Permalink to &quot;4.正则拓展&quot;">​</a></h3><ul><li>参数是字符串 new RegExp(&#39;abc&#39;,&#39;i&#39;) 或 let a = /abc/i</li><li>参数是正则表达式 new RegExp(/abc/i)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = new RegExp(&#39;abc&#39;,&#39;i&#39;)</span></span>
<span class="line"><span>//等价于</span></span>
<span class="line"><span>let a = /abc/i</span></span></code></pre></div><h3 id="_4-1-字符串的正则方法" tabindex="-1">4.1 字符串的正则方法 <a class="header-anchor" href="#_4-1-字符串的正则方法" aria-label="Permalink to &quot;4.1 字符串的正则方法&quot;">​</a></h3><p>match()、replace()、search()、split()</p>`,42)]))}const u=s(l,[["render",t]]);export{b as __pageData,u as default};
