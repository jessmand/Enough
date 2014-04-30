Template.people.helpers({
    people: function() {
	    return People.find();
    }
});

Template.people.isFollowing = function() {
	return Following.findOne({name: this.name});
}

Meteor.startup( function() {
	$("#post-search").hide();

	$("#search").click(function() {
		$("#pre-search").hide();
		$("#post-search").show();
	}); 

	$("#close-modal").click(function(){
		$("#joeK-info").modal('hide');
	})


});
	Template.people.events = {
		'click #follow': function(){
			Following.insert({name: this.name});
		},
		'click #following': function() {
			Following.remove({name: this.name});
		}
	}
