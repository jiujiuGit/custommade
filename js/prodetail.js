/**
 * Created by Administrator on 2016/12/19.
 */
var myapp = new Vue({
    el:"#prodetail",
    data:{
        tittle:"商品详情",
        menuSeen:false,
        swipeInfo:[{
            src:"../images/prodetail/a7afd79.png"
        },{
            src:"../images/prodetail/6d6f9ca.png"
        },{
            src:"../images/prodetail/ee4fac7.png"
        }
        ],
        swipeLeft:"0",
        menuHref:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html"
        },
        proDetail:{
            proName:"男定制印花T恤（10件以内）",
            proNumber:"24324423",
            proPrice:"120",
            proPayWay:"微信支付",
            clothChoose:1
        },
        picDetail:[{
            imgSrc:"../images/prodetail/0dfc1c5.png"
        },
            {
                imgSrc:"../images/prodetail/63ab574.png"
            },
            {
                imgSrc:"../images/prodetail/9754ea3.png"
            },
            {
                imgSrc:"../images/prodetail/a7afd79.png"
            },
            {
                imgSrc:"../images/prodetail/cbc4634.png"
            },
        ]

    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen;
        },
        slideToCur:function(){
            //return(this.swipeLeft ="-100%");
            var leftNum = Number(this.swipeLeft.replace("%",""))
            if(leftNum<=-200){
                this.swipeLeft =0+"%"
            }
            else if(leftNum>-200){
                this.swipeLeft =leftNum-100+"%"
            }
        },
        toCustomize:function(){
            window.location.href="customize.html"
        }
    }
})
