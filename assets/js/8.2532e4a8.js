(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{161:function(s,t,e){s.exports=e.p+"assets/img/safe-xss__store.d98526e3.png"},162:function(s,t,e){s.exports=e.p+"assets/img/safe-xss__store__demo.c56ad1c6.png"},163:function(s,t,e){s.exports=e.p+"assets/img/safe-xss__notstore.5b188d04.png"},164:function(s,t,e){s.exports=e.p+"assets/img/safe-xss__notstore__demo.c0cedbab.png"},218:function(s,t,e){"use strict";e.r(t);var _=e(0),a=Object(_.a)({},(function(){var s=this,t=s.$createElement,_=s._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("h1",{attrs:{id:"浏览器安全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器安全"}},[s._v("#")]),s._v(" 浏览器安全")]),s._v(" "),_("h2",{attrs:{id:"xss-跨站脚本攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#xss-跨站脚本攻击"}},[s._v("#")]),s._v(" XSS 跨站脚本攻击")]),s._v(" "),_("p",[_("code",[s._v("XSS")]),s._v("全程"),_("code",[s._v("Cross Site Scripting")]),s._v("，跨站脚本攻击。")]),s._v(" "),_("p",[_("code",[s._v("XSS")]),s._v("攻击是指攻击者在网站上注入恶意的客户端代码，如"),_("code",[s._v("<script>alert(document.cookie)<\/script>")]),s._v("，通过恶意脚本对客户端网页进行篡改，从而在用户浏览网页时对用户浏览器进行控制或获取用户隐私的一种攻击方式")]),s._v(" "),_("p",[_("code",[s._v("XSS")]),s._v("漏洞是对浏览器的攻击，所以说植入的代码基本上以"),_("code",[s._v("JavaScript")]),s._v("和"),_("code",[s._v("HTML")]),s._v("标签为主，特点是会将一些隐私数据像"),_("code",[s._v("cookie、session")]),s._v("发送给攻击者，将受害者重定向到一个由攻击者控制的网站，在受害者的机器上进行一些恶意操作")]),s._v(" "),_("h3",{attrs:{id:"分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[s._v("#")]),s._v(" 分类")]),s._v(" "),_("p",[_("code",[s._v("XSS")]),s._v("分为存储型、反射型、基于"),_("code",[s._v("DOM")])]),s._v(" "),_("h4",{attrs:{id:"存储型-xss（持久型）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储型-xss（持久型）"}},[s._v("#")]),s._v(" 存储型 XSS（持久型）")]),s._v(" "),_("p",[s._v("将"),_("code",[s._v("XSS")]),s._v("代码发送到服务器，然后下次请求页面的时候就不用带上"),_("code",[s._v("XSS")]),s._v("代码了")]),s._v(" "),_("img",{staticClass:"theme-img theme-img__middle",attrs:{src:e(161)}}),s._v(" "),_("p",[s._v("这种攻击方式因为"),_("code",[s._v("XSS")]),s._v("存储到数据库了，所以会长久的存在对方网站里，当用户在查看某个信息的时候攻击者去获取用户的资料")]),s._v(" "),_("p",[s._v("举个例子：留言板"),_("code",[s._v("XSS")]),s._v("，如下：")]),s._v(" "),_("ol",[_("li",[s._v("通过浏览版输入一条获取"),_("code",[s._v("cookie")]),s._v("的"),_("code",[s._v("xss")]),s._v("，点击提交后该留言会被提交到服务器，保存在数据库中")])]),s._v(" "),_("img",{staticClass:"theme-img theme-img__middle",attrs:{src:e(162)}}),s._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[s._v("当用户在查看留言时，我们存入的留言内容会从服务器中被查询出来并通过解析后加载到页面上，当浏览器发现有"),_("code",[s._v("XSS")]),s._v("代码时，就当做正常的"),_("code",[s._v("HTML")]),s._v("和"),_("code",[s._v("JS")]),s._v("解析执行，这时候"),_("code",[s._v("XSS")]),s._v("攻击就发生了，轻松的获取了当前用户的"),_("code",[s._v("cookie")])])]),s._v(" "),_("h4",{attrs:{id:"反射型-xss（非持久型）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#反射型-xss（非持久型）"}},[s._v("#")]),s._v(" 反射型 XSS（非持久型）")]),s._v(" "),_("p",[s._v("发生请求时，"),_("code",[s._v("XSS")]),s._v("代码出现在请求"),_("code",[s._v("URL")]),s._v("中作为参数提交到服务器，服务器解析并响应。响应结果中包含"),_("code",[s._v("XSS")]),s._v("代码，最后浏览器解析并执行（URL 中注入 XSS => 提交到服务器 => 服务器解析 => 浏览器解析 => XSS 攻击）")]),s._v(" "),_("img",{staticClass:"theme-img theme-img__middle",attrs:{src:e(163)}}),s._v(" "),_("p",[s._v("这种攻击方式，需要通过浏览器刷新请求服务器时才会执行，因此是非持久型的（点一次执行一次）")]),s._v(" "),_("p",[s._v("举个例子：")]),s._v(" "),_("img",{staticClass:"theme-img theme-img__middle",attrs:{src:e(164)}}),s._v(" "),_("p",[s._v("如图，"),_("code",[s._v("chrome")]),s._v("已经对这种攻击做了拦截，所以会是这个结果，但是如果没有拦截，那么就可以拿到用户的"),_("code",[s._v("cookie")]),s._v("了")]),s._v(" "),_("h3",{attrs:{id:"xss-攻击的防范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击的防范"}},[s._v("#")]),s._v(" XSS 攻击的防范")]),s._v(" "),_("h4",{attrs:{id:"_1-输入检查"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-输入检查"}},[s._v("#")]),s._v(" 1. 输入检查")]),s._v(" "),_("p",[s._v("对用户的输入进行检查、过滤和转译。建立可信任的字符和"),_("code",[s._v("HTML")]),s._v("标签白名单，对于不在白名单之列的字符或者标签进行过滤或编码。")]),s._v(" "),_("p",[s._v("在"),_("code",[s._v("XSS")]),s._v("防御中，输入检查一般是检查用户输入的数据中是否包含"),_("code",[s._v("<")]),s._v("，"),_("code",[s._v(">")]),s._v("等特殊字符，如果存在，则对特殊字符进行过滤或编码，这种方式也称为"),_("code",[s._v("XSS Filter")]),s._v("。")]),s._v(" "),_("p",[s._v("而在一些前端框架中，都会有一份"),_("code",[s._v("decodingMap")]),s._v("， 用于对用户输入所包含的特殊字符或标签进行编码或过滤，如 "),_("code",[s._v("<")]),s._v("，"),_("code",[s._v(">")]),s._v("，"),_("code",[s._v("script")]),s._v("，防止 "),_("code",[s._v("XSS")]),s._v(" 攻击：")]),s._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vuejs 中的 decodingMap")]),s._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在 vuejs 中，如果输入带 script 标签的内容，会直接过滤掉")]),s._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" decodingMap "),_("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),_("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&lt;'")]),_("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),_("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&gt;'")]),_("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[s._v("'>'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),_("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&quot;'")]),_("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),_("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&amp;'")]),_("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),_("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&#10;'")]),_("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),s._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),_("h4",{attrs:{id:"_2-输出检查"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-输出检查"}},[s._v("#")]),s._v(" 2. 输出检查")]),s._v(" "),_("p",[s._v("用户的输入会存在问题，服务端的输出也会存在问题。一般来说，除富文本的输出外，在变量输出到 "),_("code",[s._v("HTML")]),s._v(" 页面时，可以使用编码或转义的方式来防御 "),_("code",[s._v("XSS")]),s._v(" 攻击。例如利用 "),_("code",[s._v("sanitize-html")]),s._v(" 对输出内容进行有规则的过滤之后再输出到页面中")]),s._v(" "),_("h2",{attrs:{id:"csrf-跨站请求伪造"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#csrf-跨站请求伪造"}},[s._v("#")]),s._v(" CSRF 跨站请求伪造")]),s._v(" "),_("p",[_("code",[s._v("CSRF")]),s._v("，"),_("code",[s._v("Cross Site Request Forgery")]),s._v("，跨站请求伪造")]),s._v(" "),_("p",[_("code",[s._v("CSRF")]),s._v("是一种劫持受信任用户冒它来向服务器发送非预期请求的攻击方式")]),s._v(" "),_("p",[s._v("通常情况下，"),_("code",[s._v("CSRF")]),s._v("攻击是攻击者借助受害者的"),_("code",[s._v("cookie")]),s._v("骗取服务器的信任，在受害者不知情的情况下以受害者的名义伪造请求发送给服务器，对服务器来说请求时完全合法的，但是却达到了攻击者的目的，以受害者的名义去完成某些操作，如：购买商品、转账等")]),s._v(" "),_("p",[s._v("攻击者并不能通过"),_("code",[s._v("CSRF")]),s._v("攻击来直接获取用户的账户控制权，也不能直接窃取用户的任何信息。他们能做到的就是欺骗用户浏览器，让其以用户的名义运行操作")]),s._v(" "),_("h3",{attrs:{id:"csrf-的防范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#csrf-的防范"}},[s._v("#")]),s._v(" CSRF 的防范")]),s._v(" "),_("h4",{attrs:{id:"_1-验证-http-referer-字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-验证-http-referer-字段"}},[s._v("#")]),s._v(" 1. 验证 HTTP Referer 字段")]),s._v(" "),_("p",[_("code",[s._v("HTTP")]),s._v("头部有个字段叫做"),_("code",[s._v("Referer")]),s._v("，他记录了该"),_("code",[s._v("HTTP")]),s._v("请求的来源地址。服务器对每个请求进行验证，如果来源是自己网站域名则通过，否则拒绝")]),s._v(" "),_("h4",{attrs:{id:"_2-在请求中添加token"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-在请求中添加token"}},[s._v("#")]),s._v(" 2. 在请求中添加"),_("code",[s._v("token")])]),s._v(" "),_("h2",{attrs:{id:"资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#资料"}},[s._v("#")]),s._v(" 资料")]),s._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://github.com/dwqs/blog/issues/68",target:"_blank",rel:"noopener noreferrer"}},[s._v("浅说 XSS 和 CSRF"),_("OutboundLink")],1)]),s._v(" "),_("li",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/46592479",target:"_blank",rel:"noopener noreferrer"}},[s._v("前端安全系列之二：如何防止CSRF攻击？"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);