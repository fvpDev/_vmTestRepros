/**
 * Created by dennis on 16.02.16.
 */
Meteor.methods({
	test() {
		return [
			{
				text: 'Hello',
				status: 'new',
				person: {
					name: 'Dennis'
				}
			}
		];
	}
})