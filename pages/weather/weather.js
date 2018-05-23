// pages/weather/weather.js
const app = getApp()
Page({
  data: {
    allAirtical: [],
    date:"2018-05-23",
    endDay:"",
    imgUrls: ["http://img2.imgtn.bdimg.com/it/u=3588772980,2454248748&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=2801862717,279628383&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=1293919120,3114443152&fm=27&gp=0.jpg"],
    weather: null
  },
  onLoad: function (options) {
    this.getEndDay()
    this.getHistory()
  },
  onShow: function () {
    // this.getLocation()
    // this.getDouBan()

  },
  getEndDay(){
    let  myDate = new Date()
    let endday=myDate.toLocaleDateString()
    this.setData({
      endDay:endday
      
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
  bindTimeChange(e) {
    this.setData({
      date: e.detail.value
    })
    wx.navigateTo({
      url: '../history/history?date='+e.detail.value,
    })

  },
  
 
})