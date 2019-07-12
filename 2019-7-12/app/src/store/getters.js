export default {
    count_all(state){
        // let obj = state.ary.reduce((prev,now)=>{
        //     // console.log(prev.yj)
        //     // console.log()
        //     return {
        //         num:prev.num,
        //         // xj:now.xj * prev.num,
        //         yj:prev.yj * prev.num  + now.yj * prev.num
        //     }
        // });
        let yjNum = 0;
        let xjNum = 0;
        state.ary.forEach(item => {
            yjNum += (item.num * item.yj);
            xjNum += (item.num * item.xj);
        });
       
        return {
            yjNum,
            xjNum
        };
    }
}