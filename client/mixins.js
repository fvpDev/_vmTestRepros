ViewModel.mixin({
	stylable: {
		color: function () {
			return this.lightsOn() ? 'red' : 'black'
		},
		styleStr: function () {
			return 'color: ' + this.color() + '; ';
		}
	}
});