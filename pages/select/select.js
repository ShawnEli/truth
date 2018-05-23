// pages/select/select.js
Page({
 

  /**
   * 页面的初始数据
   */
  data: {
    date: "2018-05-23",
  
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
 
  getAriticle() {
    app.post("https://interface.meiriyiwen.com/article/today?dev=1").then((res) => {
      // var con = res.data.content.replace(/<p>/g, "<view>").replace(/<\/p>/g, "</view>")
      let con = res.data.content.replace(/<p>/g, "");
      let content = con.split("</p>");
      // console.log(content)
      this.setData({
        title: res.data.title,
        author: res.data.author,
        digest: res.data.digest,
        content: content
      })


    })


  },

})