/**
 * Created by Administrator on 2017/1/9.
 */
var child = {
    template: '<div class="menu" v-if="menuSeen"><ul><li class=" iconfont icon-shouyeshouye"><a :href="menuHerf.index"><span>首页</span></a></li>'+
    '<li class=" iconfont icon-gouwudai"><a :href="menuHerf.shopBag"><span>购物袋</span></a></li>'+
    '<li class=" iconfont icon-wo"><a :href="menuHerf.mine"><span>我</span></a></li>'+
    '<li class=" iconfont icon-saoyisao"><a ><span>扫一扫</span></a></li> </ul>'+
    '</div>'
}
var vue = new Vue({
    el:'#hamburger',
    components:{
        'my-component': '<div class="menu" v-if="menuSeen"><ul><li class=" iconfont icon-shouyeshouye"><a :href="menuHerf.index"><span>首页</span></a></li>'+
        '<li class=" iconfont icon-gouwudai"><a :href="menuHerf.shopBag"><span>购物袋</span></a></li>'+
        '<li class=" iconfont icon-wo"><a :href="menuHerf.mine"><span>我</span></a></li>'+
        '<li class=" iconfont icon-saoyisao"><a ><span>扫一扫</span></a></li> </ul>'+
        '</div>'
    },
    data:{
        menuSeen:true,
        menuHerf:{
            index:"index.html",
            shopBag:"shopbag.html",
            mine:"mine.html",
            myOrder:"myorder.html",
        },
    }
})