
var _this = this;
var _words      = 'lorem ipsum dolor sit amet Consectetur adipiscing elit proin VEL est consectetur lacinia EROS eget fermentum libero pellentesque blandit TorTor mattis convallis convallis mi nunc commodo erat at pharetra diam dui ut tortor fusce ut elementum lorem nullam nec imperdiet metus'.split(' ');
var _chars      = 'abcdefghijklmnopqrstuvwxyz';
var _numbers    = '1234567890';

exports.getWords = function (min, max) {
    var amount = 0;
    var words = '';

    if (typeof min !== 'undefined' && typeof max == 'undefined') {
      amount = min;
    } else {
      min = typeof min !== 'undefined' ? min : 8;
      max = typeof max !== 'undefined' ? max : 21;
      amount = _randomBetween(min, max);
    }

    for(var i = 0; i < amount; i++)
    {
      var word = _words[Math.floor(Math.random() * _words.length)];
      if (i > 0) words += ' ' + word;
      else words += word;
    }

    return words;
};

exports.getSentence = function (min, max) {
  var sentence;

  if (typeof min !== 'undefined' && typeof max == 'undefined') {
    sentence = _this.getWords(min);
  } else {
    min = typeof min !== 'undefined' ? min : 8;
    max = typeof max !== 'undefined' ? max : 21;
    sentence = _this.getWords(min, max);
  }

  sentence = _capitalize(sentence);
  sentence = _punctuationize(sentence);

  return sentence;
};

exports.getParagraph = function (min, max) {
  var amount = 0;
  var paragraph = '';

  if (typeof min !== 'undefined' && typeof max == 'undefined') {
    amouont = min;
  } else {
    min = typeof min !== 'undefined' ? min : 2;
    max = typeof max !== 'undefined' ? max : 6;
    amount = _randomBetween(min, max);
  }

  for(var i = 0; i < amount; i++)
  {
    var sentence = _this.getSentence(8, 21);

    if (i > 0) paragraph += ' ' + sentence;
    else paragraph += sentence;
  }

  return paragraph;
};

exports.getNumber = function(min, max, fixedNumber) {
  var amount = 0;

  fixedNumber = typeof fixedNumber !== 'undefined' ? fixedNumber : 0;
  var power = Math.pow(10, fixedNumber);

  if (typeof min !== 'undefined' && typeof max == 'undefined') {
    amount = min;
  } else {
    min = typeof min !== 'undefined' ? min : 2;
    max = typeof max !== 'undefined' ? max : 6;

    amount = _randomBetween((min * power), (max * power));
  }
  
  return (amount / power).toFixed(fixedNumber);
};

exports.currency = {
  DOLLAR: 0,
  EURO: 1
};

exports.getMoney = function(currency, min, max) {
  var amount = 0;
  if (typeof min !== 'undefined' && typeof max == 'undefined') {
    amount = min;
  } else {
    min = typeof min !== 'undefined' ? min : 1.00;
    max = typeof max !== 'undefined' ? max : 10.00;
    amount = _randomBetween((min * 100), (max * 100)) / 100;
  }

  if (currency == 0) {
    return amount.formatMoney(2, '.', ',');
  } else if (currency == 1) {
    return amount.formatMoney(2, ',', '.');
  }

  return 'unknown currency';
};

function _randomBetween(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function _punctuationize (string) {
  string = _injectCommas(string);

  return string + '.';
};

function _injectCommas(string) {
  var i = 0;
  var segments = string.split(' ');

  while(i < segments.length) {
    var position = Math.floor(Math.random() * 12) + 4;
    i += position;

    if (i > 0 && i < segments.length && (segments.length - i) > 3) {
      segments[i] = segments[i] + ',';
    }
  }

  return segments.join(' ');
}

function _capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

Number.prototype.formatMoney = function(c, d, t){
    var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
