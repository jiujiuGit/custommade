
/**
 * Created by Administrator on 2016/12/28.
 */
var myapp = new  Vue({
    el:"#collection",
    data:{
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html",
        },
        menuSeen:false,
        styleSeen:true,
        mlSeen:false,
        styles:[{
            imgSrc:'../images/madelist/b6c6825.png',
            proName:'女定制印花T恤',
            proPrice:'130.00',
            proNumber:'138927',
            isCollect:true,
        },
            {
                imgSrc:'../images/madelist/b0ad5f3.png',
                proName:'女定制印花T恤',
                proPrice:'120.00',
                proNumber:'129227',
                isCollect:true,
            },
            {
                imgSrc:'../images/madelist/b6c6825.png',
                proName:'女定制印花T恤',
                proPrice:'110.00',
                proNumber:'112927',
                isCollect:false,
            }
        ],
        material:[{
            imgSrc:'../images/custom/c1.png',
            proName:'女定制印花T恤',
            proPrice:'130.00',
            proNumber:'138927',
            isCollect:true,
        },
            {
                imgSrc:'../images/custom/c2.png',
                proName:'女定制印花T恤',
                proPrice:'120.00',
                proNumber:'129227',
                isCollect:true,
            },
            {
                imgSrc:'../images/custom/c3.png',
                proName:'女定制印花T恤',
                proPrice:'110.00',
                proNumber:'112927',
                isCollect:false,
            }
            ]
    },
    methods:{
        reverse:function(){
            this.menuSeen = !this.menuSeen
        },
        even:function(styles){
            //return styles.filter(function(index){
            //    //for(var i= 0;i<styles.length;i++){
            //    //    return index == styles[i];
            //    //    if (styles[i].isCollect == true){
            //    //        return index == styles[i];
            //    //    }
            //    //}
            //    return index  == styles[index].isCollect == true;
            //})
        },
        style:function(){
            this.styleSeen = true;
            this.mlSeen = false;
            //document.getElementsByClassName('choose')[0].getElementsByTagName('span')[0].style.borderBottom = '2px solid orange'
        },
        ml:function(){
            this.mlSeen = true;
            this.styleSeen = false;
            //document.getElementsByClassName('choose')[0].getElementsByTagName('span')[0].style.borderBottom = '2px solid orange'
        },
        toCustomize:function(){
            window.location.href = 'customize.html'
        },
        cancel:function(){
            alert(1)
            //询问框
            //layer.confirm('您是如何看待前端开发？', {
            //    btn: ['重要','奇葩'] //按钮
            //}, function(){
            //    layer.msg('的确很重要', {icon: 1});
            //}, function(){
            //    layer.msg('也可以这样', {
            //        time: 20000, //20s后自动关闭
            //        btn: ['明白了', '知道了']
            //    });
            //});
        }
    }
});
$(".choose>p").on("click",function(){
    $(this).find("span").css('border-bottom','2px solid orange');
    $(this).siblings().find('span').css('border-bottom','none')
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
        },

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
