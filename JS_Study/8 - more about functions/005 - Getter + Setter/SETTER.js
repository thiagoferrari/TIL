/*  primeiramente Pense que os set como uma matriz sem elementos repetidos. Nada entra nela para repetir */

let arrayOne=['1','2','1','2']

console.log(arrayOne)
// ['1','2','1','2']
 
let setOne= new Set(arrayOne) 

for(elem of setOne){
  console.log(elem)
}
//'1'
//'2'


// Another way of doing
let setTwo= [...new Set(arrayOne)]

console.log(setTwo)
// ["1" ,"2"]








/*Set Methods MAIS COMUNS*/
/*add
size
has
forEach (um atalho de for)
delete
clear*/

let fruits = new Set();

fruits.add('apple');
fruits.add('banana');
fruits.add('kiwi');
fruits.add('orange');
console.log(fruits.size); // 4
fruits.add('orange');
console.log(fruits.size); // 4

console.log(fruits.has('apple')); // true
fruits.delete('apple');
console.log(fruits.has('apple')); // false

fruits.forEach(fruit => {
  console.log(`I love eating ${fruit}!`);
});

// 'I love eating banana!'
// 'I love eating kiwi!'
// 'I love eating orange!'

 fruits.clear();
console.log(fruits.size); // 0







/*o has método tem a mesma funcionalidade includes das matrizes*/

console.log('I will only contain unique or distinct letter'.length); // 45

let sentence = new Set('I will only contain unique or distinct letter');

console.log( sentence.size); // 17

for(letter of sentence){
  console.log(letter)
}


// 'I'
//  ' '
// 'w'
// 'i'
// 'l'
// 'o'
// 'n'
// 'y'
// 'c'
// 't'
// 'a'
// 'u'
// 'q'
// 'e'
// 'r'
// 'd'
// 's'











/*Now let’s look at the practical examples of the set method:*/

function union(setA, setB) {
    var _union = new Set(setA);
    for (var elem of setB) {
        _union.add(elem);
    }
    return _union;
}

function intersection(setA, setB) {
    var _intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}


function difference(setA, setB) {
    var _difference = new Set(setA);
    for (var elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

//Examples
var setA = new Set([1, 2, 3, 4]);
var    setB = new Set([2, 3]);
var   setC = new Set([3, 4, 5, 6]);

union(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
intersection(setA, setC); // => Set [3, 4]
difference(setA, setC); // => Set [1, 2]