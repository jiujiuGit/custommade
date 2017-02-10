/**
 * Created by Administrator on 2017/1/4.
 */
/**
 * Created by Administrator on 2017/1/3.
 */
/**
 * Created by Administrator on 2016/12/30.
 */
/**
 * Created by Administrator on 2016/12/28.
 */
var myapp = new  Vue({
    el:"#addrChoose",
    data:{
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html"
        },
        menuSeen:false,
        order:{
            waitPay:1,
            waitSend:1,
            down:2
        },
        coupon:4,
        collect:{
            ml:1,
            ks:2
        },
        wearer:3,
        addr:3

    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
        },
        toCoupon:function(){
            window.location.href = 'coupon.html'
        },
        toCollect:function(){
            window.location.href = 'collect.html'
        },
        toWearer:function(){
            window.location.href = 'personchoose.html'
        },
        toAddr:function(){
            window.location.href = 'addrchoose.html'
        },
        myOrder:function(){
            window.location.href = 'myorder.html'
        }
    }
});
