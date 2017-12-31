/**
 * Home Page 
*/
$(document).ready(function(){
    $('.login-image').hover(function(){
        if($(this).hasClass('loginHover')){
            $(this).removeClass('loginHover');
        }else{
            $(this).addClass('loginHover');
        }
    });
});