// 存放着原来位置的数组
var arrList = [];
// 打乱数字后的数组
var arrRan = [];
// 取出父级
var imgBox = document.getElementsByClassName('imgBox')[0];
var imgWrap = document.getElementsByClassName('wrapper')[0];
var allW = imgBox.offsetWidth;
var allH = imgBox.offsetHeight;
var imgCell;    // 图片碎片
var row = 3;    // 行和列数
var col = 3;
var cellW = allW / col;       // 根据行和列计算出每一个碎片的宽高
var cellH = allH / row;
var btnStart = document.getElementsByClassName('start')[0];   // 取出按钮
var flag = true;     // 判断点击

(function imgSplit() {
    arrList = [];
    imgBox.innerHTML = '';
    var cell = '';
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            arrList.push(i * row + j);
            arrRan.push(i * row + j);
            cell = document.createElement('div');
            cell.classList.add('imgCell');
            cell.style.width = cellW + 'px';
            cell.style.height = cellH + 'px';
            cell.style.left = j * cellW + 'px';
            cell.style.top = i * cellH + 'px';
            // 调节背景图片位置 用碎片拼接成一张图片显示
            cell.style.backgroundPosition = (-j) * cellW + 'px ' + (-i) * cellH + 'px';
            imgBox.appendChild(cell);
        }
    }
    imgCell = document.getElementsByClassName('imgCell');
})()
    //点击
    btnStart.onclick = function () {
        // 点击开始情况
        if (flag) {
            btnStart.innerHTML = '复原';
            flag = false;
            // 打乱数组
            randomArr();
            // 根据乱序数组排列碎片 
            orderCell(arrRan);
            // 点击碎片进行移动
            // 绑定事件  注意闭包
            for (let i = 0; i < imgCell.length; i++) {
                imgCell[i].onmousedown = function (e1) {
                    var item = this;
                    var index1 = i;
                    var left = item.offsetLeft;
                    var top = item.offsetTop;
                    document.onmousemove = function (e2) {
                        // 实现拖拽
                        var x = e2.clientX - e1.clientX + left;
                        var y = e2.clientY - e1.clientY + top;
                        item.style.left = x + 'px';
                        item.style.top = y + 'px';
                        item.style.zIndex = '99';
                        // 取消拖拽时的动画
                        item.style.transition = 'none';
                    };
                    document.onmouseup = function (e3) {
                        // 鼠标抬起  移除移动事件
                        document.onmousemove = function () {
                            return false;
                        };
                        // 根据鼠标停留位置决定方块动作
                        var left = e3.clientX - imgBox.offsetLeft - imgWrap.offsetLeft;
                        var top = e3.clientY - imgBox.offsetTop - imgWrap.offsetTop;
                        var index2 = changeIndex(left, top, index1);    //调用方法是否判断更换
                        console.log(index1,index2,88)
                        if (index1 == index2) {
                            // 回到原来位置
                            cellReturn(index1);
                        } else {
                            // 交换索引
                            cellChange(index1, index2);
                        }
                    };
                }
            }
            // 点击复原情况
        } else {
            btnStart.innerHTML = '开始';
            flag = true;
            orderCell(arrList);       //排列碎片
        }
    }
// 打乱数组顺序 并且给存放打乱顺序的数组赋值
function randomArr() {
    // 利用math.random与sort将数组顺序打乱
    arrRan.sort(function (a, b) {
        return Math.random() - 0.5;
    });
}
//排列碎片
function orderCell(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        // 计算left,top的值
        var row = Math.floor(arr[i] / 3);
        var col = arr[i] % 3;
        getPosition(row,col,i);
    }
};
//判断是否更换
function changeIndex(x, y, index) {
    if (x < 0 || x > allW || y < 0 || y > allH) {
        // console.log(111)
        return index;
    };
    var row = Math.floor(y / cellH);
    var col = Math.floor(x / cellW);
    var l = row * 3 + col;
    var index2;
    arrRan.filter(function (item, i) {
        if (l == item) {
            index2 = i;
        }
    });
    // console.log(222)
    return index2;
};
// 回到原来位置
function cellReturn(i) {
    var row = Math.floor(arrRan[i] / 3);
    var col = arrRan[i] % 3;
    getPosition(row,col,i);

};
// 交换两个碎片的位置显示
function cellChange(from, to) {
    var rowF = Math.floor(arrRan[from] / 3),
        colF = arrRan[from] % 3,
        rowTo = Math.floor(arrRan[to] / 3),
        colTo = arrRan[to] % 3,
        temp = arrRan[from];
     // 根据行和列切换位置   
    getPosition(rowTo,colTo,from);
    getPosition(rowF,colF,to);
    arrRan[from] = arrRan[to];
    arrRan[to] = temp;
    // console.log(arrRan)
}
// 设置位置
function getPosition(row, col, i) {
    imgCell[i].style.left = col * cellW + 'px';
    imgCell[i].style.top = row * cellH + 'px';
    imgCell[i].style.transition = 'all 0.3s ease-in-out';
    imgCell[i].style.zIndex = '10';
};