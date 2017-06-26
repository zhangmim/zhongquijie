/**
 * Created by 张慧敏 on 2017/6/9.
 */
$(function(){
    var a=0;
    /*获取元素页数  length*/
    var s=$(".page").length-1;
    $("body").swipeUp(
        function(){
            if(a<s){
                $(".page").eq(a).addClass("pageup");
                $(".page").eq(a).children().addClass("hide");
                a++;
                $(".page").eq(a).removeClass("pagedown");
                $(".page").eq(a).children().removeClass("hide");
            }
        }
    );
    $("body").swipeDown(
        function(){
            if(a>0){
                $(".page").eq(a).addClass("pagedown");
                $(".page").eq(a).children().addClass("hide");
                a=a-1;
                $(".page").eq(a).removeClass("pageup");
                $(".page").eq(a).children().removeClass("hide");
            }
        }
    );
});