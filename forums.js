$(function() {
    
    var data = [{"category":"reason", "topic":"My husband stopped sleeping with me.", "daysAgo":2, "comments":91, "goodPost":1}, {"category":"reason", "topic":"People cough everytime I walk past them :(", "daysAgo":10, "comments":14, "goodPost":8}, {"category":"reason", "topic":"I'm pregnant.", "daysAgo":22, "comments":42, "goodPost":29},{"category":"reason", "topic":"Skippy, my dog, doesn't want to be petted anymore.", "daysAgo":40, "comments":194, "goodPost":88}, {"category":"reason", "topic":"I want to live a longer life!!", "daysAgo":79, "comments":31, "goodPost":52},{"category":"reason", "topic":"Saving money makes me happy.", "daysAgo":179, "comments":31, "goodPost":52}, {"category":"reason", "topic":"I can no longer play ultimate frisbee or run in the sand.", "daysAgo":510, "comments":41, "goodPost":508}];
    
    for (var i=0; i<data.length; i++) {
        var post = '<div class="post row">'
					+'<div class="col-md-6">'+data[i].topic+'</div>'
					+'<div class="col-md-2"><span class="number">'+data[i].daysAgo+'</span> days ago</div>'
					+'<div class="col-md-2"><span class="number">'+data[i].comments+'</span> comments</div>'
					+'<div class="col-md-2"><span class="number">'+data[i].goodPost+'</span> good post<a class="good-post-button"><span class="glyphicon glyphicon-thumbs-up"></span></a></div>'
				    +'</div>';
        $("#forum_container").append(post);
    }
    
    
});