$(function() {
    
    var sidebarHeight = function() {
        var height = $(window).height()-$('.top-banner').height() - 10;
        console.log(height);
        $('.sidebar').height(height);
        var contentLeft = $('.sidebar').width()+20;
        var contentWidth = $(window).width()-contentLeft-10;
        $('.content').css('margin-left', contentLeft);
        $('.content').width(contentWidth);
    }
    $('.row-top').height($('.top-banner').height());
    //$('.sidebar').css("top", $('.top-banner').height());
    sidebarHeight();
    
    
    $(window).resize(sidebarHeight);
    
});