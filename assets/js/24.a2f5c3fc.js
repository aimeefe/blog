(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{201:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bom-浏览器对象模型知识点整理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bom-浏览器对象模型知识点整理"}},[t._v("#")]),t._v(" BOM 浏览器对象模型知识点整理")]),t._v(" "),a("p",[t._v("BOM：浏览器对象模型，它提供了很多对象用于访问浏览器的功能，这些功能与网页内容无关")]),t._v(" "),a("h2",{attrs:{id:"window-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-对象"}},[t._v("#")]),t._v(" window 对象")]),t._v(" "),a("p",[t._v("window：浏览器对象模型（BOM）的核心对象，它表示浏览器的一个实例，具有双重角色：")]),t._v(" "),a("ul",[a("li",[t._v("通过 JavaScript 访问浏览器窗口的接口")]),t._v(" "),a("li",[t._v("ECMAScript 的"),a("code",[t._v("Global")]),t._v("对象，在网页中定义的任何对象、变量、函数都以"),a("code",[t._v("window")]),t._v("作为其全局对象")])]),t._v(" "),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h4",{attrs:{id:"_1-全局作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-全局作用域"}},[t._v("#")]),t._v(" 1. 全局作用域")]),t._v(" "),a("p",[t._v("所有在全局作用域中声明的变量、函数都会变成"),a("code",[t._v("window")]),t._v("对象的属性的方法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 sayAge() 存在于全局作用域中，因此 this.age 被映射到了 window.age")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sayAge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" sayAge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 18")]),t._v("\n")])])]),a("p",[t._v("注意：全局变量不能通过 delete 操作符删除，而直接在 window 对象上的定义的属性可以")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" age   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 18")]),t._v("\n\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lily'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),a("h2",{attrs:{id:"window-location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-location"}},[t._v("#")]),t._v(" window.location")]),t._v(" "),a("p",[t._v("window.location 提供了当前窗口中加载的文档有关的信息，还提供一些导航功能，它既是 window 对象的属性又是 document 对象的属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location\n")])])]),a("h3",{attrs:{id:"常用属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用属性"}},[t._v("#")]),t._v(" 常用属性")]),t._v(" "),a("p",[t._v("以"),a("code",[t._v("URL：https://es6.ruanyifeng.com/#docs/set-map?page=1&size=1")]),t._v("为例")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. location.hash: 设置或返回从 # 开始的 URL (锚)")]),t._v("\n")])])]),a("h2",{attrs:{id:"常用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用方法"}},[t._v("#")]),t._v(" 常用方法")])])}),[],!1,null,null,null);s.default=e.exports}}]);