$(function() {
    
    $("#post-search").hide();
    var showResults=function(){
        $("#pre-search").hide();
        $("#post-search").show();
    }

    $("#search").click(showResults); 

    $("#close-modal").click(function(){
        $("#joeK-info").modal('hide');
    })

    $("#follow").click(function(){
        $(this).html("Following");
        $(this).css("background-color","#D8D8D8"); 
        $("#people-following").append("<li><a>Joe K.</a></li>");
    })
    
});