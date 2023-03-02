const quotes = [
	"Be the change you wish to see in the world. -Mahatma Gandhi",
	"In three words I can sum up everything I've learned about life: it goes on. -Robert Frost",
	"The only way to do great work is to love what you do. -Steve Jobs",
	"Believe you can and you're halfway there. -Theodore Roosevelt",
	"Education is the most powerful weapon which you can use to change the world. -Nelson Mandela",
	"Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill",
	"Be yourself; everyone else is already taken. -Oscar Wilde",
	"The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
	"You miss 100% of the shots you don't take. -Wayne Gretzky",
	"The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
];

function generateQuote() {
	const randomNumber = Math.floor(Math.random() * quotes.length);
	const quote = quotes[randomNumber];
	document.getElementById("quote").innerHTML = quote;
}