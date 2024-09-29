import{_ as s,c as n,a0 as e,o as l}from"./chunks/framework.xOXxqCsI.js";const p="/learn-doc/assets/arr_1.DQKmgbtT.png",b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/arrs.md","filePath":"src/javascript/arrs.md","lastUpdated":null}'),i={name:"src/javascript/arrs.md"};function t(r,a,c,o,d,h){return l(),n("div",null,a[0]||(a[0]=[e(`<h2 id="总结一下数组-array-常用的方法和特性" tabindex="-1">总结一下数组 Array 常用的方法和特性 <a class="header-anchor" href="#总结一下数组-array-常用的方法和特性" aria-label="Permalink to &quot;总结一下数组 Array 常用的方法和特性&quot;">​</a></h2><blockquote><p>前言数组是 javascript 种一个非常重要的数据结构。数组是一个有序的数据集合，使用数组名称和索引进行访问。</p></blockquote><h2 id="_1-创建数组" tabindex="-1">1.创建数组 <a class="header-anchor" href="#_1-创建数组" aria-label="Permalink to &quot;1.创建数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [];</span></span>
<span class="line"><span>let arr = new Array();</span></span>
<span class="line"><span>let arr = Array();</span></span></code></pre></div><h3 id="_2-使用数组" tabindex="-1">2.使用数组 <a class="header-anchor" href="#_2-使用数组" aria-label="Permalink to &quot;2.使用数组&quot;">​</a></h3><h3 id="_2-1-简单的使用数组" tabindex="-1">2.1 简单的使用数组 <a class="header-anchor" href="#_2-1-简单的使用数组" aria-label="Permalink to &quot;2.1 简单的使用数组&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [1,2,3];</span></span>
<span class="line"><span>a[0] //1</span></span>
<span class="line"><span>arr.length //3</span></span></code></pre></div><h3 id="_2-2-了解数组-length-属性" tabindex="-1">2.2 了解数组 length 属性 <a class="header-anchor" href="#_2-2-了解数组-length-属性" aria-label="Permalink to &quot;2.2 了解数组 length 属性&quot;">​</a></h3><ul><li>数组的索引值从 0 开始，从 0 开始一次增加 1</li><li>数组的 length 永远返回数组最后一个元素的索引值+1</li><li>可通过 arr.length =0;来清空数组</li><li>可通过 arr.length = len 来设置数组长度。</li></ul><h3 id="_2-3-遍历数组" tabindex="-1">2.3 遍历数组 <a class="header-anchor" href="#_2-3-遍历数组" aria-label="Permalink to &quot;2.3 遍历数组&quot;">​</a></h3><ul><li>for 循环</li><li>使用 for in 遍历</li><li>使用 forEach 遍历</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [1,2,3];</span></span>
<span class="line"><span>for(let i=0;i&lt;arr.length;i++){</span></span>
<span class="line"><span>    console.log(arr[i])</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>for(let i in arr){</span></span>
<span class="line"><span>    console.log(arr[i])</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>arr.forEach((item)=&gt;{</span></span>
<span class="line"><span>    console.log(item)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_3-数组的方法" tabindex="-1">3.数组的方法 <a class="header-anchor" href="#_3-数组的方法" aria-label="Permalink to &quot;3.数组的方法&quot;">​</a></h2><h3 id="_3-1-concat-和-join" tabindex="-1">3.1 concat()和 join() <a class="header-anchor" href="#_3-1-concat-和-join" aria-label="Permalink to &quot;3.1 concat()和 join()&quot;">​</a></h3><blockquote><p>concat 一个数组与另一个或多个数组合并组成新数组，join 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。</p></blockquote><ul><li>arr.concat(arr1,arr2,...);</li><li>arr.join(str)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [1,3];</span></span>
<span class="line"><span>arr.concat([4,5]);</span></span>
<span class="line"><span>arr.join(&#39;-&#39;)</span></span></code></pre></div><h3 id="_3-2-pop-和-push" tabindex="-1">3.2 pop()和 push() <a class="header-anchor" href="#_3-2-pop-和-push" aria-label="Permalink to &quot;3.2 pop()和 push()&quot;">​</a></h3><ul><li>pop():删除并返回数组的最后一个元素，原数组会改变。</li><li>push(item):向数组的尾部添加一个或多个元素，改变原数组，返回的是新数组的长度</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [1,2,3];</span></span>
<span class="line"><span>console.log(arr,arr.pop()); //[1,2] 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let len = arr.push(4)</span></span>
<span class="line"><span>console.log(len,arr) //4, [1,2,3,4]</span></span></code></pre></div><h3 id="_3-3-shift-和-unshift" tabindex="-1">3.3 shift()和 unshift() <a class="header-anchor" href="#_3-3-shift-和-unshift" aria-label="Permalink to &quot;3.3 shift()和 unshift()&quot;">​</a></h3><ul><li>shift(): 删除并返回数组的第一个元素，改变元素组。</li><li>unshift(): 从数组的头部插入一个元素并返回数组的长度。</li></ul><p><img src="`+p+`" alt="img"></p><h3 id="_3-4-reserve-颠倒数组的顺序" tabindex="-1">3.4 reserve() 颠倒数组的顺序 <a class="header-anchor" href="#_3-4-reserve-颠倒数组的顺序" aria-label="Permalink to &quot;3.4 reserve() 颠倒数组的顺序&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [1,3,4,5];</span></span>
<span class="line"><span>arr.reserve() //[5,4,3,1]</span></span></code></pre></div><h3 id="_3-5-slice-和-splice" tabindex="-1">3.5 slice()和 splice() <a class="header-anchor" href="#_3-5-slice-和-splice" aria-label="Permalink to &quot;3.5 slice()和 splice()&quot;">​</a></h3><ul><li>slice(start,[end]) 提取指定位置的片段返回数组，原数组不变。[start,end)</li><li>splice(start,num) 删掉数组中指定位置的元素并返回成数组。原数组会改变。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [1,2,3,4];</span></span>
<span class="line"><span>arr.slice(1,3) //[2,3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>arr.splice(1,3) // [2,3]</span></span></code></pre></div><h3 id="_3-6indexof" tabindex="-1">3.6indexOf() <a class="header-anchor" href="#_3-6indexof" aria-label="Permalink to &quot;3.6indexOf()&quot;">​</a></h3><ul><li>indexOf(ele,[,start]) 查找数组中是否含有某个元素，如果没有则返回-1</li></ul><h2 id="_4-数组迭代方法" tabindex="-1">4.数组迭代方法 <a class="header-anchor" href="#_4-数组迭代方法" aria-label="Permalink to &quot;4.数组迭代方法&quot;">​</a></h2><ul><li>forEach() 遍历循环</li><li>every() 数学中的与命题,必须全部为真返回真。</li><li>some() 数学中的或命题,存在某个为真返回真。</li><li>filter() 过滤数组的每一项，返回符合条件的集合(漏斗)</li><li>map() 返回一个由回调函数的返回值组成的新数组。</li><li>reduce() 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [1,2,3];</span></span>
<span class="line"><span>let is_true = arr.every((item)=&gt;{</span></span>
<span class="line"><span>    return item&gt;0;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(is_true) //true</span></span>
<span class="line"><span>let arr_2 = arr.filter((item)=&gt;{</span></span>
<span class="line"><span>    return item&gt;=2;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// [2,3]</span></span>
<span class="line"><span>let map_arr = arr.map((item)=&gt;{</span></span>
<span class="line"><span>    return item*2;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// map_arr [2,4,6]</span></span>
<span class="line"><span>注意以上行为均不改变原来的数组</span></span></code></pre></div><h2 id="_5-es6-新增数组方法" tabindex="-1">5.ES6 新增数组方法 <a class="header-anchor" href="#_5-es6-新增数组方法" aria-label="Permalink to &quot;5.ES6 新增数组方法&quot;">​</a></h2><ul><li>keys() 返回下标集合</li><li>values() 返回元素值的集合</li><li>entries() 返回键值对集合</li><li>find() 找到第一个满足测试函数元素的那个值，找不到返回 undefind</li><li>findIndex() 找打第一个满足测试函数的元素的索引，找不到返回-1；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//重点讲一下find findIndex</span></span>
<span class="line"><span>let arr = [1,2,3];</span></span>
<span class="line"><span>let item = arr.find((item)={</span></span>
<span class="line"><span>    return item==1</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>let item_index = arr.findIndex((item)={</span></span>
<span class="line"><span>    return item==1</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// item 1 item_index 0</span></span>
<span class="line"><span>let arr = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        id: 1,</span></span>
<span class="line"><span>        name: &#39;lee&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        id: 2,</span></span>
<span class="line"><span>        name: &#39;jack</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>let item = arr.find((item)=&gt;{</span></span>
<span class="line"><span>    return item.id==1;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>//item {id:1,name:&#39;lee&#39;}</span></span></code></pre></div><h2 id="数组的扩展-es6" tabindex="-1">数组的扩展 ES6 <a class="header-anchor" href="#数组的扩展-es6" aria-label="Permalink to &quot;数组的扩展 ES6&quot;">​</a></h2><ul><li>(...)运算 浅拷贝对象</li><li>Array.from() 将类数组转变成真正的数组</li><li>Array.of() 将一组数值转变成数组</li><li>includes() 返回 Boolean 值，判断数组中是否包含元素</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [1,2,3];</span></span>
<span class="line"><span>let arr2 = [...arr];</span></span>
<span class="line"><span>let a = {</span></span>
<span class="line"><span>    &#39;0&#39;: &#39;lee&#39;,</span></span>
<span class="line"><span>    &#39;1&#39;: &#39;jack&#39;,</span></span>
<span class="line"><span>    length: 2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let arr = Array.from(a) //变为数组</span></span>
<span class="line"><span>Array.of(1,2,3) // [1,2,3]</span></span>
<span class="line"><span>[1,23,4].includes(1) //</span></span></code></pre></div><h2 id="set-对象" tabindex="-1">Set 对象 <a class="header-anchor" href="#set-对象" aria-label="Permalink to &quot;Set 对象&quot;">​</a></h2><blockquote><p>Set 数据结构类似数组，但是所有成员的值<em>唯一</em>。常用来去重(单数据而不是对象数据)</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [1,2,2,3,4,5];</span></span>
<span class="line"><span>let arr_2 = Array.from(new Set(arr));</span></span></code></pre></div><h2 id="数组的交集并集差集" tabindex="-1">数组的交集并集差集 <a class="header-anchor" href="#数组的交集并集差集" aria-label="Permalink to &quot;数组的交集并集差集&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = [1,2,3,4,6];let b = [1,2,3,4,5,7];</span></span>
<span class="line"><span>//差集</span></span>
<span class="line"><span>function difference(a, b) {</span></span>
<span class="line"><span>    let array = Array.from(new Set([...a,...b]))</span></span>
<span class="line"><span>    return array.filter(v =&gt; !a.includes(v) || !b.includes(v))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//交集</span></span>
<span class="line"><span>function commonArray(a,b) {</span></span>
<span class="line"><span>    let array = Array.from(new Set([...a,...b]))</span></span>
<span class="line"><span>    return array.filter(v =&gt; a.includes(v) &amp;&amp; b.includes(v))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//并集</span></span>
<span class="line"><span>function allArray(a,b) {</span></span>
<span class="line"><span>    let array = Array.from(new Set([...a,...b]))</span></span>
<span class="line"><span>    return array</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,44)]))}const g=s(i,[["render",t]]);export{b as __pageData,g as default};
