<script>
import { ref, reactive, defineComponent } from 'vue'
// import Schema from 'async-validator'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const count = ref(0)
    
    // 表单数据
    const formData = reactive({
      name: '',
      email: '',
      age: ''
    })
    
    // 验证错误信息
    const errors = reactive({
      name: '',
      email: '',
      age: ''
    })
    
    // 定义验证规则
    const descriptor = {
      name: [
        { required: true, message: '姓名不能为空' },
        { min: 2, max: 20, message: '姓名长度应在2-20个字符之间' }
      ],
      email: [
        { required: true, message: '邮箱不能为空' },
        { type: 'email', message: '请输入有效的邮箱地址' }
      ],
      age: [
        { required: true, message: '年龄不能为空' },
        { type: 'number', transform: (value) => Number(value), message: '年龄必须是数字' },
        { type: 'number', min: 1, max: 150, message: '年龄必须在1-150之间' }
      ]
    }
    
    // const validator = new Schema(descriptor)
    
    // 验证表单
    const validateForm = () => {
      // 清空之前的错误
      errors.name = ''
      errors.email = ''
      errors.age = ''
      
      // validator.validate(formData, (errs, fields) => {
      //   if (errs) {
      //     errs.forEach(err => {
      //       errors[err.field] = err.message
      //     })
      //     console.log('验证失败:', fields)
      //   } else {
      //     console.log('验证成功:', formData)
      //     alert('验证通过！')
      //   }
      // })
    }
    
    return {
      count,
      formData,
      errors,
      validateForm
    }
  }
})
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <!-- async-validator 表单验证示例 -->
    <div class="form-container">
      <h2>表单验证示例 (async-validator)</h2>
      
      <div class="form-group">
        <label>姓名:</label>
        <input v-model="formData.name" type="text" placeholder="请输入姓名" />
        <span class="error" v-if="errors.name">{{ errors.name }}</span>
      </div>
      
      <div class="form-group">
        <label>邮箱:</label>
        <input v-model="formData.email" type="text" placeholder="请输入邮箱" />
        <span class="error" v-if="errors.email">{{ errors.email }}</span>
      </div>
      
      <div class="form-group">
        <label>年龄:</label>
        <input v-model="formData.age" type="text" placeholder="请输入年龄" />
        <span class="error" v-if="errors.age">{{ errors.age }}</span>
      </div>
      
      <button @click="validateForm" class="validate-btn">验证表单</button>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Learn more about IDE Support for Vue in the
      <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
        >Vue Docs Scaling up Guide</a
      >.
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.form-container {
  max-width: 400px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-container h2 {
  margin-top: 0;
  color: #333;
  font-size: 1.2em;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #646cff;
}

.error {
  display: block;
  margin-top: 5px;
  color: #ff4444;
  font-size: 12px;
}

.validate-btn {
  width: 100%;
  padding: 10px;
  background-color: #646cff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.validate-btn:hover {
  background-color: #535bf2;
}
</style>
