import{a as e,c as a,m as t,f as n,g as r,e as o}from"./app.0b110c84.js";const s='{"title":"快速开始","description":"","frontmatter":{},"headers":[{"level":2,"title":"vuecomponent-seed 介绍","slug":"vuecomponent-seed-介绍"},{"level":2,"title":"文档","slug":"文档"},{"level":2,"title":"特点","slug":"特点"},{"level":2,"title":"怎样使用","slug":"怎样使用"},{"level":3,"title":"检查项","slug":"检查项"},{"level":3,"title":"安装","slug":"安装"},{"level":3,"title":"开发模式","slug":"开发模式"},{"level":3,"title":"构建","slug":"构建"},{"level":3,"title":"测试","slug":"测试"},{"level":3,"title":"生成入口文件","slug":"生成入口文件"},{"level":3,"title":"生成一个新的组件","slug":"生成一个新的组件"},{"level":3,"title":"生成 d.ts 文件","slug":"生成-d-ts-文件"},{"level":3,"title":"发布你的组件库","slug":"发布你的组件库"},{"level":2,"title":"文档的构建","slug":"文档的构建"},{"level":3,"title":"开发文档","slug":"开发文档"},{"level":3,"title":"构建文档","slug":"构建文档"},{"level":3,"title":"部署文档","slug":"部署文档"},{"level":3,"title":"在文档中使用组件 demo","slug":"在文档中使用组件-demo"},{"level":3,"title":"自定义文档样式","slug":"自定义文档样式"},{"level":2,"title":"推荐编辑器配置","slug":"推荐编辑器配置"},{"level":3,"title":"如果你使用 <script setup>","slug":"如果你使用-script-setup"},{"level":2,"title":"此项目离不开以下开源项目","slug":"此项目离不开以下开源项目"},{"level":2,"title":"特别感谢","slug":"特别感谢"}],"relativePath":"zh-CN/components/quick-start.md","lastUpdated":1634539466929}',l={},c=n("h1",{id:"快速开始"},[n("a",{class:"header-anchor",href:"#快速开始","aria-hidden":"true"},"#"),r(" 快速开始")],-1),d=o('<h2 id="vuecomponent-seed-介绍"><a class="header-anchor" href="#vuecomponent-seed-介绍" aria-hidden="true">#</a> vuecomponent-seed 介绍</h2><p>帮助你快速创建组件库。</p><ul><li>🚀 使用 <code>Vite</code> 开发</li><li>✈️ 使用 <code>esbuild</code> 构建</li><li>🚁 用 <code>ts-morph</code> 生成类型</li></ul><h2 id="文档"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2><ul><li><a href="https://zouhangwithsweet.github.io/vuecomponent-seed/" target="_blank" rel="noopener noreferrer">文档示例</a></li></ul><h2 id="特点"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2><ul><li>🌈 快速开发和构建</li><li>🎆 自定义友好</li><li>📝 更漂亮的文档，支持<code>中文</code>和<code>英文</code>。 受益于<a href="https://github.com/vueuse/vueuse" target="_blank" rel="noopener noreferrer">vueuse</a>，支持 <code>暗黑模式</code>。</li><li>🍭 丰富的脚本，灵感来自 <a href="https://github.com/egoist/esbuild-plugin-vue" target="_blank" rel="noopener noreferrer">esbuild-plugin-vue</a> &amp; <a href="https://github.com/egoist/vue-dts-gen" target="_blank" rel="noopener noreferrer">vue-dts-gen</a></li><li>😋 类型友好</li><li>🚚 <code>ESM</code> 和 <code>CJS</code> 产品</li></ul><h2 id="怎样使用"><a class="header-anchor" href="#怎样使用" aria-hidden="true">#</a> 怎样使用</h2><p><a href="https://github.com/zouhangwithsweet/vuecomponent-seed/generate" target="_blank" rel="noopener noreferrer">通过 vuecompoent-seed 生成你的仓库</a></p><h3 id="检查项"><a class="header-anchor" href="#检查项" aria-hidden="true">#</a> 检查项</h3><ul><li>[ ] Replace all <code>my-lib</code> words with your libary name. Just search <code>my-lib</code> and replace them in VScode <ul><li><code>.gitignore</code></li><li><code>package.json</code></li><li><code>vite.config.ts</code></li><li><code>.vitepress</code></li><li><code>scripts</code> ...</li></ul></li></ul><h3 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash"><pre><code><span class="token function">yarn</span>\n</code></pre></div><h3 id="开发模式"><a class="header-anchor" href="#开发模式" aria-hidden="true">#</a> 开发模式</h3><blockquote><p>Benefited from <a href="https://github.com/hannoeru/vite-plugin-pages" target="_blank" rel="noopener noreferrer"><code>vite-plugin-pages</code></a>, the <code>src/pages/index.vue</code> is the entry page for development. You can visit <code>/[component-name]/demo</code> to check component, like <code>http://localhost:3000/#/button/demo</code>.</p></blockquote><div class="language-bash"><pre><code><span class="token function">yarn</span> dev\n</code></pre></div><h3 id="构建"><a class="header-anchor" href="#构建" aria-hidden="true">#</a> 构建</h3><div class="language-bash"><pre><code><span class="token function">yarn</span> build\n</code></pre></div><h3 id="测试"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token builtin class-name">test</span>\n</code></pre></div><h3 id="生成入口文件"><a class="header-anchor" href="#生成入口文件" aria-hidden="true">#</a> 生成入口文件</h3><blockquote><p>入口文件是 rollup 的 <code>input</code> 选项。</p></blockquote><div class="language-bash"><pre><code><span class="token function">yarn</span> gen-entry\n</code></pre></div><h3 id="生成一个新的组件"><a class="header-anchor" href="#生成一个新的组件" aria-hidden="true">#</a> 生成一个新的组件</h3><blockquote><p>您必须为此命令指定组件名称。</p></blockquote><div class="language-bash"><pre><code><span class="token function">yarn</span> gen <span class="token punctuation">[</span>component<span class="token punctuation">\\</span>&#39;s name<span class="token punctuation">]</span>\n</code></pre></div><h3 id="生成-d-ts-文件"><a class="header-anchor" href="#生成-d-ts-文件" aria-hidden="true">#</a> 生成 d.ts 文件</h3><div class="language-bash"><pre><code>npx esno ./scripts/gen-dts.ts\n</code></pre></div><h3 id="发布你的组件库"><a class="header-anchor" href="#发布你的组件库" aria-hidden="true">#</a> 发布你的组件库</h3><blockquote><p>This command will add git tag、generate changelog. You can test your lib with argument <code>--dry</code></p></blockquote><div class="language-bash"><pre><code><span class="token function">yarn</span> release <span class="token punctuation">[</span>--dry<span class="token punctuation">]</span>\n</code></pre></div><h2 id="文档的构建"><a class="header-anchor" href="#文档的构建" aria-hidden="true">#</a> 文档的构建</h2><blockquote><p>❗ Noted: you should run <code>yarn build:lib</code> before run this command. Because the docs need the build bundle.</p></blockquote><h3 id="开发文档"><a class="header-anchor" href="#开发文档" aria-hidden="true">#</a> 开发文档</h3><div class="language-bash"><pre><code><span class="token function">yarn</span> docs:dev\n</code></pre></div><h3 id="构建文档"><a class="header-anchor" href="#构建文档" aria-hidden="true">#</a> 构建文档</h3><div class="language-bash"><pre><code><span class="token function">yarn</span> docs:build\n</code></pre></div><h3 id="部署文档"><a class="header-anchor" href="#部署文档" aria-hidden="true">#</a> 部署文档</h3><p>vuecompoent-seed 提供了一个 github <a href="https://github.com/zouhangwithsweet/vuecomponent-seed/.github/workflows/build.yml" target="_blank" rel="noopener noreferrer">action</a>。 当你将代码推送到 <code>master</code> 分支时，文档会自动部署在 <code>gh-pages</code> 分支上。然后你可以把 <code>gh-pages</code> 分支设置为 Github Pages 的来源。</p><h3 id="在文档中使用组件-demo"><a class="header-anchor" href="#在文档中使用组件-demo" aria-hidden="true">#</a> 在文档中使用组件 demo</h3><p>以 <code>button</code> 组件为例。</p><p>在 <code>button.md</code> 文件中, 插入如下代码：</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo-wrapper</span>\n  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>src/packages/button/demo<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>vuecomponent-sedd 提供了一个全局组件 <a href="https://github.com/zouhangwithsweet/vuecomponent-seed/docs/.vitepress/theme/DemoWrapper.vue" target="_blank" rel="noopener noreferrer"><code>DemoWrapper</code></a> 用来展示所有的组件示例。 这也是当前展示组件实例的唯一方式。 <a href="https://github.com/zouhangwithsweet/vuecomponent-seed/docs/.vitepress/plugins/demo.js" target="_blank" rel="noopener noreferrer">了解更多</a>.</p><h3 id="自定义文档样式"><a class="header-anchor" href="#自定义文档样式" aria-hidden="true">#</a> 自定义文档样式</h3><p>你可以在 <code>markdown</code> 文件的 <code>frontmatter</code> 新增 <code>class</code> 字段, 全局组件 <code>&lt;Content&gt;</code> 将会继承你定义的 <code>class</code>。 当然, <code>windicss</code> 也能在这里使用。</p><div class="language-markdown"><pre><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token font-matter yaml language-yaml">class: &#39;custom-class&#39;</span>\n<span class="token punctuation">---</span></span>\n</code></pre></div><h2 id="推荐编辑器配置"><a class="header-anchor" href="#推荐编辑器配置" aria-hidden="true">#</a> 推荐编辑器配置</h2><p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode</a> + <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener noreferrer">Volar</a>.</p><h3 id="如果你使用-script-setup"><a class="header-anchor" href="#如果你使用-script-setup" aria-hidden="true">#</a> 如果你使用 <code>&lt;script setup&gt;</code></h3><p><a href="https://github.com/vuejs/rfcs/pull/227" target="_blank" rel="noopener noreferrer"><code>&lt;script setup&gt;</code></a> is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use <a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar" target="_blank" rel="noopener noreferrer">Volar</a> instead of Vetur (and disable Vetur).</p><h2 id="此项目离不开以下开源项目"><a class="header-anchor" href="#此项目离不开以下开源项目" aria-hidden="true">#</a> 此项目离不开以下开源项目</h2><ul><li><a href="https://github.com/egoist/esbuild-plugin-vue" target="_blank" rel="noopener noreferrer">esbuild-plugin-vue</a></li><li><a href="https://github.com/egoist/vue-dts-gen" target="_blank" rel="noopener noreferrer">vue-dts-gen</a></li><li><a href="https://github.com/vueuse/vueuse" target="_blank" rel="noopener noreferrer">vueuse</a></li><li><a href="https://github.com/dewfall123/vitepress-for-component" target="_blank" rel="noopener noreferrer">vitepress-for-component</a></li><li><a href="https://github.com/windicss/windicss" target="_blank" rel="noopener noreferrer">windicss</a></li><li><a href="https://github.com/element-plus/element-plus" target="_blank" rel="noopener noreferrer">Element Plus</a></li></ul><h2 id="特别感谢"><a class="header-anchor" href="#特别感谢" aria-hidden="true">#</a> 特别感谢</h2><table><thead><tr><th style="text-align:center;"><a href="https://github.com/eeeeelle" target="_blank" rel="noopener noreferrer"><img src="https://avatars.githubusercontent.com/u/73626725?v=4" width="75px;"><br>eeeeelle<br> <sub>✍️ 发布脚本</sub></a></th></tr></thead></table>',55);l.render=function(n,r,o,s,l,i){return e(),a("div",null,[c,t("以下内容为 vuecomponent-seed 介绍，可以直接删除"),d])};export default l;export{s as __pageData};
