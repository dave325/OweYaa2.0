/**
 * Home Page 
 */

(function(){
    $(document).ready(function(){
        $('.box').hover(function(){
            $(this).children('infoBox').height($(this).outerHeight);
            $(this).children('infoBox').slideToggle();
        });
    });
})();