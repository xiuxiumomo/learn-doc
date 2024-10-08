import{_ as n,c as s,a0 as e,o as p}from"./chunks/framework.xOXxqCsI.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/events.md","filePath":"src/javascript/events.md","lastUpdated":1727592456000}'),l={name:"src/javascript/events.md"};function t(i,a,o,c,d,h){return p(),s("div",null,a[0]||(a[0]=[e(`<h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><blockquote><p>JavaScript 与 HTML 的交互是通过事件来进行的，是文档或浏览器窗口发生一些特定的交互瞬间。</p></blockquote><h3 id="_1-事件流" tabindex="-1">1.事件流 <a class="header-anchor" href="#_1-事件流" aria-label="Permalink to &quot;1.事件流&quot;">​</a></h3><blockquote><p>事件流描述的是从页面中接收事件的顺序，通常有这样完全相反的事件流概念：事件冒泡流和事件捕获流</p></blockquote><h3 id="_1-1-事件冒泡" tabindex="-1">1.1 事件冒泡 <a class="header-anchor" href="#_1-1-事件冒泡" aria-label="Permalink to &quot;1.1 事件冒泡&quot;">​</a></h3><p>事件冒泡(Event Bubbling)事件开始时由最具体的元素接收，然后逐层向上传播到较为不具体的节点。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;div&gt;按钮&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>//点击按钮触发事件</span></span>
<span class="line"><span>//div-&gt;body-&gt;html-&gt;document</span></span></code></pre></div><h3 id="_1-2-事件捕获" tabindex="-1">1.2 事件捕获 <a class="header-anchor" href="#_1-2-事件捕获" aria-label="Permalink to &quot;1.2 事件捕获&quot;">​</a></h3><blockquote><p>事件捕获：让不太具体的节点更早的接收事件，而最具体的节点最后接收事件，即在事件到达预定目标之前捕获到。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1.document</span></span>
<span class="line"><span>2.html</span></span>
<span class="line"><span>3.body</span></span>
<span class="line"><span>4.div</span></span></code></pre></div><h3 id="_1-3-事件流" tabindex="-1">1.3 事件流 <a class="header-anchor" href="#_1-3-事件流" aria-label="Permalink to &quot;1.3 事件流&quot;">​</a></h3><blockquote><p>dom2 事件规定的事件流包含三个阶段: 事件捕获阶段，处于目标阶段和事件冒泡阶段。事件捕获为截获事件提供机会，然后实际的目标接收到事件。最后事件冒泡对事件作出响应即：事件捕获-&gt;目标阶段-&gt;事件冒泡</p></blockquote><h3 id="_2-事件处理" tabindex="-1">2.事件处理 <a class="header-anchor" href="#_2-事件处理" aria-label="Permalink to &quot;2.事件处理&quot;">​</a></h3><p>事件处理，即响应某个事件。我们把事件处理的函数，称为“事件处理程序”。 事件处理程序的名称一般都以 on 开头，如 click 事件的事件处理程序就是 onclick， load 事件的事件处理程序就是 onload。 我们将事件处理程序，分为这么几类：</p><ul><li>HTML 事件处理程序</li><li>DOM0 级事件处理程序</li><li>DOM2 级事件处理程序</li><li>IE 事件处理程序</li><li>跨浏览器事件处理程序</li></ul><h3 id="_2-1html-事件处理程序" tabindex="-1">2.1HTML 事件处理程序 <a class="header-anchor" href="#_2-1html-事件处理程序" aria-label="Permalink to &quot;2.1HTML 事件处理程序&quot;">​</a></h3><p>某个元素支持的事件，都可以用一个与相应事件处理程序同名的 HTML 特性来指定，这个特性的值应该是能够执行的 JavaScript 代码。比如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;input type=&quot;button&quot; value=&quot;点击&quot; onclick=&quot;alert(&#39;hello world&#39;)&quot;/&gt;</span></span>
<span class="line"><span>//缺点 耦合性太强</span></span></code></pre></div><h3 id="_2-2dom0-事件" tabindex="-1">2.2dom0 事件 <a class="header-anchor" href="#_2-2dom0-事件" aria-label="Permalink to &quot;2.2dom0 事件&quot;">​</a></h3><p>通过赋值形式，将一个函数赋值给一个事件处理程序属性。每个元素（包含 window 和 document）都有自己的事件处理属性，这些属性通常全部小写，如 onclick，将这种属性的值设置成一个函数，就可以指定事件处理程序：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let dom = document.getElementById(&#39;box&#39;)</span></span>
<span class="line"><span>dom.onclick = function() {</span></span>
<span class="line"><span>    alert(&#39;1234&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用 DOM0 级方法指定事件处理程序，被认为是元素的方法。此时的事件处理程序是在元素的作用域执行，那么，this 就引用当前元素，可以访问元素的任何属性和方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let dom = document.getElementById(&#39;box&#39;)</span></span>
<span class="line"><span>dom.onclick = function() {</span></span>
<span class="line"><span>    alert(this.id)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//dom.onclick = null 删除绑定</span></span></code></pre></div><h3 id="_2-3dom2-事件处理程序" tabindex="-1">2.3dom2 事件处理程序 <a class="header-anchor" href="#_2-3dom2-事件处理程序" aria-label="Permalink to &quot;2.3dom2 事件处理程序&quot;">​</a></h3><ul><li>添加事件处理程序 addEventListener()</li><li>删除事件处理程序 removeEventListener() 参数：fnType-事件类型 callback-事件 boolean(true 事件捕获阶段调用，false 事件冒泡阶段调用)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let dom = document.getElementById(&#39;box&#39;);</span></span>
<span class="line"><span>dom.addEventListener(&#39;click&#39;,function(){</span></span>
<span class="line"><span>    alert(this.id)</span></span>
<span class="line"><span>},false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//与DOM0级方法一样，这里的事件处理程序也会是在元素的作用域中执行，因此this也是指向元素，可以访问元素的任何属性和方法。</span></span>
<span class="line"><span>//同一个元素可以添加多个事件，按照顺序触发</span></span>
<span class="line"><span>let dom = document.getElementById(&#39;box&#39;);</span></span>
<span class="line"><span>dom.addEventListener(&#39;click&#39;,function(){</span></span>
<span class="line"><span>    alert(1)</span></span>
<span class="line"><span>},false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dom.addEventListener(&#39;click&#39;,function(){</span></span>
<span class="line"><span>    alert(2)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>通过 addEventListener 添加的函数只能被 removeEventLitener 移除，这也意味着 addEventListenerZ()添加的匿名函数无法被移除</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let dom = document.getElementById(&#39;box&#39;)</span></span>
<span class="line"><span>dom.addEventListener(&#39;click&#39;,function(){</span></span>
<span class="line"><span>    alert(1)</span></span>
<span class="line"><span>},false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dom.removeEventListener(&#39;click&#39;,function(){</span></span>
<span class="line"><span>    //无法解除</span></span>
<span class="line"><span>},false)</span></span>
<span class="line"><span>//解决</span></span>
<span class="line"><span>let fn = function() {</span></span>
<span class="line"><span>    console.log(this.id)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>dom.addEventListener(&#39;click&#39;,fn,false)</span></span>
<span class="line"><span>dom.removeEventListener(&#39;click&#39;,fn,false)</span></span></code></pre></div><h3 id="_2-4ie-事件处理" tabindex="-1">2.4IE 事件处理 <a class="header-anchor" href="#_2-4ie-事件处理" aria-label="Permalink to &quot;2.4IE 事件处理&quot;">​</a></h3><blockquote><p>IE 实现两种方法： attachEvent()和 detachEvent()。这两个方法接收相同的两个参数：事件处理程序名称和事件处理程序函数。 由于 IE8 和更早版本只支持事件冒泡，所以通过 attachEvent()添加的事件处理程序会被添加到冒泡阶段。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let dom = document.getElementById(&#39;box&#39;);</span></span>
<span class="line"><span>let fn = function() {</span></span>
<span class="line"><span>    console.log(this.id)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>dom.attachEvent(&#39;onclick&#39;,fn,false)</span></span>
<span class="line"><span>dom.detachEvent(&#39;onclick&#39;,fn,false)</span></span></code></pre></div><h3 id="_2-5-跨浏览器事件处理程序" tabindex="-1">2.5 跨浏览器事件处理程序 <a class="header-anchor" href="#_2-5-跨浏览器事件处理程序" aria-label="Permalink to &quot;2.5 跨浏览器事件处理程序&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let myEvent = {</span></span>
<span class="line"><span>    addMyEvent: function(el,type,handler) {</span></span>
<span class="line"><span>        if(el.addEventListener) { //优先dom2</span></span>
<span class="line"><span>            el.addEventListener(type,handler,false)</span></span>
<span class="line"><span>        }else if(el.attachEvent) {</span></span>
<span class="line"><span>           el.attachEvent(&#39;on&#39;+type,fn,false)</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            el[&#39;on&#39;+type] = handler</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    removeMyEvent: function(el,type,handler) {</span></span>
<span class="line"><span>        if(el.removeEventListener) {</span></span>
<span class="line"><span>            el.removeEventListener(type,handler,false)</span></span>
<span class="line"><span>        }else if(el.detachEvent) {</span></span>
<span class="line"><span>            el.detachEvent(&#39;on&#39;+type,false)</span></span>
<span class="line"><span>        }else {</span></span>
<span class="line"><span>            el[&#39;on&#39;+type] = null</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-对象事件" tabindex="-1">3.对象事件 <a class="header-anchor" href="#_3-对象事件" aria-label="Permalink to &quot;3.对象事件&quot;">​</a></h3><p>当Dom触发一个以上的事件时候，都会产生一个event对象，并作为参数传入事件处理程序，这个对象包含所有与事件相关的信息。</p><h3 id="_3-1dom的事件对象" tabindex="-1">3.1DOM的事件对象 <a class="header-anchor" href="#_3-1dom的事件对象" aria-label="Permalink to &quot;3.1DOM的事件对象&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let dom = document.getElementById(&#39;box&#39;)</span></span>
<span class="line"><span>dom.onclick = function(ev) {</span></span>
<span class="line"><span>    console.log(ev)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>dom.addEventListener(&#39;click&#39;,function(ev) {</span></span>
<span class="line"><span>    console.log(ev)</span></span>
<span class="line"><span>},false)</span></span></code></pre></div><ul><li>阻止事件的默认行为</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let dom = document.getElementById(&#39;box&#39;);</span></span>
<span class="line"><span>dom.onclick = function(ev) {</span></span>
<span class="line"><span>    ev.preventDefault()</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>立即停止事件的Dom传播(调用ev.stopPropagation())</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let dom = document.getElementById(&#39;box&#39;);</span></span>
<span class="line"><span>dom.onclick = function(ev) {</span></span>
<span class="line"><span>    //阻止默认事件</span></span>
<span class="line"><span>    ev.stopPropagation();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-事件类型" tabindex="-1">4.事件类型 <a class="header-anchor" href="#_4-事件类型" aria-label="Permalink to &quot;4.事件类型&quot;">​</a></h3><ul><li>UI事件：用户与页面上的元素交互时触发</li><li>焦点事件： 输入框焦点</li><li>鼠标事件：鼠标滚动</li><li>文本事件</li><li>键盘事件</li><li>合成事件</li><li>变动事件</li></ul><h3 id="_5-事件委托" tabindex="-1">5.事件委托 <a class="header-anchor" href="#_5-事件委托" aria-label="Permalink to &quot;5.事件委托&quot;">​</a></h3><p>事件委托利用事件冒泡，指定一个事件处理程序来管理某一类型的所有事件，比如我们通过一个函数来代替其他三个函数： 最适合采用事件委托技术的事件包括： click/ mousedown/ mouseup/ keyup/ keydown/ keypress，虽然 mouseover和 mouseout事件也有冒泡，但因为不好处理它们并且经常需要重新计算元素位置。</p>`,45)]))}const v=n(l,[["render",t]]);export{u as __pageData,v as default};
