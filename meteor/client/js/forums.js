if (Meteor.isClient) {
	Template.forums.helpers({
		forum_posts: function() {
			return Forums.find();
		}
	})
}
