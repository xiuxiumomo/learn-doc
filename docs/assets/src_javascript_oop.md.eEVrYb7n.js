import{_ as n,c as a,a0 as p,o as e}from"./chunks/framework.xOXxqCsI.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/javascript/oop.md","filePath":"src/javascript/oop.md","lastUpdated":1727321507000}'),l={name:"src/javascript/oop.md"};function t(i,s,c,o,r,d){return e(),a("div",null,s[0]||(s[0]=[p(`<h2 id="_1-1-工厂模式" tabindex="-1">1.1.工厂模式 <a class="header-anchor" href="#_1-1-工厂模式" aria-label="Permalink to &quot;1.1.工厂模式&quot;">​</a></h2><blockquote><p>工厂模式:每次返回的都是一个对象。优点：只需要传参数，不管其如何实现的。缺点：想添加类型时，必须修改原产品模型。</p></blockquote><ul><li>理解原型 Object 和Function都是js自带函数，Object继承自己，Function继承自己，相互继承对方，即Object和Function即是函数也是对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Function instanceof Object //true</span></span>
<span class="line"><span>Object instanceof Function //true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function.prototype // f(){[native code]} 指向函数f() 本身</span></span>
<span class="line"><span>Object.prototype // Object</span></span></code></pre></div><ul><li>理解原型链</li></ul><p>JS中所有的函数对象，都有一个 prototype属性，对应当前对象的原型，但普通对象没有，而 prototype属性下还有一个 constructor，指向这个函数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let p ={}</span></span>
<span class="line"><span>p.prototype //undefined</span></span>
<span class="line"><span>function f() {}</span></span>
<span class="line"><span>f.prototype //object {constructor: f}</span></span></code></pre></div><ul><li>_proto 只有ff和chrome浏览器支持 JS中所有的对象，都有一个 _proto_属性，指向实例对象的构造函数原型（由于 _proto_是个非标准属性，因此只有ff和chrome两个浏览器支持，标准方法是 Object.getPrototypeOf()）。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let p = new Person()</span></span>
<span class="line"><span>p._proto_ === Person.prototype</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> function Person(name, age) {</span></span>
<span class="line"><span>        var obj = new Object()</span></span>
<span class="line"><span>        obj.name = name</span></span>
<span class="line"><span>        obj.age = age</span></span>
<span class="line"><span>        obj.fn = function () {</span></span>
<span class="line"><span>            return this.name</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return obj</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    var p = Person(&#39;jack&#39;, 20)</span></span></code></pre></div><h3 id="_1-2-构造函数模式" tabindex="-1">1.2.构造函数模式 <a class="header-anchor" href="#_1-2-构造函数模式" aria-label="Permalink to &quot;1.2.构造函数模式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var action = {</span></span>
<span class="line"><span>    fn: function() {</span></span>
<span class="line"><span>        return 1</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function Person(name, age) {</span></span>
<span class="line"><span>    this.name = name</span></span>
<span class="line"><span>    this.age = age</span></span>
<span class="line"><span>    this.fn = action.fn</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var p = new Person(&#39;jack&#39;, 20)</span></span></code></pre></div><h3 id="_1-3-原型模式" tabindex="-1">1.3.原型模式 <a class="header-anchor" href="#_1-3-原型模式" aria-label="Permalink to &quot;1.3.原型模式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Person(name, age) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.name = name</span></span>
<span class="line"><span>    this.age = age</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Person.prototype = {</span></span>
<span class="line"><span>    constructor: Person, //注意这里一定要手动绑定</span></span>
<span class="line"><span>    run: function() {</span></span>
<span class="line"><span>        return 1</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var p = new Person(&#39;jack&#39;, 20)</span></span></code></pre></div><h3 id="_1-4-构造函数-构造函数的原型对象-实例化对象三者关系" tabindex="-1">1.4.构造函数，构造函数的原型对象，实例化对象三者关系 <a class="header-anchor" href="#_1-4-构造函数-构造函数的原型对象-实例化对象三者关系" aria-label="Permalink to &quot;1.4.构造函数，构造函数的原型对象，实例化对象三者关系&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Person(name, age) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        this.name = name</span></span>
<span class="line"><span>        this.age = age</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    Person.prototype = {</span></span>
<span class="line"><span>        constructor: Person, //注意这里一定要手动绑定</span></span>
<span class="line"><span>        run: function() {</span></span>
<span class="line"><span>            return 1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var p = new Person(&#39;jack&#39;, 20)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Person 构造函数</span></span>
<span class="line"><span>    // Person.prototype 构造函数的原型对象</span></span>
<span class="line"><span>    // p 实例化对象</span></span>
<span class="line"><span>    p.__proto__ === Person.prototype //一个Person的原型{}</span></span>
<span class="line"><span>    p.constructor === Person   //指向一个函数 用来检测是否属于一个类</span></span>
<span class="line"><span>    Person.prototype //一个Person的原型{}</span></span></code></pre></div><h3 id="_2-1构造函数的继承-组合式继承" tabindex="-1">2.1构造函数的继承(组合式继承) <a class="header-anchor" href="#_2-1构造函数的继承-组合式继承" aria-label="Permalink to &quot;2.1构造函数的继承(组合式继承)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Person(name,age) {</span></span>
<span class="line"><span>    this.name = name</span></span>
<span class="line"><span>    this.age = age</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Person.prototype.firends = [1,2,4]</span></span>
<span class="line"><span>function Student(name) {</span></span>
<span class="line"><span>    Person.call(this,name)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Student.prototype = Object.assign({},Person.prototype)</span></span>
<span class="line"><span>Student.prototype.constructor = Student;</span></span></code></pre></div><h3 id="_3-1-es6类的概念" tabindex="-1">3.1 ES6类的概念 <a class="header-anchor" href="#_3-1-es6类的概念" aria-label="Permalink to &quot;3.1 ES6类的概念&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Person{</span></span>
<span class="line"><span>    constructor(name) {</span></span>
<span class="line"><span>        this.name = name</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    getName() {</span></span>
<span class="line"><span>        return this.name</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let p =new Person(&#39;jack&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Child extends Person {</span></span>
<span class="line"><span>     constructor() {</span></span>
<span class="line"><span>        super()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,20)]))}const b=n(l,[["render",t]]);export{u as __pageData,b as default};
