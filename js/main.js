var quotes = [
    { author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
    { author: "Marilyn Monroe", quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." },
    { author: "Albert Einstein", quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." },
    { author: "Bernard M. Baruch", quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." },
    { author: "Dr. Seuss", quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams." },
    { author: "Robert Frost", quote: "In three words I can sum up everything I've learned about life: it goes on." },
    { author: "Maya Angelou", quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." },
    { author: "Mahatma Gandhi", quote: "Live as if you were to die tomorrow. Learn as if you were to live forever." },
    { author: "Oscar Wilde", quote: "I am so clever that sometimes I don't understand a single word of what I am saying." },
    { author: "Andre Gide", quote: "It is better to be hated for what you are than to be loved for what you are not." },
]
var generatorBtn = document.getElementById("newQuote");
generatorBtn.onclick = function generateQuote() {
    var generatedQuoteLength = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerHTML = (`\" ${quotes[generatedQuoteLength].quote} \"`);
    document.getElementById("quoteAuthor").innerHTML = (`- ${quotes[generatedQuoteLength].author} -`);
}


