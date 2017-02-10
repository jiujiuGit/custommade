
var demo_h5_upload_ops = {
    init:function(){
        this.eventBind();
    },
    eventBind:function(){
        var that = this;
        $(".upload").change(function(){
            var inputIndex = $(this).attr("id");
            //console.log(inputIndex);
            $("this").css('color','red')
            var reader = new FileReader();
            reader.onload = function (e) {
                that.compress(this.result,inputIndex);
            };
            reader.readAsDataURL(this.files[0]);
        });
    },
    compress : function (res,inputIdx) {
        var that = this;
        var img = new Image(),
            maxH = 300;
        img.onload = function () {
            var cvs = document.createElement('canvas'),
                ctx = cvs.getContext('2d');

            if(img.height > maxH) {
                img.width *= maxH / img.height;
                img.height = maxH;
            }
            cvs.width = img.width;
            cvs.height = img.height;

            ctx.clearRect(0, 0, cvs.width, cvs.height);
            ctx.drawImage(img, 0, 0, img.width, img.height);
            var dataUrl = cvs.toDataURL('image/jpeg', 1);
            //alert(inputIdx)
            $(".img_wrap").eq(inputIdx).attr("src",dataUrl);
            $(".img_wrap").eq(inputIdx).show();
            //alert(".img_wrap").
            $('.upload-photos').css({"color":'orange',"border":'1px solid orange'});
            // 上传略
            that.upload( dataUrl );
        };

        img.src = res;
    },
    upload:function( image_data ){
        /*上次方法屏蔽了*/
        return;
        $.ajax({
            url:common_ops.buildWapUrl("/demo/h5_upload"),
            type:'POST',
            data:{ image_data:image_data },
            dataType:'json',
            success:function( res ){
                alert(1)
            }
        });
    }
};


$(document).ready( function(){
    demo_h5_upload_ops.init();
} );