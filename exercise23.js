// https://www.codewars.com/kata/54ba84be607a92aa900000f1
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example / "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)


function isIsogram(str){
    let array = str.toLowerCase().split("").sort();
    let counter = 0

    for (let i=0; i<array.length; i++){
        if (array[i] === array[i+1]){
        counter ++
        } 
    }

    return counter > 0 ? false : true;

}

// Console proofs
console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("moose"))
console.log(isIsogram("aba"))