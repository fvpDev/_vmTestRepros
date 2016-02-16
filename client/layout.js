/**
 * Created by dennis on 16.02.16.
 */
Template.layout.viewmodel({

    onCreated: function() {
        //Language things

        var normalUserAgent = I18NConf.getNavigatorLanguage();


        if (normalUserAgent.indexOf('-') > 0) {
            normalUserAgent = normalUserAgent.substring(0, normalUserAgent.indexOf('-'));
        }


        if (!Router.getLangCode()) {
            I18NConf.setLanguage(normalUserAgent);
        }
    }
});