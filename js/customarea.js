
/**
 * Created by Administrator on 2016/12/28.
 */
var myapp = new  Vue({
    el:"#customArea",
    data:{
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html",
        },
        menuSeen:false,
        imgSrc:'../images/txu.jpg',
        tittle:"T恤印花定制"
    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
        },
        custommall:function(){
            window.location.href = 'custommall.html'
        }

    }
});

