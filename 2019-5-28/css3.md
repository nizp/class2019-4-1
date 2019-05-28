# CSS3动画

> transition  过渡动画  加在运动物体身上
> transition-property  过渡属性  all | [attr]
> transition-duration 过渡时间
> transition-delay 延迟时间
> transition-timing-function 运动类型 

```
    如果transition第一个参数不写，默认为all(所有的方向)
    也可以指定，如果为指定只有指定的属性才能享受到运动


    连写:
        transition:运动属性 运动时间 运动的延迟


    小技巧:
        在使用css3动画的时候，有可能会出现运动失效的情况，
        可以通过定时器setTimeout，让运动进行异步运行，可以解决BUG

        box.style.display = 'block';
        
        setTimeout(() => {
            box.style.transition = '1s';
            box.style.width = '300px';
            box.style.height = '300px';
            box.style.opacity = .3;
        });

```

# 动画结束触发

> transitionend   webkitTransitionEnd  mozTransitionEnd....
> ele.addEventListener('webkitTransitionEnd',function(){},false);

> 注意:如果运动的属性有多个，那么每个运动完成时都会触发一次TransitionEnd，就可能导致在同一时间内执行了多次代码

# 2d变换
```
    transform是可以连写的，但是在写的过程当中要注意先后顺序，不然会发生意想不到的惊喜。

    transform: rotate(-80deg) translateX(300px) ; 先执行角度再执行位移

    transform: translateX(300px)  rotate(-80deg);

    rotate()  旋转函数
    deg  度数
    transform-origin 旋转的基点
        默认为center center
        可以设置left top bottom right

    skew() 倾斜函数  deg
    skewX()
    skewY()
    scale() 缩放函数 默认值是1 
    scaleX()
    scaleY()
    translate() 位移函数
    translateX()  left
    translateY()  top

```

# 3D
> transform-style : flat | preserve-3d (3D空间展示) 内容为3D  

> transform:perspective(800px) 景深  近大远小



# 关键帧运动

> @keyframes 自定义的名字 {
    0%{}
    100%{}
}

> animation: 自定义的名字 1s 


# 移动端
> 布局 -> 适配 -> REM适配

> 响应式布局

> 苹果 ios  object-c  swift   闭源
* 需要APPstore审批，时间大概在7天左右，如果没有审核过又要等7天左右，当真正上线的时候有可能已经赚不到钱了 

> 安卓 c, 应用就是用java开发的  开源


> 之前解决跨端的问题，还是比较复杂

> 前端的移动端
* 套web，用浏览器套写好的html，打包好，用户去下载打包后的应用，打开应用就等同于打开浏览器

> 弊端:使用不了手机系统上自带的功能，摄像头、相册....

* 专门在原生应用上进行开发，把安卓和苹果的接口封装好暴露出去给js去调用

* 微信JSSDK

* react-native

* Hybrid

REM适配:
> em 单位  这个单位被自己或者父级的字体大小影响，最小为8px
> rem 单位  root(根,html) em






