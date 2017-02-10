/**
 * Created by Administrator on 2016/12/16.
 */
var Swipe = require('swipe');

Vue.component('pagination-swipe',{
    props: ['swipeinfo'],
    template: require('../views/swipe-temp.html'),
    data: function() {
        return {
            mySwipe: {},
            slideNum: {},
        };
    },
    ready: function() {
        var self = this;
        //获取子组件中分页小圈圈
        var slides = self.$els.swipe.getElementsByClassName('swipe-pagination-switch');
        self.mySwipe = new Swipe(self.$els.swipe, {
            startSlide: 0,
            continuous: true,
            speed: 1000,
            auto: 4000,
            stopPropagation: false,
            callback: function(index, elem) {
                //渲染分页小圈圈
                for (var i = 0; i < slides.length; i++) {
                    if (i != index) {
                        slides[i].style.opacity = "0.2";
                        slides[i].style.background = "#000";
                    } else {
                        slides[index].style.opacity = "1";
                        slides[index].style.background = "#ee3a4a";
                    }
                }
            },
        });
        self.slideNum = self.mySwipe.getNumSlides() - 1;
    },
    methods: {
        //点击底部小圈圈，跳到其所对应页
        slideToCur: function(index) {
            var self = this;
            self.mySwipe.slide(index, 300);
        },
    }
});