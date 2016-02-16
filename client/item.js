/**
 * Created by dennis on 16.02.16.
 */

var itemVM = {
    info: null,
    toLoad: null,
//		text: '',
//		status: '',
//		person: '',
    sayHello: function() {
			console.log('Does this.person exist?', this.person ? true : false); // this.person is 'undefined' before toLoad is loaded
			return this.person ? this.person().name : 'asdf';
    },
    onCreated: function() {
			console.log('item created');
			console.log('onCreated toLoad:', this.toLoad());
    },
    onRendered: function() {
			console.log('item rendered');
			console.log('onRendered toLoad:', this.toLoad());
			
			if (this.toLoad()) {
				this.load(this.toLoad());
				this.toLoad(null);
			}
			console.log('onRendered sayHello:', this.sayHello());
    },
    autorun: function() {
			console.log('item autorun');
			
			if (this.toLoad()) {
				this.load(this.toLoad());
				this.toLoad(null);
			}
			console.log('autorun sayHello:', this.sayHello());
    }
};

Template.item.viewmodel(itemVM);