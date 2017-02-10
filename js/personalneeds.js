/**
 * Created by Administrator on 2016/12/28.
 */
/**
 * Created by Administrator on 2016/12/27.
 */
var myapp = new  Vue({
    el:"#personalNeeds",
    data:{
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html"
        },
        menuSeen:false,
        stereotype:[{
            imgSrc:"../images/xiaojiao.png",
            name:"小脚"
        },
            {
                imgSrc:"../images/zhitong.png",
                name:"直筒"
            },
            {
                imgSrc:"../images/laba.png",
                name:"喇叭"
            },
            {
                imgSrc:"../images/xiaojiao.png",
                name:"小脚"
            },
            {
                imgSrc:"../images/zhitong.png",
                name:"直筒"
            },
            {
                imgSrc:"../images/laba.png",
                name:"喇叭"
            }
        ],
        others:[
            {
                imgSrc:"../images/yaodai1.png",
                name:"腰带系在肚脐以上"
            },{
                imgSrc:"../images/yaodai2.png",
                name:"腰带系在肚脐以下2指处"
            },
            {
                imgSrc:"../images/yaodai3.png",
                name:"腰带系在肚脐上2指处"
            },

        ]
    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
        }
    },

})
$(".icon-gou").on("click",function(){
    $(this).addClass("active");
    $(this).parent('li').siblings().find('p').removeClass("active")

})