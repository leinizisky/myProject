Page({

  /**
   * 页面的初始数据
   */
  data: {
    basciInfo: [
      { descr: "姓名", info: "李红梅" },
      { descr: "性别", info: "女" },
      { descr: "民族", info: "汉族" },
      { descr: "年龄", info: "24岁" },
      { descr: "政治面貌", info: "中共党员" },
      { descr: "联系方式", info: "18287168984" },
      { descr: "邮箱", info: "942989558@qq.com" },
    ],
    jobInfo: [
      { time: "2015/07-2017/05", name: "九机网", duty: "前端开发" },
      { time: "2015/02-2015/07", name: "昆明钢铁控股有限公司信息中心",duty: "前端开发" },
      { time: "2013/07-2013/09", name: "联想鹏程电脑科技专卖店", duty: "学生实践" }
    ],
    education:[
      { time: "2011/09-2015/07", name: "大理大学", major: "本科|计算机科学与技术" }
    ],
    project: [
      { time: "2017/05-2017/05", name: "严选项目", company: "九机网" },
      { time: "2017/04-2017/04", name: "物料订单项目", company: "九机网" },
      { time: "2017/03-2017/03", name: "周年庆项目", company: "九机网" },
      { time: "2017/01-2017/01", name: "人气排行项目", company: "九机网" }
    ],
    skills:[
      { name: "html", score: "98", descri: "精通" },
      { name: "css", score: "99", descri: "精通" },
      { name: "js", score: "95", descri: "精通" },
      { name: "vue", score: "85", descri: "熟练" },
      { name: "英语", score: "80", descri: "熟练" }
    ]
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

  }
})