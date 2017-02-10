/**
 * Created by Administrator on 2016/12/26.
 */
var myapp = new Vue({
    el:"#person-choose",
    data:{
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html"
        },
        menuSeen:false,
        personMsg:[
            {
                name:"jiujiu",
                phone:10592939540,
                otherMsg:"女  170cm  55kg  2000-6  0条定制数据"
            },
            {
                name:"jiujiu",
                phone:10592939540,
                otherMsg:"女  170cm  55kg  2000-6  0条定制数据"
            },
            {
                name:"jiujiu",
                phone:10592939540,
                otherMsg:"女  170cm  55kg  2000-6  0条定制数据"
            },
        ]
    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
        }
    }
})
$(".moren").on("click","input",function(){
    //$(this).next("span").html("默认穿衣人");
    var val=$('input:radio[name="moren"]:checked').val();
    if(val==null){
        $(this).next("span").html("默认")
    }
    else{
        $(this).next("span").html("默认穿衣人")
    }
    //if($(".moren input").attr("checked","true")){
    //    $(this).next("span").html("默认穿衣人")
    //}
    //else
    //    $(this).next("span").html("设为默认")
})
$(".edit-person").on("click",function(){
    window.location.href = "editwearer.html"
})


/**
 * 下拉刷新，上拉加载
 */
var myScroll,pullDownEl, pullDownOffset,pullUpEl, pullUpOffset,generatedCount = 0;

function loaded() {
    //动画部分
    pullDownEl = document.getElementById('pullDown');
    pullDownOffset = pullDownEl.offsetHeight;
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;
    myScroll = new iScroll('wrapper', {
        useTransition: true,
        topOffset: pullDownOffset,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
            } else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
            }
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
            } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放刷新';
                this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                pullDownEl.className = 'loading';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中';
                pullDownAction();	// Execute custom function (ajax call?)
            } else if (pullUpEl.className.match('flip')) {
                pullUpEl.className = 'loading';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中';
                pullUpAction();	// Execute custom function (ajax call?)
            }
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
            li = document.createElement('li');
            li.innerText = '上拉加载--' + (++generatedCount);
            //el.appendChild(li, el.childNodes[0]);
        }
        myScroll.refresh();
    }, 400);
}