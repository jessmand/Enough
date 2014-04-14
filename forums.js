$(function() {
    
    var data = [{"category":"reason", "topic":"My husband stop sleeping with me.", "daysAgo":2, "comments":91, "goodPost":1}];
    
    for (var i=0; i<data.length; i++) {
        var post = '<div class="post" class="row">'
					+'<div class="col-md-6">My husband stop sleeping with me.</div>
					+'<div class="col-md-2"><span id="number">2</span> days ago</div>
					+'<div class="col-md-2"><span id="number">91</span> comments</div>
					+'<div class="col-md-2"><span id="number">1</span> good post</div>
				    +'</div>';
        $("#forum_container").append(post);
    }
    
});