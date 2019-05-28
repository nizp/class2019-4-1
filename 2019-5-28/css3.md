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



