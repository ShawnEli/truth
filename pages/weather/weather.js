// pages/weather/weather.js
const app = getApp()
Page({
  data: {
    allAirtical: [],
    weather: null,
    showCalendar: false,
    maskShow: false,
    chooseDate: '',
  },
  onLoad: function (options) {
    this.getEndDay()
    this.getHistory()
  },
  onShow: function () {
  
  },
  closeShow(e) {
    this.setData({
      maskShow: false,
      showCalendar: false
    })
  },
  getEndDay(){
    let  myDate = new Date()
    let endday=myDate.toLocaleDateString()
    this.setData({
      endDay:endday
      
    })
    

  },
  show(e){
      console.log(e)
      this.setData({
          chooseDate: e.detail.re
      })
  },
  showDate() {
    this.setData({
      showCalendar: !this.data.showCalendar,
      maskShow: true
    })
  },
  getHistory() {
    var myDate = new Date()
    var time = myDate.getTime()
    var a = []
    var all=[]
    for (var i = 0; i < 10; i++) {
      var d = new Date(time - 86400000 * i)
      a.push(d)
    }

    for (let i in a) {
      let year = a[i].getFullYear()
      let month = a[i].getMonth() + 1
      let day = a[i].getDate()
      month = month >= 10 ? month : "0" + month
      day = day >= 10 ? day : "0" + day
      a[i] = year + month + day
    

      let url = "https://interface.meiriyiwen.com/article/day?dev=1&date=" + a[i]
      app.post(url).then((res) => {
        // console.log(res)
        all.push(res.data)
        this.setData({
          allAirtical: all
        })
      })
 
    }
   
  },

  next(e) {
    // console.log(e)
    let id = e.currentTarget.dataset.id
    console.log(id)
    app.globalData.hhh = this.data.allAirtical
    wx.navigateTo({
      url: '../history/history?id='+id,
    })

  },
  
 
})