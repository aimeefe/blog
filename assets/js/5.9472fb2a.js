(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{168:function(s,t,a){s.exports=a.p+"assets/img/css-map.64f7a929.png"},169:function(s,t,a){s.exports=a.p+"assets/img/css.98b2cf31.png"},170:function(s,t,a){s.exports=a.p+"assets/img/css-postcss.86e1dd2f.png"},171:function(s,t,a){s.exports=a.p+"assets/img/css-sourcemap__before.479e8a55.png"},172:function(s,t,a){s.exports=a.p+"assets/img/css-sourcemap__after.732a93a7.png"},173:function(s,t,a){s.exports=a.p+"assets/img/css-compress.b4146c0c.png"},251:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"打包样式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打包样式"}},[s._v("#")]),s._v(" 打包样式")]),s._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),n("p",[n("code",[s._v("webpack")]),s._v("中关于"),n("code",[s._v("css")]),s._v("的处理，大致包含以下这些：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(168),alt:"webpack 中的样式处理"}})]),s._v(" "),n("h2",{attrs:{id:"准备工作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),n("p",[s._v("在"),n("code",[s._v("src")]),s._v("目录下创建"),n("code",[s._v("style")]),s._v("目录，用来保存样式文件。")]),s._v(" "),n("p",[n("code",[s._v("style")]),s._v("目录下分为新增："),n("code",[s._v("index.css")]),s._v("、"),n("code",[s._v("index.less")]),s._v("、"),n("code",[s._v("index.scss")]),s._v("三个样式文件并写点什么，目录如下：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("├─package.json\n├─dist                // 存放最终打包的文件\n│  └─index.html\n├─src                 // 存放入口文件和开发文件\n│  └─index.js  \n│  └─style            // 样式管理\n│    └─index.css  \n│    └─index.less  \n│    └─index.scss  \n├─webpack.config.js   // webpack 配置文件\n")])])]),n("h2",{attrs:{id:"css-模块处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-模块处理"}},[s._v("#")]),s._v(" CSS 模块处理")]),s._v(" "),n("p",[s._v("使用"),n("code",[s._v("webpack")]),s._v("处理"),n("code",[s._v("css")]),s._v("模块会用到以下两个 loader:")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("style-loader：将"),n("code",[s._v("css")]),s._v("内容作为内联样式注入到"),n("code",[s._v("html")]),s._v("的"),n("code",[s._v("head")]),s._v("标签中")])]),s._v(" "),n("li",[n("p",[s._v("css-loader："),n("code",[s._v("css-loader")]),s._v("可以解释"),n("code",[s._v("@import")]),s._v("和"),n("code",[s._v("url()")])])])]),s._v(" "),n("h4",{attrs:{id:"使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("安装："),n("code",[s._v("cnpm install style-loader css-loader -D")])])]),s._v(" "),n("li",[n("p",[s._v("编辑"),n("code",[s._v("webpack.config.js")]),s._v("文件，如下：")])])]),s._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 略略略...")]),s._v("\n  module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rules"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.css$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        use"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("将"),n("code",[s._v("style/index.css")]),s._v("文件引入"),n("code",[s._v("index.js")]),s._v("中，并在终端中执行"),n("code",[s._v("npx webpack")]),s._v("开始打包。成功后，在浏览器中查看该页面，会发现打包后的"),n("code",[s._v("css")]),s._v("文件作为内联样式被嵌入到了"),n("code",[s._v("index.html")]),s._v("中的"),n("code",[s._v("style")]),s._v("标签中，如下:")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(169),alt:"打包后的css"}})]),s._v(" "),n("h2",{attrs:{id:"less-样式处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#less-样式处理"}},[s._v("#")]),s._v(" LESS 样式处理")]),s._v(" "),n("p",[s._v("使用"),n("code",[s._v("webpack")]),s._v("处理"),n("code",[s._v("less")]),s._v("模块时会用到以下 loader：")]),s._v(" "),n("ul",[n("li",[s._v("less-loader：可以将"),n("code",[s._v("less")]),s._v("文件编译成"),n("code",[s._v("css")]),s._v("文件")])]),s._v(" "),n("h4",{attrs:{id:"使用-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-2"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("安装："),n("code",[s._v("cnpm install less-loader less -D")])])]),s._v(" "),n("li",[n("p",[s._v("编辑"),n("code",[s._v("webpack.config.js")]),s._v("文件，如下：")])])]),s._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 略略略...")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n  module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rules"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.less$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        use"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'less-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("h2",{attrs:{id:"scss-处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#scss-处理"}},[s._v("#")]),s._v(" SCSS 处理")]),s._v(" "),n("p",[s._v("使用"),n("code",[s._v("webpack")]),s._v("来处理"),n("code",[s._v("scss")]),s._v("文件时会用到以下 loader：")]),s._v(" "),n("ul",[n("li",[s._v("sass-loader：将"),n("code",[s._v("scss")]),s._v("文件编译为"),n("code",[s._v("CSS")]),s._v("文件")])]),s._v(" "),n("h4",{attrs:{id:"使用-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-3"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("安装："),n("code",[s._v("cnpm install node-sass sass-loader -D")])])]),s._v(" "),n("li",[n("p",[s._v("编辑"),n("code",[s._v("webpack.config.js")]),s._v("文件，如下：")])])]),s._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n  module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rules"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.scss$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        use"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sass-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("h2",{attrs:{id:"postcss-处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#postcss-处理"}},[s._v("#")]),s._v(" POSTCSS 处理")]),s._v(" "),n("p",[n("code",[s._v("postcss")]),s._v("可以自动给"),n("code",[s._v("css3")]),s._v("样式加"),n("code",[s._v("-webkit-，-moz-")]),s._v("等浏览器前缀，"),n("code",[s._v("webpack")]),s._v("在处理"),n("code",[s._v("postcss")]),s._v("的时候需要使用"),n("code",[s._v("postcss-loader")])]),s._v(" "),n("h4",{attrs:{id:"使用-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-4"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("安装："),n("code",[s._v("cnpm install postcss-loader -D")])])]),s._v(" "),n("li",[n("p",[s._v("编辑"),n("code",[s._v("webpack.config.js")]),s._v("文件，如下：")])])]),s._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n  module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rules"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.(c|sc)ss$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        use"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sass-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n          "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("   loader"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("    options"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("       plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'autoprefixer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("想要"),n("code",[s._v("postcss")]),s._v("生效，我们需要配置下浏览器版本，符合该条件的会自动给"),n("code",[s._v("css")]),s._v("加浏览器前缀，打开"),n("code",[s._v("package.json")]),s._v("文件，\n做如下配置：")])]),s._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"browserslist"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全球浏览器使用率大于1%，最新两个版本并且是IE8以上的浏览器，加前缀 ")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"> 1%"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last 2 versions"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not ie <= 8"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),n("ol",{attrs:{start:"4"}},[n("li",[s._v("将"),n("code",[s._v("style/index.scss")]),s._v("文件引入"),n("code",[s._v("index.js")]),s._v("中，终端中执行"),n("code",[s._v("npx webpack")]),s._v("命令进行打包编译，成功后会自动嵌入到"),n("code",[s._v("html")]),s._v("的"),n("code",[s._v("style")]),s._v("标签中，浏览器查看该页面会发现一些新特性的"),n("code",[s._v("css")]),s._v("已经被加了浏览器前缀，如下：")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(170),alt:"postcss给浏览器加前缀"}})]),s._v(" "),n("h2",{attrs:{id:"development：sourcemap"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#development：sourcemap"}},[s._v("#")]),s._v(" development：sourceMap")]),s._v(" "),n("p",[s._v("开发环境中我们可以通过"),n("code",[s._v("sourceMap")]),s._v("追踪到样式所在的具体文件及位置等信息来方便我们的调试")]),s._v(" "),n("h4",{attrs:{id:"使用-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-5"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n  module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rules"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.(c|sc)ss$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        use"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'css-loader', ")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            loader"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("   sourceMap"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sass-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            loader"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            options"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" sourceMap"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'autoprefixer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("效果如下：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("sourceMap")]),s._v(" 使用前：无法定位到某个样式属于哪个文件")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(171),alt:"sourceMap使用前"}})]),s._v(" "),n("ul",[n("li",[n("code",[s._v("sourceMap")]),s._v(" 使用后：可以清晰的显示样式所在的文件名称")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(172),alt:"sourceMap使用后"}})]),s._v(" "),n("h2",{attrs:{id:"production：抽离-css"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#production：抽离-css"}},[s._v("#")]),s._v(" production：抽离 css")]),s._v(" "),n("p",[s._v("不同阶段我们需要对"),n("code",[s._v("css")]),s._v("做不同的配置处理：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("开发阶段：通过"),n("code",[s._v("style-loader")]),s._v("可以把"),n("code",[s._v("css")]),s._v("注入到"),n("code",[s._v("html")]),s._v("的"),n("code",[s._v("style")]),s._v("作为内联样式存在")])]),s._v(" "),n("li",[n("p",[s._v("生产阶段：抽离"),n("code",[s._v("css")]),s._v("，通过外链的形式把"),n("code",[s._v("css")]),s._v("链接到"),n("code",[s._v("html")]),s._v("中")])])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("抽离"),n("code",[s._v("css")]),s._v("只在生产环境中有效，即"),n("code",[s._v("mode: production")]),s._v("，并且把"),n("code",[s._v("css")]),s._v("从"),n("code",[s._v("style")]),s._v("标签中抽离则不需要再使用"),n("code",[s._v("style-loader")])])]),s._v(" "),n("p",[s._v("要想抽离"),n("code",[s._v("css")]),s._v("，我们需要用到一个插件和插件本身的一个 loader，如下：")]),s._v(" "),n("ul",[n("li",[s._v("插件："),n("code",[s._v("mini-css-extract-plugin")])]),s._v(" "),n("li",[s._v("loader："),n("code",[s._v("mini-css-extract-plugin.loader")])])]),s._v(" "),n("h4",{attrs:{id:"使用-6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-6"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("安装："),n("code",[s._v("cnpm install mini-css-extract-plugin -D")])])]),s._v(" "),n("li",[n("p",[s._v("编辑"),n("code",[s._v("webpack.config.js")]),s._v("，如下：")])])]),s._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" MiniCssExtractPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mini-css-extract-plugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" mode"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生产环境")]),s._v("\n  module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rules"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.(c|sc)ss$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        use"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'style-css',")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("  MiniCssExtractPlugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sass-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            loader"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            options"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'autoprefixer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 抽离 css")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MiniCssExtractPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// filename：输出文件名")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hash 值：可以避免出现样式缓存的情况，一旦样式发生修改，打包后就会生成一个新 hash 值的文件")]),s._v("\n      filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name].[hash:6].css'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      chunkFilename"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[id].[hash:6].css'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("完成打包后，"),n("code",[s._v("dist")]),s._v("目录下会自动生成抽离的"),n("code",[s._v("css")]),s._v("文件，将该"),n("code",[s._v("css")]),s._v("文件通过"),n("code",[s._v("link")]),s._v("标签引入"),n("code",[s._v("dist/index.html")]),s._v("中即可")]),s._v(" "),n("h2",{attrs:{id:"production：压缩-css（优化）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#production：压缩-css（优化）"}},[s._v("#")]),s._v(" production：压缩 css（优化）")]),s._v(" "),n("p",[s._v("压缩"),n("code",[s._v("css")]),s._v("文件是提高浏览器加载页面速度的一个优化点，"),n("code",[s._v("webpack")]),s._v("中我们可以通过"),n("code",[s._v("optimize-css-assets-webpack-plugin")]),s._v("这个插件来完成"),n("code",[s._v("css")]),s._v("的压缩配置")]),s._v(" "),n("h4",{attrs:{id:"使用-7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-7"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("安装："),n("code",[s._v("cnpm install optimize-css-assets-webpack-plugin -D")])])]),s._v(" "),n("li",[n("p",[s._v("编辑"),n("code",[s._v("webpack.config.js")]),s._v("文件，如下：")])])]),s._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 抽离 css")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" MiniCssExtractPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mini-css-extract-plugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 压缩 css")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" OptimizeCssAssetsWebpackPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'optimize-css-assets-webpack-plugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n  mode"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rules"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.(c|sc)ss$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        use"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          MiniCssExtractPlugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sass-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            loader"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            options"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'autoprefixer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 抽离 css")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MiniCssExtractPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出文件名")]),s._v("\n      filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name].[hash:6].css'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      chunkFilename"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[id].[hash:6].css'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 优化项配置")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" optimization"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("   minimizer"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OptimizeCssAssetsWebpackPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[n("code",[s._v("webpack")]),s._v("打包生成的"),n("code",[s._v("css")]),s._v("空格之类的全部都会被去掉，体积比压缩前会小很多，如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(173),alt:"css 压缩"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);