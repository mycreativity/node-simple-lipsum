Simple and easy dummy data generation for [node](http://nodejs.org).

```js
var lipsum = require('simple-lipsum')

var words = lipsum.getWords(5, 10); // 5 to 10 words divided by space
var sentence = lipsum.getSentence(8, 21); // Sentence with 8 to 21 words
var paragraph = lipsum.getParagraph(2, 5); // Paragraph with 2 to 5 sentences
```

## Installation

```bash
$ npm install simple-lipsum
```

## Features

  * Get random words
  * Get random sentence with punctuation
  * Paragraphs with random sentence amounts
