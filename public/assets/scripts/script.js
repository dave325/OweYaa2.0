/**
 * Home Page 
*/
$(document).ready(function(){
    $('.login-image').hover(function(){
        if($(this).children().hasClass('loginHover')){
            $(this).children().removeClass('loginHover');
        }else{
            $(this).children().addClass('loginHover');
        }
    });
});