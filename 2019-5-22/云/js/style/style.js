/*
    计算folders的高度
*/
let iH = window.innerHeight;
let headH = head.offsetHeight;
let breadmenuH =  document.querySelector('.breadmenu').offsetHeight;
const folders = document.querySelector('.folders');
const fullTipBox = document.querySelector('.full-tip-box'); 

const breadNav = document.querySelector('.bread-nav');

let {startMove,getChild} = tools;
function fullbox (val){
    fullTipBox.innerHTML = val;
    /*
        obj:null,
        json:{},
        durtion:1000,
        cb:function(){},
        fx:'linear'
    */
    startMove({
        obj:fullTipBox,
        json:{
            top:0
        },
        durtion:500,
        fx:'bounceOut',
        cb(){
            setTimeout(() => {
                startMove({
                    obj:fullTipBox,
                    json:{
                        top:-40
                    },
                    durtion:300
                })
            }, 1000);
        }
    });
}


folders.style.height = iH - (headH + breadmenuH) + 'px';






