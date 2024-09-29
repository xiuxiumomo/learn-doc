import{_ as s,c as n,a0 as e,o as p}from"./chunks/framework.xOXxqCsI.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/ES6-3.md","filePath":"src/javascript/ES6-3.md","lastUpdated":null}'),l={name:"src/javascript/ES6-3.md"};function t(i,a,o,c,b,r){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="_8-对象扩展" tabindex="-1">8 对象扩展 <a class="header-anchor" href="#_8-对象扩展" aria-label="Permalink to &quot;8 对象扩展&quot;">​</a></h2><h3 id="_8-1-属性的简洁表示" tabindex="-1">8.1 属性的简洁表示 <a class="header-anchor" href="#_8-1-属性的简洁表示" aria-label="Permalink to &quot;8.1 属性的简洁表示&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = &#39;a1&#39;;</span></span>
<span class="line"><span>let b = { a };</span></span></code></pre></div><h3 id="_8-2-属性名表达式" tabindex="-1">8.2 属性名表达式 <a class="header-anchor" href="#_8-2-属性名表达式" aria-label="Permalink to &quot;8.2 属性名表达式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a.f = true</span></span>
<span class="line"><span>a[&#39;f&#39;+&#39;un&#39;] = true</span></span></code></pre></div><h3 id="_8-3-object-is" tabindex="-1">8.3 Object.is() <a class="header-anchor" href="#_8-3-object-is" aria-label="Permalink to &quot;8.3 Object.is()&quot;">​</a></h3><p>用于判断两个值是否严格相等在 ES5 中==和===就可以比较，但是有一个缺点前者会自动转换裂隙后者 NaN 不等于自身 +0 = -0</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Object.is(&#39;a&#39;,&#39;a&#39;) //true</span></span>
<span class="line"><span>Object.is({},{}) false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//如果用=判断结果相反</span></span>
<span class="line"><span>Object.is(+0,-0) false</span></span>
<span class="line"><span>Object.is(NaN,NaN) true</span></span></code></pre></div><h3 id="_8-4-object-assign" tabindex="-1">8.4 Object.assign() <a class="header-anchor" href="#_8-4-object-assign" aria-label="Permalink to &quot;8.4 Object.assign()&quot;">​</a></h3><p>合并对象可枚举的属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = {a: 1}</span></span>
<span class="line"><span>let b = {b: 2}</span></span>
<span class="line"><span>Object.assign(a,b)</span></span>
<span class="line"><span>//若属性同名则后面的会覆盖前面的属性</span></span></code></pre></div><h2 id="_9symbol" tabindex="-1">9symbol <a class="header-anchor" href="#_9symbol" aria-label="Permalink to &quot;9symbol&quot;">​</a></h2><h3 id="_9-1-介绍" tabindex="-1">9.1 介绍 <a class="header-anchor" href="#_9-1-介绍" aria-label="Permalink to &quot;9.1 介绍&quot;">​</a></h3><p>ES6 引入 Symbol 作为一种新的原始数据类型，表示独一无二的值，主要是为了防止属性名冲突。 ES6 之后，JavaScript 一共有其中数据类型： Symbol、 undefined、 null、 Boolean、 String、 Number、 Object。</p><ul><li>Symbol 函数不能用 new，会报错。由于 Symbol 是一个原始类型，不是对象，所以不能添加属性，它是类似于字符串的数据类型。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a =Symbol();</span></span>
<span class="line"><span>typeof a //symbol</span></span>
<span class="line"><span>let b =Symbol()</span></span>
<span class="line"><span>a===b //false</span></span>
<span class="line"><span>let c = Symbol(&#39;hello&#39;)</span></span>
<span class="line"><span>String(c) //&#39;Symbol(hello)&#39;</span></span></code></pre></div><h3 id="_9-2symbol-作为属性名" tabindex="-1">9.2symbol 作为属性名 <a class="header-anchor" href="#_9-2symbol-作为属性名" aria-label="Permalink to &quot;9.2symbol 作为属性名&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = Symbol()</span></span>
<span class="line"><span>let c = Symbol()</span></span>
<span class="line"><span>let b = {}</span></span>
<span class="line"><span>b[a] = &#39;hello&#39; //注意不支持点只支持括号</span></span>
<span class="line"><span>let b = {</span></span>
<span class="line"><span>    [a]: &#39;hello&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let b = {</span></span>
<span class="line"><span>    [c]: function() {</span></span>
<span class="line"><span>        return 1</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//或者</span></span>
<span class="line"><span>let b = {</span></span>
<span class="line"><span>    [c](){</span></span>
<span class="line"><span>        return 1</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_9-3-应用-消除魔术字符串" tabindex="-1">9.3 应用: 消除魔术字符串 <a class="header-anchor" href="#_9-3-应用-消除魔术字符串" aria-label="Permalink to &quot;9.3 应用: 消除魔术字符串&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = Symbol();</span></span>
<span class="line"><span>function fn(k) {</span></span>
<span class="line"><span>    if(k==a) {</span></span>
<span class="line"><span>        return true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return false</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fn(a)</span></span></code></pre></div><h3 id="_9-4-遍历属性名字" tabindex="-1">9.4 遍历属性名字 <a class="header-anchor" href="#_9-4-遍历属性名字" aria-label="Permalink to &quot;9.4 遍历属性名字&quot;">​</a></h3><p>Symbol 作为属性名遍历，不出现在 for...in、 for...of 循环，也不被 Object.keys()、 Object.getOwnPropertyNames()、 JSON.stringify()返回。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = Symbol(),b = Symbol()</span></span>
<span class="line"><span>let obj = {</span></span>
<span class="line"><span>    [a]: &#39;aaa&#39;,</span></span>
<span class="line"><span>    [b]: bbb</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>for(let k of Object.values(object)) {</span></span>
<span class="line"><span>    console.log(k) //无输出</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let obj2 = Object.getOwnPropertySymbols(obj)</span></span>
<span class="line"><span>//obj [Symbol(a),Symbol(b)]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用Reflect.ownKeys方法获取键名</span></span>
<span class="line"><span>Reflect.ownKeys(a) //[Symbol()]</span></span></code></pre></div><h3 id="_9-5symbol-for-、symbol-keyfor" tabindex="-1">9.5Symbol().for() 、Symbol().keyFor() <a class="header-anchor" href="#_9-5symbol-for-、symbol-keyfor" aria-label="Permalink to &quot;9.5Symbol().for() 、Symbol().keyFor()&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a =Symbol().for(&#39;aa&#39;);</span></span>
<span class="line"><span>let b = Symbol().for(&#39;aa&#39;)</span></span>
<span class="line"><span>Symbol.for(&#39;aa&#39;) === Symbol.for(&#39;aaa&#39;) //true</span></span>
<span class="line"><span>Symbol(&#39;aa&#39;) === Symbol(&#39;aa&#39;) //false</span></span></code></pre></div>`,25)]))}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
