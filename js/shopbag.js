/**
 * Created by Administrator on 2017/1/3.
 */
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
            myOrder:"myorder.html"
        },
        menuSeen:false,
        allchecked:false,
        totalSeen:true,
        totalPrice:0,
        shopBagData:[{
            imgSrc:'../images/madelist/b6c6825.png',
            proName:"女五袋水洗裤",
            proNumber:120202,
            proMaterial:"氨纶98% 涤纶2%",
            wearer:'安吉',
            price:123.00,
            amount:5,
            isChecked:false,
        },
            {
                imgSrc:'../images/madelist/b0ad5f3.png',
                proName:"女五袋水洗裤",
                proNumber:120202,
                proMaterial:"氨纶98% 涤纶2%",
                wearer:'小鱼儿',
                price:123.00,
                amount:1,
                isChecked:false
            },
            {
                imgSrc:'../images/madelist/60fc100.png',
                proName:"阿拉蕾T恤",
                proNumber:120202,
                proMaterial:"氨纶98% 涤纶2%",
                wearer:'阿拉蕾',
                price:123.00,
                amount:5,
                isChecked:false
            }
        ]
    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
        },
        setData:function(key){
            var dataInput = document.getElementsByClassName('amount')[key].value;
            this.shopBagData[key].amount = dataInput;
        },
        reduce:function(key){
            if(this.shopBagData[key].amount>0){
                this.shopBagData[key].amount--;
            }
            //for(var i=0;i<this.shopBagData.length;i++){
            //    this.totalPrice = this.shopBagData[i].price*this.shopBagData[i].amount;
            //}
        },
        increase:function(key){
            this.shopBagData[key].amount++;
            //for(var i=0;i<this.shopBagData.length;i++){
            //    this.totalPrice += this.shopBagData[i].price*this.shopBagData[i].amount;
            //}

        },
        manage:function(){

            if(this.totalSeen == true){
                document.getElementsByClassName("manage")[0].innerHTML = "完成"
            }
            else {
                document.getElementsByClassName("manage")[0].innerHTML = "管理"
            }
            this.totalSeen = !this.totalSeen;

        },
        checked:function(key){

            if(this.shopBagData[key].isChecked  == true){
                this.totalPrice -= this.shopBagData[key].price*this.shopBagData[key].amount;
                this.shopBagData[key].isChecked  = false;
            }
            else if(this.shopBagData[key].isChecked  == false){
                this.totalPrice += this.shopBagData[key].price*this.shopBagData[key].amount;
                this.shopBagData[key].isChecked  = true;
            }
        },
        checkAll:function(){
            var all = document.getElementsByClassName("checkAll")[0].getElementsByTagName("span")[0];
            if(all.getAttribute('allchecked')=="allchecked"){
                all.style.color='gainsboro';
                this.totalPrice = 0;
                all.setAttribute("allchecked","notchecked");
                for(var i=0;i<this.shopBagData.length;i++){
                    document.getElementsByClassName("icon-gou")[i].style.color ='gainsboro'
                }
            }
            else if(all.getAttribute('allchecked')=="notchecked"){
                all.style.color='orange'
                for(var i=0;i<this.shopBagData.length;i++){
                    this.totalPrice += this.shopBagData[i].price*this.shopBagData[i].amount;
                    document.getElementsByClassName("icon-gou")[i].style.color ='orange'
                }
                all.setAttribute("allchecked","allchecked")
            }
        },
        customize:function(){
            window.location.href='customize.html'
        }
    }
});

$(".icon-gou").on("click",function(){
    var isActive = $(this).attr("isactive");
    if (isActive == "active"){
        $(this).css("color","gainsboro");
        $(this).attr("isactive","noactive")
    }
    else if(isActive == "noactive") {
        $(this).css("color","orange")
        $(this).attr("isactive","active")
    }
})


/**
 * 下拉刷新，上拉加载
 */
var myScroll,pullDownEl, pullDownOffset,pullUpEl, pullUpOffset,generatedCount = 0;

function loaded() {
    //动画部分
    pullDownEl = document.getElementById('pullDown');
    pullDownOffset = pullDownEl.offsetHeight;
    //pullUpEl = document.getElementById('pullUp');
    //pullUpOffset = pullUpEl.offsetHeight;
    myScroll = new iScroll('wrapper', {
        useTransition: true,
        topOffset: pullDownOffset,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
            }
            //else if (pullUpEl.className.match('loading')) {
            //    pullUpEl.className = '';
            //    pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
            //}
        },
        onScrollMove: function () {

            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放刷新';
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
                this.minScrollY = -pullDownOffset;
            }
            //else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
            //    pullUpEl.className = 'flip';
            //    pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放刷新';
            //    this.maxScrollY = this.maxScrollY;
            //} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
            //    pullUpEl.className = '';
            //    pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
            //    this.maxScrollY = pullUpOffset;
            //}
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                pullDownEl.className = 'loading';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中';
                pullDownAction();	// Execute custom function (ajax call?)
            }
            //else if (pullUpEl.className.match('flip')) {
            //    pullUpEl.className = 'loading';
            //    pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中';
            //    pullUpAction();	// Execute custom function (ajax call?)
            //}
        }
    });

    loadAction();
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);//阻止冒泡
document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 0); }, false);

//初始状态，加载数据
function loadAction(){
    var el, li;
    el = document.getElementById('thelist');
    for (i=0; i<10; i++) {
        li = document.createElement('li');
        li.innerText = '初始数据--' + (++generatedCount);
        //el.appendChild(li, el.childNodes[0]);
    }
    myScroll.refresh();
}

//下拉刷新当前数据
function pullDownAction () {
    setTimeout(function () {
        //这里执行刷新操作

        myScroll.refresh();
    }, 400);
}

//上拉加载更多数据
function pullUpAction () {
    setTimeout(function () {
        var el, li;
        el = document.getElementById('thelist');
        for (i=0; i<10; i++) {
            //li = document.createElement('li');
            //li.innerText = '上拉加载--' + (++generatedCount);
            //el.appendChild(li, el.childNodes[0]);

        }
        myScroll.refresh();
    }, 400);
}
