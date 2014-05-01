if (Meteor.isClient) {
	Meteor.startup( function() {
		Session.set("people", "all");

		$("#search").click(function() {
			Session.set("people", "JoeK");
		}); 
	})

	Template.people.helpers({
	    people: function() {
		if ( Session.get("people")=== "all")
			return People.find();
		return [People.findOne({name: "Joseph Kraznicovinchi"})];
	    }
	});

	Template.person.isFollowing = function() {
		return Following.findOne({name: this.name}) != undefined;
	}

	Template.people.events = {
		'click #follow': function(){
			if (Following.findOne({name: this.name}) == undefined)
				Following.insert({name: this.name});
		},
		'click #following': function() {
			var id = Following.findOne({name: this.name})._id;
			Following.remove(id);
		}
	}
}
