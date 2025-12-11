import { defineComponent, ref, reactive, computed } from 'vue'
import './JsxExample.css'

export default defineComponent({
  name: 'JsxExample',
  props: {
    title: {
      type: String,
      default: 'JSX 功能展示'
    }
  },
  setup(props) {
    // 响应式数据
    const count = ref(0)
    const visible = ref(true)
    const inputValue = ref('')
    
    // 列表数据
    const items = reactive([
      { id: 1, name: '苹果', color: '#ff6b6b' },
      { id: 2, name: '香蕉', color: '#ffd93d' },
      { id: 3, name: '葡萄', color: '#a29bfe' }
    ])
    
    // 表单数据
    const form = reactive({
      username: '',
      password: '',
      agree: false
    })
    
    // 计算属性
    const doubleCount = computed(() => count.value * 2)
    
    // 方法
    const increment = () => {
      count.value++
    }
    
    const decrement = () => {
      count.value--
    }
    
    const toggleVisible = () => {
      visible.value = !visible.value
    }
    
    const addItem = () => {
      if (inputValue.value.trim()) {
        items.push({
          id: Date.now(),
          name: inputValue.value,
          color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        })
        inputValue.value = ''
      }
    }
    
    const removeItem = (id) => {
      const index = items.findIndex(item => item.id === id)
      if (index > -1) {
        items.splice(index, 1)
      }
    }
    
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('表单提交:', form)
      alert(`用户名: ${form.username}\n密码: ${form.password}\n同意协议: ${form.agree}`)
    }
    
    // 渲染函数组件
    const CustomButton = (props, { slots }) => (
      <button
        class="custom-btn"
        style={{ backgroundColor: props.color || '#646cff' }}
        onClick={props.onClick}
      >
        {slots.default?.() || props.text || 'Button'}
      </button>
    )
    
    return {
      count,
      visible,
      inputValue,
      items,
      form,
      doubleCount,
      increment,
      decrement,
      toggleVisible,
      addItem,
      removeItem,
      handleSubmit,
      CustomButton
    }
  },
  
  render() {
    const {
      count,
      visible,
      inputValue,
      items,
      form,
      doubleCount,
      increment,
      decrement,
      toggleVisible,
      addItem,
      removeItem,
      handleSubmit,
      CustomButton
    } = this
    
    return (
      <div class="jsx-example">
        <h2>{this.title}</h2>
        
        {/* 1. 基本渲染和事件处理 */}
        <section class="section">
          <h3>1. 基本计数器</h3>
          <div class="counter">
            <button onClick={decrement}>-</button>
            <span class="count-display">Count: {count}</span>
            <button onClick={increment}>+</button>
            <p>双倍: {doubleCount}</p>
          </div>
        </section>
        
        {/* 2. 条件渲染 */}
        <section class="section">
          <h3>2. 条件渲染</h3>
          <button onClick={toggleVisible}>
            {visible ? '隐藏' : '显示'}内容
          </button>
          {visible && (
            <div class="content-box">
              <p>这是条件渲染的内容！</p>
              <p>当前显示状态: {visible ? '可见' : '隐藏'}</p>
            </div>
          )}
        </section>
        
        {/* 3. 列表渲染 */}
        <section class="section">
          <h3>3. 列表渲染</h3>
          <div class="list-controls">
            <input
              type="text"
              value={inputValue}
              onInput={(e) => { this.inputValue = e.target.value }}
              placeholder="输入水果名称"
            />
            <button onClick={addItem}>添加</button>
          </div>
          <ul class="fruit-list">
            {items.map(item => (
              <li key={item.id} style={{ borderLeftColor: item.color }}>
                <span style={{ color: item.color }}>●</span>
                <span class="item-name">{item.name}</span>
                <button
                  class="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  删除
                </button>
              </li>
            ))}
          </ul>
        </section>
        
        {/* 4. 表单处理 */}
        <section class="section">
          <h3>4. 表单处理</h3>
          <form onSubmit={handleSubmit} class="demo-form">
            <div class="form-item">
              <label>用户名:</label>
              <input
                type="text"
                value={form.username}
                onInput={(e) => { form.username = e.target.value }}
                placeholder="请输入用户名"
              />
            </div>
            <div class="form-item">
              <label>密码:</label>
              <input
                type="password"
                value={form.password}
                onInput={(e) => { form.password = e.target.value }}
                placeholder="请输入密码"
              />
            </div>
            <div class="form-item checkbox-item">
              <label>
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) => { form.agree = e.target.checked }}
                />
                同意用户协议
              </label>
            </div>
            <button type="submit" class="submit-btn">提交</button>
          </form>
        </section>
        
        {/* 5. 自定义组件和插槽 */}
        <section class="section">
          <h3>5. 自定义组件</h3>
          <div class="custom-buttons">
            <CustomButton text="默认按钮" onClick={() => alert('点击了默认按钮')} />
            <CustomButton color="#ff6b6b" onClick={() => alert('点击了红色按钮')}>
              红色按钮
            </CustomButton>
            <CustomButton color="#51cf66" onClick={() => alert('点击了绿色按钮')}>
              绿色按钮
            </CustomButton>
          </div>
        </section>
        
        {/* 6. 三元表达式和复杂逻辑 */}
        <section class="section">
          <h3>6. 动态样式和类名</h3>
          <div
            class={{
              'status-box': true,
              'active': count > 5,
              'warning': count > 10
            }}
            style={{
              backgroundColor: count > 10 ? '#ff6b6b' : count > 5 ? '#ffd93d' : '#e9ecef',
              padding: '15px',
              borderRadius: '8px',
              transition: 'all 0.3s'
            }}
          >
            <p>
              计数状态: {
                count > 10 ? '⚠️ 警告' :
                count > 5 ? '✓ 激活' :
                '○ 正常'
              }
            </p>
            <p>当前值: {count}</p>
          </div>
        </section>
      </div>
    )
  }
})
