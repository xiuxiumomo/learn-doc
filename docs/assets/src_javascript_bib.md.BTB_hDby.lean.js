import{_ as s,c as a,a0 as p,o as l}from"./chunks/framework.CroFxgLA.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/bib.md","filePath":"src/javascript/bib.md","lastUpdated":1727592456000}'),e={name:"src/javascript/bib.md"};function i(t,n,c,o,r,u){return l(),a("div",null,n[0]||(n[0]=[p(`<h2 id="_1-闭包" tabindex="-1">1.闭包 <a class="header-anchor" href="#_1-闭包" aria-label="Permalink to &quot;1.闭包&quot;">​</a></h2><blockquote><p>1.1 闭包: 有权访问另一个函数作用域中的变量函数，本质还是函数。闭包的特性</p></blockquote><ul><li><p>在一个函数内部定义</p></li><li><p>函数内部可以引用函数外部的变量。</p></li><li><p>参数和变量不会被回收。</p></li><li><p>将一个变量长期保存在内存中。(变量不销毁)</p></li><li><p>避免全局污染。</p></li><li><p>私有化成员，外部不可以访问</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Fun() {</span></span>
<span class="line"><span>    let x = 1;</span></span>
<span class="line"><span>    let Fa = function() {</span></span>
<span class="line"><span>        x++;</span></span>
<span class="line"><span>        return x;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return Fa;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let fn = Fun();</span></span>
<span class="line"><span>Fn.fa() //2</span></span>
<span class="line"><span>Fn.fa() //3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//私有化成员</span></span>
<span class="line"><span>function Fun() {</span></span>
<span class="line"><span>    let a = 1;</span></span>
<span class="line"><span>    function f1() {</span></span>
<span class="line"><span>        a++;</span></span>
<span class="line"><span>        return a;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    function f2() {</span></span>
<span class="line"><span>        a++;</span></span>
<span class="line"><span>        return a;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return {f1,f2};</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let fn = Fun();</span></span>
<span class="line"><span>fn.f1() //私有化成员想要获取f1() 必须先调用Fun</span></span></code></pre></div><blockquote><p>1.2 闭包易错点</p></blockquote><ul><li>引用的变量发生变化</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Fun() {</span></span>
<span class="line"><span>    let arr = [];</span></span>
<span class="line"><span>    for(var i=0;i&lt;10;i++){</span></span>
<span class="line"><span>        a[i] = function() {</span></span>
<span class="line"><span>            return i;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return arr;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let Fn = Fun();</span></span>
<span class="line"><span>Fn[0]() //10</span></span>
<span class="line"><span>Fn[1]() //10</span></span>
<span class="line"><span>//此时return i 访问的都是Fun下的i值(10)</span></span>
<span class="line"><span>//解决办法 1.把var 换成let  2.闭包</span></span>
<span class="line"><span>function Fun() {</span></span>
<span class="line"><span>    let arr = [];</span></span>
<span class="line"><span>    for(var i=0;i&lt;10;i++){</span></span>
<span class="line"><span>        a[i] = function(index) {</span></span>
<span class="line"><span>            let _index = index;  //b</span></span>
<span class="line"><span>            return function(_index) { //a</span></span>
<span class="line"><span>                return _index</span></span>
<span class="line"><span>            };</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }(i)</span></span>
<span class="line"><span>    return arr;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>此时a的作用域在b里面</span></span></code></pre></div><blockquote><p>1.3 闭包 this 的指向问题</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>    x: 5,</span></span>
<span class="line"><span>    fn: function() {</span></span>
<span class="line"><span>        return function(){</span></span>
<span class="line"><span>            rerturn this.x;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>obj.fn()() // undefined 说明this指向了window</span></span></code></pre></div><blockquote><p>1.4 内存泄漏问题</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Fun() {</span></span>
<span class="line"><span>    let a = document.getElementById(&#39;btn&#39;);</span></span>
<span class="line"><span>    a.onClick = function(){</span></span>
<span class="line"><span>        return a.id</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    a = null //手动释放</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//这么做的话a变量会一直保存而无法释放 建议手动释放</span></span></code></pre></div><h2 id="_2-防抖函数实现" tabindex="-1">2.防抖函数实现 <a class="header-anchor" href="#_2-防抖函数实现" aria-label="Permalink to &quot;2.防抖函数实现&quot;">​</a></h2><h3 id="_2-1-防抖" tabindex="-1">2.1 防抖 <a class="header-anchor" href="#_2-1-防抖" aria-label="Permalink to &quot;2.1 防抖&quot;">​</a></h3><blockquote><p>防抖的概念：某些 dom 事件如输入框持续输入，页面发生拖拽等，页面大小发生改变 resize 事件等。原理: debounce(防抖动)，像挤压弹簧一样，按下去只要不松手就不会上弹，中间怎么压都没有反应。实现原理：创建一个函数返回闭包，该闭包在（1s）指定的时间内只执行一次。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function debounce(fn,time=1000) {</span></span>
<span class="line"><span>    let timer = null</span></span>
<span class="line"><span>    return function() {</span></span>
<span class="line"><span>        let context = this</span></span>
<span class="line"><span>        let arg = arguments  //这两步绑定正确的作用域，谁调用就指向谁，否则指向window</span></span>
<span class="line"><span>        clearTimeout(timer)</span></span>
<span class="line"><span>        timer = setTimeout(()=&gt;{</span></span>
<span class="line"><span>            fn.apply(context,arg)</span></span>
<span class="line"><span>        },time)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span> //用input测试</span></span>
<span class="line"><span> window.onload=function() {</span></span>
<span class="line"><span>       document.getElementById(&#39;inp&#39;).onkeyup = debounce(function(e){</span></span>
<span class="line"><span>            console.log(&#39;结束了&#39;)</span></span>
<span class="line"><span>            console.log(e)</span></span>
<span class="line"><span>       },1000)</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="_2-1-1-关于闭包中-this-的指向问题" tabindex="-1">2.1.1 关于闭包中 this 的指向问题 <a class="header-anchor" href="#_2-1-1-关于闭包中-this-的指向问题" aria-label="Permalink to &quot;2.1.1 关于闭包中 this 的指向问题&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>    name: &#39;张三&#39;,</span></span>
<span class="line"><span>    getName: function() {</span></span>
<span class="line"><span>        return function() {</span></span>
<span class="line"><span>            console.log(this)</span></span>
<span class="line"><span>            console.log(arguments)</span></span>
<span class="line"><span>            return this.name</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let res = obj.getName()() //&#39;&#39;</span></span>
<span class="line"><span>//==</span></span>
<span class="line"><span>let fn = obj.getName()</span></span>
<span class="line"><span>fn()//此时的this明显指向window</span></span>
<span class="line"><span>可以写成</span></span>
<span class="line"><span>fn.call(obj,1,2) 这个时候this绑定为obj arguments变为 1,2</span></span></code></pre></div><h2 id="_2-2-节流函数" tabindex="-1">2.2 节流函数 <a class="header-anchor" href="#_2-2-节流函数" aria-label="Permalink to &quot;2.2 节流函数&quot;">​</a></h2><blockquote><p>节流的概念：某些 dom 事件如鼠标移动，滚动到底部触发事件等。原理: throttle(节流)，原本的函数可能 20ms 执行一次，1s 内 50 次(1000/20)，使用节流函数控制执行的次数改成 250ms 那么 1s 内只执行 4 次 1000/250。实现原理：创建一个函数返回闭包，该闭包每过 250ms 执行一次</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function throttle(fn,threshhold=250) {</span></span>
<span class="line"><span>    let last=null,timer = null</span></span>
<span class="line"><span>    return function() {</span></span>
<span class="line"><span>        let now =+new Date()</span></span>
<span class="line"><span>        let context = this</span></span>
<span class="line"><span>        let arg = arguments</span></span>
<span class="line"><span>        if(last &amp;&amp; now&lt;last+threshhold) {</span></span>
<span class="line"><span>            clearTimeOut(timer)</span></span>
<span class="line"><span>            timer = setTimeOut(function(){</span></span>
<span class="line"><span>                last = now //执行以后重新计算时间</span></span>
<span class="line"><span>                fn.apply(context,arg)</span></span>
<span class="line"><span>            },threshhold)</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            last = now</span></span>
<span class="line"><span>            fn.apply(context,arg)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>document.getElementById(&#39;aa&#39;).onmousemove=function() {</span></span>
<span class="line"><span>    console.log(&#39;不节流移动&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>document.onmousemove=throttle((e)=&gt;{</span></span>
<span class="line"><span>    console.log(&#39;节流移动&#39;)</span></span>
<span class="line"><span>},250)</span></span></code></pre></div><p>注明：该文章是在原文<a href="https://mp.weixin.qq.com/s/-HPtViPA926BwNp599555w" target="_blank" rel="noreferrer">前端自习课</a>修改而得，感谢原作者！</p>`,21)]))}const b=s(e,[["render",i]]);export{h as __pageData,b as default};
