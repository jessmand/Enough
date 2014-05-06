(function(){
Template.__define__("myprogress", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    id: "content"
  }, HTML.Raw('\n        <div class="graph-and-title-container">\n            <h1 class="page-title">My Progress</h1>\n            <div id="graph-container"></div>\n        </div>\n        '), HTML.DIV({
    "class": "row content-row"
  }, "\n            ", HTML.DIV({
    "class": "col-md-6 goals-column"
  }, "\n                ", HTML.DIV({
    id: "goals-container"
  }, HTML.Raw('\n                    <div class="row goals-title">\n                        <span>Goals</span>\n                    </div>\n	                '), Spacebars.include(self.lookupTemplate("goals")), "\n                "), "\n            "), HTML.Raw('\n            <div class="row harder-easier-buttons">\n                <button class="btn btn-default harder-easier-button"><span class="glyphicon glyphicon-circle-arrow-up"></span>&nbsp; Harder</button>\n                <button class="btn btn-default harder-easier-button"><span class="glyphicon glyphicon-circle-arrow-down"></span>&nbsp; Easier</button>\n            </div>   \n        ')), HTML.Raw('\n        <div id="saved-money-cigarettes-container" class="col-md-6">\n            <div class="col-md-6 cigarettes-resisted">\n                <div class="row">Cigarettes Resisted</div>\n                <div class="row">\n                    <span class="saved-cigarettes"></span>\n                </div>\n            </div>\n            <div class="col-md-6 money-saved">\n                <div class="row">Money Saved</div>\n                <div class="row">\n                    <span class="saved-money"></span>\n                </div>\n            </div>\n        </div>\n    '));
}));

})();
