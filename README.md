[![npm package](https://nodei.co/npm/simple-lipsum.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/simple-lipsum/)

[![Build Status](https://img.shields.io/travis/mycreativity/node-simple-lipsum/master.svg?style=flat-square)](https://travis-ci.org/mycreativity/node-simple-lipsum)

Simple and easy dummy data generation for [node](http://nodejs.org).

## Quickstart
```js
var lipsum = require('simple-lipsum')

// ### Sentence with 8 to 21 words ###
var sentence = lipsum.getSentence(8, 21);
// Example output:
// Eget fermentum fusce diam ut ut sit libero imperdiet
// pharetra EROS consectetur EROS, commodo ipsum nunc dui nullam
// elementum mi proin libero, TorTor eget tortor EROS.
```

## Installation

```bash
$ npm install simple-lipsum
```

## Features

  * Get random words
  * Get random sentences with punctuation
  * Paragraphs with random sentences
  * Numbers
  * Money
  * Specify the min and max amounts, or specify absolute

## Documentation

### Text

```js
var lipsum = require('simple-lipsum')

// ### 5 to 10 words divided by space ###
var words = lipsum.getWords(5, 10);
// Example:
// EROS elementum sit convallis Consectetur nunc at est convallis
// tortor adipiscing eget Consectetur eget libero imperdiet mi convallis

// ### Sentence with 8 to 21 words ###
var sentence = lipsum.getSentence(8, 21);
// Example:
// Eget fermentum fusce diam ut ut sit libero imperdiet
// pharetra EROS consectetur EROS, commodo ipsum nunc dui nullam
// elementum mi proin libero, TorTor eget tortor EROS.

// ### Sentence with exact 10 words ###
var sentence = lipsum.getSentence(10);
// Example:
// Eget fermentum fusce diam ut ut sit libero imperdiet
// pharetra EROS consectetur EROS, commodo ipsum nunc dui nullam
// elementum mi proin libero, TorTor eget tortor EROS.

// ### Paragraph with 2 to 5 sentences ###
var paragraph = lipsum.getParagraph(2, 5);
// Example:
// Proin imperdiet erat nunc elit adipiscing ut ut lacinia  
// sit blandit pellentesque mattis, mattis diam imperdiet metus TorTor  
// pharetra convallis adipiscing blandit loremtortor. Blandit dolor  
// consectetur proin erat mattis tortor, imperdiet amet Consectetur  
// erat elit, elementum metu
s elit erat adipiscing dolor erat EROS  
// estdui EROS mi convallis.
```

### Numbers

lipsum.getNumber({min value}, {max value}, {fixed point});

```js
var lipsum = require('simple-lipsum')

// ### Numbers ###
var nr1 = lipsum.getNumber(0, 10);
// Example: 3
var nr2 = lipsum.getNumber(0, 10, 2);
// Example: 5.83
var nr3 = lipsum.getNumber(12345678, undefined, 4);
// Example: 1234.5678
```

### Money

lipsum.getMoney({lipsum.currency}, {min value}, {max value});

```js
var lipsum = require('simple-lipsum')

// ### Money ###
var money1 = lipsum.getMoney(lipsum.currency.DOLLAR, 0.05, 1.10);
// Example: 0.94
var money2 = lipsum.getMoney(lipsum.currency.DOLLAR, 20.05, 61.10);
// Example: 36.15
var money3 = lipsum.getMoney(lipsum.currency.EURO, 1000000.05, 2000000.10);
// Example: 1.803.590,29
var money4 = lipsum.getMoney(lipsum.currency.DOLLAR, 1000000.05);
// Example: 1,000,000.05
```
