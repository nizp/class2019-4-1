// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:0,
    val:'',
    selects:[
      '全选中',
      '未选中',
      '已选中'
    ],
    ary:[
      {
        id:0,
        checked:false,
        txt:'每周部门会议'
      },
      {
        id: 1,
        checked: false,
        txt: '健身'
      },
      {
        id: 2,
        checked: true,
        txt: '买机票'
      }
    ],
    ary2:[]
  },
  selectfn(ev){
    const { index } = ev.target.dataset;
    let {ary2,ary} = this.data;

    ary2 = this.changeAry2(ary, index);
    console.log(index);
    this.setData({state:index,ary2});
  },
  changeval(ev){
    let { value } = ev.detail;
    let {ary,ary2,state} = this.data;
    ary.unshift({
      id: Date.now(),
      checked: false,
      txt: value
    });

    ary2 = this.changeAry2(ary, state);

    this.setData({ary,val:'',ary2})
    console.log(value);
  },
  remove(ev){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success:(res)=>{
        if (res.confirm) {
          // console.log('用户点击确定')
          const { id } = ev.target.dataset;
          let { ary, ary2, state } = this.data;

          ary = ary.filter(item => item.id !== id);
          ary2 = this.changeAry2(ary, state);
          this.setData({ ary, ary2 })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  
   
   
  },

  changeAry2(ary,index){  
    return ary.filter(item => {
      switch (index) {
        case 0:
          return item;
        case 1:
          return !item.checked;
        case 2:
          return item.checked;
      }
    })
  },

  checkedFn(ev){
    const {id} = ev.target.dataset;
    let {ary,ary2,state} = this.data;
    let obj = ary.find(item=>item.id == id);
    obj.checked = !obj.checked;

    ary2 = this.changeAry2(ary, state);
      
    this.setData({ ary,ary2 });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { ary2, ary } = this.data;
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url:'http://m.kugou.com/singer/class&json=true',
      success:(data)=>{
        console.log(data);
        this.setData({ ary2: ary });
        wx.hideLoading()
      }
    })
  

  
    
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