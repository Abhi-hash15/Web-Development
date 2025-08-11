// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubletrouble(arr){
    if(!Array.isArray(arr) || arr.length == 0){
        return [];
    }
    let res=[]
    for(let i=0; i<arr.length; i++){
        if(i == 0 || arr[i] !== arr[i-1]){
            res.push(arr[i] * 2);
        }
    }
    return res;
}
// console.log(doubletrouble([1, 2, 2, 3, 4, 4, 5])); 

// The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirrorString(str){
    if(typeof str != 'string' || str.length == 0){
        return '';
    }
    return str + str.split('').reverse().join('');
}
// console.log(mirrorString("hello")); 


// The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function validPassword(password){
    if(typeof password != 'string' || password.length<8){
        return false
    }
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    return hasUpper && hasLower && hasDigit;
}
// console.log(validPassword("password123")); 


// The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumSelector(array){
    if(!Array.isArray(array) || array.length === 0){
        return 0;
    }
    let total = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            break;
        }
        total += array[i];
    }
    return total;
}

// console.log(sumSelector([1, 2, 3, -1, 4]));


// The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countVowels(str){
    if(typeof str != 'string' || str.length == 0){
        return 0;
    }
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
// console.log(countVowels("Hello World"));


//  Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 millisecond

function asyncArrayMap(arr) {
    if(!Array.isArray(arr) || arr.length === 0){
        return Promise.resolve([]);
    }
    return Promise.all(arr.map(num => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(num * 2);
            }, 500);
        });
    }));
}
// asyncArrayMap([1, 2, 3]).then(result => console.log(result)); 




