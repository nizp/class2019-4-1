/*
    touch-l
    touch-r
    touch-t
    touch-b
*/
function touch(obj,evName,cb){
    let disX = 0;
    let disY = 0;
    let timer = null;
    let ca = false;
    let an = 0;
    obj.addEventListener('touchstart',start);
    obj.addEventListener('touchmove',move);
    obj.addEventListener('touchend',end);
    function start(ev){
        disX = ev.changedTouches[0].pageX;
        disY = ev.changedTouches[0].pageY;
        let old = new Date;
        timer = setInterval(() => {
            let now = new Date;
            if(now - old >= 300){
                ca = true;
                an ++;
                if(evName === 'touchan'){
                    cb && cb({ev,an,disX,disY,time:(now - old)});
                }
            }
            // console.log(1);

        }, 16.7);
    }

    function move(ev){
        if(evName === 'mgz'){
            cb && cb(ev);
        }
    }
    function end(ev){
        let endX = ev.changedTouches[0].pageX;
        let endY = ev.changedTouches[0].pageY;
        let X = endX - disX;
        let Y = endY - disY;
       
        if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
            if(evName === 'touch-r'){
                cb && cb(ev);
            }
        }else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
            if(evName === 'touch-l'){
                cb && cb(ev);
            }
        }else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
            if(evName === 'touch-b'){
                cb && cb(ev);
            }
        }else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
            if(evName === 'touch-t'){
                cb && cb(ev);
            }
        }else{
            //点击
            if(evName === 'touch' && !ca){
                cb && cb(ev);
            }
        }

        if(evName === 'end'){
            console.log(1)
            cb && cb(ev);
        }
        ca = false;
        an = 0;
        clearInterval(timer);
    }
}

    

   


    
   
    
