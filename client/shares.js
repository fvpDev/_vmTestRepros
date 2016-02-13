ViewModel.share({
	lightsOn: {
		lightsOn: false,
		toggleLights: function () {
			this.lightsOn(!this.lightsOn());
		}
	}
});