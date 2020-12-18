$(document).ready(function(){
    $('.prod1').show();
    $(".prod2").hide();
    $('#prod1').addClass('active');
    $('.tabs button').on('click',function(){
        $(".tabs button").removeClass("active");
        if ( !$(this).hasClass("active") ){
            $(this).addClass("active");
        } else {
            console.log("oussama");
            $(this).removeClass("active");
        }
        $(".prod").hide();
        $("."+this.id).show();
    });
});