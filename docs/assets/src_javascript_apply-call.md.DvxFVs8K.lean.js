import{_ as n,c as s,a0 as p,o as l}from"./chunks/framework.CroFxgLA.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/apply-call.md","filePath":"src/javascript/apply-call.md","lastUpdated":1727592456000}'),e={name:"src/javascript/apply-call.md"};function i(c,a,t,o,r,b){return l(),s("div",null,a[0]||(a[0]=[p(`<h2 id="call-apply-bind-等使用说明书" tabindex="-1">call,apply,bind 等使用说明书 <a class="header-anchor" href="#call-apply-bind-等使用说明书" aria-label="Permalink to &quot;call,apply,bind 等使用说明书&quot;">​</a></h2><blockquote><p>这三个是方法中常见的对象冒充，再 js 中有着非常重要的作用。</p></blockquote><h3 id="_1-call-a-call-b-arg1-arg2" tabindex="-1">1.call A.call(B,arg1,arg2) <a class="header-anchor" href="#_1-call-a-call-b-arg1-arg2" aria-label="Permalink to &quot;1.call A.call(B,arg1,arg2)&quot;">​</a></h3><blockquote><p>call 方法第一个参数是必选，当传入的是 null,undefined 时候指向 window，后面的依次是参数</p></blockquote><h3 id="_2-apply-a-apply-b-a-b" tabindex="-1">2.apply A.apply(B,[a,b]) <a class="header-anchor" href="#_2-apply-a-apply-b-a-b" aria-label="Permalink to &quot;2.apply A.apply(B,[a,b])&quot;">​</a></h3><blockquote><p>call 方法第一个参数是必选，当传入的是 null,undefined 时候指向 window，参数是以数组的形式传入的。</p></blockquote><h3 id="_3-bind-不执行函数仅改变-this-的指向" tabindex="-1">3.bind 不执行函数仅改变 this 的指向 <a class="header-anchor" href="#_3-bind-不执行函数仅改变-this-的指向" aria-label="Permalink to &quot;3.bind 不执行函数仅改变 this 的指向&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var name = &#39;张三&#39;</span></span>
<span class="line"><span>var obj = {</span></span>
<span class="line"><span>    name: &#39;李四&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var foo = function () {</span></span>
<span class="line"><span>    return this.name</span></span>
<span class="line"><span>}.bind(obj)</span></span>
<span class="line"><span>foo() // 李四</span></span></code></pre></div><h3 id="_4-实现简单的-call-和-apply-方法" tabindex="-1">4.实现简单的 call 和 apply 方法 <a class="header-anchor" href="#_4-实现简单的-call-和-apply-方法" aria-label="Permalink to &quot;4.实现简单的 call 和 apply 方法&quot;">​</a></h3><blockquote><p>原理，在新的对象中创建一个函数对象 fn: ()=&gt;{ return this.name} 执行该函数后，删除该函数属性</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>Function.prototype.myCall=function (obj) {</span></span>
<span class="line"><span>    var obj = obj || window</span></span>
<span class="line"><span>    obj.fn  = this; //新建一个fn</span></span>
<span class="line"><span>    let args = [...arguments].splice(1) //第一个参数是obj</span></span>
<span class="line"><span>    let res = obj.fn(...args)</span></span>
<span class="line"><span>    delete obj.fn</span></span>
<span class="line"><span>    return res</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Function.prototype.myApply = function(obj) {</span></span>
<span class="line"><span>    var obj = obj || window</span></span>
<span class="line"><span>    obj.fn = this;</span></span>
<span class="line"><span>    let args = arguments[1] //第一个参数是obj 第二个参数是数组</span></span>
<span class="line"><span>    let res</span></span>
<span class="line"><span>    if(args){</span></span>
<span class="line"><span>        res = obj.fn(...args)</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        res = obj.fn()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return res</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let obj = {</span></span>
<span class="line"><span>    name: &#39;张三&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let name = &#39;aaa&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function getA() {</span></span>
<span class="line"><span>    return this.name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let res = getA.myApply(obj)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var foo = {</span></span>
<span class="line"><span>    value: 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>functin bar() {</span></span>
<span class="line"><span>    console.log(this.value)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bar.call(foo)</span></span>
<span class="line"><span>//call改变了this的指向，指向到foo 调用了bar函数</span></span>
<span class="line"><span>//模拟</span></span>
<span class="line"><span>var foo = {</span></span>
<span class="line"><span>    value: 1,</span></span>
<span class="line"><span>    bar: function() {</span></span>
<span class="line"><span>        console.log(this.value)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>foo.bar()</span></span>
<span class="line"><span>//第一步 foo.fn = bar</span></span>
<span class="line"><span>//第二部 foo.fn()</span></span>
<span class="line"><span>//第三步 delete foo.fn</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function.prototype.myCall = function(context) {</span></span>
<span class="line"><span>    context.fn = this;</span></span>
<span class="line"><span>    context.fn()</span></span>
<span class="line"><span>    delete context.fn</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var foo = {</span></span>
<span class="line"><span>    value: 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function bar() {</span></span>
<span class="line"><span>    console.log(this.value)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>bar.myCall(foo)</span></span></code></pre></div>`,12)]))}const h=n(e,[["render",i]]);export{u as __pageData,h as default};
