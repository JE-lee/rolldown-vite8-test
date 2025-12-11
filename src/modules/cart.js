export default {
  name: 'cart',
  data: {
    items: [],
    total: 0
  },
  actions: {
    add(item) {
      console.log('添加商品:', item)
    },
    remove(itemId) {
      console.log('移除商品:', itemId)
    },
    clear() {
      console.log('清空购物车')
    }
  }
}
