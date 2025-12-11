export default {
  name: 'user',
  data: {
    id: 1,
    username: '张三',
    email: 'zhangsan@example.com',
    role: 'admin'
  },
  actions: {
    login() {
      console.log('用户登录')
    },
    logout() {
      console.log('用户登出')
    }
  }
}
