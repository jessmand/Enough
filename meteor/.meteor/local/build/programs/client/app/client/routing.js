(function(){Router.map(function() {
	this.route('myprogress', {path: "/", 
		layoutTemplate: 'frame'
	});

	this.route('people', {
		layoutTemplate: 'frame'
	});

	this.route('forums', {
		layoutTemplate: 'frame'
	});

	this.route('resources', {
		layoutTemplate: 'frame'
	});

	this.route('index', {
		layoutTemplate: 'index'
	});

})


})();
