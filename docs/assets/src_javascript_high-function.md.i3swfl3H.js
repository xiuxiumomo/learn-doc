import{_ as n,c as s,a0 as e,o as p}from"./chunks/framework.CroFxgLA.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/high-function.md","filePath":"src/javascript/high-function.md","lastUpdated":1728371101000}'),l={name:"src/javascript/high-function.md"};function t(i,a,r,c,o,d){return p(),s("div",null,a[0]||(a[0]=[e(`<h2 id="高阶函数" tabindex="-1">高阶函数 <a class="header-anchor" href="#高阶函数" aria-label="Permalink to &quot;高阶函数&quot;">​</a></h2><blockquote><p>概念一个函数的参数是另一个函数可以称为高阶函数</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let FnA = function(x) {</span></span>
<span class="line"><span>    return x+&#39;hello&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function FnB(Fn,name){</span></span>
<span class="line"><span>    return Fn(name);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>FnB(FnA,&#39;jack&#39;) //jackhello</span></span></code></pre></div><h3 id="_1-map函数接收一个函数当参数-依次调用数组的每一个元素-结果-返回一个新数组-原数组不变。" tabindex="-1">1.map函数接收一个函数当参数，，依次调用数组的每一个元素，结果：返回一个新数组，原数组不变。 <a class="header-anchor" href="#_1-map函数接收一个函数当参数-依次调用数组的每一个元素-结果-返回一个新数组-原数组不变。" aria-label="Permalink to &quot;1.map函数接收一个函数当参数，，依次调用数组的每一个元素，结果：返回一个新数组，原数组不变。&quot;">​</a></h3><p>arr.map(callback())</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [-1,23,4,-5];</span></span>
<span class="line"><span>let arr2 = arr.map(Math.abs) //[1,23,4,-5]</span></span></code></pre></div><h3 id="_2-reduce-接收一个函数-对数组进行累加操作-把累计结果和下一个值进行操作-最后返回单个结果" tabindex="-1">2.reduce() 接收一个函数，对数组进行累加操作，把累计结果和下一个值进行操作，最后返回单个结果 <a class="header-anchor" href="#_2-reduce-接收一个函数-对数组进行累加操作-把累计结果和下一个值进行操作-最后返回单个结果" aria-label="Permalink to &quot;2.reduce() 接收一个函数，对数组进行累加操作，把累计结果和下一个值进行操作，最后返回单个结果&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span>callback()的</span></span>
<span class="line"><span>\`params</span></span>
<span class="line"><span>returnValue 上一次的处理结果，或者初始值(*)</span></span>
<span class="line"><span>currentValue 当前处理的元素的值</span></span>
<span class="line"><span>currentIndex 当前索引</span></span>
<span class="line"><span>array\`</span></span>
<span class="line"><span>initValue初次调用callback的时候returnValue值默认是数组的第一个元素，可选</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**/</span></span>
<span class="line"><span>arr.reduce(callback())</span></span>
<span class="line"><span>let arr = [1,4,5,6,34]</span></span>
<span class="line"><span>arr.reduce((res,curr)=&gt;{return res+curr})</span></span>
<span class="line"><span>let arr2 = [[2,4,7],[3,5,6],[6,7]];</span></span>
<span class="line"><span>arr2.reduce((res,curr)=&gt;{return res.concat(curr)});</span></span></code></pre></div><h3 id="_3-filter-过滤函数-返回一个过滤剩下的新数组-原数组不变" tabindex="-1">3.filter()过滤函数,返回一个过滤剩下的新数组,原数组不变 <a class="header-anchor" href="#_3-filter-过滤函数-返回一个过滤剩下的新数组-原数组不变" aria-label="Permalink to &quot;3.filter()过滤函数,返回一个过滤剩下的新数组,原数组不变&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [null,undefined,1,3,&#39;&#39;,&#39;a&#39;];</span></span>
<span class="line"><span>arr.filter((item)=&gt;{return item&amp;&amp;item.trim()})</span></span></code></pre></div><h3 id="_4-sort-排序" tabindex="-1">4.sort()排序 <a class="header-anchor" href="#_4-sort-排序" aria-label="Permalink to &quot;4.sort()排序&quot;">​</a></h3><p>对数组sort排序sort((a,b)=&gt;{return a-b}) fun(a,b) 若a小于b a排在b的前面否则a排在b的后面，也就是说函数的返回值大于0 a和b交换位置。<br> 利用sort((a,b)=&gt;{return a-b}) 对数组进行升序排序</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [5,1,3,6,4,7].sort((a,b)=&gt;{return a-b});</span></span></code></pre></div><h3 id="网页定时器requestanimframe" tabindex="-1">网页定时器requestAnimFrame <a class="header-anchor" href="#网页定时器requestanimframe" aria-label="Permalink to &quot;网页定时器requestAnimFrame&quot;">​</a></h3><blockquote><p>前言:requestAnimFrame是h5新的api目前支持高版本的浏览器(只能在网页中使用),该方法保持与浏览器同步帧数刷新频率60hz,用于动画等提高性能。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//定义</span></span>
<span class="line"><span>window.requestAnimFrame = (function(){</span></span>
<span class="line"><span>  return  window.requestAnimationFrame       || </span></span>
<span class="line"><span>          window.webkitRequestAnimationFrame || </span></span>
<span class="line"><span>          window.mozRequestAnimationFrame    || </span></span>
<span class="line"><span>          window.oRequestAnimationFrame      || </span></span>
<span class="line"><span>          window.msRequestAnimationFrame     || </span></span>
<span class="line"><span>          function( callback ){</span></span>
<span class="line"><span>            window.setTimeout(callback, 1000 / 60);</span></span>
<span class="line"><span>          };</span></span>
<span class="line"><span>})();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //使用</span></span>
<span class="line"><span> var demo = document.getElementById(&#39;demo&#39;);</span></span>
<span class="line"><span>    function rander(){</span></span>
<span class="line"><span>        demo.style.left = parseInt(demo.style.left) + 1 + &#39;px&#39;; //每一帧向右移动1px</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    window.requestAnimationFrame(function(){</span></span>
<span class="line"><span>        rander();</span></span>
<span class="line"><span>        //当超过300px后才停止</span></span>
<span class="line"><span>        if(parseInt(demo.style.left)&lt;=300){</span></span>
<span class="line"><span>            requestAnimationFrame(arguments.callee);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span></code></pre></div>`,16)]))}const m=n(l,[["render",t]]);export{h as __pageData,m as default};
