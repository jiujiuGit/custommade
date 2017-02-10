/**
 * Created by Administrator on 2016/12/27.
 */
var myapp = new  Vue({
    el:"#editWearer",
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
        }
    }
})
$(".tx-table>ul>li").on("click",function(){
    $(this).find('p').addClass("active");
    $(this).siblings().find('p').removeClass("active")
});
$(".delete").on("click",function(){
    layer.confirm('删除穿衣人会影响购物车及订单的记录，是否确认删除？', {
        btn: ['取消','删除'] //按钮
    }, function(){

    }, function(){
        layer.msg('删除成功', {
            time: 20000, //20s后自动关闭
            btn: ['确定']
        });
    });
})