/*global webkitAudioContext*/

(function(root) {

    "use strict";

    var Tones = function() {
        this.context = new webkitAudioContext();
    };

    Tones.prototype.getFrequency = function(tone) {
        switch (tone) {
            case 1:
                return 329.628; //E: green
            case 2:
                return 440; //red A
            case 3:
                return 659.255; //E: blue
            case 4:
                return 554.365; //yellow c#, 277.183-554.365
        }
    };

    Tones.prototype.play = function(tone, time) {
        var oscillator = this.context.createOscillator();
        var tm;
        oscillator.connect(this.context.destination); // Connect to speakers
        oscillator.type = 3; //3 - Triangle wave
        oscillator.frequency.value = this.getFrequency(tone);
        oscillator.noteOn(0); // Start generating sound
        tm = setTimeout(function() {
            oscillator.noteOff(0);
        }, time);
    };

    root.Tones = Tones;

}(this));
