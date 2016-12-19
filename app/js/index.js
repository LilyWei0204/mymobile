/**
 * Created by Lewis on 2016/12/2.
 */
$(function () {
	
	
//设计尺寸统一规范
    function resise(designSize,type) {
        var type= type || "x";
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        if(type == "x"){
            var scale = width/designSize*100+"px";
        }else if(type == "y"){
            var scale = height/designSize*100+"px";
        }
        document.getElementsByTagName("html")[0].style.fontSize = scale;
    }
//  resise(1080,"x");
	resise(1334,"y");

//swiper插件启用
    /*var mySwiper = new Swiper ('.swiper-container', {
        // 如果需要分页器
           pagination: '.swiper-pagination',

        //添加动画
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }

});*/

	var lis = $(".tab li");
	var menu=$(".menu");
	
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=(function(index){
		return function(){
			for(var j=0;j<menu.length;j++){
				menu[j].style.display="none";
				lis[j].style.color="#000";
			}
			menu[index].style.display="block";
			lis[index].style.color="#F9A828";
		}
		})(i)
	}
	
	//区域滚动条
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});



});