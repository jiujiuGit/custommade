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
        orderDtl:{
            state:"已取消",
            orderNumber:12220222,
            time:"2017-1-4 12:00",
            reason:'超时未支付',
            imgSrc:'../images/madelist/b0ad5f3.png',
            proName:'男廓形个性水洗裤',
            proNumber:183848282,
            ml:'腈纶98% 氨纶2%',
            proPrice:'120.00',
            amount:1,
            addr:"上海市 浦东新区 康桥东路 700号",
            consignee:"安妮",
            note:"火焰，是我最喜欢的玩具",
            totalPrice:"120.00",
            customCost:'12.00',
            freight:"0.00",
            yh:"12.00",
            payMoney:"120.00"
        },

    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
        },
        toDetail:function(){
            window.location.href = 'madedetail.html'
        }

    }
});

