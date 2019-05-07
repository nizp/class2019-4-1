(function () {
    // 运动方式
    var zhufengEffect = {
        // 匀速运动公式
        Linear: function (t, b, c, d) {
              return t/d * c + b;
        },
        //指数衰减的反弹缓动
        Bounce: {
            easeIn: function(t, b, c, d) {
                return c - zhufengEffect.Bounce.easeOut(d - t, 0, c, d) + b;
            },
            easeOut: function(t, b, c, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                }
            },
            easeInOut: function(t, b, c, d) {
                if (t < d / 2) {
                    return zhufengEffect.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
                }
                return zhufengEffect.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        },
        //二次方的缓动
        Quad: {
            easeIn: function(t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOut: function(t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t + b;
                }
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            }
        },
        //三次方的缓动
        Cubic: {
            easeIn: function(t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOut: function(t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t + b;
                }
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            }
        },
        //四次方的缓动
        Quart: {
            easeIn: function(t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            },
            easeOut: function(t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t * t + b;
                }
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            }
        },
        //五次方的缓动
        Quint: {
            easeIn: function(t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOut: function(t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t * t * t + b;
                }
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            }
        },
        //正弦曲线的缓动
        Sine: {
            easeIn: function(t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            },
            easeOut: function(t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeInOut: function(t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            }
        },
        //指数曲线的缓动
        Expo: {
            easeIn: function(t, b, c, d) {
                return (t == 0)
                    ? b
                    : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOut: function(t, b, c, d) {
                return (t == d)
                    ? b + c
                    : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOut: function(t, b, c, d) {
                if (t == 0)
                    return b;
                if (t == d)
                    return b + c;
                if ((t /= d / 2) < 1)
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        },
        //圆形曲线的缓动
        Circ: {
            easeIn: function(t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOut: function(t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) {
                    return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                }
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            }
        },
        //超过范围的三次方缓动
        Back: {
            easeIn: function(t, b, c, d, s) {
                if (s == undefined)
                    s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOut: function(t, b, c, d, s) {
                if (s == undefined)
                    s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOut: function(t, b, c, d, s) {
                if (s == undefined)
                    s = 1.70158;
                if ((t /= d / 2) < 1) {
                    return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                }
                return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
            }
        },
        //指数衰减的正弦曲线缓动
        Elastic: {
            easeIn: function(t, b, c, d, a, p) {
                if (t == 0)
                    return b;
                if ((t /= d) == 1)
                    return b + c;
                if (!p)
                    p = d * .3;
                var s;
                !a || a < Math.abs(c)
                    ? (a = c, s = p / 4)
                    : s = p / (2 * Math.PI) * Math.asin(c / a);
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOut: function(t, b, c, d, a, p) {
                if (t == 0)
                    return b;
                if ((t /= d) == 1)
                    return b + c;
                if (!p)
                    p = d * .3;
                var s;
                !a || a < Math.abs(c)
                    ? (a = c, s = p / 4)
                    : s = p / (2 * Math.PI) * Math.asin(c / a);
                return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
            },
            easeInOut: function(t, b, c, d, a, p) {
                if (t == 0)
                    return b;
                if ((t /= d / 2) == 2)
                    return b + c;
                if (!p)
                    p = d * (.3 * 1.5);
                var s;
                !a || a < Math.abs(c)
                    ? (a = c, s = p / 4)
                    : s = p / (2 * Math.PI) * Math.asin(c / a);
                if (t < 1)
                    return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
            }
        }

    };

    /**
     *
     * @param curEle 当前执行动画的元素
     * @param target 目标值对象 {left:500,top:300}
     * @param duration 总过渡时间 2000ms
     */
    // effect 指定运动方式 传参
    // 传一个数字
    // 传一个数组 ['Quad','easeInOut']
    function move(curEle, target, duration,effect, callBack) {
        // 默认运动方式
        var tempEffect = zhufengEffect.Linear;

        // 判断effect 如果是个数字
        if(typeof effect === "number") {
            switch (effect) {
                case 0:
                    tempEffect = zhufengEffect.Linear;
                    break;
                case 1:
                    tempEffect = zhufengEffect.Quad.easeInOut;
                    break;
                case 2:
                    tempEffect = zhufengEffect.Bounce.easeIn;
                    break;
                case 3:
                    tempEffect = zhufengEffect.Cubic.easeInOut;
                    break;
            }
        } else if(effect instanceof Array) {
            //如果以数组方式指定远动方式 ['Quad','easeInOut']
            tempEffect = effect.length === 2? zhufengEffect[effect[0]][effect[1]]:zhufengEffect[effect[0]];
        } else if(typeof effect === "function") {
            callBack = effect;
        }
        // 执行本次动画之前 清除上次动画
        curEle.zfTimer? clearInterval(curEle.zfTimer) : null;

        var begin = {}; // 存储元素执行动画前 相应属性初始状态
        var change = {}; // 存储元素执行动画 相应属性状态变化值
        for(var key in target) {
            // target  对象 目标位置
            if(target.hasOwnProperty(key)) {
                // begin {'left': 'left初始值'}
                begin[key] = utils.css(curEle, key);// 获取属性初始值，在obj新增key属性，初始值赋值给begin的key的属性值
                // change {'left': 'left变化值'}
                change[key] = target[key] - begin[key]// key属性要变化的值，并且放在change对象中
            }
            
        }
        // console.log(begin);
        // console.log(change);

        var time = null; // 记录当前时间
        curEle.zfTimer = setInterval(function () {
            time += 10;
            if(time >= duration) { // 结束条件
                // target：{left: 500, top: 300}
                utils.css(curEle,target); // 确保是目标状态
                clearInterval(curEle.zfTimer); //结束动画
                typeof callBack ==="function"? callBack.call(curEle) : null;
                return;
            }
            // 计算出当前时间 元素相应属性 的状态
            // target 有多少个属性 zfEffect.Linear 执行多少次 并且把相应属性的参数传递进去 计算出 当前状态
            // 第一次的时候 key 是left  第二次的时候key 是 top
            for(var key in target) {
               if(target.hasOwnProperty(key)) {
                   // 计算出 当前时间time 元素相应属性 所处状态
                   var curPos = tempEffect(time,begin[key],change[key], duration);
                   // 将当前元素 相应属性 设置为 当前计算出来的状态curPos
                   utils.css(curEle, key, curPos);
               }
            }
        }, 10);
    }
//   把函数放进全局下的zfAnimate
   window.zfAnimate = move;

})();