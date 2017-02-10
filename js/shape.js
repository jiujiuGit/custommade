/**
 * Created by Administrator on 2016/12/27.
 */
var myapp = new Vue({
    el:"#shape",
    data:{
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html"
        },
        personName:"jiujiu",
        menuSeen:false,
        shapeFeature:[{
            name:"腿型",
            imgSrc:"../images/4499cf9.jpg"
        },
            {
                name:"肚型",
                imgSrc:"../images/duxin.jpg"
            },
            {
                name:"臀型",
                imgSrc:"../images/tunxin.jpg"
            },
            {
                name:"肩型",
                imgSrc:"../images/jianxin.jpg"
            },
            {
                name:"肩型",
                imgSrc:"../images/jianxin.jpg"
            },

        ]
    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
        }
    }
})