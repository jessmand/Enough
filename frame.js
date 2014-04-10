$(function() {
    
    var sidebarHeight = function() {
        var height = $(window).height()-$('.top-banner').height() - 10;
        console.log(height);
        $('.sidebar').height(height);
    }
    $('.row-top').height($('.top-banner').height());
    //$('.sidebar').css("top", $('.top-banner').height());
    sidebarHeight();
    
    
    $(window).resize(sidebarHeight);
    
});