if (localStorage["signed-in"] != "true") {
        window.location.replace("./index.html");
}

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
    
    $(".row-top").load("header.html", function() {
        $(".sidebar").load("sidebar.html", function() {
            $("#modals").load("modals.html", function() {
                
                sidebarHeight();
                $(".dial").knob({
                    readOnly: true,
                    fgColor: "rgba(76,102,164,0.7)",
                    bgColor: "#FFFFFF",
                    thickness: 0.2,
                    width:100,
                    height:100,
                    displayInput: false
                });
            
                
                $(".reason-span").append(localStorage["reason"]);
                $("#your-name").append(localStorage["name"]);
                $(".sign-out").on("click", function() {
                    localStorage["signed-in"] = "false";
                    location.href="./index.html";
                });
                var modalFunctions = modalJavascript();
                
                pageJavascript(modalFunctions);
                
            
            });
        });
    });
    
    $(window).resize(sidebarHeight);
    
    

});
