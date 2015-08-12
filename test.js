var lipsum = require('./simple-lipsum');

console.log('----------------------------------------');
console.log('Generating words');
console.log('----------------------------------------');
console.log(lipsum.getWords());
console.log(' ');

console.log('----------------------------------------');
console.log('Generating a sentence between 3 to 6 words');
console.log('----------------------------------------');
console.log(lipsum.getSentence(3, 6));
console.log(' ');

console.log('----------------------------------------');
console.log('Generating a sentence with exact 10 words');
console.log('----------------------------------------');
console.log(lipsum.getSentence(10));
console.log(' ');

console.log('----------------------------------------');
console.log('Generating a paragraph');
console.log('----------------------------------------');
console.log(lipsum.getParagraph());
console.log(' ');

console.log('----------------------------------------');
console.log('Generating numbers');
console.log('----------------------------------------');
console.log(lipsum.getNumber(0, 10));
console.log(lipsum.getNumber(0, 10, 3));
console.log(lipsum.getNumber(12345678, undefined, 4));
console.log(' ');

console.log('----------------------------------------');
console.log('Generating money in dollar and euro');
console.log('----------------------------------------');
console.log(lipsum.getMoney(lipsum.currency.DOLLAR, 0.05, 1.10));
console.log(lipsum.getMoney(lipsum.currency.DOLLAR, 20.05, 61.10));
console.log(lipsum.getMoney(lipsum.currency.EURO, 1000000.05, 2000000.10));
console.log(lipsum.getMoney(lipsum.currency.DOLLAR, 1000000.05));
console.log(' ');
