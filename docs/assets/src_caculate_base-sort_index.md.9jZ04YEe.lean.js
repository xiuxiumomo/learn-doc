import{_ as n,c as a,a0 as p,o as l}from"./chunks/framework.CroFxgLA.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/caculate/base-sort/index.md","filePath":"src/caculate/base-sort/index.md","lastUpdated":1751427142000}'),e={name:"src/caculate/base-sort/index.md"};function i(t,s,c,o,r,d){return l(),a("div",null,s[0]||(s[0]=[p(`<h2 id="冒泡排序" tabindex="-1">冒泡排序 <a class="header-anchor" href="#冒泡排序" aria-label="Permalink to &quot;冒泡排序&quot;">​</a></h2><blockquote><p>冒泡排序的特点： 每一轮的循环找出最大值，放在数组的最后位置。</p></blockquote><p>特点</p><ul><li>1.每两个相邻的数字作比较，如果前者比后者大，前后两个数字交换位置。</li><li>2.一轮交换后，最大的数字一定放在了最后右边</li><li>3.确定好一轮后，继续重复1和2。只不过这一次的length-1</li></ul><p>注意 在1中，i的最大值必须比最大的索引length-1还要少1</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//第一层的循环</span></span>
<span class="line"><span>for(let i=0;i&lt;length-1;i++) {</span></span>
<span class="line"><span>  //如果前者比后者大，交换位置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if(this.items[i]&gt;this.items[i+1]) {</span></span>
<span class="line"><span>    this.swap(i,i+1)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//第二次循环</span></span>
<span class="line"><span>i &lt; length - 1 -1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//第三次循环 </span></span>
<span class="line"><span>i &lt; length - 1 -1 -1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//使用逆序</span></span>
<span class="line"><span>for(let j=length-1;j&gt;=0;j--) {</span></span>
<span class="line"><span>  for(let i=0;i&lt;j;i++) {</span></span>
<span class="line"><span>  //如果前者比后者大，交换位置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if(this.items[i]&gt;this.items[i+1]) {</span></span>
<span class="line"><span>    this.swap(i,i+1)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//交换数据的逻辑，引入临时变量</span></span>
<span class="line"><span>swap(m,n) {</span></span>
<span class="line"><span>  let temp = m;</span></span>
<span class="line"><span>  m = n;</span></span>
<span class="line"><span>  n = temp;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6)]))}const u=n(e,[["render",i]]);export{m as __pageData,u as default};
