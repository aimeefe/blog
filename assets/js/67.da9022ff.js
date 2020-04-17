(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{249:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),s("h2",{attrs:{id:"webpack-初体验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-初体验"}},[t._v("#")]),t._v(" webpack 初体验")]),t._v(" "),s("h3",{attrs:{id:"初始化项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[t._v("#")]),t._v(" 初始化项目")]),t._v(" "),s("ol",[s("li",[t._v("创建一个项目并初始化")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mkdir webpack4&&cd webpack4\n\nnpm init -y\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("创建项目目录")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("├─package.json\n├─dist                // 存放最终打包的文件\n│  └─index.html\n├─src                 // 存放入口文件和开发文件\n│  └─index.js\n├─webpack.config.js   // webpack 配置文件\n")])])]),s("p",[t._v("webpack.config.js 内容：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" resolve "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("安装 webpack："),s("code",[t._v("cnpm install webpack webpack-cli -D")])])]),t._v(" "),s("h3",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),s("p",[t._v("执行"),s("code",[t._v("npx webpack")]),t._v("对项目进行打包，控制台输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Hash: 331a7054cb9f86a3159c\nVersion: webpack 4.42.0\nTime: 51ms\nBuilt at: 2020/03/15 下午6:23:50\n   Asset     Size  Chunks             Chunk Names\nbuild.js  3.8 KiB    main  [emitted]  main\nEntrypoint main = build.js\n[./src/index.js] 27 bytes {main} [built]\n")])])]),s("p",[t._v("打包成功后，"),s("code",[t._v("dist")]),t._v("目录中会自动出现打包后的"),s("code",[t._v("build.js")]),t._v("文件")]),t._v(" "),s("p",[t._v("现在在"),s("code",[t._v("index.html")]),t._v("中将打包后的"),s("code",[t._v("js")]),t._v("文件引入即可")])])}),[],!1,null,null,null);a.default=e.exports}}]);