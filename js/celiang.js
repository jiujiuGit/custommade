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
    el:"#celiang",
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
        nextSeen:true
    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
        },
        imgEven:function(imgSrc){
            var that = this;
            return imgSrc.filter(function(index){
                return index == imgSrc[that.pageIndex-1];
            })
        },
        nameEven:function(pageName){
            var that = this;
            return pageName.filter(function(index){
                //return imgSrc[that.pageIndex-1]
                //alert(that.pageIndex)
                return index == pageName[that.pageIndex-1];
            })
        },
        setData:function(){
            var dataInput = document.getElementsByClassName('dataInput')[0].value;
            this.inputData[this.pageIndex] = dataInput;
        },
        next:function(){
            var dataInput = document.getElementsByClassName('dataInput')[0].value;
            this.inputData[this.pageIndex] = dataInput;
            if(this.pageIndex<8 && dataInput && dataInput!=0){
                this.pageIndex++;
                document.getElementsByClassName('dataInput')[0].value = this.inputData[this.pageIndex]
                this.prevSeen = true;
                this.downSeen = false;
                if(this.pageIndex>7){
                    this.downSeen = true;
                    this.nextSeen = false
                }
            }
        },
        prev:function(){
            var dataInput = document.getElementsByClassName('dataInput')[0].value;
            this.inputData[this.pageIndex] = dataInput;
            this.downSeen = false;
            if(this.pageIndex>1 ){
                this.nextSeen = true
                this.pageIndex--;
                document.getElementsByClassName('dataInput')[0].value =  this.inputData[this.pageIndex];
                if(this.pageIndex<2){
                    //this.downSeen = false;
                    this.prevSeen = false
                }
            }
        },
        add:function(){
            this.inputData[this.pageIndex] ++;
            //alert(this.inputData[this.pageIndex]);
            document.getElementsByClassName('dataInput')[0].value =  this.inputData[this.pageIndex]
        },
        reduce:function(){
            this.inputData[this.pageIndex] --;
            document.getElementsByClassName('dataInput')[0].value = this.inputData[this.pageIndex];
        },
        down:function(){
            window.location.href='dataconfirm.html'
        }
    }
})
