import{_ as s,c as n,a0 as e,o as p}from"./chunks/framework.CroFxgLA.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/ES6-4.md","filePath":"src/javascript/ES6-4.md","lastUpdated":1727592456000}'),t={name:"src/javascript/ES6-4.md"};function l(i,a,c,o,r,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="_10-set和map数据结构" tabindex="-1">10.Set和Map数据结构 <a class="header-anchor" href="#_10-set和map数据结构" aria-label="Permalink to &quot;10.Set和Map数据结构&quot;">​</a></h2><blockquote><p>set数据结构和数组类似，但所有成员的值唯一</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = new Set();</span></span>
<span class="line"><span>[1,1,2,3].forEach((x)=&gt;a.add(x));</span></span>
<span class="line"><span>for(let k of a) {</span></span>
<span class="line"><span>    consolog(k)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_10-1基础使用-注意每一项为变量而不是对象-对象无法去重" tabindex="-1">10.1基础使用(注意每一项为变量而不是对象，对象无法去重) <a class="header-anchor" href="#_10-1基础使用-注意每一项为变量而不是对象-对象无法去重" aria-label="Permalink to &quot;10.1基础使用(注意每一项为变量而不是对象，对象无法去重)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = new Set([1,2,3,4,4])</span></span>
<span class="line"><span>[...a]</span></span>
<span class="line"><span>a.size ///4</span></span>
<span class="line"><span>[...new Set([1,2,3,4,4])]</span></span></code></pre></div><h3 id="_10-2属性和方法" tabindex="-1">10.2属性和方法 <a class="header-anchor" href="#_10-2属性和方法" aria-label="Permalink to &quot;10.2属性和方法&quot;">​</a></h3><ul><li><p>Set.prototype.constructor 构造函数指向Set本身</p></li><li><p>Set.prototype.size 返回Set实例的成员总数</p></li><li><p>add(value) 添加项目</p></li><li><p>delete(value) 删除项目</p></li><li><p>has(value) 检测是否存在某项</p></li><li><p>clear() 清除所有成员，没有返回值</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = new Set();</span></span>
<span class="line"><span>a.add(1).add(2)</span></span>
<span class="line"><span>a.delete(1)</span></span>
<span class="line"><span>a.clear();</span></span></code></pre></div><h3 id="_10-2数组去重" tabindex="-1">10.2数组去重 <a class="header-anchor" href="#_10-2数组去重" aria-label="Permalink to &quot;10.2数组去重&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//去重的两种方法</span></span>
<span class="line"><span>[...new Set([1,2,3,3,4])]</span></span>
<span class="line"><span>Array.from(new Set([1,2,3,4,4]))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//遍历和过滤</span></span>
<span class="line"><span>let a = new Set([1,2,3,4])</span></span>
<span class="line"><span>let b = new Set([...a]).map(x=&gt;x*2)</span></span>
<span class="line"><span>let c = new Set([...a]).filter(x=&gt;(x%2==0))</span></span></code></pre></div><h2 id="_11proxy" tabindex="-1">11Proxy <a class="header-anchor" href="#_11proxy" aria-label="Permalink to &quot;11Proxy&quot;">​</a></h2><p>proxy用于修改某些操作的默认行为，可以理解为拦截外界对莫表对象访问的一种机制，从而对外界的访问经闲过滤和修改，即代理某些操作，也称”代理器“</p><h3 id="_11-1-基础使用" tabindex="-1">11.1 基础使用 <a class="header-anchor" href="#_11-1-基础使用" aria-label="Permalink to &quot;11.1 基础使用&quot;">​</a></h3><p>proxy实例化需要传入两个参数，target参数表示要拦截对象，handler参数是一个对象表示用来定制拦截行为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let p = new Proxy(target,handler);</span></span>
<span class="line"><span>let a = new Proxy({},{</span></span>
<span class="line"><span>    get: function(target,handler) {</span></span>
<span class="line"><span>        return &#39;jack&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>a.name //lee</span></span>
<span class="line"><span>a.age //lee</span></span></code></pre></div>`,15)]))}const b=s(t,[["render",l]]);export{u as __pageData,b as default};
