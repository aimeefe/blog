# webpack4

## 图片处理

### 方法一：file-loader

#### 安装

```javascript 
npm run file-loader -D
```

#### 使用

```javascript
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            // 打包后的图片名称：原始图片名.hash值.原始后缀名
            name: '[name].[hash].[ext]',
            // 打包到 images 路径下
            outputPath: 'images/'
          }
        }
      }
    ]
  }
}
```

### 方法二：url-loader

#### 安装

```javascript 
npm run url-loader -D
```

#### 使用

```javascript
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 打包后的图片名称：原始图片名.hash值.原始后缀名
            name: '[name].[hash].[ext]',
            // 打包到 images 路径下
            outputPath: 'images/',
            limit: 1024
          }
        }
      }
    ]
  }
}
```

- limit

超出 limit 限制的大小，会以图片的形式被打包到`dist 目录`，反之被转化成`base64`插入到`js 文件中`

## 样式处理

### css

#### 安装

```javascript 
npm run css-loader style-loader -D
```

#### 使用

```javascript
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: {
          loader: 'style-loader css-loader'
        }
      }
    ]
  }
}
```

- css-loader：

分析出各段 css 代码之间的关系，最终合并成生成一个 css

- style-loader

得到 css-loader 内容后，将其挂载到`html 中的 head上`


### scss

#### 安装

```javascript 
npm run sass-loader node-sass -D
```

#### 使用

```javascript
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: {
          loader: ['style-loader', 'css-loader', 'sass-loader']
        }
      }
    ]
  }
}
```

loader 执行顺序：从右到左

### postcss

自动给 css3 样式加`-webkit-，-moz-`等浏览器前缀

#### 安装

```javascript 
npm run postcss-loader -D
```

#### 使用

```javascript
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      }
    ]
  }
}
```

新建 postcss.config.js 文件，配置如下：

```javascript
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

## html 处理

### 自动生成 html

`html-webpack-plugin` 会在打包结束后自动生成一个 html 文件，并把打包生成的 js 文件自动引入到这个 html 文件中

##### 安装

```javascript
cnpm install html-webpack-plugin -D
```

##### 使用

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // ...
   plugins: [
    //自动生成html
    new HtmlWebpackPlugin({
      // 模板
      template: 'public/index.html'
    }),
  ]
}

```

这样配置就会自动在 dist 目录生成一个 html 文件。

### 自动清除打包目录

`clean-webpack-plugin` 会在打包前清空打包目录

##### 安装

```javascript
cnpm install clean-webpack-plugin -D
```

##### 使用

```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // ...
   plugins: [
    // 打包前清理打包目录
    new CleanWebpackPlugin()
  ]
}

```

## devServer 和 HMR

`webpack-dev-server`可以帮我们在本地开启一个服务器

##### 安装

```javascript
cnpm install webpack-dev-server -D
```

##### 使用

```javascript
module.exports = {
  // ...
  devServer: {
    // 目标目录
    contentBase: 'dist',
    // 自动打开浏览器
    open: true,
    // 端口号
    port: 9999
  },
}
```

以上这种配置，会在我们内容有修改时，`自动刷新页面`把最新内容展示在页面上。

通过`热更新配置`可以实现部分刷新，而不是每次有修改就整体刷新页面，配置如下：


```javascript
+ const webpack = require('webpack')

module.exports = {
  // ...
  devServer: {
    // 目标目录
    contentBase: 'dist',
    // 自动打开浏览器
    open: true,
    // 端口号
    port: 9999,
    // 开启 HMR
  + hot: true,
    // 即使 HMR 没生效也不刷新页面
  + hotOnly: true
  },

  plugins: [
    // HMR
   + new webpack.hotModuleReplacementPlugin()
  ]
}


```

## babel 处理 js

##### 安装

```javascript
cnpm install babel-loader @babel/core @babel/preset-env -D
```
- @babel/core

babel 的核心代码，可以帮助 webpack 去识别 js 代码里的内容，然后把 js 代码转换为 AST 抽象语法树，再把抽象语法树编译转化成新的语法出来

- @babel/preset-env

把 es6 语法翻译成 es5 语法

##### 使用

```javascript

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
          // 不包含
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ] 
  }  
}
```

有些新版本对象或函数即使做了语法翻译，但是在低版本浏览器还是不存在的，所以我们不仅要用`@babel/preset-env`来翻译新语法还需要`@babel/pollyfill`将缺失的语法补充到低版本的浏览器里，如下：

##### 安装

```javascript
cnpm install @babel/polyfill -S
```
##### 使用

在需要的js文件顶部引入 polyfill 即可（如果配置了useBuiltIns: 'usage' ，会自动注入需要的内容，无需这样手动引入）

```javascript
import "@babel/polyfill";
```

这样打包后会把 polyfill 所有的东西都打包进去，造成文件过大、冗余，我们可以通过以下方法解决：


```javascript

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
          // 不包含
          exclude: /node_modules/,
          loader: 'babel-loader',
          // options 里面的配置也可以放到根目录下的.babelrc 文件中
          options: {
            presets: [['@babel/preset-env', { useBuiltIns: 'usage' }]]
          }
        }
      }
    ] 
  }  
}
```

- useBuiltIns: 'usage' 

使用`useBuiltIns: 'usage' `可以让我们在打包的时候根据业务需求自动注入`polyfill`对应的内容（按需引入）

## 代码分割

代码分割（code splitting）可以让代码分割到不同的文件（bundle）中，以便按需或者并行加载这些文件。代码分割可以得到更小的文件，控制资源加载的优先级。如果使用得当，更是可以优化加载的时间。

## 分离 css

`mini-css-extract-plugin`插件可以使 css 从 html 中分离出来，但是这个插件暂时不支持 HMR，所以一般用在 production 环境中

##### 安装

```javascript
cnpm install mini-css-extract-plugin -D
```

##### 使用

```javascript
module.exports = {
 module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          + loader: MiniCssExtractPlugin.loader
        }, 'css-loader', 'sass-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // css 文件名，会被引入到 html 中
      filename: '[name].[hash:6].css',
      // 如果不直接被引入到 html 中就会走chunkFilename 这个文件名
      chunkFilename: '[name].chunks.css'
    })
  ]
}
```

## 别名

`resolve.alias` 可以帮我们创建 import 或 require 的别名，来确保模块引入变得更简单。例如，引用某个组件路径会由`../../../src/components/loading`变为`components/loading`

```javascript
// 解析：配置模块如何解析
module.exports = {
  // ...
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../src/components/'),
      config: path.resolve(__dirname, '../src/config/'),
      // ...
    }
  }
}
```

## 扩展名

`resolve.extensions`可以解析确定的扩展，使用户在引入模块的时候可以省略像`.js、.css`之类的扩展名

```javascript
module.exports = {
  // ...
  resolve: {
    extensions: ['scss', 'css', '.js', 'json']
  }
}
```

## dll

项目中如果引用了`react/react-dom`这种第三方模块的时候，webpack 都要从 node_modules里边取出模块，然后每次打包到代码中，这个过程会消耗一定的打包时间。而这些第三方库的代码基本上不会变动。

dll 可以帮我们在第一次打包的时候把他们生成一个文件存起来，再次打包的时候就可以直接用存起来的代码都不再去分析并重新打包这些库了，从而节省了打包时间


新建`webpack.dll.js`，文件，

```javascript
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    // 包含所有第三方模块的代码
    vendors: [
      'vue/dist/vue.common.js',
      'vuex',
      'vue-router',
      'vue-beauty',
      'axios',
      'vue-clipboard2',
      'xlsx',
      'md5',
      'js-base64']
  },
  output: {
    filename: '[name].dll.js',
    // publicPath: 'https://test.oss-cn-shenzhen.aliyuncs.com/dll/',
    path: path.resolve(__dirname, '../dll'),
    // 把第三方模块所有代码通过全局变量暴露出去
    library: '[name]'
  },
  plugins: [
    // 借助 dllPlugin 插件对暴露的模块代码做分析，生成 manifest.json 映射关系
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, '../dll/[name].manifest.json')
    })
  ]
}
```

打开 `package.json`，增加 dll 编译的命令

```javascript
"scripts": {
    "start": "webpack-dev-server --config ./build/webpack.common.js",
    "dev": "webpack --config ./build/webpack.common.js",
    "build": "webpack --env.production --config ./build/webpack.common.js",
   + "build:dll": "webpack --config ./build/webpack.dll.js"
  },
```

通过 `npm run build:dll` 生成`vendors.dll.js 和 manifest.json` 文件

打开 `webpack.common.js`文件，

```javascript
plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),

    // 在 html 上再加些静态资源
   + new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dll/vendors.dll.js')
    }),

   + new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll/vendors.manifest.json')
    })
  ],
```

webpack.DllReferencePlugin 这个插件可以结合 dll 生成的 json 和 js 文件 和 引入的第三方模块进行分析，如果发现处理过了的第三方模块就不再重新进行分析打包了