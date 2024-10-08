import{_ as s,c as n,a0 as e,o as p}from"./chunks/framework.xOXxqCsI.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/object.md","filePath":"src/javascript/object.md","lastUpdated":1727592456000}'),l={name:"src/javascript/object.md"};function t(i,a,c,o,r,b){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="javascript中关于对象的使用" tabindex="-1">javascript中关于对象的使用 <a class="header-anchor" href="#javascript中关于对象的使用" aria-label="Permalink to &quot;javascript中关于对象的使用&quot;">​</a></h2><blockquote><p>JavaScript的对象是一些列属性的集合，一个属性包含一个键值对(名称区分大小写A和a是不同属性)。</p></blockquote><h2 id="_1-创建对象的方法" tabindex="-1">1.创建对象的方法 <a class="header-anchor" href="#_1-创建对象的方法" aria-label="Permalink to &quot;1.创建对象的方法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let obj = new Object();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let obj = {};</span></span></code></pre></div><h3 id="_1-1设置对象属性" tabindex="-1">1.1设置对象属性 <a class="header-anchor" href="#_1-1设置对象属性" aria-label="Permalink to &quot;1.1设置对象属性&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> //创建时设置</span></span>
<span class="line"><span> let obj = {</span></span>
<span class="line"><span>    name: &quot;张三&quot;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> //直接设置</span></span>
<span class="line"><span> let obj = {}</span></span>
<span class="line"><span> obj.name = &#39;张三&#39;;</span></span></code></pre></div><h3 id="_1-2访问属性" tabindex="-1">1.2访问属性 <a class="header-anchor" href="#_1-2访问属性" aria-label="Permalink to &quot;1.2访问属性&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>    name: &#39;张三&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>obj.name</span></span>
<span class="line"><span>obj[name]</span></span></code></pre></div><h2 id="_2-枚举对象的所有属性" tabindex="-1">2.枚举对象的所有属性 <a class="header-anchor" href="#_2-枚举对象的所有属性" aria-label="Permalink to &quot;2.枚举对象的所有属性&quot;">​</a></h2><ul><li>for in遍历</li><li>Object.keys(o)</li><li>Object.getOwnPropertyNames(o)</li></ul><h3 id="_2-1-for-in-循环-访问一个对象及其原型链中所有可枚举属性-不推荐使用" tabindex="-1">2.1 for in 循环 访问一个对象及其<em>原型链</em>中所有可枚举属性(不推荐使用) <a class="header-anchor" href="#_2-1-for-in-循环-访问一个对象及其原型链中所有可枚举属性-不推荐使用" aria-label="Permalink to &quot;2.1 for in 循环 访问一个对象及其*原型链*中所有可枚举属性(不推荐使用)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>    name: &#39;张三&#39;,</span></span>
<span class="line"><span>    age: 12</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>for(let k in obj){</span></span>
<span class="line"><span>    console.log(&#39;key-&#39;+k+&#39;-value-&#39;+obj[k])</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//不推荐的原因 let arr = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]</span></span>
<span class="line"><span>Array.property.test = &#39;d&#39;;</span></span>
<span class="line"><span>//使用for in 循环会循环出d</span></span></code></pre></div><h3 id="_2-2object-keys-o-遍历该方法返回一个对象自身-不包含原型中-的所有key的数组集合-推荐使用-。" tabindex="-1">2.2Object.keys(o) 遍历该方法返回一个对象自身(<strong>不包含原型中</strong>)的所有key的数组集合(推荐使用)。 <a class="header-anchor" href="#_2-2object-keys-o-遍历该方法返回一个对象自身-不包含原型中-的所有key的数组集合-推荐使用-。" aria-label="Permalink to &quot;2.2Object.keys(o) 遍历该方法返回一个对象自身(**不包含原型中**)的所有key的数组集合(推荐使用)。&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>    name: &#39;张三&#39;,</span></span>
<span class="line"><span>    age: 12</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let arr = Object.keys(obj);</span></span>
<span class="line"><span>arr.forEach((val)=&gt;{</span></span>
<span class="line"><span>    console.log(&quot;key-&quot;+val+&quot;-value-&quot;+obj[val])</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_2-3object-getownpropertynames-o-该方法返回一个数组返回所有属性-无论书否可枚举的名称" tabindex="-1">2.3Object.getOwnPropertyNames(o)该方法返回一个数组返回所有属性，<strong>无论书否可枚举</strong>的名称 <a class="header-anchor" href="#_2-3object-getownpropertynames-o-该方法返回一个数组返回所有属性-无论书否可枚举的名称" aria-label="Permalink to &quot;2.3Object.getOwnPropertyNames(o)该方法返回一个数组返回所有属性，**无论书否可枚举**的名称&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>    name: &#39;张三&#39;,</span></span>
<span class="line"><span>    age: 12</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.defineProperty(obj,&#39;FnB&#39;,{</span></span>
<span class="line"><span>    enumerable: false,</span></span>
<span class="line"><span>    value: function(){}</span></span>
<span class="line"><span>}) //定义一个不可枚举的属性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr = Object.getOwnPropertyNames(obj);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>arr.forEach((val)=&gt;{</span></span>
<span class="line"><span>    console.log(&quot;key-&quot;+val+&quot;-value-&quot;+obj[val])</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_3-对象的扩展" tabindex="-1">3.对象的扩展 <a class="header-anchor" href="#_3-对象的扩展" aria-label="Permalink to &quot;3.对象的扩展&quot;">​</a></h2><hr><h3 id="_3-1属性的简洁性" tabindex="-1">3.1属性的简洁性 <a class="header-anchor" href="#_3-1属性的简洁性" aria-label="Permalink to &quot;3.1属性的简洁性&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = &#39;aaa&#39;;</span></span>
<span class="line"><span>let b = {a};</span></span></code></pre></div><h3 id="_3-2object-is" tabindex="-1">3.2Object.is() <a class="header-anchor" href="#_3-2object-is" aria-label="Permalink to &quot;3.2Object.is()&quot;">​</a></h3><blockquote><p>判断两个值相等Es5时可以用==或者=== 前者会制动转化类型后者+0 -0 NaN无法判断。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>function isEqual(a,b){</span></span>
<span class="line"><span>    return Object.is(a,b)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let a = isEqual(NaN,NaN); //true ===判断时会是false</span></span>
<span class="line"><span>let a = isEqual(+0,-0); //false ===判断时会是true</span></span></code></pre></div><h3 id="_3-3object-assign" tabindex="-1">3.3Object.assign() <a class="header-anchor" href="#_3-3object-assign" aria-label="Permalink to &quot;3.3Object.assign()&quot;">​</a></h3><blockquote><p>将多个对象的所有可枚举属性合并到同一个对象身上 ,注意如果两个对象有同样的属性，后者会覆盖前者。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = {name:&#39;aaa&#39;};</span></span>
<span class="line"><span>let b = {age:12};</span></span>
<span class="line"><span>Object.assign(a,b);</span></span></code></pre></div><h3 id="_3-4object-values-obejct-entries-es8" tabindex="-1">3.4Object.values(),Obejct.entries()(Es8) <a class="header-anchor" href="#_3-4object-values-obejct-entries-es8" aria-label="Permalink to &quot;3.4Object.values(),Obejct.entries()(Es8)&quot;">​</a></h3><blockquote><p>Object.values()返回值的数组集合，Object.entries返回键值对</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>    name: &#39;lee&#39;,</span></span>
<span class="line"><span>    age: 12</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let a = Object.values(obj); //[&#39;lee&#39;,12]</span></span>
<span class="line"><span>let b = Object.entries(obj); //[[&#39;name&#39;,&#39;lee&#39;],[&#39;age&#39;,12]]</span></span></code></pre></div><h2 id="_4-对象的扩展运算符" tabindex="-1">4.对象的扩展运算符 <a class="header-anchor" href="#_4-对象的扩展运算符" aria-label="Permalink to &quot;4.对象的扩展运算符&quot;">​</a></h2><h3 id="_4-1赋值运算" tabindex="-1">4.1赋值运算 <a class="header-anchor" href="#_4-1赋值运算" aria-label="Permalink to &quot;4.1赋值运算&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    let {x,y,...z} = {x:1,y:2,a:3,b:4};</span></span>
<span class="line"><span>    x:1</span></span>
<span class="line"><span>    y:2</span></span>
<span class="line"><span>    z: {a:3,b:4}</span></span></code></pre></div><h3 id="_4-2实现浅拷贝" tabindex="-1">4.2实现浅拷贝 <a class="header-anchor" href="#_4-2实现浅拷贝" aria-label="Permalink to &quot;4.2实现浅拷贝&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = {a:1}</span></span>
<span class="line"><span>let b= {b:2}</span></span>
<span class="line"><span>//Object.assign(a,b)</span></span>
<span class="line"><span>let c = {...a,...b};</span></span></code></pre></div><h2 id="_5-可枚举与不可枚举的注意事项" tabindex="-1">5.可枚举与不可枚举的注意事项 <a class="header-anchor" href="#_5-可枚举与不可枚举的注意事项" aria-label="Permalink to &quot;5.可枚举与不可枚举的注意事项&quot;">​</a></h2><ul><li>for in 遍历所有可枚举属性（包含原型链中 不推荐使用）</li><li>Object.keys() 返回一个对象本身可枚举属性的数组集合（不包含原型链 推荐使用）</li><li>JSON.stringify 返回一个对象本身可枚举属性的对象字符串</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Person() {</span></span>
<span class="line"><span>        this.name =&#39;jack&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    Person.prototype = {</span></span>
<span class="line"><span>        constructor: Person,</span></span>
<span class="line"><span>        job: &#39;student&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var p = new Person()</span></span>
<span class="line"><span>    //创建一个不可枚举的属性</span></span>
<span class="line"><span>    Object.defineProperty(p,&#39;sex&#39;,{</span></span>
<span class="line"><span>        value: &#39;man&#39;,</span></span>
<span class="line"><span>        enumerable: false</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    for(let key in p) {</span></span>
<span class="line"><span>        console.log(key+&#39;=&#39;+p[key])</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    console.log(Object.keys(p))</span></span>
<span class="line"><span>    console.log(JSON.stringify(p))</span></span></code></pre></div>`,37)]))}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
