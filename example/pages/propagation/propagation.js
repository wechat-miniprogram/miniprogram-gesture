Component({
  properties: {},
  data: {
    propagation: false
  },
  methods: {
    handlePropagation() {
      const {
        propagation
      } = this.data
      this.setData({
        propagation: !propagation
      })
    }
  }
})
