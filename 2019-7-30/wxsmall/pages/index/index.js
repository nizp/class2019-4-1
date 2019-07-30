//index.js
//获取应用实例
const app = getApp()
const {fnn} = require('../../utils/util')
console.log(fnn());
console.log(app.num)
console.log(document);
Page({
  data:{
    num:0,
    val:''
  },
  formSubmit(ev){
    console.log(ev);
  },
  getval(){
    console.log(this.data.val);
  },
  changeval(ev){
    let {value} = ev.detail;
    this.setData({ val:value})
  }
})
