/**
 * Created by Administrator on 2016/12/29.
 */
/**
 * Created by Administrator on 2016/12/28.
 */
var myapp = new  Vue({
    el:"#measurePre",
    data:{
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html",
        },
        menuSeen:false,
    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
        },
        celiang:function(){
            window.location = 'celiang.html'
        }

    }
})
$(".tlChoose>li").on("click",function(){
    $(this).parent().parent().find('li').removeClass('active')
    $(this).addClass('active')
})