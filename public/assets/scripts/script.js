/**
 * Home Page 
*/
$(document).ready(function(){
    $('.login-image').mouseenter(function(){
        console.log('touch');
        if($(this).children().hasClass('loginHover')){
            $(this).children('h3').removeClass('loginHover');
        }else{
            $(this).children('h3').addClass('loginHover');
        }
    });
    $('.login-image').mouseleave(function(){
        if($(this).children('h3').hasClass('loginHover')){
            $(this).children().removeClass('loginHover');
        }else{
            $(this).children('h3').addClass('loginHover');
        }
    });
});