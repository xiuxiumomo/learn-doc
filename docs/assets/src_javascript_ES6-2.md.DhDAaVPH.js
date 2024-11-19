import{_ as s,c as n,a0 as e,o as p}from"./chunks/framework.CroFxgLA.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/ES6-2.md","filePath":"src/javascript/ES6-2.md","lastUpdated":1727592456000}'),i={name:"src/javascript/ES6-2.md"};function l(t,a,r,c,o,u){return p(),n("div",null,a[0]||(a[0]=[e(`<h3 id="_5函数扩展" tabindex="-1">5函数扩展 <a class="header-anchor" href="#_5函数扩展" aria-label="Permalink to &quot;5函数扩展&quot;">​</a></h3><h3 id="_5-1number-isfinite-number-isnan-比较" tabindex="-1">5.1Number.isFinite() Number.isNaN()比较 <a class="header-anchor" href="#_5-1number-isfinite-number-isnan-比较" aria-label="Permalink to &quot;5.1Number.isFinite() Number.isNaN()比较&quot;">​</a></h3><p>Number.isFinite() 用于检查一个数值是否是有限的，即不是 Infinity，若参数不是 Number类型，则一律返回 false 。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//检测是否是有限(正常数)</span></span>
<span class="line"><span>Number.isFinite(10) //true </span></span>
<span class="line"><span>Number.isFinite(&#39;10&#39;) //false 非数字一律返回false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//NaN用于检测字符串是否是NaN类型 </span></span>
<span class="line"><span>Number.isNaN(1) //false</span></span>
<span class="line"><span>Number.isNaN(NaN) //true</span></span>
<span class="line"><span>Number.isNaN(&#39;10&#39;) //注意这里的参数会过一遍Number  false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Number(NaN) //NaN </span></span>
<span class="line"><span>Number({}) //NaN</span></span>
<span class="line"><span>Number(undefined) //NaN</span></span>
<span class="line"><span>Number(null)  //0</span></span>
<span class="line"><span>Number(false) // 0</span></span>
<span class="line"><span>Number(&#39;&#39;) //0</span></span></code></pre></div><h3 id="_5-2number-parseint-number-parsefloat-与全局方法一致" tabindex="-1">5.2Number.parseInt(),Number.parseFloat() 与全局方法一致 <a class="header-anchor" href="#_5-2number-parseint-number-parsefloat-与全局方法一致" aria-label="Permalink to &quot;5.2Number.parseInt(),Number.parseFloat() 与全局方法一致&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Number.parseInt(&#39;12.34&#39;) //12</span></span>
<span class="line"><span>Number.parseFloat(&#39;12.234#&#39;) //12.234</span></span></code></pre></div><h3 id="_6-函数拓展" tabindex="-1">6 函数拓展 <a class="header-anchor" href="#_6-函数拓展" aria-label="Permalink to &quot;6 函数拓展&quot;">​</a></h3><h3 id="_6-1参数默认值" tabindex="-1">6.1参数默认值 <a class="header-anchor" href="#_6-1参数默认值" aria-label="Permalink to &quot;6.1参数默认值&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function f(a,b=&#39;kk&#39;) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function fn({a=1,b})</span></span>
<span class="line"><span>f(1,2)</span></span>
<span class="line"><span>fn({a: 1,b:2})</span></span></code></pre></div><h3 id="_6-2rest参数" tabindex="-1">6.2rest参数 <a class="header-anchor" href="#_6-2rest参数" aria-label="Permalink to &quot;6.2rest参数&quot;">​</a></h3><p>rest参数(...变量名),其值为一个数组用于获取多余参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function f(a,...b) {</span></span>
<span class="line"><span>    console.log(a,b)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>f(1,2,3,4)</span></span></code></pre></div><h3 id="_6-4箭头函数" tabindex="-1">6.4箭头函数 <a class="header-anchor" href="#_6-4箭头函数" aria-label="Permalink to &quot;6.4箭头函数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let f = v =&gt; v</span></span>
<span class="line"><span>//相当于</span></span>
<span class="line"><span>let f = function(v){ return v}</span></span>
<span class="line"><span>//结合</span></span>
<span class="line"><span>let f = ({a,b})=&gt; a+&#39;-&#39;+b</span></span>
<span class="line"><span>//简化回调函数</span></span>
<span class="line"><span>[1,2,3].map(function(x){</span></span>
<span class="line"><span>    return x*x</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1,2,3].map((x)=&gt;x*x)</span></span></code></pre></div><h3 id="_7数组的扩展" tabindex="-1">7数组的扩展 <a class="header-anchor" href="#_7数组的扩展" aria-label="Permalink to &quot;7数组的扩展&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = [1，2，3]</span></span>
<span class="line"><span>Math.math(...[a]) //找最大值</span></span></code></pre></div>`,16)]))}const b=s(i,[["render",l]]);export{h as __pageData,b as default};
