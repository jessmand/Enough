$(function() {
    
    var sidebarHeight = function() {
        var height = $(window).height()-$('.row-top').height() - 10;
        console.log(height);
        $('.sidebar').height(height);
    }
    
    sidebarHeight();
    
    $(window).resize(sidebarHeight);
    
});