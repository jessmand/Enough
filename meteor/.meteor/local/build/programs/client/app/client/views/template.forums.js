(function(){
Template.__define__("forums", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    id: "content"
  }, "\n	    ", HTML.DIV({
    "class": "container-fluid"
  }, HTML.Raw('\n		<div class="row">\n		    <div id="header" class="title col-md-12"> Forums </div>\n		</div>\n		<div class="row">\n		    <div class="col-md-12 forum-nav-buttons">\n			<div class="btn-group btn-group-justified">\n			    <div class="btn-group">\n				<button type="button" class="active btn btn-default forum-nav">Reasons</button>\n			    </div>\n			    <div class="btn-group">\n				<button type="button" class="btn btn-default forum-nav">Goals</button>\n			    </div>\n			    <div class="btn-group">\n				<button type="button" class="btn btn-default forum-nav">Stories</button>\n			    </div>\n			    <div class="btn-group">\n				<button type="button" class="btn btn-default forum-nav">Advice</button>\n			    </div>\n			    <div class="btn-group">\n				<button type="button" class="btn btn-default forum-nav">Other</button>\n			    </div>\n			</div>\n		    </div>\n		</div>\n		<div id="new_search" class="row">\n		    <div class="col-md-6 align-left">\n			<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-plus"></span> New Post</button>\n		    </div>\n		    <div class="col-md-6">\n			<div class="input-group search-field">\n			    <input type="text" class="form-control">\n			    <span class="input-group-btn">\n				<button id="btn-search" type="button" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>\n			    </span>\n			</div>\n		    </div>\n		</div>\n		'), HTML.DIV({
    id: "forum_container",
    "class": "container-fluid"
  }, "\n			", UI.Each(function() {
    return Spacebars.call(self.lookup("forum_posts"));
  }, UI.block(function() {
    var self = this;
    return [ "\n				", Spacebars.include(self.lookupTemplate("forum_post")), "\n			" ];
  })), "\n		"), "\n	    "), "\n	");
}));

Template.__define__("forum_post", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "post row"
  }, "\n		", HTML.DIV({
    "class": "col-md-6"
  }, function() {
    return Spacebars.mustache(self.lookup("post"));
  }), "\n		", HTML.DIV({
    "class": "col-md-2"
  }, HTML.SPAN({
    "class": "number"
  }, function() {
    return Spacebars.mustache(self.lookup("days_ago"));
  }), " days ago"), "\n		", HTML.DIV({
    "class": "col-md-2"
  }, HTML.SPAN({
    "class": "number"
  }, function() {
    return Spacebars.mustache(self.lookup("comments"));
  }), " comments"), "\n		", HTML.DIV({
    "class": "col-md-2"
  }, HTML.SPAN({
    "class": "number"
  }, function() {
    return Spacebars.mustache(self.lookup("likes"));
  }), HTML.Raw(' good post<a class="good-post-button"><span class="glyphicon glyphicon-thumbs-up"></span></a>')), "\n	");
}));

})();
