import{_ as s,c as n,a0 as e,o as p}from"./chunks/framework.xOXxqCsI.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/map-set.md","filePath":"src/javascript/map-set.md","lastUpdated":1728371101000}'),l={name:"src/javascript/map-set.md"};function t(i,a,c,o,d,r){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="map和set" tabindex="-1">map和set <a class="header-anchor" href="#map和set" aria-label="Permalink to &quot;map和set&quot;">​</a></h2><blockquote><p>Map和Set对象是在ES6中被引入的，作为一种由 key值标记的数据容器。Map和Set对象承载的数据元素可以按照插入时的顺序，被迭代遍历。</p></blockquote><h3 id="_1-set对象-是一个类" tabindex="-1">1.Set对象 是一个类 <a class="header-anchor" href="#_1-set对象-是一个类" aria-label="Permalink to &quot;1.Set对象 是一个类&quot;">​</a></h3><blockquote><p>Set数据结构类似数组，但所有成员的值唯一。Set本身为一个构造函数，用来生成 Set数据结构，使用 add方法来添加新成员。注意:数组的成员唯一并不包含对象数组也就是说[{name:&#39;jack&#39;},{name:&#39;jack&#39;}] 无法去重。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = new Set([1,2,3,4,3])</span></span>
<span class="line"><span>[...a]</span></span>
<span class="line"><span>//去重</span></span>
<span class="line"><span>[...new Set([1,2,2,1,3])]</span></span>
<span class="line"><span>//注意 5 和 &#39;5&#39; 是两个不同的值</span></span></code></pre></div><h3 id="_1-1属性和方法" tabindex="-1">1.1属性和方法 <a class="header-anchor" href="#_1-1属性和方法" aria-label="Permalink to &quot;1.1属性和方法&quot;">​</a></h3><ul><li>a.size 返回成员的总数</li><li>a.constructor 构造函数</li><li>add(value) 添加项</li><li>delete(value) 删除项 返回布尔值</li><li>has(value) 是否含有某项 返回布尔值</li><li>clear() 清除所有项</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = new Set()</span></span>
<span class="line"><span>a.add(1).add(2)</span></span>
<span class="line"><span>a.has(1)</span></span>
<span class="line"><span>a.delete(2)</span></span>
<span class="line"><span>a.clear()</span></span></code></pre></div><h3 id="_1-2set的应用" tabindex="-1">1.2Set的应用 <a class="header-anchor" href="#_1-2set的应用" aria-label="Permalink to &quot;1.2Set的应用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//去重</span></span>
<span class="line"><span>[...new Set([1,1,2,3])]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Array.from(new Set([1,1,2,3]))</span></span>
<span class="line"><span>//遍历和过滤</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let b = new Set([...].map((x)=&gt;{return x*2}))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//并集，交集，差集</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a= new Set([1,2,3])</span></span>
<span class="line"><span>let b = new Set([3,4,5])</span></span>
<span class="line"><span>//并集</span></span>
<span class="line"><span>let c = new Set([...a,...b]) //[1,2,3,4,5]</span></span>
<span class="line"><span>//交集</span></span>
<span class="line"><span>let d = new Set([...a].filter((x)=&gt;{return b.has(x)}) [3]</span></span>
<span class="line"><span>//差集</span></span>
<span class="line"><span>let e = new Set([...a].filter((x)=&gt;{return !b.has(x)})) [1,2,4,5]</span></span></code></pre></div><h3 id="_1-3遍历方法" tabindex="-1">1.3遍历方法 <a class="header-anchor" href="#_1-3遍历方法" aria-label="Permalink to &quot;1.3遍历方法&quot;">​</a></h3><ul><li>keys()</li><li>values()</li><li>entries()</li><li>forEach()</li></ul><h3 id="_2-map对象" tabindex="-1">2.Map对象 <a class="header-anchor" href="#_2-map对象" aria-label="Permalink to &quot;2.Map对象&quot;">​</a></h3><blockquote><p>由于传统的 JavaScript对象只能用字符串当做键，给开发带来很大限制，ES6增加 Map数据结构，使得各种类型的值(包括对象)都可以作为键。\\</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = new Map()</span></span>
<span class="line"><span>let b = {name: &#39;jack&#39;}</span></span>
<span class="line"><span>a.set(b,&#39;myName&#39;) //对象当key值</span></span>
<span class="line"><span>a.get(b)</span></span></code></pre></div><p>将map结构转成数组结构</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let b = new Map()</span></span>
<span class="line"><span>b.set(&#39;a&#39;,&#39;1234&#39;)</span></span>
<span class="line"><span>b.set(&#39;b&#39;,&#39;asd&#39;)</span></span>
<span class="line"><span>let a = [...a.keys()]</span></span></code></pre></div>`,17)]))}const b=s(l,[["render",t]]);export{u as __pageData,b as default};
