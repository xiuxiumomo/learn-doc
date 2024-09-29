import{_ as s,c as n,a0 as e,o as l}from"./chunks/framework.xOXxqCsI.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/reg.md","filePath":"src/javascript/reg.md","lastUpdated":null}'),i={name:"src/javascript/reg.md"};function p(t,a,c,r,d,o){return l(),n("div",null,a[0]||(a[0]=[e(`<h2 id="正则表达式的基础知识以及用法" tabindex="-1">正则表达式的基础知识以及用法 <a class="header-anchor" href="#正则表达式的基础知识以及用法" aria-label="Permalink to &quot;正则表达式的基础知识以及用法&quot;">​</a></h2><h3 id="_1-创建正则表达式" tabindex="-1">1.创建正则表达式 <a class="header-anchor" href="#_1-创建正则表达式" aria-label="Permalink to &quot;1.创建正则表达式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let reg = new RegExp(&#39;abc&#39;)</span></span>
<span class="line"><span>//或者</span></span>
<span class="line"><span>let reg = /&#39;abc&#39;/</span></span></code></pre></div><h3 id="_2-表达式的第二个参数" tabindex="-1">2.表达式的第二个参数 <a class="header-anchor" href="#_2-表达式的第二个参数" aria-label="Permalink to &quot;2.表达式的第二个参数&quot;">​</a></h3><ul><li>lastIndex 下一个匹配的索引(仅在使用g参数时可用)</li><li>source 模式文本</li><li>ignore 即&#39;i&#39; 是否忽略大小写</li><li>global 即&#39;g&#39; 是否开启全局匹配</li><li>multiline 即&#39;m&#39;是否开启多行</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let reg = new RegExp(&#39;abc&#39;,&#39;g&#39;)</span></span>
<span class="line"><span>let reg = /&#39;abc&#39;/g</span></span></code></pre></div><h3 id="_3-使用正则表达式" tabindex="-1">3.使用正则表达式 <a class="header-anchor" href="#_3-使用正则表达式" aria-label="Permalink to &quot;3.使用正则表达式&quot;">​</a></h3><ul><li>RegExp对象的exec和test()方法</li><li>String字符串的match()、replace()、search()、split()方法</li></ul><h3 id="_3-1-regexp的方法使用" tabindex="-1">3.1.RegExp的方法使用 <a class="header-anchor" href="#_3-1-regexp的方法使用" aria-label="Permalink to &quot;3.1.RegExp的方法使用&quot;">​</a></h3><ul><li>exec()返回找到的值，并返回其位置信息数组。</li><li>test() 返回true or false</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let str = &#39;abc eaf&#39;</span></span>
<span class="line"><span>let reg = new RegExp(&#39;abc&#39;,&#39;g&#39;)</span></span>
<span class="line"><span>let res =  reg.exec(str)</span></span>
<span class="line"><span>//[ &quot;abc&quot;,</span></span>
<span class="line"><span>  groups: undefined,</span></span>
<span class="line"><span>  index: 4,</span></span>
<span class="line"><span>  input: &quot;www.abc.abc&quot;]</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>reg.test(str) //true</span></span></code></pre></div><h3 id="_3-2-string的方法使用" tabindex="-1">3.2.String的方法使用 <a class="header-anchor" href="#_3-2-string的方法使用" aria-label="Permalink to &quot;3.2.String的方法使用&quot;">​</a></h3><ul><li>search() 返回第一个匹配到的索引。</li><li>match() 返回一个数组，元素是匹配到的值。</li><li>replace() 返回一个新的字符串(替换后的)。</li><li>split() 把字符串分割为字符串数组。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let str = &#39;www.abc.abc&#39;;</span></span>
<span class="line"><span>let reg = /abc/g</span></span>
<span class="line"><span>let res = str.search(reg) //4</span></span>
<span class="line"><span>let res = str.match(reg) // [&#39;abc&#39;,&#39;abc&#39;]</span></span>
<span class="line"><span>let res = str.replace(reg,&#39;d&#39;) //www.d.d</span></span>
<span class="line"><span>let res = str.split(reg) // [&#39;www.&#39;,&#39;.&#39;,&quot;&quot;]</span></span>
<span class="line"><span>console.log(res)</span></span></code></pre></div><h3 id="_4-表达式符号介绍" tabindex="-1">4.表达式符号介绍 <a class="header-anchor" href="#_4-表达式符号介绍" aria-label="Permalink to &quot;4.表达式符号介绍&quot;">​</a></h3><ul><li>主要是 igm 和方括号</li></ul><h3 id="_4-1-字母igm" tabindex="-1">4.1.字母igm <a class="header-anchor" href="#_4-1-字母igm" aria-label="Permalink to &quot;4.1.字母igm&quot;">​</a></h3><ul><li>i g m</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let str = &#39;abcd&#39;</span></span>
<span class="line"><span>let reg = /Abc/i</span></span>
<span class="line"><span>res.test(str) //true</span></span></code></pre></div><h3 id="_4-2-表达式" tabindex="-1">4.2.表达式 <a class="header-anchor" href="#_4-2-表达式" aria-label="Permalink to &quot;4.2.表达式&quot;">​</a></h3><ul><li>[abc] 查找这个区间的值(给定区间)</li><li>[^abc] 查找不在这个区间的</li><li>[0-9] 查找0-9之间的数字</li><li>[a-z] 查找a-z区间的小写</li><li>[A-Z] 查找A-Z区间的大写</li><li>[A-z] 查找A-z区间</li></ul><h3 id="_4-3-元字符" tabindex="-1">4.3.元字符 <a class="header-anchor" href="#_4-3-元字符" aria-label="Permalink to &quot;4.3.元字符&quot;">​</a></h3><ul><li>. 查找单个字符，除了换行和行结束符</li><li>\\w 查找单词字符 (a-z、A-Z、0-9 以及_)</li><li>\\W 查找非单词字符</li><li>\\d 查找数字</li><li>\\D 查找非数字</li><li>\\s 查找空格</li><li>\\S 查找非空格</li><li>\\n 查找换行符</li><li>\\uxxxx 查找unicode字符</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let str = &#39;abcd&#39;</span></span>
<span class="line"><span>let reg = /\\w/g</span></span>
<span class="line"><span>let res = str.match(reg) // [a,b,c,d]</span></span></code></pre></div><h3 id="_4-4-量词" tabindex="-1">4.4.量词 <a class="header-anchor" href="#_4-4-量词" aria-label="Permalink to &quot;4.4.量词&quot;">​</a></h3><ul><li><p>n+ 任何包含至少一个n的字符串</p></li><li><p>n* 任何包含至少零个或多个n的字符串</p></li><li><p>n? 任何包含至少零个或一个n的字符串</p></li><li><p>n{X} 包含x个n的序列</p></li><li><p>n{X,Y} 包含至少x之多y的序列</p></li><li><p>^n 匹配以n开头</p></li><li><p>n$ 以结尾</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let str = &#39;wwwa.a2cddddd.af&#39;;</span></span>
<span class="line"><span>let reg = /a\\w?/g  //[&#39;a&#39;,&#39;a2&#39;,&#39;af&#39;]</span></span>
<span class="line"><span>let reg = /a\\w*/g  //[&#39;a&#39;,a2ddddd&#39;,&#39;af&#39;]</span></span>
<span class="line"><span>let reg = /a\\w+/g  //[&#39;a2ddddd&#39;,&#39;af&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let res = str.match(reg)</span></span></code></pre></div><h3 id="_5-常用的正则" tabindex="-1">5.常用的正则 <a class="header-anchor" href="#_5-常用的正则" aria-label="Permalink to &quot;5.常用的正则&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>//金额保留小数两位</span></span>
<span class="line"><span>let reg = /((^[1-9]\\d*)|^0)(\\.\\d{0,2})?$/</span></span>
<span class="line"><span>//电话号码</span></span>
<span class="line"><span>let reg = /^1[3,4,5,7,8,9]\\d{9}$/</span></span></code></pre></div>`,29)]))}const u=s(i,[["render",p]]);export{g as __pageData,u as default};
