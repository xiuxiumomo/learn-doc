import{_ as n,c as s,a0 as e,o as p}from"./chunks/framework.xOXxqCsI.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/ES6-5.md","filePath":"src/javascript/ES6-5.md","lastUpdated":1727592456000}'),t={name:"src/javascript/ES6-5.md"};function l(i,a,r,o,c,d){return p(),s("div",null,a[0]||(a[0]=[e(`<h2 id="_12promise对象" tabindex="-1">12Promise对象 <a class="header-anchor" href="#_12promise对象" aria-label="Permalink to &quot;12Promise对象&quot;">​</a></h2><h3 id="_12-1概念" tabindex="-1">12.1概念 <a class="header-anchor" href="#_12-1概念" aria-label="Permalink to &quot;12.1概念&quot;">​</a></h3><blockquote><p>主要解决异步回调问题特点:1.对象的状态不受外界的影响。2.一旦状态改变，不会再变，任何时候都可以得到结果。缺点:1.无法取消。2.如果不设置回调函数，Promise内部抛出错误，不会反应到外部。3.当处于padding状态时无法得知目前进展到哪一个阶段。</p></blockquote><h3 id="_12-2基本使用" tabindex="-1">12.2基本使用 <a class="header-anchor" href="#_12-2基本使用" aria-label="Permalink to &quot;12.2基本使用&quot;">​</a></h3><p>Promise作为构造函数需要用new来实例化,Promise接收一个函数作为参数，该函数有两个参数resolve和reject。实例化后有then方法，该方法接收两个函数作为参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let p = new Promise(function(resolve,reject){</span></span>
<span class="line"><span>    if(true) {</span></span>
<span class="line"><span>        resolve(val)</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        reject(err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p.then(function(val){},function(err){}) //不建议</span></span>
<span class="line"><span>p.then(function(val){}).catch(function(err){})</span></span></code></pre></div><h2 id="_13iterator-指针对象每次调用返回一个状态" tabindex="-1">13Iterator 指针对象每次调用返回一个状态 <a class="header-anchor" href="#_13iterator-指针对象每次调用返回一个状态" aria-label="Permalink to &quot;13Iterator 指针对象每次调用返回一个状态&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function fn(arr=[]) {</span></span>
<span class="line"><span>    let nextIndex = 0;</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        next: function(){</span></span>
<span class="line"><span>            return nextIndex&lt;arr.length? {value: arr[nextIndex++],done: false} : {value: undefined,done: true}</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let a = fn([1,2,3])</span></span>
<span class="line"><span>console.log(a.next())</span></span>
<span class="line"><span>console.log(a.next())</span></span>
<span class="line"><span>console.log(a.next())</span></span>
<span class="line"><span>console.log(a.next())</span></span></code></pre></div>`,8)]))}const m=n(t,[["render",l]]);export{u as __pageData,m as default};
