//*Marcus Generator*//

const marcusQuotes = [
    "You have power over your mind - not outside events. Realize this, and you will find strength.",
    "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    "The universe is change; our life is what our thoughts make it.",
    "Waste no more time arguing about what a good man should be. Be one.",
    "Death smiles at us all, but all a man can do is smile back.",
    "The soul becomes dyed with the color of its thoughts.",
    "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.",
    "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
    "It is not death that a man should fear, but he should fear never beginning to live.",
    "Poverty is the mother of crime.",
    "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
    "Our life is what our thoughts make it."
];

const buttonClick1 = document.querySelector('.buttonClick1');

buttonClick1.addEventListener('click',()=>{
    newQuoteMarcus();
});

function newQuoteMarcus() {
    var randomNumber = Math.floor(Math.random()*marcusQuotes.length);
    document.getElementById("marcus-quotes").innerHTML = marcusQuotes[randomNumber];
}



//*Seneca Generator*//

var senecaQuotes = [
    "Luck is what happens when preparation meets opportunity.",
"Every new beginning comes from some other beginning's end.",
"There are more things, Lucilius, that frighten us than injure us, and we suffer more in imagination than in reality.",
"Not how long, but how well you have lived is the main thing.",
"Sometimes even to live is an act of courage.",
"All cruelty springs from weakness.",
"Fate leads the willing, and drags along the reluctant.",
"Time heals what reason cannot.",
"As is a tale, so is life: not how long it is, but how good it is, is what matters.",
"We are more often frightened than hurt; and we suffer more from imagination than from reality.",
"Difficulties strengthen the mind, as labor does the body.",
"As is a tale, so is life: not how long it is, but how good it is, is what matters.",
"The time will come when diligent research over long periods will bring to light things which now lie hidden. A single lifetime, even though entirely devoted to the sky, would not be enough for the investigation of so vast a subject... And so this knowledge will be unfolded only through long successive ages. There will come a time when our descendants will be amazed that we did not know things that are so plain to them... Many discoveries are reserved for ages still to come, when memory of us will have been effaced.",
"It is not the man who has too little, but the man who craves more, that is poor."
];

function newQuoteSeneca() {
    var randomNumber = Math.floor(Math.random()*(senecaQuotes.length));
    document.getElementById("seneca-quotes").innerHTML = senecaQuotes[randomNumber];
}



//*Epictetus Generator*//

var epictetusQuotes = [
    "We have two ears and one mouth so that we can listen twice as much as we speak.",
"Men are disturbed not by things, but by the view which they take of them.",
"It's not what happens to you, but how you react to it that matters.",
"First say to yourself what you would be; and then do what you have to do.",
"No man is free who is not master of himself.",
"Only the educated are free.",
"There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
"Wealth consists not in having great possessions, but in having few wants.",
"It is impossible for a man to learn what he thinks he already knows.",
"If you want to improve, be content to be thought foolish and stupid.",
"Wealth consists not in having great possessions, but in having few wants.",
"Don't explain your philosophy. Embody it.",
"First say to yourself what you would be, and then do what you have to do."

];

function newQuoteEpictetus() {
    var randomNumber = Math.floor(Math.random()*(epictetusQuotes.length));
    document.getElementById("epictetus-quotes").innerHTML = epictetusQuotes[randomNumber];
}


