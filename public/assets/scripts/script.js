/**
 * Home Page 
*/
$(document).ready(function(){
    $('.login-image').hover(function(){
        console.log('touch');
        if($(this).children().hasClass('loginHover')){
            $(this).children().removeClass('loginHover');
        }else{
            $(this).children().addClass('loginHover');
        }
    });
});