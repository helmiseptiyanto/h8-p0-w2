//Exercises 5

//1. Let's Form a Sentence
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh)

//2. Index Accessing - 1 by 1
var word = 'wow JavaScript is so cool ' ;
var exampleFirst = [ 0 ] + [ 1 ] + [ 2 ] ;
var secondWord = [5] + [6] + [7] + [8] + [9] + [10] + [11] + [12] + [13] + [14] ;
var thirdWord =[15] + [16] ;
var fourthWord=[17] + [18];
var fifthWord =[19] + [20] + [21] + [22] + [23] ;
console . log ( ' First Word: ' + 'wow');
console . log ( ' Second Word: ' + 'JavaScript');
console . log ( ' Third Word: ' + 'is');
console . log ( ' Fourth Word: ' + 'so');
console . log ( ' Fifth Word: ' + 'cool');
//this string 1
var word = ' JavaScript ' ;
var second = ' is ' ;
var third = ' awesome ' ;
var fourth = ' and ' ;
var fifth = ' I ' ;
var sixth = ' love ' ;
var seventh = ' it! ' ;
console.log('Word ' + 'second ' + 'third ' + 'fourth');

//3. Breaking Sentence (Again) using Substring
var word = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(4, 14); // do your own!
var thirdWord3 = word.substring(15, 17);// do your own!
var fourthWord3 = word.substring(18, 20); // do your own!
var fifthWord3 = word.substring(21, 25); // do your own!

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

//4. Breaking Sentence (yet Again) and Count Each Length
var word = 'wow JavaScript is so cool';
var exampleFirstWord4 = word.substring(0, 3);
var secondWord4 = word.substring(4, 14); // do your own!
var thirdWord4 = word.substring(15, 17);// do your own!
var fourthWord4 = word.substring(18, 20); // do your own!
var fifthWord4 = word.substring(21, 25); // do your own!

var firstWordLength = exampleFirstWord4.length;
// create new variables around here
var secondWordLength = secondWord4.length;
var thirdwordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdwordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);
