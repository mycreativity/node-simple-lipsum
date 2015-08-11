var lipsum = require('./simple-lipsum');

console.log('----------------------------------------');
console.log('Generating words');
console.log('----------------------------------------');
console.log(lipsum.getWords());

console.log('----------------------------------------');
console.log('Generating a sentence');
console.log('----------------------------------------');
console.log(lipsum.getSentence());

console.log('----------------------------------------');
console.log('Generating a paragraph');
console.log('----------------------------------------');
console.log(lipsum.getParagraph());
