import{_ as n,c as a,a0 as p,o as e}from"./chunks/framework.CroFxgLA.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/my-class.md","filePath":"src/javascript/my-class.md","lastUpdated":1727592456000}'),l={name:"src/javascript/my-class.md"};function t(c,s,i,o,r,d){return e(),a("div",null,s[0]||(s[0]=[p(`<h2 id="_1-构造函数的实现原理" tabindex="-1">1.构造函数的实现原理 <a class="header-anchor" href="#_1-构造函数的实现原理" aria-label="Permalink to &quot;1.构造函数的实现原理&quot;">​</a></h2><blockquote><p>首先了解一个构造函数</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var Person =  function(name) {</span></span>
<span class="line"><span>    this.name = name</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Person.prototype.getName = function() {</span></span>
<span class="line"><span>    return this.name</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var p = new Person(&#39;jack&#39;);</span></span></code></pre></div><p>我们会得到 p:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>p = {</span></span>
<span class="line"><span>    name: &#39;jack&#39;,</span></span>
<span class="line"><span>    __proto__: {</span></span>
<span class="line"><span>        getName: function() {},</span></span>
<span class="line"><span>        constructor: Person(){},(指向Person的函数),</span></span>
<span class="line"><span>        __proto__: {</span></span>
<span class="line"><span>            toStroing: function() {}</span></span>
<span class="line"><span>            ...</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>那么这个过程是如何实现的呢，可以肯定的是 p.<strong>proto</strong>得到了 Person.prototype.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var myCreate = function() {</span></span>
<span class="line"><span>    var obj = new Object(), //创建一个空的对象</span></span>
<span class="line"><span>        Constructor = [].shift.call(arguments), //截取Person</span></span>
<span class="line"><span>        obj.__proto__ = Constructor.ptototype; //让obj的__proto__ 指向Person.prototype</span></span>
<span class="line"><span>        Constructor.apply(obj,arguments); //属性赋值</span></span>
<span class="line"><span>        return obj; //返回对象</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var p1 = myCreate(Person,&#39;jack&#39;)</span></span>
<span class="line"><span>这种方法创建的是和上面的一致</span></span>
<span class="line"><span>同时用Object.getPrototypeof(p1)  得到</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>        getName: function() {},</span></span>
<span class="line"><span>        constructor: Person(){},(指向Person的函数),</span></span>
<span class="line"><span>        __proto__: {</span></span>
<span class="line"><span>            toStroing: function() {}</span></span>
<span class="line"><span>            ...</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    也就是p1.__proto__</span></span></code></pre></div><h2 id="_2-new-object-和-object-create-的区别" tabindex="-1">2.{} new Object() 和 Object.create()的区别 <a class="header-anchor" href="#_2-new-object-和-object-create-的区别" aria-label="Permalink to &quot;2.{} new Object() 和 Object.create()的区别&quot;">​</a></h2><p>首先{} 和new Object() 属性完全一致，没有任何区别因为他们都代表一个空对象，但是__proto__ 指向了Object.protytype:{}</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Object.prototype： {</span></span>
<span class="line"><span>    toString: function(){},</span></span>
<span class="line"><span>    get: function() {},</span></span>
<span class="line"><span>    set: function() {},</span></span>
<span class="line"><span>    valueOf: function() {} </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var p = {};</span></span>
<span class="line"><span>var p1 = new Object();</span></span>
<span class="line"><span> {</span></span>
<span class="line"><span> __prototyp: ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>var p1 = new Object({</span></span>
<span class="line"><span>    name: &#39;lee&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>var p2 = Object.create({</span></span>
<span class="line"><span>    name: &#39;jack&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(p1)得到</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    name: &#39;lee&#39;,</span></span>
<span class="line"><span>    __proto__ : {</span></span>
<span class="line"><span>        toString...</span></span>
<span class="line"><span>        //</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(p2)得到</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    __proto__: {</span></span>
<span class="line"><span>        name: &#39;jack&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>区别在于new 出来的会在对象本身添加属性而create出来的都是在__proto__ 上面添加属性和方法</span></span></code></pre></div>`,11)]))}const b=n(l,[["render",t]]);export{_ as __pageData,b as default};
