(function(){
Template.__define__("people", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    id: "content"
  }, "\n	    ", HTML.DIV({
    "class": "container-fluid"
  }, HTML.Raw('\n		<!-- People search bar -->\n		<nav class="navbar navbar-default" role="navigation">\n		    <div class="container-fluid">\n			<div class="navbar-header">\n			    <div class="navbar-brand">Filter</div>\n			</div>\n			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n			    <form class="navbar-form navbar-left" role="search">\n				<div class="form-group">\n				    <input type="text" class="form-control" placeholder="Keywords">\n				    <input type="text" class="form-control" placeholder="Age">\n				    <input type="text" class="form-control" placeholder="Years Smoked">\n				    <select class="form-control">\n					<option>Any Gender</option>\n					<option>Male</option>\n					<option>Female</option>\n				    </select>\n				</div>\n			    </form>\n			    <form class="navbar-form navbar-right">\n				<button id="people-view-all" type="button" class="btn btn-default">View All</button>\n				<button id="search" type="button" class="btn btn-default">Search</button>\n			    </form>\n			</div>\n			<!-- /.navbar-collapse -->\n		    </div>\n		    <!-- /.container-fluid -->\n		</nav>\n		'), HTML.DIV({
    id: "pre-search"
  }, "\n		    ", HTML.DIV({
    "class": "row"
  }, "\n			", UI.Each(function() {
    return Spacebars.call(self.lookup("people"));
  }, UI.block(function() {
    var self = this;
    return [ "\n				", Spacebars.include(self.lookupTemplate("person")), "\n			" ];
  })), "\n			\n		    "), "\n		"), "\n	    "), "\n    ");
}));

Template.__define__("person", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "col-sm-6 col-md-6"
  }, "\n	    ", HTML.DIV({
    "class": "thumbnail"
  }, "\n		    ", HTML.IMG({
    src: function() {
      return Spacebars.mustache(self.lookup("url"));
    },
    alt: "...",
    "class": "people-pic"
  }), "\n		", HTML.DIV({
    "class": "caption"
  }, "\n			", HTML.H3(function() {
    return Spacebars.mustache(self.lookup("name"));
  }), "\n			", HTML.P(function() {
    return Spacebars.mustache(self.lookup("bio"));
  }), "\n		    ", HTML.P(HTML.Raw('\n			<a href="#" class="btn btn-view" role="button">View Profile</a>\n			'), UI.If(function() {
    return Spacebars.call(self.lookup("isFollowing"));
  }, UI.block(function() {
    var self = this;
    return [ "\n				", HTML.A({
      href: "#",
      id: "following",
      "class": "btn btn-follow btn-default",
      role: "button"
    }, "Following"), "\n			" ];
  }), UI.block(function() {
    var self = this;
    return [ "\n				", HTML.A({
      href: "#",
      id: "follow",
      "class": "btn btn-follow btn-default",
      role: "button"
    }, "Follow"), "\n			" ];
  })), "\n\n		    "), "\n		"), "\n	    "), "\n	");
}));

})();
