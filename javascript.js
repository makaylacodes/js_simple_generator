
var advice = [
    'You should check today\'s newspaper for a job. ',
    'Always leave a spare key under your doormat.',
    'Don\'t wait for your coffee to cool down! Chug it :)',
    'Get a turtle for companionship.',
    'Treat yourself to a shopping spree, even when you\'re broke.',
    'You can turn left at a red light if no one is around.',
    'It is okay to swim with sharks if you have open wounds.',
    'You do not have to look both ways before crossing the street.',
    'Not sure if the milk is spoiled? Take a sip :D',
    'Keep cake moist by eating it all in one sitting.',
    'If you run out of eyeliner, use a sharpie.',
    'When cutting onions, remember to occaisionally touch your eyes.'
]



function newQuote () {
    
    var randomNumber = Math.floor(Math.random() * (advice.length));
    document.getElementById('quoteDisplay').innerHTML = advice[randomNumber];
    document.getElementById('quoteDisplay' + advice.bold());
  
}

