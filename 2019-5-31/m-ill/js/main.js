(function(){
	var html = document.documentElement;
	var hWidth = html.getBoundingClientRect().width;
	html.style.fontSize = hWidth/15 + "px";
})();
(function(){

	// window.onload = function(){
	// 	var card = document.querySelectorAll('#main img');
	// 	var arr = [];
	// 	var disX,newX;
	// 	for(var i=0; i<card.length; i++){
	// 		arr.push([card[i].offsetWidth,card[i].offsetLeft,card[i].offsetTop,getStyle(card[i],'zIndex')]);
	// 		console.log(arr);
	// 		card[i].addEventListener('touchstart', function(event){
	// 			disX = event.touches[0].pageX;
	// 		});
			
	// 		card[i].addEventListener('touchend',function(event){
	// 			newX = event.changedTouches[0].pageX;

	// 			if(newX - disX > 0){	//向右

	// 				arr.unshift(arr[arr.length-1]);

	// 				/*
	// 					2: (4) [135, 170, 35, "1"]
	// 					0:[177, 64, 0, "2"]
	// 					1: (4) [135, 0, 35, "1"]
						
	// 				*/

	// 				arr.pop();
	// 				for(var i=0; i<card.length; i++){
	// 					card[i].style.zIndex = arr[i][3];
	// 					card[i].style.width = arr[i][0] + 'px';
	// 					card[i].style.left = arr[i][1] + 'px';
	// 					card[i].style.top = arr[i][2] + 'px';
	// 				}

	// 			}else{					//向左
	// 				/*
						
						
	// 					1: (4) [135, 0, 35, "1"]
	// 					2: (4) [135, 170, 35, "1"]
	// 					0:[177, 64, 0, "2"]
	// 				*/

	// 				arr.push(arr[0]);
	// 				arr.shift();
	// 				for(var i=0; i<card.length; i++){
	// 					card[i].style.zIndex = arr[i][3];
	// 					card[i].style.width = arr[i][0] + 'px';
	// 					card[i].style.left = arr[i][1] + 'px';
	// 					card[i].style.top = arr[i][2] + 'px';
	// 				}

	// 			}
	// 		});
	// 	}


	// 	function getStyle(obj,attr){
	// 		if(obj.currentStyle){
	// 			return obj.currentStyle[attr];
	// 		}else{
	// 			return getComputedStyle(obj, false)[attr];
	// 		}
	// 	}
	// }
})();