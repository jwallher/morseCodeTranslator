/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  //  TODO replace with your app ID (OPTIONAL).

const alphabet = {};
alphabet['a']="dittt dah";
alphabet['b']="dah dittt dittt dittt";
alphabet['c']="dah dittt dah dittt";
alphabet['d']="dah dittt dittt";
alphabet['e']="dittt";
alphabet['f']="dittt dittt dah dittt";
alphabet['g']="dah dah dittt";
alphabet['h']="dittt dittt dittt dittt";
alphabet['i']="dittt dittt";
alphabet['j']="dittt dah dah dah";
alphabet['k']="dah dittt dah";
alphabet['l']="dittt dah dittt dittt";
alphabet['m']="dah dah";
alphabet['n']="dah dittt";
alphabet['o']="dah dah dah";
alphabet['p']="dittt dah dah dittt";
alphabet['q']="dah dah dittt dah";
alphabet['r']="dittt dah dittt";
alphabet['s']="dittt dittt dittt";
alphabet['t']="dah";
alphabet['u']="dittt dittt dah";
alphabet['v']="dittt dittt dittt dah";
alphabet['w']="dittt dah dah";
alphabet['x']="dah dittt dittt dah";
alphabet['y']="dah dittt dah dah";
alphabet['z']="dah dah dittt dittt";
alphabet['0']="dah dah dah dah dah";
alphabet['1']="dittt dah dah dah dah";
alphabet['2']="dittt dittt dah dah dah";
alphabet['3']="dittt dittt dittt dah dah";
alphabet['4']="dittt dittt dittt dittt dah";
alphabet['5']="dittt dittt dittt dittt dittt";
alphabet['6']="dah dittt dittt dittt dittt";
alphabet['7']="dah dah dittt dittt dittt";
alphabet['8']="dah dah dah dittt dittt";
alphabet['9']="dah dah dah dah dittt";
alphabet['.']="";
alphabet[',']="";
alphabet["{"]="";
alphabet["}"]="";
alphabet["["]="";
alphabet["]"]="";
alphabet["|"]="";
alphabet["\\"]="";
alphabet["\'"]="";
alphabet["\""]="";
alphabet["?"]="";
alphabet["!"]="";
alphabet["~"]="";
alphabet["`"]="";
alphabet["<"]="";
alphabet[">"]="";
alphabet["@"]="";
alphabet["#"]="";
alphabet["$"]="";
alphabet["%"]="";
alphabet["^"]="";
alphabet["&"]="";
alphabet["*"]="";
alphabet["("]="";
alphabet[")"]="";
alphabet["_"]="";
alphabet["-"]="";
alphabet["="]="";
alphabet["+"]="";


const handlers = {
    'LaunchRequest': function () {
        //this.emit('Translate');
        this.emit(':ask',"What would you like Morse Code Translator to translate");
        //this.emit(':ask', speechOutput);
        
    },
    'translateIntent': function () {
        this.emit('Translate');
    },
    
    'Inquire' : function(){
        this.emit(':tell', 'What do you want me to translate?');
    },
    'Translate': function () {
        try{
            var phrase = this.event.request.intent.slots.Phrase.value;
            phrase=phrase.toLowerCase();
            var morse = "";
            var i;
            for(i = 0; i<phrase.length;i++){
                var temp = phrase[i];
                if(temp===" ")
                    morse+=". ";
                else
                    morse+=alphabet[temp]+", ";
            }
         
            // Create speech output
            var speechOutput = "morse code for, " + phrase + ". is, " + morse;
            if(phrase.length===0)
                speechOutput = "Sorry, I didn't understand what you wanted translated.";
            this.emit(':tell', speechOutput);
        }
        catch(e){
            this.emit(':tell', "Sorry, There was a problem. Please try again");
        }
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = "Morse Code Translator translates your phrase into morse code. Try asking What is S O S";
        const reprompt = "try asking what is S O S";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', "cancel");
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', "goodbye");
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
