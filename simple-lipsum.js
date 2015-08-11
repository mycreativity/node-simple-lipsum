
var _this = this;
var _words      = 'lorem ipsum dolor sit amet Consectetur adipiscing elit proin VEL est consectetur lacinia EROS eget fermentum libero pellentesque blandit TorTor mattis convallis convallis mi nunc commodo erat at pharetra diam dui ut tortor fusce ut elementum lorem nullam nec imperdiet metus'.split(' ');
var _chars      = 'abcdefghijklmnopqrstuvwxyz';
var _numbers    = '1234567890';

exports.getWords = function (minWords, maxWords) {
    minWords = typeof a !== 'undefined' ? minWords : 8;
    maxWords = typeof b !== 'undefined' ? maxWords : 21;

    var amount = Math.floor(Math.random() * maxWords) + minWords;
    var words = '';

    for(var i = 0; i < amount; i++)
    {
      var word = _words[Math.floor(Math.random() * _words.length)];
      if (i > 0) words += ' ' + word;
      else words += word;
    }

    return words;
};

exports.getSentence = function (minWords, maxWords) {
    minWords = typeof a !== 'undefined' ? minWords : 8;
    maxWords = typeof b !== 'undefined' ? maxWords : 21;

    var sentence = _this.getWords(minWords, maxWords);
    sentence = _capitalize(sentence);
    sentence = _punctuationize(sentence);

    return sentence;
};

exports.getParagraph = function (minSentences, maxSentences) {
    minSentences = typeof a !== 'undefined' ? minSentences : 2;
    maxSentences = typeof b !== 'undefined' ? maxSentences : 6;

    var amount = Math.floor(Math.random() * maxSentences) + minSentences;
    var paragraph = '';

    for(var i = 0; i < amount; i++)
    {
      var sentence = _this.getSentence(8, 21);

      if (i > 0) paragraph += ' ' + sentence;
      else paragraph += sentence;
    }

    return paragraph;
};

function _punctuationize (string) {
  var amount = Math.floor(Math.random() * 2) + 0;
  return string + '.';
};

function _capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
