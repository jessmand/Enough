(function(){
Template.__define__("enough", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<!--<head>\n  <title>enough</title>\n	<link href='http://fonts.googleapis.com/css?family=Changa+One' rel='stylesheet' type='text/css'>\n</head>\n\n<body>-->\n  "), HTML.DIV({
    "class": "background"
  }, "\n	  ", Spacebars.include(self.lookupTemplate("frame")), "\n  ") ];
}));

})();
