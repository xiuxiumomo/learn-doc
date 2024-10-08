import{_ as a,c as n,a0 as p,o as e}from"./chunks/framework.xOXxqCsI.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/ES6-6.md","filePath":"src/javascript/ES6-6.md","lastUpdated":1727592456000}'),l={name:"src/javascript/ES6-6.md"};function i(t,s,c,o,r,d){return e(),n("div",null,s[0]||(s[0]=[p(`<h2 id="_14-genrator-函数和应用" tabindex="-1">14.Genrator 函数和应用 <a class="header-anchor" href="#_14-genrator-函数和应用" aria-label="Permalink to &quot;14.Genrator 函数和应用&quot;">​</a></h2><blockquote><p>执行 Genrator 函数会返回一个遍历器对象，依次遍历 Genrator 内函数的每一个状态。特征： 1.function 关键字与函数名之间有个星号。2.函数体内使用 yield 表达式，定义不同状态。通过调用 next 方法将指针移向下一个状态，直到遇到下一个 yield 表达式(或 return)简单理解,Generator 函数分段执行，yield 表达式是暂时执行的标记而 next 执行回复。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function * f() {</span></span>
<span class="line"><span>    yield &#39;a&#39;;</span></span>
<span class="line"><span>    yield &#39;b&#39;;</span></span>
<span class="line"><span>    return &#39;ending&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let a = f();</span></span>
<span class="line"><span>a.next() // {value: &#39;a&#39;,done: false}</span></span>
<span class="line"><span>a.next() //{value: b,done:false}</span></span>
<span class="line"><span>a.next() //{value: &#39;ending&#39;,done: true}</span></span></code></pre></div><h3 id="_14-1yield-表达式" tabindex="-1">14.1yield 表达式 <a class="header-anchor" href="#_14-1yield-表达式" aria-label="Permalink to &quot;14.1yield 表达式&quot;">​</a></h3><p>yield 表达式是暂停标志，遍历器对象的 next 防封的运行逻辑如下：</p><ul><li>遇到 yield 就暂停执行，将这个 yield 后的表达式的值，作为返回对象的 value 属性值。</li><li>下次调用 next 往下执行，直到遇到下一个 yield</li><li>直到函数结束或者 return 为止并返回 return 语句后面表达式的值，作为返回对象的 value</li><li>如果该函数没有 return 返回对象 value 为 undefined 注意 yield 只能在 generator 函数里面使用</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(function(){</span></span>
<span class="line"><span>    yield 1 //syntax错误</span></span>
<span class="line"><span>})()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a= [1,[2,3]]</span></span>
<span class="line"><span>let f = function * (i) {</span></span>
<span class="line"><span>    i.forEach(function(m){</span></span>
<span class="line"><span>        if(typeof m !==&#39;number&#39;) {</span></span>
<span class="line"><span>            yield * f(m)</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            yield m</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//yield 表达式如果用于另一个表达式必须在圆括号中</span></span>
<span class="line"><span>function * a() {</span></span>
<span class="line"><span>    console.log(&#39;a&#39;+yield) //syn错误</span></span>
<span class="line"><span>    console.log(&#39;a&#39;+yield 123) //syn错误</span></span>
<span class="line"><span>    console.log(&#39;a&#39;+(yield)) //ok</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_14-2next-方法" tabindex="-1">14.2next 方法 <a class="header-anchor" href="#_14-2next-方法" aria-label="Permalink to &quot;14.2next 方法&quot;">​</a></h3><blockquote><p>yield 本生没有返回值或者总是返回 undefined,next 方法可带参数作为上一个 yield 表达式的返回值</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function * f() {</span></span>
<span class="line"><span>    for(let k=0; true; k++) {</span></span>
<span class="line"><span>        let a = yield k;</span></span>
<span class="line"><span>        if(a) {</span></span>
<span class="line"><span>            k = -1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let g = f();</span></span>
<span class="line"><span>g.next()</span></span></code></pre></div><h3 id="_14-3-控制流程" tabindex="-1">14.3 控制流程 <a class="header-anchor" href="#_14-3-控制流程" aria-label="Permalink to &quot;14.3 控制流程&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>f1(function(v1){</span></span>
<span class="line"><span>    f2(function(v2){})</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//Promise</span></span>
<span class="line"><span>Promise.resolve(f1).then(f2).then(f3)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//使用generator</span></span>
<span class="line"><span>function * f(v1) {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        let v2 = yield f1(v1);</span></span>
<span class="line"><span>        let v3 = yield f1(v2)</span></span>
<span class="line"><span>    }catch(err){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_14-4-异步编程使用" tabindex="-1">14.4 异步编程使用 <a class="header-anchor" href="#_14-4-异步编程使用" aria-label="Permalink to &quot;14.4 异步编程使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let fetch = require(&#39;node-fetch&#39;);</span></span>
<span class="line"><span>function * f() {</span></span>
<span class="line"><span>    let url = &#39;http://www.aa.com&#39;;</span></span>
<span class="line"><span>    let res  = yield fetch(url)</span></span>
<span class="line"><span>    console.log(res)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let g = f();</span></span>
<span class="line"><span>let result = g.next();</span></span>
<span class="line"><span>result.value.then(function(data){</span></span>
<span class="line"><span>    console.log(data)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_15-class-语法和继承" tabindex="-1">15.class 语法和继承 <a class="header-anchor" href="#_15-class-语法和继承" aria-label="Permalink to &quot;15.class 语法和继承&quot;">​</a></h2><h3 id="_15-1-介绍" tabindex="-1">15.1 介绍 <a class="header-anchor" href="#_15-1-介绍" aria-label="Permalink to &quot;15.1 介绍&quot;">​</a></h3><blockquote><p>ES6 中的 class 可以看作是一个语法糖，绝大部分功能都可以使用 ES5 来实现，情切类和模块的内部，是严格模式，所以不需要 use strict 指定运行模式</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//es5</span></span>
<span class="line"><span>function P(x,y) {</span></span>
<span class="line"><span>    this.x = x;</span></span>
<span class="line"><span>    this.y = y;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>P.prototype.toString = function(){</span></span>
<span class="line"><span>    return this.x+&#39;-&#39;+this.y;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var a = new P(1,2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//es6</span></span>
<span class="line"><span>class P {</span></span>
<span class="line"><span>    constructor(x,y) {</span></span>
<span class="line"><span>        this.x = x;</span></span>
<span class="line"><span>        this.y = y;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    toString() {</span></span>
<span class="line"><span>        return this.x+&#39;-&#39;+this.y;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let a = new P(1,2)</span></span></code></pre></div><p>注意 ES6 的方法其实是定义在原型上的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a.constructor = P.prototype.constructor</span></span></code></pre></div><p>class 不存在遍历提升 Es6 中的类不存在变量提升，与 Es5 完全不同</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>new P{}</span></span>
<span class="line"><span>class P{}</span></span></code></pre></div><p>class 的 name 属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class P{}  </span></span>
<span class="line"><span>p.name //&#39;P&#39;</span></span></code></pre></div><h3 id="_15-2constructor-方法" tabindex="-1">15.2constructor() 方法 <a class="header-anchor" href="#_15-2constructor-方法" aria-label="Permalink to &quot;15.2constructor() 方法&quot;">​</a></h3><ul><li>constructor方法是类的默认方法，通过new实例化自动调用执行，一个类必须有constructor,否则会自动添加，方法返回实例对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class P{}</span></span>
<span class="line"><span>//等同于</span></span>
<span class="line"><span>class P{</span></span>
<span class="line"><span>    constructor() {}</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,27)]))}const g=a(l,[["render",i]]);export{h as __pageData,g as default};
