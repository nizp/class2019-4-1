<template>
    <div id="box">
        <input 
            type="text" 
            id="s"
            @focus="onoff = true"
            :value="ary"
            @keyup.38="up"
            @keyup.40="down"
            @keyup.13="ctrlenter"
        />
        <ul id="list" v-show="onoff">
            <li
                :class="key == num?'select':''"
                v-for="(val,key) in arr"
                @click="addAry(val,key,$event)"
            ><a href="javascript:;">{{val}}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            num:-1,
            onoff:false,
            ary:[],
            arr:[
                '《第七个读者》',
                '《心理罪 画像》',
                '《心理罪 教化场》',
                '《心理罪 暗河》',
                '《心理罪 城市之光》',
                '《地球往事》',
                '《黑暗森林》',
                '《死神永生》',
                '《乡村教师》',
                '《地球大炮》'
            ]
        }
    },
    methods:{
        addAry(val,key,ev){
            if(ev.ctrlKey){
                //批量添加
                if(!this.ary.includes(val)){
                    this.ary.push(val);
                }else{
                    this.ary = this.ary.filter(v=>v!=val);
                }
                // console.log('批量')
            }else{
                //普通的点击
                this.ary.length = 0;
                this.ary.push(val);
                this.num = key; 
            }
        },
        down(){
           console.log('下')
           this.num ++;
           this.num %= this.arr.length;
        },
        up(){
            this.num --;
            if(this.num < 0){
                this.num = this.arr.length-1;
            }
            console.log('上')
        },
        ctrlenter(ev){
            let val = this.arr[this.num];
            if(ev.ctrlKey){
                //批量添加
                if(!this.ary.includes(val)){
                    this.ary.push(val);
                }else{
                    this.ary = this.ary.filter(v=>v!=val);
                }
                // console.log('批量')
            }else{
                //普通的点击
                this.ary.length = 0;
                this.ary.push(val);
            }
        }
    }
}
</script>

<style scoped>
input{
    width: 100%;
    height: 30px;
}
ul{
    margin: 0;
    padding: 0;
    /* display: none; */
}
li{
    list-style: none;
    background-color: #009999;
    margin-top: 3px;
    line-height: 30px;
    width: 100%;
}
a{
    text-decoration: none;
    color:white;
    display: block;
    width: 100%;
}
a:hover,.hover{
    background-color: #00FF99;
}
#box{
    width: 500px;
    margin: 100px auto 0;
}
.select{
    background-color: #60625b;
}
</style>