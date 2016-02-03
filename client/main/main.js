Template.main.viewmodel({
	message: 'asdf',
	onCreated: function () {
		console.log('onCreated:', this.message());
	},
	onRendered: function () {
		console.log('onRendered:', this.message());
	},
	autorun: [
		function () {
			console.log('autorun:', this.message());
		}
	]
});