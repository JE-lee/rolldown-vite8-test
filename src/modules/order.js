export default {
  name: 'order',
  data: {
    id: 1001,
    orderNumber: 'ORD20251210001',
    status: 'pending',
    total: 12999
  },
  actions: {
    pay() {
      console.log('支付订单')
    },
    cancel() {
      console.log('取消订单')
    }
  }
}
