// pages/history/history.js
const app = getApp()
Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    all:[],
    id:'',
    title:"",
    author:"",
    content:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // console.log(options)
    if(options.id !=null){
      this.setData({
        all: app.globalData.hhh,
        id: options.id,
      })
      let all = this.data.all
      let id = this.data.id
      let con = all[id].content.replace(/<p>/g, "");
      let content = con.split("</p>");
      this.setData({
        title: all[id].title,
        author: all[id].author,
        content: content,
      })
    }
    if(options.date !=null){
      let date=options.date.replace(/-/g, "")
      
      let url = "https://interface.meiriyiwen.com/article/day?dev=1&date=" +date
      app.post(url).then((res) => {
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
    }
    
    
    console.log(this.data.id)
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
    // let all=this.data.all
    // let id=this.data.id
    // let con =all[id].content.replace(/<p>/g, "");
    // let content = con.split("</p>");
    // this.setData({
    //   title: all[id].title,
    //   author: all[id].author,
    //   content: content,
    // })
  
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
  
  }
})