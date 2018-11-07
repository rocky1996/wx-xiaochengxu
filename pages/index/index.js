//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/dayanta.jpg',
      '/images/huanghe.jpg',
      '/images/huashan.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  
  onLoad: function () {
    
  }
})
