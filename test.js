if (Meteor.isClient) {
  Template.tpl.viewmodel({
    phoneIsMobile: function() {
      console.log(this);
      console.log(this.refToPhoneInput ? this.refToPhoneInput : 'not rendered yet');
      console.log(this.refToPhoneInput ? this.refToPhoneInput.val() : 'not rendered yet');
    }
  });
}