/**
 * Created by Administrator on 2016/12/20.
 */
var myapp = new Vue({
    el:"#customize",
    data:{
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html",
        },
        swipeLeft:"0",
        swipeInfo:[{
            src:"../images/prodetail/a7afd79.png"
        },{
            src:"../images/prodetail/6d6f9ca.png"
        },{
            src:"../images/prodetail/ee4fac7.png"
        }
        ],
        menuSeen:false,
        proDetail:{
            proName:"男定制印花T恤（100件以内）",
            proNumber:12342423,
            proPrice:120.00
        },
        cartoon:['../images/ct1.png','../images/ct2.png','../images/ct3.png','../images/ct4.png'],
        amount:1,
        sample:['../images/s1.png','../images/s2.png','../images/s3.png','../images/s4.png'],
        size:['150/64A','155/64A','160/60A','165/65A','170/64A','175/92A','180/96A','185/98A','190/100A'],
        imgIndex:0,
        mbSeen:false,
        type:'pants'
    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
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
        chooseCloth:function(){
            window.location.href="clothchoose.html"
        },
        choosePerson:function(){
            window.location.href="personchoose.html"
        },
        personalneeds:function(){
          window.location.href = 'personalneeds.html'
        },
        measureData:function(){
            this.mbSeen = true;
        },
        closeTk:function(){
            this.mbSeen = false
        },
        next:function(){
            window.location.href="dataconfirm.html"
        },
        reduce:function(){
            if(this.amount>0){
                this.amount--;
            }
        },
        plus:function(){
            this.amount++;
        },
        cartoonChoose:function(key){
            this.imgIndex = key;
        },
        even:function(sample){
            var that = this;
            return sample.filter(function(index){
                return index == sample[that.imgIndex]
            })
        },
        referencesize:function(){
            window.location.href = 'referencesize.html'
        },
        measurepre:function(){
            window.location.href = 'measurepre.html'
        },
        jt:function(){
            window.location.href = 'celiang.html'
        }
    }
})
$(".sizeUl>li").on("click",function(){
    $(this).css({'border':'1px solid orange','color':'orange'})
    $(this).siblings().css({'border':'1px solid gainsboro','color':'black'})
})