$(function() {
    
    var sidebarHeight = function() {
        $('.row-top').height($('.top-banner').height());
        var sidebarHeight = $(window).height()-$('.top-banner').height() - 10;
        $('.sidebar').height(sidebarHeight);
        var contentLeft = $('.sidebar').width()+20;
        var contentWidth = $(window).width()-contentLeft-35;
        $('#content').css('margin-left', contentLeft);
        $('#content').width(contentWidth);
    }
    
    //$('.sidebar').css("top", $('.top-banner').height());
    sidebarHeight();
    
    
    $(window).resize(sidebarHeight);
    var path = "file:///C:/Users/Jessica/Documents/6.813/Enough";
    $(".main-nav").append("<li><a href='"+path+"/myprogress.html'>My Progress</a></li>")
        .append("<li><a href='"+path+"/people.html'>People</a></li>")
        .append("<li><a href='"+path+"/forums.html'>Forums</a></li>")
        .append("<li><a href='"+path+"/resources.html'>Resources</a></li>");  
});