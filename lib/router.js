/**
 * Created by dennis on 16.02.16.
 */


I18NConf.configure({

	languages: ["en", "de"],
	defaultLanguage: 'en',
	persistLanguage: false,
	autoConfLanguage: true




});


I18NConf.onLanguageChange(function (oldLang, newLang) {


	TAPi18n.setLanguage(newLang)
		.done(function () {



		})
		.fail(function (error_message) {

		});
});


Router.configure({

	layoutTemplate: 'layout',

	i18n: {

		langCodeForDefaultLanguage: false,
		deferRouteCreation: false
	},


});


Router.route('/', {
	name: "hello",
	fastRender: true



});