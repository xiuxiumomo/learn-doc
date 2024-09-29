import{_ as s,c as n,a0 as e,o as t}from"./chunks/framework.xOXxqCsI.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/string.md","filePath":"src/javascript/string.md","lastUpdated":null}'),i={name:"src/javascript/string.md"};function l(p,a,c,d,o,r){return t(),n("div",null,a[0]||(a[0]=[e(`<h2 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h2><blockquote><p>在javascript中字符串的每个元素，在字符串中都占据一个位置,第一个元素的索引值为0，往后加1</p></blockquote><ul><li>1.字面量创建</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = &#39;hello&#39;</span></span>
<span class="line"><span>typeof a </span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a = new String(&#39;123&#39;)</span></span>
<span class="line"><span>typeof a </span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a1 = &#39;1+1&#39;</span></span>
<span class="line"><span>let a2 = new String(&#39;1+1&#39;)</span></span>
<span class="line"><span>eval(a1) 2</span></span>
<span class="line"><span>eval(a2) &#39;1+1&#39;</span></span></code></pre></div><p>在实际开发中尽量使用字面量的形式，因为二者的差异很大,string有一个length属性，返回其长度。</p><h3 id="_1-string对象的方法" tabindex="-1">1.String对象的方法 <a class="header-anchor" href="#_1-string对象的方法" aria-label="Permalink to &quot;1.String对象的方法&quot;">​</a></h3><ul><li>chartAt,chartCodeAt,codePointAt 返回字符串指定位置的字符或者字符编码</li><li>indexOf,lastIndexOf 分别返回指定位置或最后位置</li><li>startsWith, endsWith, includes 字符串是否以自定的字符串开始，或是否包含某字符</li><li>concat 连接两个字符串</li><li>fromCharCode,fromCodePoin 从指定的Unicode值序列够高一个字符串</li><li>split 按指定的字符分割字符串返回数组</li><li>slice() 截取字符串</li><li>substring,substr 分别通过指定起始和结束位置，起始位置和长度来返回字符串的指定子集。</li><li>match,replace, search 正则表达式方法</li><li>toLowerCase,toUpCase 大小写转换</li><li>normalize 序列号</li><li>repeat 将字符串内容重复n次返回</li><li>trim 去掉开头和结尾的空格</li></ul><h3 id="_1-1-chartat-str-charat-index" tabindex="-1">1.1 chartAt str.charAt(index) <a class="header-anchor" href="#_1-1-chartat-str-charat-index" aria-label="Permalink to &quot;1.1 chartAt str.charAt(index)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//index 若小于0则返回&#39;&#39;,若不传则默认为0</span></span>
<span class="line"><span>let a = &#39;abc&#39;</span></span>
<span class="line"><span>a.charAt(0) //a</span></span></code></pre></div><h3 id="_1-2indexof和lastindexof-两者接收的参数一致-没有查到内容-返回-1。" tabindex="-1">1.2indexOf和lastIndexOf 两者接收的参数一致，没有查到内容，返回 -1。 <a class="header-anchor" href="#_1-2indexof和lastindexof-两者接收的参数一致-没有查到内容-返回-1。" aria-label="Permalink to &quot;1.2indexOf和lastIndexOf 两者接收的参数一致，没有查到内容，返回 -1。&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = &#39;hello&#39;</span></span>
<span class="line"><span>a.indexOf(&#39;h&#39;) //0</span></span></code></pre></div><h3 id="_1-3concat" tabindex="-1">1.3concat <a class="header-anchor" href="#_1-3concat" aria-label="Permalink to &quot;1.3concat&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = &#39;hello&#39;</span></span>
<span class="line"><span>let b =&#39;jack&#39;</span></span>
<span class="line"><span>a.concat(b) //hellojack</span></span></code></pre></div><h3 id="_1-4split-按指定的字符分割-split-sep-limit-limit指定返回的最大数组长度" tabindex="-1">1.4split() 按指定的字符分割 split(sep,limit) //limit指定返回的最大数组长度 <a class="header-anchor" href="#_1-4split-按指定的字符分割-split-sep-limit-limit指定返回的最大数组长度" aria-label="Permalink to &quot;1.4split() 按指定的字符分割 split(sep,limit) //limit指定返回的最大数组长度&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let str = &#39;hello jack&#39;</span></span>
<span class="line"><span>str.split(&#39; &#39;) //[hello,jack]</span></span></code></pre></div><h3 id="_1-5slice-提取返回字符串的片段" tabindex="-1">1.5slice() 提取返回字符串的片段 <a class="header-anchor" href="#_1-5slice-提取返回字符串的片段" aria-label="Permalink to &quot;1.5slice() 提取返回字符串的片段&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//含前不含后如果只传一个参数，从该参数开始截取所有 如果尾部是负数则从尾部开始算</span></span>
<span class="line"><span>let str = &#39;hello world?&#39;</span></span>
<span class="line"><span>str.slice(0,3) //hel </span></span>
<span class="line"><span>str.slice(0,-1) //hello world</span></span></code></pre></div><h3 id="_2-字符串的扩展方法-es6" tabindex="-1">2.字符串的扩展方法（ES6） <a class="header-anchor" href="#_2-字符串的扩展方法-es6" aria-label="Permalink to &quot;2.字符串的扩展方法（ES6）&quot;">​</a></h3><h3 id="_2-1-includes-startswith-endswith" tabindex="-1">2.1.includes() startsWith() endsWith() <a class="header-anchor" href="#_2-1-includes-startswith-endswith" aria-label="Permalink to &quot;2.1.includes() startsWith() endsWith()&quot;">​</a></h3><ul><li>includes 返回布尔值 表示是否找到字符串</li><li>startsWith 返回布尔值 表示参数字符串是否在原字符串的头部</li><li>endsWith 返回布尔值 表示数字字符串是否在原字符串的尾部</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let str = &#39;hello world&#39;</span></span>
<span class="line"><span>str.includes(&#39;hello&#39;) //true</span></span></code></pre></div><h3 id="_2-2repeat-返回一个重复n次的字符串" tabindex="-1">2.2repeat() 返回一个重复n次的字符串 <a class="header-anchor" href="#_2-2repeat-返回一个重复n次的字符串" aria-label="Permalink to &quot;2.2repeat() 返回一个重复n次的字符串&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let str = &#39;aaabbb&#39;.repeat(2) //&#39;aaabbbaaabbb&#39;</span></span></code></pre></div><h3 id="_2-3padstart-padend" tabindex="-1">2.3padStart() ,padEnd() <a class="header-anchor" href="#_2-3padstart-padend" aria-label="Permalink to &quot;2.3padStart() ,padEnd()&quot;">​</a></h3><p>用于将字符串头部或尾部补全长度， padStart()为头部补全， padEnd()为尾部补全。 这两个方法接收2个参数，第一个指定字符串最小长度，第二个用于补全的字符串。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;x&#39;.padStart(5,&#39;ab&#39;) //ababx</span></span>
<span class="line"><span>&#39;x&#39;.padEnd(5,&#39;xabab&#39;) //xabab</span></span>
<span class="line"><span>//如果不传第二个参数用空格补齐</span></span>
<span class="line"><span>&#39;x&#39;.padStart(4) //&#39;    x&#39;</span></span></code></pre></div>`,26)]))}const b=s(i,[["render",l]]);export{u as __pageData,b as default};
