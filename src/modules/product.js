export default {
  name: 'product',
  data: {
    id: 101,
    title: 'MacBook Pro',
    price: 12999,
    stock: 50
  },
  actions: {
    addToCart() {
      console.log('添加到购物车')
    },
    buy() {
      console.log('立即购买')
    }
  }
}
