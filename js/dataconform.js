/**
 * Created by Administrator on 2016/12/30.
 */
/**
 * Created by Administrator on 2016/12/29.
 */
/**
 * Created by Administrator on 2016/12/29.
 */
/**
 * Created by Administrator on 2016/12/28.
 */
var myapp = new  Vue({
    el:"#dataConfirm",
    data:{
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html",
        },
        menuSeen:false,
        pageName:["裤长","下装腰围","下装臀围","横档",'膝围','脚口宽','前浪','后浪'],
        jtpageName:['腰围至鞋底','直档','下装腰围','下装臀围','大腿围','膝围','小脚围','脚踝围'],
        imgSrc:['../images/kuchang.jpg','../images/xzyw.jpg','../images/xztw.jpg','../images/hd.jpg','../images/xw.jpg','../images/jkk.jpg','../images/ql.jpg','../images/hl.jpg'],
        jtimgSrc:['../images/jt1.jpg','../images/jt2.jpg','../images/jt3.jpg','../images/jt4.jpg','../images/jt5.jpg','../images/jt6.jpg','../images/jt7.jpg','../images/jt8.jpg'],
        pageIndex:1,
        inputData:[0 , 0, 0, 0, 0,0 , 0,0 ,0],
        prevSeen : false,
        downSeen:false,
        nextSeen:true,
        tittle:"测量已有服装"
    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
        },
        pay:function(){
            window.location.href='order.html'
        },
        shopBag:function(){
            window.location.href = 'shopbag.html'
        }
    }
})
