ViewModel.mixin({
	main1Mixin: {
		message: function () {
			return 'main1_mixin';
		}
	},
	main2Mixin: {
		message: 'main2_mixin'
	}
});

Template.main1.viewmodel({
	mixin: 'main1Mixin',
	message: 'main1_directProp',
	autorun: [
		function () {
			console.log('main 1 autorun:', this.message());
		}
	]
});

Template.main2.viewmodel({
	mixin: 'main2Mixin',
	message: 'main2_directProp',
	autorun: [
		function () {
			console.log('main 2 autorun:', this.message());
		}
	]
});