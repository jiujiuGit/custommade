/**
 * Created by Administrator on 2016/12/30.
 */
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
            myOrder:"myorder.html"
        },
        menuSeen:false,
        price:['120.00','1.00','123.00','0.00'],
        paywayActive:false,
        invoiceActive:false,
        invoiceType:false,
        personalActive:false,
        companyActive:false
    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
        },
        consignee:function(){
            window.location.href='addrchoose.html'
        },
        coupon:function(){
            window.location.href = 'coupon.html'
        },
        payWay:function(){
            this.paywayActive = !this.paywayActive;
        },
        invoice:function(){
            this.invoiceActive = !this.invoiceActive;
            this.invoiceType = !this.invoiceType;
            if(this.paywayActive == false){
                this.companyActive = false
            }
        },
        personal:function(){
            this.personalActive = true;
            this.companyActive = false
        },
        company:function(e){
            this.personalActive = false;
            this.companyActive = true
        }
    }
})