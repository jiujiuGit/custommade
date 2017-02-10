/**
 * Created by Administrator on 2017/1/5.
 */

$('.qr-btn').on('click',function(){
    Qrcode.init($('[node-type=qr-btn]'));
})