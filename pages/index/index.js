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
    duration: 1000,
    proList: null,
  },
  
  onLoad: function () {
    this.setData({
      test:'01',
    })
    this.getProList();
  },
  toDetail: function (e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);

    var proList = this.data.proList;
    var title = proList[index].title;
    wx.navigateTo({
      url: '/pages/detail/detail?title=' + title,
    })
  },
  getProList: function(){
    var self = this;
    wx.request({
      url: '',
      method: 'GET',
      success: function(res){
        console.log(res);
        self.setData({
          proList: res.data,
        })
      }
    })
  },

  copy: function(){
    if(wx.setClipboardData){
      wx.setClipboardData({
        data: '这是我要复制的内容',
        success: function (res) {
          wx.showModal({
            title: '复制成功',
            content: '内容已经复制成功',
          })
        }
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '您的微信版本太低，情升级',
      })
    } 
  }
})
