/**
 * Home Page 
 */

(function(){
    $(document).ready(function(){
        $('.box').mouseover(function(){
            $(this).children('infoBox').slideDown();
        });
    });
})();