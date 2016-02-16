/**
 * Created by dennis on 16.02.16.
 */
Template.hello.viewmodel({
	myText: 123,
	getText: function () {
		console.log(this.myText());
		this.setNull();
	},
	setNull: function () {
		this.myText(null);
	},
	getItems: null,
	onCreated: function () {
		console.log('hello created');
		Meteor.call("test", (err, res) => {
			this.getItems(res);
		});
	},
	onRendered: function () {
		console.log('hello rendered');
	}
});