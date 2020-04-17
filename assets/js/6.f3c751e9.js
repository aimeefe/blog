(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{183:function(t,s,a){t.exports=a.p+"assets/img/js-speed__analyzer.420e155c.png"},184:function(t,s,a){t.exports=a.p+"assets/img/js-speed__default__time.0f5f6b77.png"},185:function(t,s,a){t.exports=a.p+"assets/img/js-speed__happypack.8c28c839.png"},186:function(t,s,a){t.exports=a.p+"assets/img/js-speed__dll__folder.adcc3972.png"},187:function(t,s,a){t.exports=a.p+"assets/img/js-speed__dll__time.49dec6b8.png"},188:function(t,s,a){t.exports=a.p+"assets/img/js-speed__loader.a893563c.png"},254:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"webpack-打包性能优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-打包性能优化"}},[t._v("#")]),t._v(" webpack 打包性能优化")]),t._v(" "),n("h2",{attrs:{id:"开始之前"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开始之前"}},[t._v("#")]),t._v(" 开始之前")]),t._v(" "),n("h3",{attrs:{id:"打包结果分析表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打包结果分析表"}},[t._v("#")]),t._v(" 打包结果分析表")]),t._v(" "),n("p",[t._v("要提高我们的打包性能首先得知道我们目前的打包情况，然后去分析到底是哪里拖慢了我们的打包速度；"),n("code",[t._v("webpack")]),t._v("中插件"),n("code",[t._v("webpack-bundle-analyzer")]),t._v("可以生成代码分析报告，帮助我们提升代码质量和网站性能")]),t._v(" "),n("h4",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("安装："),n("code",[t._v("cnpm install webpack-bundle-analyzer -D")])])]),t._v(" "),n("li",[n("p",[t._v("配置 webpack.config.js 文件，如下：")])])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BundleAnalyzerPlugin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack-bundle-analyzer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 分析打包情况")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BundleAnalyzerPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      analyzerPort"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(183),alt:"打包性能图"}})]),t._v(" "),n("h2",{attrs:{id:"优化开始"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优化开始"}},[t._v("#")]),t._v(" 优化开始")]),t._v(" "),n("p",[t._v("目前的打包速度在"),n("code",[t._v("13930ms")]),t._v("左右")]),t._v(" "),n("p",[n("img",{attrs:{src:a(184),alt:"原始打包速度"}})]),t._v(" "),n("p",[t._v("现在开始基于这个打包时间来逐步的给项目打包速度进行优化，看看最终会提升多少...")]),t._v(" "),n("h2",{attrs:{id:"_1-开启-happypack-多线程打包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-开启-happypack-多线程打包"}},[t._v("#")]),t._v(" 1. 开启 happypack 多线程打包")]),t._v(" "),n("p",[n("code",[t._v("webpack")]),t._v("是单线程模型的，大量的任务只能一件件的处理，不能同时处理多个事情，"),n("code",[t._v("happypack")]),t._v("可以帮我们开启多个线程来处理文件，从而加速代码的构建")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[n("code",[t._v("happypack")]),t._v("不是所有"),n("code",[t._v("loader")]),t._v("都支持的，使用的时候需要注意")])]),t._v(" "),n("p",[n("code",[t._v("happypack")]),t._v("常用属性如下：")]),t._v(" "),n("ul",[n("li",[t._v("id: string，用唯一标识符"),n("code",[t._v("id")]),t._v("来代表当前的"),n("code",[t._v("happypack")]),t._v("是用来处理哪一类的特定文件")]),t._v(" "),n("li",[t._v("loaders: Array，用法和"),n("code",[t._v("webpack loader")]),t._v("配置中的一样")]),t._v(" "),n("li",[t._v("threadPool：HappyThreadPool，代表共享进程池，及多个"),n("code",[t._v("happypack")]),t._v("实例都使用同一个共享进程池中的子进程去处理任务，避免资源占用过多"),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" os "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'os'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HappyPack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'happypack'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" happyThreadPool "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HappyPack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ThreadPool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" size"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cpus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Happypack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//共享进程池")]),t._v("\n  threadPool"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" happyThreadPool\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n")])])])])]),t._v(" "),n("h4",{attrs:{id:"配置-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-2"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("安装："),n("code",[t._v("cnpm install happypack -D")])])]),t._v(" "),n("li",[n("p",[t._v("编辑"),n("code",[t._v("webpack.config.js")]),t._v("，如下：")])])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开启多线程打包")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Happypack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'happypack'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  module"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rule"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把对 js 的处理转交给 id 为 js 的 happypack ")]),t._v("\n        use"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Happypack/loader?id=js'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use: {")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   loader: 'babel-loader'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给 js 开启多线程打包")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Happypack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id，与 'Happypack/loader?id=js' 此处 id 对应")]),t._v("\n      id"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loader 必须是一个数组；")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理 js 文件，用法和 loader 中的配置相同")]),t._v("\n      loaders"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("给"),n("code",[t._v("js")]),t._v("加了"),n("code",[t._v("happypack")]),t._v("之后打包速度提升了点，现在是"),n("code",[t._v("10829ms")]),t._v("，提升了"),n("code",[t._v("13930-10829 = 3130 ms")]),t._v("，3s 左右")]),t._v(" "),n("p",[n("img",{attrs:{src:a(185),alt:"happypack"}})]),t._v(" "),n("h2",{attrs:{id:"_2-dll-动态链接库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-dll-动态链接库"}},[t._v("#")]),t._v(" 2. dll 动态链接库")]),t._v(" "),n("p",[t._v("项目中如果引用"),n("code",[t._v("react、react-dom...")]),t._v("之类的第三方模块的时候，"),n("code",[t._v("webpack")]),t._v("都要从"),n("code",[t._v("node_modules")]),t._v("中取出来对应的模块，然后再打包到代码中，这个过程会消耗一定的打包时间，而且这些第三方资源基本上不会变动，同时把这些第三方资源通过"),n("code",[t._v("splitChunks")]),t._v("全都合并到一个文件中，这个文件也会很大。")]),t._v(" "),n("p",[n("code",[t._v("dll")]),t._v("可以帮我们在第一次打包的时候把这些第三方资源生成一个文件保存起来，等再次打包的时候可以直接用保存起来的这些代码而不需要再重新从"),n("code",[t._v("node_modules")]),t._v("中取出他们并打包了，而且节省了打包的时间")]),t._v(" "),n("h3",{attrs:{id:"配置-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-3"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),n("ol",[n("li",[t._v("新建"),n("code",[t._v("webpack.dll.js")]),t._v("文件，编辑如下：")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包含所有第三方模块")]),t._v("\n    vendors"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue/dist/vue.common.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-beauty'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-clipboard2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xlsx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'md5'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js-base64'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].dll.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../dll'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把所有第三方模块通过全局变量的方式暴露出去")]),t._v("\n    library"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name]'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// publicPath: '',")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 借助 dllPlugin 插件对暴露的模块代码做分析，生成 manifest.json 映射文件")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DllPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name]'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../dll/[name].manifest.json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("打开"),n("code",[t._v("package.json")]),t._v("设置打包"),n("code",[t._v("dll")]),t._v("的命令，如下：")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dll"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack --config ./build/webpack.dll.config.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("终端执行命令"),n("code",[t._v("npm run dll")]),t._v("，生成"),n("code",[t._v("dll/vendors.dll.js")]),t._v("和"),n("code",[t._v("dll.vendors.manifest.json")]),t._v("这两个文件")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(186),alt:"打包后的dll目录"}})]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[t._v("配置"),n("code",[t._v("webpack.config.js")]),t._v("文件，如下：")])]),t._v(" "),n("p",[t._v("安装："),n("code",[t._v("cnpm install add-asset-html-webpack-plugin -D")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" AddAssetHtmlWebpackPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'add-asset-html-webpack-plugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dll：给 html 上增加静态资源")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddAssetHtmlWebpackPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      filepath"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../dll/vendors.dll.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DllReferencePlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      manifest"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../dll/vendors.manifest.json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("最后，来看看通过"),n("code",[t._v("dll")]),t._v("抽离第三方库会提升多少打包速度，现在是"),n("code",[t._v("8271ms")]),t._v("，提升了"),n("code",[t._v("10829-8271 = 2558 ms")]),t._v("，2~3s")]),t._v(" "),n("p",[n("img",{attrs:{src:a(187),alt:"dll"}})]),t._v(" "),n("h2",{attrs:{id:"_3-loader-提升"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-loader-提升"}},[t._v("#")]),t._v(" 3. loader 提升")]),t._v(" "),n("p",[n("code",[t._v("loader")]),t._v("中有一些属性可以帮助"),n("code",[t._v("webpack")]),t._v("打包性能得到提升，常用的如下：")]),t._v(" "),n("ol",[n("li",[t._v("exclude：优化构建时的搜索路径，表示哪些目录中的"),n("code",[t._v("js")]),t._v("文件不要进行"),n("code",[t._v("babel-loader")]),t._v("处理")]),t._v(" "),n("li",[t._v("include：优化构建时的搜索路径，表示哪些目录中的"),n("code",[t._v("js")]),t._v("文件需要进行"),n("code",[t._v("babel-loader")]),t._v("处理")]),t._v(" "),n("li",[t._v("cacheDirectory：值为"),n("code",[t._v("true")]),t._v("时可以对"),n("code",[t._v("babel-loader")]),t._v("的转译结果进行缓存")])]),t._v(" "),n("p",[n("code",[t._v("babel")]),t._v("对代码进行转译的过程是十分耗费时间的，设置了"),n("code",[t._v("cacheDirectory")]),t._v("为"),n("code",[t._v("true")]),t._v("后，未来的"),n("code",[t._v("Webpack")]),t._v("构建将尝试从缓存中读取，以避免在每次运行时运行潜在昂贵的"),n("code",[t._v("Babel")]),t._v("重新编译过程")]),t._v(" "),n("p",[t._v("使用方法如下：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基于 happypack 做测试")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" exclude"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/node_modules/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" include"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../src'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HappyPack/loader?id=js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HappyPack")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loaders: ['babel-loader']")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" loaders"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader?cacheDirectory=true'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      threadPool"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" happyThreadPool\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("来看看通过对"),n("code",[t._v("loader")]),t._v("的优化会提升多少打包速度，现在是"),n("code",[t._v("5303ms")]),t._v("，提升了"),n("code",[t._v("8271-5303 = 2966 ms")]),t._v("，2~3s")]),t._v(" "),n("p",[n("img",{attrs:{src:a(188),alt:"loader优化"}})]),t._v(" "),n("h2",{attrs:{id:"_4-resolve-提升"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-resolve-提升"}},[t._v("#")]),t._v(" 4. resolve 提升")]),t._v(" "),n("ul",[n("li",[t._v("resolve.alias：配置项通过别名来把原导入路径映射成一个新的导入路径，减少耗时的递归解析操作，能让 Webpack 更快找到路径")]),t._v(" "),n("li",[t._v("resolve.extensions：在导入语句没带文件后缀时，webpack 会根据"),n("code",[t._v("resolve.extension")]),t._v("自动带上后缀后去尝试询问文件是否存在，使用时要注意：\n"),n("ul",[n("li",[t._v("尽可能精简，一些项目中用不到的不要写上去")]),t._v(" "),n("li",[t._v("使用频率高的放在前面，这能保证尽快退出查找过程")]),t._v(" "),n("li",[t._v("源码中写入导入语句时，尽可能带上后缀名，这样可以避免消耗查找过程的时间")])])])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  resolve"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    extensions"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.scss'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.css'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    alias"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue$'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue/dist/vue.common.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../src'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../src/config'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'components'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../src/components'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);