const quotes = [
    {
        quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author:"Mahatma Gandhi"
    },
    {
        quote:"We must not allow other people’s limited perceptions to define us.",
        author:"Virginia Satir"
    },
    {
        quote:"Do what you can, with what you have, where you are.",
        author:"Theodore Roosevelt"
    },
    {
        quote:"If opportunity doesn’t knock, build a door.",
        author:"Milton Berle"
    },
    {
        quote:"Believe you can and you’re halfway there.",
        author:"Theodore Roosevelt"
    },
    {
        quote:"어떻게 말할까 하고 괴로울 땐 진실을 말하라",
        author:"Mark twain"
    }
];

    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");


    const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

    quote.innerText = todayQuote.quote; 
    author.innerText = todayQuote.author;
