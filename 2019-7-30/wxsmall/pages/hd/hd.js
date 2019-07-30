Page({

  /**
   * 页面的初始数据
   */
  click(ev){
    let {ary} = this.data;
    const { dataset: { index } } = ev.target;
    ary[index].checked = !ary[index].checked;
    // console.log();

    this.setData({
      checked:ary.every(e=>e.checked)
    });
    // console.log(this.data.ary);
  },
  all(){
    let {checked,ary} = this.data;
    checked = !checked;
    ary.forEach(e => e.checked = checked);

    this.setData({ checked, ary});

    // this.data.checked = !this.data.checked;
    // this.data.ary.forEach(e=>{
    //   e.checked = this.data.checked;
    // })
    // console.log(this.ary);
  },

  data: {
    hd:'hello,world',
    checked:false,
    ary:[
      {
        txt:'哈哈',
        checked:false,
        id:0
      },
      {
        txt:'呵呵',
        checked:true,
        id:1
      },
      {
        txt:'xixi',
        checked:false,
        id:2
      }
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