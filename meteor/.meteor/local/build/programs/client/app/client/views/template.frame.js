(function(){
Template.__define__("frame", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "container-fluid"
  }, HTML.Raw('\n    <div class="row row-top">\n	<div class="col-md-12 top-banner">\n	    <div class="row">\n		<div class="col-md-3 main-nav-title">\n		    Enough.\n		</div>\n		<div class="col-md-7 reason">\n		    <span class="reason-span">To be a good example for my kids.</span>\n		</div>\n		<div class="col-md-2 top-links">\n		    <div class="profile-name">\n			<b>Jim Bob</b><br>\n			<a href="#" class="sign-out">Sign out</a>\n		    </div>\n		    <img src="./images/prof_pic.jpg" class="profile-picture">\n		</div>\n	    </div>\n	</div>\n    </div>\n    '), HTML.DIV({
    "class": "row"
  }, "\n	", HTML.DIV({
    "class": "sidebar"
  }, HTML.Raw('\n	    <div id="frame-progress">\n		This week\'s goal: 17 per day\n		<div class="progress">\n		  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">\n		    <span class="sr-only">60% Complete</span>\n		  </div>\n		</div>\n		Current average: 18.2 per day\n	    </div>\n	    <button class="btn btn-primary" id="update-progress-btn">Update Progress</button>\n	    <ul class="main-nav nav nav-pills nav-stacked">\n		    <li><a href="./">My Progress</a></li>\n		    <li><a href="./people">People</a></li>\n		    <li><a href="./forums">Forums</a></li>\n		    <li><a href="./resources">Resources</a></li>\n	    </ul>\n	    \n	    '), HTML.DIV({
    "class": "following-list"
  }, HTML.Raw('\n		<span class="following-list-label"><img src="./images/following line right.png" class="following-line"><b>Following</b><img src="./images/following line left.png" class="following-line"></span>\n		'), HTML.UL({
    "class": "following-nav nav nav-pills nav-stacked"
  }, "\n			", UI.Each(function() {
    return Spacebars.call(self.lookup("following"));
  }, UI.block(function() {
    var self = this;
    return [ "\n				", HTML.LI(HTML.A(function() {
      return Spacebars.mustache(self.lookup("name"));
    })), "\n			" ];
  })), "\n		"), "\n	    "), "\n	    \n	"), "\n		", HTML.DIV({
    id: "content"
  }, "\n			", Spacebars.include(self.lookupTemplate("yield")), "\n		"), "\n    "), "\n");
}));

})();
