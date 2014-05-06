(function(){
Template.__define__("StepThree", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "container-fluid steps-background"
  }, "\n		    ", HTML.DIV({
    "class": "row"
  }, HTML.Raw('\n\n		    	<div class="col-md-3 left-side">\n		    		<div class="left-bar"></div>\n		    	</div>\n\n		    	'), HTML.DIV({
    "class": "col-md-6"
  }, HTML.Raw('\n				    <div class="row statusbar-wrapper">\n				    	<div class="statusbar">\n					    	<div class="info-box personal-info-box info-box-on">Personal Information</div>\n					    	<div class="info-box smoking-info-box info-box-on">Smoking Information</div>\n					    	<div class="info-box goals-info-box info-box-on">Goals</div>\n					    </div>\n				    </div>\n				    '), HTML.DIV({
    "class": "row user-input-section goals-form"
  }, "\n				    	", HTML.DIV("\n					    	", HTML.FORM({
    "class": "form-horizontal",
    role: "form"
  }, HTML.Raw("\n					    		<div>I want to quit because...</div>\n							  	"), HTML.DIV({
    "class": "form-group"
  }, "\n							    	", HTML.DIV({
    "class": "col-sm-8 col-md-offset-2"
  }, "\n							      		", HTML.TEXTAREA({
    "class": "form-control",
    id: "goal",
    placeholder: [ "i.e. ", HTML.CharRef({
      html: "&ldquo;",
      str: "“"
    }), "I want to set a good example for my kids.", HTML.CharRef({
      html: "&rdquo;",
      str: "”"
    }) ]
  }), "\n							    	"), "\n							  	"), HTML.Raw('\n                                <div class="goal-character-count"></div>\n							')), "\n						"), "\n					"), HTML.Raw('\n\n					<div class="row">\n						<button type="button" id="button3to2" class="btn btn-primary">\n							<span class="glyphicon glyphicon-chevron-left"></span>Back\n						</button>\n						<button type="button" id="buttonFinish" class="btn btn-primary">\n							Finish\n						</button>\n					</div>\n				')), HTML.Raw('\n\n				<div class="col-md-3 right-side">\n					<div class="right-bar"></div>\n				</div>\n			')), "\n		");
}));

})();
