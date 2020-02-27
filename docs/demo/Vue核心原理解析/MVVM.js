/**
 * 第1步：编译模板（根元素存在）
 *   1.1：把节点移到内存中
 *   1.2：把节点中的内容（表达式）进行替换
 *      1.2-1：获取到元素节点，把「文本节点」和「元素节点」做不同处理
 *             元素节点：遍历属性，解析出 “v-” 指令
 *             文本节点：遍历属性，解析出 ”{{}}“
 *      1.2-2：
 *   1.3：把内存中的内容塞回页面
 * 
 * 
 * */
class Vue {
  constructor(options) {
    this.$el = options.el
    this.$data = options.data

    // 编译模板
    if (this.$el) {
      // 把数据全部转化为用 Object.defineProperty来的定义
      new Observer(this.$data)
      // 编译模板
      new Compiler(this.$el, this)
    }
  }
}

// 数据劫持处理
class Observer {
  constructor(data) {
    // 观察数据
    this.observer(data)
  }
  observer(data) {
    // 如果是对象才观察
    if (data && typeof data === 'object') {
      for (let key in data) {
        this.defineReactive(data, key, data[key])
      }
    }
  }
  defineReactive(obj, key, value) {
    // 深度观察数据
    this.observer(value)
    // 监测每个属性，给每个属性都加一个具有发布订阅的功能
    let dep = new Dep()
    Object.defineProperty(obj, key, {
      get() {
        // 创建 watcher 时，会取到对应的内容，并把 watcher 放到全局上
        Dep.target && dep.subs.push(Dep.target)
        return value
      },
      set: newVal => {
        if (newVal !== value) {
          // 如果新赋的值是一个对象，则需要对新值进行检测
          this.observer(newVal)
          value = newVal
          // 数据有变化时，依次调用 dep 中存放 watcher 的 update 方法，将值更新，渲染到页面上 （数据变化通知到视图）
          dep.notify()
        }
      }
    })
  }
}

// 发布订阅 - 观察者
// vm.$watch(vm, 'school.name', newVal => {...})
class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm
    this.expr = expr
    this.cb = cb
    // 默认存放一个老值
    this.oldValue = this.get()
  }
  get() {
    // 先把自己放在 this 上
    Dep.target = this
    // 取值，把这个观察者和数据关联起来
    let value = CompileUtil.getVal(this.vm, this.expr)
    Dep.target = null
    return value
  }
  // 更新操作，数据变化后，会调用观察者的 update 方法
  update() {
    let newVal = CompileUtil.getVal(this.vm, this.expr)
    if (newVal !== this.oldValue) {
      this.cb(newVal)
    }
  }
}

// 发布订阅 - 被观察者，数据发生改变后依次通知观察者进行更新
class Dep {
  constructor() {
    // 存放所有的 watcher
    this.subs = []
  }
  // 订阅
  addSub(watcher) {
    this.subs.push(watcher)
  }
  // 发布
  notify() {
    this.subs.forEach(watcher => watcher.update())
  }
}

// 模板编译
class Compiler {
  constructor(el, vm) {
    this.vm = vm
    // 判断 el 属性是否是元素，如果不是元素则获取
    this.el = this.isElementNode(el) ? el : document.querySelector(el)  // #app
    // 获取当前元素，放到内存中（文档碎片，减少重绘回流）
    let fragment = this.node2fragment(this.el)
    // 编译模板：用数据替换节点中的表达式
    this.compile(fragment)
    // 把内容塞回页面中
    this.el.appendChild(fragment)
  }

  // 是否是元素节点
  isElementNode(node) {
    return node.nodeType === 1
  }


  // 把元素节点移到内存中
  node2fragment(node) {
    let firstChild
    let fragment = document.createDocumentFragment()
    while (firstChild = node.firstChild) {
      fragment.appendChild(firstChild)
    }
    return fragment
  }

  // 核心的编译方法：编译内存中的 dom 节点
  compile(node) {
    //v-, {{}}
    let childNodes = node.childNodes;
    [...childNodes].forEach(child => {
      // 节点和元素做不同处理
      // 元素节点处理 - 第一层节点，nodeType: 1 - 元素，3: 文本
      if (this.isElementNode(child)) {
        this.compileElement(child)
        // 如果是元素的话，需要把自己传进去，再去遍历该元素的子节点
        this.compile(child)
      } else {
        // 文本处理
        this.compileText(child)
      }
    })
  }

  // 编译元素
  compileElement(node) {
    // NamedNodeMap { 0: type, 1: v - model, type: type, v - model: v - model, length: 2 }
    let attributes = node.attributes;
    [...attributes].forEach(attr => {
      // type = 'text' v-model='school.name'
      let { name, value: expr } = attr
      // 判断是否是指令
      if (this.isDirective(name)) {
        let [, directive] = name.split('-')
        // 指令处理
        CompileUtil[directive](node, expr, this.vm)
      }
    })
  }

  // 编译文本
  compileText(node) {
    let content = node.textContent
    // 找到所有包含大括号的文本
    if (/\{\{(.+?)\}\}/.test(content)) {
      // 文本节点处理
      CompileUtil['text'](node, content, this.vm)
    }
  }

  // 判断是否是指令
  isDirective(attrName) {
    return attrName.startsWith('v-')
  }
}
/**
 * 针对指令做不同处理
 * node：节点，expr：指令，vm：当前实例
 */
CompileUtil = {
  // v-model 指令处理，给输入框赋予 value 属性，node.value = xxx
  model(node, expr, vm) {
    let value = this.getVal(vm, expr)
    // 给输入框加观察者，一旦数据更新了就会触发此方法，赋新值给输入框
    new Watcher(vm, expr, newVal => {
      this.updater['modelUpdater'](node, newVal)
    })
    // 视图驱动数据处理：监听 input 事件，用输入的值来更新数据
    node.addEventListener('input', e => {
      let value = e.target.value
      this.setValue(vm, expr, value)
    })
    this.updater['modelUpdater'](node, value)
  },
  // v-html 指令处理，node.innerHtml = xxx
  html() {

  },
  // v-text 指令处理
  // expr: {{a}} {{b}} {{c}}...
  text(node, expr, vm) {
    let content = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      // 给表达式每个{{}}加观察者，
      // new Watcher(vm, args[1], newVal => {

      // })
      return this.getVal(vm, args[1])  //args[1]：school.name
    })
    this.updater['textUpdater'](node, content)
  },
  // 更新操作
  updater: {
    modelUpdater(node, value) {
      node.value = value
    },
    htmlUpdater() { },
    textUpdater(node, value) {
      node.textContent = value
    }
  },
  // 取值操作
  getVal(vm, expr) {
    //expr: school.name
    return expr.split('.').reduce((data, current) => {
      return data[current]
    }, vm.$data)
  },
  // 赋值操作
  setValue(vm, expr, value) {
    return expr.split('.').reduce((data, current, index, arr) => {
      if (index === arr.length - 1) {
        return data[current] = value
      }
    }, vm.$data)
  }
}



