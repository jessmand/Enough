(function(){
Template.__define__("Steps", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "container-fluid steps-background"
  }, "\n		", HTML.DIV({
    "class": "row"
  }, HTML.Raw('\n\n		    	<div class="col-md-3 left-side">\n		    		<div class="left-bar"></div>\n		    	</div>\n\n		    	'), HTML.DIV({
    "class": "col-md-6"
  }, HTML.Raw('\n				    <div class="row statusbar-wrapper">\n				    	<div class="statusbar">\n					    	<div class="info-box personal-info-box info-box-on">Personal Information</div>\n					    	<div class="info-box smoking-info-box info-box-off">Smoking Information</div>\n					    	<div class="info-box goals-info-box info-box-off">Goals</div>\n					    </div>\n				    </div>\n				    '), HTML.DIV({
    "class": "row user-input-section"
  }, "\n				    	", HTML.FORM({
    "class": "form-horizontal",
    role: "form"
  }, HTML.Raw('\n							<div class="form-group">\n						    	<label class="col-sm-2 control-label">First Name</label>\n						    	<div class="col-sm-8">\n						      		<input class="form-control" id="firstName">\n						    	</div>\n						  	</div>\n						  	<div class="form-group">\n						    	<label class="col-sm-2 control-label">Last Name</label>\n						    	<div class="col-sm-8">\n						      		<input class="form-control" id="lastName">\n						    	</div>\n						  	</div>\n						  	'), HTML.DIV({
    "class": "form-group"
  }, HTML.Raw('\n						    	<label class="col-sm-2 control-label">Bio</label>\n						    	'), HTML.DIV({
    "class": "col-sm-8"
  }, "\n						      		", HTML.TEXTAREA({
    "class": "form-control",
    rows: "8",
    id: "bio",
    placeholder: [ HTML.CharRef({
      html: "&ldquo;",
      str: "“"
    }), "I started smoking...", HTML.CharRef({
      html: "&rdquo;",
      str: "”"
    }) ]
  }), "\n						    	"), "\n                                \n						  	"), HTML.Raw('\n                            <div class="disclaimer"><i>This information will be visible to anyone who views your profile.</i></div>\n						')), "\n					"), HTML.Raw('\n\n					<div class="row">\n						<button type="button" id="button1to0" class="btn btn-primary">\n							<span class="glyphicon glyphicon-chevron-left"></span>Back\n						</button>\n						<button type="button" id="button1to2" href="StepTwo.html" class="btn btn-primary">\n							Next<span class="glyphicon glyphicon-chevron-right"></span>\n						</button>\n					</div>\n				')), HTML.Raw('\n\n				<div class="col-md-3 right-side">\n					<div class="right-bar"></div>\n				</div>\n			')), "\n		");
}));

})();
