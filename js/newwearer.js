/**
 * Created by Administrator on 2016/12/28.
 */
/**
 * Created by Administrator on 2016/12/27.
 */
var myapp = new  Vue({
    el:"#newWearer",
    data:{
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html"
        },
        menuSeen:false,
    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
        }
    }
})
$(".tx-table>ul>li>p").on("click",function(){
    $(this).addClass("active");
    $(this).parent('li').siblings().find('p').removeClass("active")
})