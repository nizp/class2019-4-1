"use strict";


// 点击闪烁
~function () {
    var btn = document.getElementById("btn"), cubeBox = document.getElementById("cubeBox");
    var cubes = cubeBox.getElementsByTagName("div"), colorArr = ["#096", "green", "pink", "blue", "#369", "purple", "yellow", "#ccc", "#000"];
    var str = "",timer = null, flag = false;

// 动态添加9个div 创建九宫格
    for (var i = 0; i < 9; i++) {
        str += "<div></div>"
    }
    cubeBox.innerHTML = str;

// 闪烁方法
    function twinkel() {
        flag = !flag;// 点击一下开始 再点一下结束
        if (flag) {
            btn.innerHTML = "点击停止闪烁";
             clearInterval(timer);
            timer = setInterval(function () {
                var obj = {};
                for (var i = 0; i < 3; i++) {
                    var num = Math.round(Math.random() * 8);
                    // console.log(num);
                    // 对象唯一性进行数字的去重
                    if (typeof obj[num] !== "undefined") {
                        i--;
                        continue;
                    }
                    obj[num] = num;
                    cubes[num].style.backgroundColor = colorArr[num];
                }
                
                window.setTimeout(function () {
                    for (var j = 0, len = cubes.length; j < len; j++) {
                        console.log(j);

                        var cube = cubes[j];
                        cube.style.backgroundColor = "#f40";
                    }
                }, 500);

            }, 1000);
        } else {
            btn.innerHTML = "点击开始闪烁";
            clearInterval(timer);
        }
    }

    btn.onclick = twinkel;

}();


