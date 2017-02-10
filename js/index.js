/**
 * Created by Administrator on 2016/12/16.
 */
//var Child = {
//    template: '<div>A custom component!</div>'
//}

var app = new Vue({
    el:"#index",
    //components: {
    //    // <my-component> 将只在父模板可用
    //    'my-component': Child
    //},
    data:{
        swipeInfo:[{
            href:"customarea.html",
            src:"../images/index/a34362b.jpg"
                    },
            {
            href:"customarea.html",
                src:"../images/index/a34362b.jpg"
        },{
            href:"customarea.html",
            src:"../images/index/034e5f4.jpg"
        }
        ],
        swipeLeft:"0",
        menuDisplay:{"display":"none"},
        fastCus:{
            href:'madelist.html',
            fstSrc:'../images/index/34ab32f.jpg'
        },
        heighlyCus:{
            href1:'madelist.html',
            href2:'madelist.html',
            imgSrc1:'../images/index/35e9321.jpg',
            imgSrc2:'../images/index/63721cb.jpg'
        },
        menuSeen:false,
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html",
        },
    },
    methods:{
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
        reverse:function(){
            this.menuSeen=!this.menuSeen
        },
        bannerTo:function(key){
            window.location.href ='customarea.html';
        }
    }
})
