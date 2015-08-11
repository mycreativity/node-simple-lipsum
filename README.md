[![npm package](https://nodei.co/npm/simple-lipsum.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/simple-lipsum/)

Simple and easy dummy data generation for [node](http://nodejs.org).

```js
var lipsum = require('simple-lipsum')

// 5 to 10 words divided by space
var words = lipsum.getWords(5, 10);
// Example:
// EROS elementum sit convallis Consectetur nunc at est convallis
// tortor adipiscing eget Consectetur eget libero imperdiet mi convallis

// Sentence with 8 to 21 words
var sentence = lipsum.getSentence(8, 21);
// Example:
//  Eget fermentum fusce diam ut ut sit libero imperdiet
// pharetra EROS consectetur EROS commodo ipsum nunc dui nullam
// elementum mi proin libero TorTor eget tortor EROS.

// Paragraph with 2 to 5 sentences
var paragraph = lipsum.getParagraph(2, 5);
// Example:
// Proin imperdiet erat nunc elit adipiscing ut ut lacinia  
// sit blandit pellentesque mattis mattis diam imperdiet metus TorTor  
// pharetra convallis adipiscing blandit loremtortor. Blandit dolor  
// consectetur proin erat mattis tortor imperdiet amet Consectetur  
// erat elit elementum metus elit erat adipiscing dolor erat EROS  
// estdui EROS mi convallis. Imperdiet pellentesque nec commodo lorem
// Consectetur erat consectetur convallis blandit amet nunc nec diam  
// EROS elementum EROS sit consectetur nullam. Mi fermentum lacinia  
// EROS necblandit TorTor libero libero erat ut diam consectetur ut  
// convallis adipiscing mi lacinia dui TorTor ut lorem lacinia  
// elementum VEL diam. Metus elementum pharetra eget pharetra  
// ametConsectetur ipsum tortor dolor ut blandit dui metus commodo  
// nunc ipsum eget est.
```

## Installation

```bash
$ npm install simple-lipsum
```

## Features

  * Get random words
  * Get random sentences with punctuation
  * Paragraphs with random sentences
  * Specify the min and max amount of words or sentences
