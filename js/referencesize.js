/**
 * Created by Administrator on 2016/12/28.
 */
var myapp = new  Vue({
    el:"#referenceSize",
    data:{
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html"
        },
        menuSeen:false,
        sizeRange:["145-165","165-175",'175-185','190'],
        sizeList:[["145/60A","150/61A","155/62A","160/62A",'165/42A','165/64A'],
            ["165/60A","1650/61A","165/62A","170/62A",'170/42A','175/64A'],
            ["175/60A","175/61A","175/62A","180/62A",'185/42A','185/64A'],
            ['190/98B']
        ],
        jtSize:0,
        rangeIndex:0,
        jtData:{ywxd:0, xzyw:0, dtw:0, xtw:0, zd:0, zttw:0, xw:0, jhw:0},
    },
    methods:{
        rangeChoose:function(index){
            this.rangeIndex = index;
            var a = document.getElementsByClassName("size-range")[0].getElementsByTagName("li")
            var n=0;
            for (n;n< a.length;n++){
                a[n].setAttribute('class','notactive');
            }
            document.getElementsByClassName("size-range")[0].getElementsByTagName("li")[index].setAttribute('class','active');
        },
        even: function (sizeList) {
            var that = this;
            return sizeList.filter(function(number){
                return number == sizeList[that.rangeIndex];
            })
        },
        reverse:function(){
            this.menuSeen = !this.menuSeen
        },
        sizeChoose:function(item,index){
            var a=document.getElementsByClassName("size-li")[0].getElementsByTagName("p");
            this.jtSize = item;
            var n=0;
            for (n;n< a.length;n++){
                a[n].setAttribute('class','notactive');
            }
            var a=document.getElementsByClassName("size-li")[0].getElementsByTagName("p")[index].setAttribute('class','active');
            switch (item) {
                case "145/60A":
                    this.jtData = {ywxd:14560, xzyw:14560, dtw:14560, xtw:14560, zd:14560, zttw:14560, xw:14560, jhw:14560}
                    break;
                case '150/61A':
                    this.jtData = {ywxd:15061, xzyw:15061, dtw:15061, xtw:15061, zd:15061, zttw:15061, xw:15061, jhw:15061}
                    break;
            }

        },
        next:function(){
            window.location.href='customize.html'
        }
    }
})