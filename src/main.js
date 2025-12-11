import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style.css'
import App from './App.vue'
import _ from 'lodash'

Vue.use(ElementUI)

// Test third-party CommonJS module (lodash)
console.log('CommonJS module test (lodash):')
console.log('Sum:', _.sum([1, 2, 3, 4, 5]))
console.log('Chunk:', _.chunk(['a', 'b', 'c', 'd'], 2))

new Vue({
  render: h => h(App)
}).$mount('#app')
