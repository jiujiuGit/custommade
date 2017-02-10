/**
 * Created by Administrator on 2016/12/19.
 */
var myapp = new Vue({
    el:"#madelist",
    data:{
        bannerImg:"../images/index/34ab32f.jpg",
        fastList:[
            {
                imgHerf:"prodetail.html",
                imgSrc:"../images/madelist/b0ad5f3.png",
                proName:"女定制印花T恤（100件以内）",
                proNum:"3424324",
                proPrice:"120"
            },
            {
                imgHerf:"prodetail.html",
                imgSrc:"../images/madelist/b6c6825.png",
                proName:"女定制印花T恤（100件以内）",
                proNum:"3424324",
                proPrice:"120"
            },
            {
                imgHerf:"prodetail.html",
                imgSrc:"../images/madelist/b0ad5f3.png",
                proName:"女定制印花T恤（100件以内）",
                proNum:"3424324",
                proPrice:"23"
            },
            {
                imgHerf:"prodetail.html",
                imgSrc:"../images/madelist/b0ad5f3.png",
                proName:"女定制印花T恤（100件以内）",
                proNum:"3424324",
                proPrice:"23"
            },
            {
                imgHerf:"prodetail.html",
                imgSrc:"../images/madelist/b0ad5f3.png",
                proName:"女定制印花T恤（100件以内）",
                proNum:"3424324",
                proPrice:"23"
            }
        ],
        pantsList:[
            {
                imgSrc:"../images/madelist/b0ad5f3.png",
                proName:"女定制印花T恤（100件以内）",
                proNum:"3424324",
                proPrice:"120"
            },
            {
                imgSrc:"../images/madelist/b6c6825.png",
                proName:"女定制印花T恤（100件以内）",
                proNum:"3424324",
                proPrice:"120"
            },
            {
                imgSrc:"../images/madelist/b0ad5f3.png",
                proName:"女定制印花T恤（100件以内）",
                proNum:"3424324",
                proPrice:"23"
            }
        ],
        jeansList:[
            {
                imgSrc:"../images/madelist/b0ad5f3.png",
                proName:"女定制印花T恤（100件以内）",
                proNum:"3424322",
                proPrice:"120"
            },
            {
                imgSrc:"../images/madelist/b6c6825.png",
                proName:"女定制印花T恤（100件以内）",
                proNum:"3424323",
                proPrice:"120"
            },
            {
                imgSrc:"../images/madelist/b0ad5f3.png",
                proName:"女定制印花T恤（100件以内）",
                proNum:"3424324",
                proPrice:"23"
            }
        ],
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html",
        },
        menuSeen:false
    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen;
        },
        toDetail:function(){
            window.location.href="prodetail.html"
        }
    }
})


//$('document').ready(function(){
//    layer.msg('这是最常用的吧');
//})
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