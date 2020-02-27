const fs = require('fs')
const path = require('path')
const notesRoot = path.join(__dirname, "../../", 'notes');
const navConfig = [{ text: 'Github', link: 'https://google.com', target: '_blank' }]


/** 
 * 是否是目录
 */
const isDirectory = name => {
  return fs.statSync(name).isDirectory()
}

/**
 * 是否是.md文件
 */
const isMd = name => {
  return path.extname(name) === '.md'
}

/**
 * 去掉扩展名
 */
const delExtname = extname => {
  return isMd(extname) ? extname.split('.md')[0] : null
}

/**
 * 获取笔记路径
 * @param /Users/aimme/liuying/self/blog/docs/notes/00.前端/01.HTML5
 * @returns /docs/notes/00.前端/01.HTML5/
 */
const getNotesPath = dirname => {
  return `/notes${dirname.slice(notesRoot.length)}/`
}

/**
 * 侧边栏
 * @returns result: {'/notes/01.框架/02.Vue/': [ 'Vue核心原理解析.md', '2.md', '3.md...' ], ...}
 */
const sidebar = dirname => {
  let items = []
  const silderKey = getNotesPath(dirname)

  return fs.readdirSync(dirname).reduce((result, dir) => {
    const childDir = dirname + '/' + dir

    if (isDirectory(childDir) && childDir !== 'images') {
      Object.assign(result, sidebar(childDir))
    } else {
      if (isMd(dir)) {
        items.push(dir)
        result[silderKey] = items
      }
    }
    return result
  }, {})
}

/**
 * 主菜单: 菜单只取前两级，链接默认取最终包含.md的文件夹中的第一个.md文件
 * @returns [{text: 'level1', items: [{text: 'level2', link: '/notes/Vue/'},...]}, {text: 'level2', link: '/notes/Vue/Vue原理解析'}]
 */
const navs = () => {
  let navs = []
  let items = sidebar(notesRoot)
  // 数据解析
  for (let dir in items) {
    // /notes/前端/JavaScript/
    const link = delExtname(items[dir][0])
    const dirArr = dir.slice(7, -1).split('/')
    const [level1, level2] = dirArr;

    if (dirArr.length > 1) {
      // 有二级菜单，
      navs.push({
        text: level1,
        items: [{
          text: level2,
          link: `/notes/${level1}/${level2}/${link}`
        }]
      })
    } else {
      navs.push({
        text: level1,
        link: `/notes/${level1}/${link}`
      })
    }
  }
  // 数据重组
  return navs.reduce((result, cur) => {
    const r = result.find(i => i.text === cur.text)

    r ? r.items.push(...cur.items) : result.push(cur)
    return result
  }, [])
}

module.exports = {
  nav: navs(notesRoot).concat(navConfig),
  sidebar: sidebar(notesRoot)
}