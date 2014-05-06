(function(){
Template.__define__("goals", (function() {
  var self = this;
  var template = this;
  return HTML.Raw('<div class="goal"><span class="glyphicon glyphicon-unchecked"></span>\n		<span><b>Today</b>, you should only have XXX cigarettes.</span>\n	</div>\n	<div class="goal"><span class="glyphicon glyphicon-unchecked"></span>\n		<span><b>Tomorrow</b>, only smoke XXX cigarettes.</span>\n	</div>\n	<div class="goal"><span class="glyphicon glyphicon-unchecked"></span>\n		<span>This <b>week</b>, average XXX cigarettes per day.</span>\n	</div>\n	<div class="goal"><span class="glyphicon glyphicon-unchecked"></span>\n		<span>This <b>month</b>, get down to XXX cigarettes per day.</span>\n	</div>\n	<div class="goal"><span class="glyphicon glyphicon-ok"></span>\n		<span><b>Yesterday</b>, you only smoked XXX cigarettes. Good job!</span>\n	</div>\n	<div class="goal"><span class="glyphicon glyphicon-remove"></span>\n		<span><b>Last Night</b>, you failed!</span>\n	</div>');
}));

})();
