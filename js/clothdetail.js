/**
 * Created by Administrator on 2016/12/23.
 */
var myapp = new Vue({
    el:"#cloth-choose",
    data:{
        bannerImg:"../images/3449489.jpg",
        menuSeen:false,
        txSeen:true,
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html",
        },
        clothDetail:{
            name:"纯棉直供",
            number:"AA1224",
            color:"黑色-9",
            material:"棉99%，氨纶1%",
            tanli:"中弹",
            feature:"布面平整细腻，吸湿性好，柔软厚实，保暖有弹性，透气性好"
        },
        tanImg:"../images/ce28499.gif",
        tanMb:"bottom: -460px"
    },
    methods:{
       reverse:function(){
           this.menuSeen = !this.menuSeen;
       },
       tanxinShow:function(){
           this.txSeen = !this.txSeen;
           this.tanMb = "top: 0px"
        }
    }
})
$(".tx").on("click",function(){
    $(".mb").show();
    $(".tanxin").show();
    $(".content").hide();
    $(".tanxin").animate({top:"10px",bottom:"10px"})
})
$(".close").on("click",function(){
    $(".mb").hide();
    $(".content").show();
    $(".tanxin").animate({top:"50px"})
    $(".tanxin").hide()
})