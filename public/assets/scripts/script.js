/**
 * Home Page 
 */

(function(){
    $(document).ready(function(){
        $('.box').hover(function(){
            $(this).children('infoBox').slideToggle();
        });
    });
})();