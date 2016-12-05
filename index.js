var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};


var handlers = {
    'RunCodeIntent': function(){
        
            this.emit(':tellWithLinkAccountCard', "Use the Alexa App to link your github account before continuing");


    }
}

