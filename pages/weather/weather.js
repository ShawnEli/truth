// pages/weather/weather.js
const app = getApp()
Page({
  data: {
    allAirtical: [],

    city: [
      {
        "ID": "999",
        "cityName": "杭州",
        "cityEN": "Hangzhou",
        "townID": "CHZJ000000",
        "townName": "杭州",
        "townEN": "Hangzhou"
      },
      {
        "ID": "1000",
        "cityName": "杭州",
        "cityEN": "Hangzhou",
        "townID": "CHZJ000100",
        "townName": "萧山",
        "townEN": "Xiaoshan"
      },
      {
        "ID": "1001",
        "cityName": "杭州",
        "cityEN": "Hangzhou",
        "townID": "CHZJ000200",
        "townName": "桐庐",
        "townEN": "Tonglu"
      },
      {
        "ID": "1002",
        "cityName": "杭州",
        "cityEN": "Hangzhou",
        "townID": "CHZJ000300",
        "townName": "淳安",
        "townEN": "Chunan"
      },
      {
        "ID": "1003",
        "cityName": "杭州",
        "cityEN": "Hangzhou",
        "townID": "CHZJ000400",
        "townName": "建德",
        "townEN": "Jiande"
      },
      {
        "ID": "1004",
        "cityName": "杭州",
        "cityEN": "Hangzhou",
        "townID": "CHZJ000500",
        "townName": "余杭",
        "townEN": "Yuhang"
      },
      {
        "ID": "1005",
        "cityName": "杭州",
        "cityEN": "Hangzhou",
        "townID": "CHZJ000600",
        "townName": "临安",
        "townEN": "Linan"
      },
      {
        "ID": "1006",
        "cityName": "杭州",
        "cityEN": "Hangzhou",
        "townID": "CHZJ000700",
        "townName": "富阳",
        "townEN": "Fuyang"
      },
    ],
    imgUrls: ["http://img2.imgtn.bdimg.com/it/u=3588772980,2454248748&fm=27&gp=0.jpg", "http://img0.imgtn.bdimg.com/it/u=2801862717,279628383&fm=27&gp=0.jpg", "http://img4.imgtn.bdimg.com/it/u=1293919120,3114443152&fm=27&gp=0.jpg"],
    weather: null
  },
  onLoad: function (options) {
    this.getHistory()
  },
  onShow: function () {
    // this.getLocation()
    // this.getDouBan()

  },
  getHistory() {
    var myDate = new Date()
    var time = myDate.getTime()
    var a = []
    var all=[]
    for (var i = 0; i < 20; i++) {
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

  }
  // getWeather(lng, lat) {

  //     let loc = lng + "," + lat
  //     console.log(loc)
  //     let param = {
  //         location: loc,
  //         key: "6aea1b5df93942b09b087dbdce871783"
  //     }
  //     app.post("https://free-api.heweather.com/s6/weather/now", param).then((res) => {
  //         this.setData({
  //             weather: res.HeWeather6[0]
  //         })
  //     })
  // },
  // getLocation: function () {
  //     let that = this;
  //     wx.getLocation({
  //         type: 'wgs84',
  //         success: function (res) {
  //             //当前的经度和纬度
  //             let latitude = res.latitude
  //             let longitude = res.longitude
  //             wx.request({
  //                 url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=4HYBZ-EB23D-SLC42-HQ5R3-LP3LQ-OZFU5`,
  //                 success: res => {

  //                     let [location, county] = [res.data.result.ad_info.city, res.data.result.ad_info.district]
  //                     let [lng, lat] = [res.data.result.location.lng, res.data.result.location.lat]
  //                     that.setData({
  //                         location: location,
  //                         county: county
  //                     })
  //                     that.getWeather(lng, lat)
  //                 }
  //             })
  //         }
  //     })
  // },
  // getDouBan(){
  //     let param = {
  //         apikey: "0b2bdeda43b5688921839c8ecb20399b",//固定值0b2bdeda43b5688921839c8ecb20399b
  //         city: "杭州", //所在城市，例如北京、上海等
  //         start: 0, //分页使用，表示第几页
  //         count: 100, //分页使用，表示数量
  //         client: "somemessage", //客户端信息。可为空
  //         udid: "dddddddddddddddddddddd", //用户 id。可为空
  //     }
  //     app.post("https://api.douban.com/v2/movie/in_theaters", param).then((res) => {
  //        console.log(res)

  //     })
  // },
 
})