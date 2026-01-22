# 如何构建一个类似 Element UI 的 Vue 2 组件库  
—— 以 mo-ui 为例的分享文档

### 分享目标
教大家从零搭建一个**工程化、专业级**的 Vue 2 组件库，支持：
- 全局引入 & 按需引入（体积最小化）
- Less 样式 + 主题变量自定义
- 样式与组件逻辑分离（对标 Element UI 的 theme-chalk 结构）
- 可发布到 npm，供其他项目使用

### 推荐项目结构（核心）
```
mo-ui/
├── packages/                  # 组件源码（只包含 template + script，无样式）
│   ├── button/
│   │   ├── src/Button.vue
│   │   └── index.js           # install 注册
│   ├── input/
│   │   └── ...
│   └── index.js               # 库总入口（全局引入用）
├── theme/                     # 所有 Less 样式统一管理（关键！）
│   └── src/
│       ├── common/
│       │   └── var.less       # 设计变量（主题核心）
│       ├── button.less
│       ├── input.less
│       └── index.less         # 导入所有组件样式
├── lib/                       # 打包输出目录（git 忽略）
├── examples/                  # 演示项目（可选）
├── package.json
├── vue.config.js
└── babel.config.js（可选，供演示用）
```

### 1. 组件实现（样式分离）

**packages/button/src/Button.vue**
```vue
<template>
  <button class="mo-button" :class="[`mo-button--${type}`, {'is-disabled': disabled}]" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MoButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: v => ['default', 'primary', 'success', 'warning', 'danger'].includes(v)
    },
    disabled: Boolean
  }
}
</script>
```

**packages/button/index.js**
```js
import MoButton from './src/Button.vue';
MoButton.install = Vue => Vue.component(MoButton.name, MoButton);
export default MoButton;
```

### 2. 主题样式（theme 目录）

**theme/src/common/var.less**（所有变量集中管理）
```less
@primary-color: #409eff;
@success-color: #67c23a;
@warning-color: #e6a23c;
@danger-color:  #f56c6c;
@info-color:    #909399;

@text-color-primary: #303133;
@border-color-base: #dcdfe6;
@border-radius-base: 4px;
@font-size-base: 14px;
// ... 更多变量
```

**theme/src/button.less**
```less
@import './common/var.less';

.mo-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  font-size: @font-size-base;
  border-radius: @border-radius-base;
  border: 1px solid @border-color-base;
  background: #fff;
  color: @text-color-primary;
  cursor: pointer;
  transition: all .3s;

  &:hover { /* ... */ }

  &--primary {
    background: @primary-color;
    border-color: @primary-color;
    color: #fff;
  }
  // 其他类型...
  &[disabled] { opacity: 0.6; cursor: not-allowed; }
}
```

**theme/src/index.less**（全局样式入口）
```less
@import './common/var.less';
@import './button.less';
@import './input.less';
// 新增组件时在这里加一行 import
```

### 3. 库总入口

**packages/index.js**
```js
import MoButton from './button';
// import MoInput from './input';

const components = [MoButton /* , MoInput */];

const install = Vue => {
  components.forEach(comp => Vue.component(comp.name, comp));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  MoButton,
  // MoInput
};
```

### 4. 打包配置（vue-cli library 模式）

**package.json** 关键字段
```json
{
  "name": "mo-ui",
  "version": "1.0.0",
  "main": "lib/mo-ui.umd.min.js",
  "module": "lib/mo-ui.umd.js",
  "style": "lib/style/mo-ui.css",
  "files": [
    "lib",
    "packages",
    "theme"                     // 必须包含！让用户能访问 Less 源码
  ],
  "scripts": {
    "build": "vue-cli-service build --target lib --name mo-ui --filename mo-ui packages/index.js"
  },
  "peerDependencies": {
    "vue": "^2.6.14"
  }
}
```

**vue.config.js**（提取独立 CSS）
```js
module.exports = {
  css: {
    extract: {
      filename: 'style/mo-ui.css',
      chunkFilename: 'style/mo-ui.css'
    },
    loaderOptions: {
      less: {
        lessOptions: { javascriptEnabled: true }
      }
    }
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks');
  }
};
```

打包后 lib 目录：
- lib/mo-ui.umd.min.js
- lib/style/mo-ui.css（所有样式合并）

### 5. 用户使用方式

#### 按需引入（推荐）
1. 安装 babel 插件
```bash
npm install babel-plugin-component -D
```

2. babel.config.js
```js
module.exports = {
  plugins: [
    [
      'component',
      {
        libraryName: 'mo-ui',
        styleLibraryName: 'theme/src',  // 指向 Less 源码
        ext: '.less'
      }
    ]
  ]
};
```

3. 使用
```js
import { MoButton } from 'mo-ui';
Vue.use(MoButton);
// 样式自动按需加载，无需手动 import
```

#### 全局引入
```js
import MoUI from 'mo-ui';
import 'mo-ui/lib/style/mo-ui.css';  // 引入所有样式

Vue.use(MoUI);
```

### 6. 主题自定义（亮点）

- 用户复制 theme/src/common/var.less 修改变量后，在项目入口前引入自定义 less 文件即可覆盖主题。
- 支持运行时换肤（打包多个 CSS 主题，动态切换 link）。

### 7. 总结优势（为什么这样设计）

| 特性                 | 好处                                      |
|----------------------|-------------------------------------------|
| 样式与组件分离       | 组件更干净、易维护、支持独立编译样式      |
| theme 源码发布       | 支持按需加载单个组件样式 + 自定义主题      |
| babel-plugin-component | 精确按需，体积最小                        |
| 提取 mo-ui.css       | 全局引入简单明了                          |

这样构建的组件库结构清晰、可维护性强，完全对标 Element UI、Ant Design Vue 等成熟库，适合团队长期维护和对外发布。

欢迎大家基于这个模板开发公司内部组件库！有问题随时讨论～







### 切换颜色
快速实现一个专业 Vue 2 组件库 mo-ui，支持：
- 全局/按需引入
- 样式与组件分离
- **只需修改颜色变量就能切换整站主题**（最常用需求）

### 最简单有效的主题切换方式：只改颜色变量覆盖

这是 90% 项目实际需要的方案：**不需要打包多个 CSS，不需要运行时换肤，只需改几个颜色变量，就能得到一套全新配色主题**。

#### 步骤（用户项目中操作，几分钟搞定）

1. 在用户项目中新建一个 Less 文件（如 `src/theme/mo-theme.less`）
```less
// src/theme/mo-theme.less

// 第一步：引入 mo-ui 的原变量文件（必须）
@import '~mo-ui/theme/src/common/var.less';

// 第二步：只覆盖你想改的颜色变量（其他保持默认）
@primary-color: #13ce66;    // 主色：改成绿色（原 #409eff）
@success-color: #09b77c;
@warning-color: #ff9f00;
@danger-color:  #ff4949;
@info-color:    #999999;

// 可选：同时调整文字、边框等颜色（视需求）
@text-color-primary: #2d2f36;
@border-color-base: #e8e8e8;
```

2. 在项目入口文件（如 `main.js`）最前面引入这个自定义主题文件
```js
import Vue from 'vue';

// 关键：必须在引入 mo-ui 样式之前先加载自定义变量！
import '@/theme/mo-theme.less';          // 你的自定义颜色主题

import MoUI from 'mo-ui';
import 'mo-ui/lib/style/mo-ui.css';         // mo-ui 所有样式（会使用被覆盖后的颜色）

Vue.use(MoUI);
```

3. 完成！重新运行项目，所有组件的颜色都会自动变成你定义的新配色。

#### 原理说明
- mo-ui 的所有组件样式（button.less、input.less 等）都引用了 `@import './common/var.less';`
- Less 在编译时会优先使用最后定义的变量值
- 你在项目中先引入自定义覆盖文件 → 变量被重新赋值 → mo-ui 再引入样式时使用的就是新颜色

#### 优点
- 操作极简单：只改一个 Less 文件里的几行颜色
- 无需改 mo-ui 源码，无需重新打包 mo-ui
- 全局生效，所有组件自动适配新配色
- 打包体积不变，按需引入依然正常工作

#### 常见配色方案示例（直接复制使用）

**绿色主题**（清新风格）
```less
@import '~mo-ui/theme/src/common/var.less';
@primary-color: #13ce66;
@success-color: #09b77c;
```

**橙色主题**（活力风格）
```less
@import '~mo-ui/theme/src/common/var.less';
@primary-color: #ff6b00;
@success-color: #ff8c00;
@warning-color: #ffb800;
```

**紫色主题**（优雅风格）
```less
@import '~mo-ui/theme/src/common/var.less';
@primary-color: #722ed1;
@success-color: #9254de;
```

**暗黑主题基础颜色**（配合背景调整）
```less
@import '~mo-ui/theme/src/common/var.less';
@primary-color: #177ddc;
@text-color-primary: #e6e6e6;
@border-color-base: #434343;
```

### 总结
如果你**只需要改颜色**，这就是最推荐、最简单、最稳定的方式：

> **创建一个自定义 Less 文件 → 引入原变量 → 覆盖颜色变量 → 在 main.js 最前面引入它 → 完事！**

无需复杂配置，无需多打包 CSS，几行代码就能拥有属于自己项目的专属配色主题。

建议团队内部统一放在 `src/theme/mo-theme.less`，以后换配色只需改这一个文件即可。

这样构建的 mo-ui 既专业又实用，完美满足日常项目需求！