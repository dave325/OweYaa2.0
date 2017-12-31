/**
 * Home Page 
*/
$(document).ready(function(){
    $('.box').mouseover(function(){
        console.log('hi');
        $(this).children('.infoBox').slideDown();
    });
});