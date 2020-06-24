Page({
  data: {},
  basic() {
    wx.navigateTo({
      url: '/pages/basic/basic',
    })
  },
  propagation() {
    wx.navigateTo({
      url: '/pages/propagation/propagation',
    })
  },
  requireFailure() {
    wx.navigateTo({
      url: '/pages/requireFailure/requireFailure',
    })
  },
  photo() {
    wx.navigateTo({
      url: '/pages/photo/photo',
    })
  }
})
