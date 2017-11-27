
var API_URL = "https://api.douban.com/v2/movie/search"

// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  search:function(e){
    if(!e.detail.value){
      return;
    }
    wx.showToast({
      title: '加载中...',
      icon: "loading",
      duration: 10000,
    })
    var that = this;
    wx.request({
      url: API_URL+"?q="+e.detail.value,
      data: {},
      header: {
        'content-type': 'json' // 默认值，版本升级后，写法不是'application/json'
      },
      success: function (res) {
        wx.hideToast();
        var data = res.data;
        that.setData({
          title: data.title,
          movies: data.subjects
        });
      }
    });
  },
  
})