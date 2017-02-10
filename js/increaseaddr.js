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
            myOrder:"myorder.html",
        },
        menuSeen:false,
        isMoren:false
},
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
        },
        save:function(){
            window.location.href = 'addrchoose.html'
        },
        moren:function(){
            this.isMoren = !this.isMoren;
        }
    }
});
$(".save").on("click",function(){
    var consignee = $(".consignee>input").val();
    var phoneNumber = $(".phoneNumber>input").val();
    var addrDtl = $(".addrDtl>input").val();
    var zipCode = $(".zipCode>input").val();

    var cReg = /^[\u4E00-\u9FA5]{1,6}$/
    var pReg = /^1[34578]\d{9}$/
    //var aReg = /^d{3}-d{8}|d{4}-d{7}$/
    var zReg = /^[1-9]\d{5}(?!\d)$/

    if(!cReg.test(consignee) || ! pReg.test(phoneNumber) || !zReg.test(zipCode)){
        alert("输入有错")
    }

})
