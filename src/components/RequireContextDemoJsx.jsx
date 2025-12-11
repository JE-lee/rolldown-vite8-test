import { defineComponent, reactive } from 'vue'
import { loadAllModules, loadComponentsInfo } from '../moduleLoader.js'
import './RequireContextDemo.css'

export default defineComponent({
  name: 'RequireContextDemo',
  setup() {
    // 示例 1: 自动导入所有模块文件
    const loadedModules = loadAllModules()
    const modules = reactive({
      files: loadedModules.files,
      data: loadedModules.data
    })
    
    // 示例 2: 动态导入组件（模拟场景）
    const loadedComponentInfo = loadComponentsInfo()
    const componentInfo = reactive({
      totalComponents: loadedComponentInfo.totalComponents,
      componentNames: loadedComponentInfo.componentNames
    })
    
    // 方法：执行模块的 action
    const executeAction = (moduleName, actionName) => {
      const module = modules.data[moduleName]
      if (module && module.actions && module.actions[actionName]) {
        module.actions[actionName]()
        console.log(`执行了 ${moduleName}.${actionName}()`)
      }
    }
    
    return () => (
      <div class="require-context-demo">
        <h2>requireContext 功能展示</h2>
        
        {/* 示例 1: 显示自动加载的模块 */}
        <section class="demo-section">
          <h3>📦 自动加载的模块</h3>
          <p class="description">
            使用 <code>requireContext('./modules', false, /\.js$/)</code> 
            自动加载了 {Object.keys(modules.data).length} 个模块
          </p>
          
          <div class="file-list">
            <h4>文件列表:</h4>
            <ul>
              {modules.files.map(file => (
                <li key={file}><code>{file}</code></li>
              ))}
            </ul>
          </div>
          
          <div class="modules-grid">
            {Object.entries(modules.data).map(([name, module]) => (
              <div key={name} class="module-card">
                <h4>{module.name}</h4>
                <div class="module-data">
                  <strong>数据:</strong>
                  <pre>{JSON.stringify(module.data, null, 2)}</pre>
                </div>
                <div class="module-actions">
                  <strong>操作:</strong>
                  <div class="action-buttons">
                    {Object.keys(module.actions).map(actionName => (
                      <button
                        key={actionName}
                        onClick={() => executeAction(name, actionName)}
                        class="action-btn"
                      >
                        {actionName}()
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* 示例 2: 组件扫描信息 */}
        <section class="demo-section">
          <h3>🔍 组件扫描</h3>
          <p class="description">
            使用 <code>requireContext('./components', false, /\.vue$/)</code>
            扫描到 {componentInfo.totalComponents} 个 Vue 组件
          </p>
          
          <div class="component-list">
            {componentInfo.componentNames.map(name => (
              <div key={name} class="component-tag">{name}</div>
            ))}
          </div>
        </section>
        
        {/* 使用场景说明 */}
        <section class="demo-section info-section">
          <h3>💡 requireContext 使用场景</h3>
          <ul class="use-cases">
            <li>🔸 自动化路由注册 - 扫描 views 目录自动生成路由配置</li>
            <li>🔸 动态组件加载 - 批量导入组件并注册到全局</li>
            <li>🔸 模块化管理 - 自动加载 Vuex 模块、API 接口等</li>
            <li>🔸 国际化文件 - 批量导入语言包文件</li>
            <li>🔸 图标库管理 - 自动加载 SVG 图标</li>
            <li>🔸 插件系统 - 动态发现和加载插件</li>
          </ul>
          
          <div class="code-example">
            <h4>代码示例:</h4>
            <pre><code>{`// 加载所有 .js 文件
// 这里的 ctx 由插件注入，用于模拟 requireContext 行为
const modules = ctx('./modules', false, /\.js$/)

// 遍历所有文件
modules.keys().forEach(fileName => {
  const module = modules(fileName).default
  // 使用模块...
})

// API 说明
// - 参数1: 目录路径
// - 参数2: 是否递归搜索子目录
// - 参数3: 匹配文件的正则表达式`}</code></pre>
          </div>
        </section>
      </div>
    )
  }
})
