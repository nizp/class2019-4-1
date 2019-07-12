<template>
    <div class="all-list">
    　　　　　　<div class="choose-list">
        　　　　　　<h5>确认订单消息:</h5>
        　　　　　　<div class="choose-container">
        　　　　　　<div class="choose-header">
            　　　　　　<ul>
                　　　　　　<li>会员卡</li>
                　　　　　　<li>原价</li>
                　　　　　　<li>现价</li>
                　　　　　　<li>数量</li>
                　　　　　　<li class="xiaoji">小计</li>
            　　　　　　</ul>
        　　　　　　</div>
        　　　　　　<div class="choose-content  clearfix">
            　　　　　　 <List 
                            v-for="(val,key) in ary"
                            :num="val.num"
                            :time="val.time"
                            :xj="val.xj"
                            :yj="val.yj"
                            :id="val.id"
                            :key="key"  
                            :kc="val.kc" 
                        ></List>
        　　　　　　</div>
        　　　　　　<div class="choose-footer">
            　　　　　　<div class="total-price">
                　　　　　　<span>应支付：<em>{{count_all.yjNum}}</em></span>
                　　　　　　<span class="prices">折后支付：<i>{{count_all.xjNum}}</i></span>
            　　　　　　</div>
        　　　　　　</div>
        　　　　　　</div>
    　　　　　　</div>
            </div>
</template>

<script>
import './reset.css';
import List from '../components/app';
import {mapState,mapGetters} from 'vuex';

export default {
    computed: {
        ...mapState(['ary']),
        ...mapGetters(['count_all'])
    },
    components:{
        List
    }
}
</script>

<style>
.main{
    width: 800px;
    margin: 0 auto;
    border: 1px solid  #bebebe;
    padding: 20px;
}
*{
    list-style: none;
}
html,body{
    margin: 0;
    padding: 0;
}
.all-list{
    padding: 40px;
    margin: 0 auto;
}
.choose-list{
    overflow: hidden;
}
.choose-list >h5{
    display: block;
    font-size: 14px;
    color: #666666;
    padding: 13px 0;
    font-weight: normal;
}
.choose-container{
    overflow: hidden;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
}
.choose-header{
    overflow: hidden;
    background-color: #F9FAFB;
    padding: 0 48px;
}
.choose-header ul{
    overflow: hidden;
}
.choose-header ul li{
    float: left;
    width: 5%;
    text-align: center;
    padding: 15px 0;
    font-size: 12px;
    color: #666666;
}
.choose-content{
    padding: 0 48px;
    overflow: hidden;
}
.choose-content ul{
    overflow: hidden;

}
.choose-content ul li{
    float: left;
    width:19%;
    text-align: center;
    padding: 15px 0;
    line-height: 28px;
    color: #555555;
}
.add-number li{
    
    display: inline-block;
}
.choose-content ul li .number-input{
    float: left;
    width: 70px;
    height: 28px;
    border-top: 1px;
    border-bottom: 1px;
    border-color: #CCCCCC;
    border-style: solid none;
    box-sizing: border-box;
    line-height: 28px;
    outline: none;
    text-align: center;
    color: #FE5200;
}
.choose-content ul li .minus,.choose-content ul li .add{
    float: left;
    width: 28px;
    height: 28px;
    background-color: #F9FAFB;
    font-size: 14px;
    outline: none;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
}
.choose-content ul li >span{
    color: #FE5200;
}
.choose-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #F9FAFB;
    padding-left: 100px;
}

.total-price span{
    float: left;
    margin-right: 40px;
}
.total-price >span{
    display: block;
    font-size: 14px;
    color: #555555;
    padding: 6px 0;
}
.total-price >span em{
    font-style: initial;
    text-decoration:line-through;
}
.total-price >span i{
    font-style: initial;
}
.prices{
    color: #EA4335 !important;
}
.xiaoji{
    margin-left: 426px;
}
</style>