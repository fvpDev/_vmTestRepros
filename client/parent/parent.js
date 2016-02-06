ViewModel.mixin({
	commonMsgFunc: {
		message: function () {
			return this.childIf() ? 'yes' : 'no child';
		}
	},
	childMixin: {
		childIf: false
	},
	childMixinFunction: {
		childIf: function () {
			return false;
		}
	}
});

Template.child.viewmodel({
	mixin: 'commonMsgFunc',
	childIf: false
});

Template.childWith_Mixin.viewmodel({
	mixin: ['commonMsgFunc', 'childMixin']
});

Template.childWith_Function.viewmodel({
	mixin: 'commonMsgFunc',
	childIf: function () {
		return false;
	}
});

Template.childWith_MixinFunction.viewmodel({
	mixin: ['commonMsgFunc', 'childMixinFunction']
});