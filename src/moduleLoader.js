// 使用 require.context 自动导入 modules 目录下的所有 .js 文件
const modulesContext = require.context('./modules', true, /\.js$/)

// 获取所有模块
export function loadAllModules() {
  const modules = {
    files: [],
    data: {}
  }
  
  modules.files = modulesContext.keys()
  
  modulesContext.keys().forEach(fileName => {
    const moduleName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    const moduleConfig = modulesContext(fileName).default
    modules.data[moduleName] = moduleConfig
  })
  
  return modules
}

// 扫描组件目录
const componentsContext = require.context('./components', true, /\.vue$/)

export function loadComponentsInfo() {
  return {
    totalComponents: componentsContext.keys().length,
    componentNames: componentsContext.keys().map(key => 
      key.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  }
}
