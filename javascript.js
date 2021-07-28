
var advice = [
    'You should check todays newspaper for a job ',
    'Always leave a spare key under your doormat',
    'Dont wait for your coffee to cool down! Chug it :)',
    'Get a turtle for companionship',
    'Treat yourself to a shopping spree, even when youre broke',
    'You can turn left at a red light if no one is around',
    'It is okay to swim with sharks if you have open wounds',
    'You do not have to look both ways before crossing the street'
]



function newQuote () {
    
    var randomNumber = Math.floor(Math.random() * (advice.length));
    document.getElementById('quoteDisplay').innerHTML = advice[randomNumber];
    document.getElementById('quoteDisplay' + advice.bold());
  
}

