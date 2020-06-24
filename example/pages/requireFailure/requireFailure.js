Component({
  data: {
    log: [],
    requireFailure: true
  },
  methods: {
    singleTap(e) {
      console.warn('single tap', e)

      const {
        log
      } = this.data
      log.push('single tap triggered')
      this.setData({
        log
      })
    },
    doubleTap(e) {
      console.warn('double tap', e)

      const {
        log
      } = this.data
      log.push('double tap triggered')
      this.setData({
        log
      })
    },
    handletap() {
      const {
        requireFailure
      } = this.data
      this.setData({
        requireFailure: !requireFailure
      })
    }
  }
})
