/**
 * Created by Administrator on 2017/1/19.
 */
var myapp = new Vue({
    el:"#madeDetail",
    data: {
        menuHerf: {
            index: "index.html",
            shopBag: "shopbag.html",
            mine: "mine.html",
            myOrder: "myorder.html",
        },
        menuSeen: false,
    },
    methods: {
        reverse: function () {
            this.menuSeen = !this.menuSeen
        }
    }
})