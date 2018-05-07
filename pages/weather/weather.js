// pages/weather/weather.js
const app = getApp()
Page({
    data: {
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
    },
    onShow: function () {
        this.getLocation()
    },
    getWeather(lng, lat) {
        
        let loc = lng + "," + lat
        console.log(loc)
        let param = {
            location: loc,
            key: "6aea1b5df93942b09b087dbdce871783"
        }
        app.post("https://free-api.heweather.com/s6/weather/now", param).then((res) => {
            this.setData({
                weather: res.HeWeather6[0]
            })
        })
    },
    getLocation: function () {
        let that = this;
        wx.getLocation({
            type: 'wgs84',
            success: function (res) {
                //当前的经度和纬度
                let latitude = res.latitude
                let longitude = res.longitude
                wx.request({
                    url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=4HYBZ-EB23D-SLC42-HQ5R3-LP3LQ-OZFU5`,
                    success: res => {

                        let [location, county] = [res.data.result.ad_info.city, res.data.result.ad_info.district]
                        let [lng, lat] = [res.data.result.location.lng, res.data.result.location.lat]
                        that.setData({
                            location: location,
                            county: county
                        })
                        that.getWeather(lng, lat)
                    }
                })
            }
        })
    },
})