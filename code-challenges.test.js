// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { expect } = require("@jest/globals")
// const { ConsoleWriter } = require("istanbul-lib-report")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

// Describe the name of the function - secretCode
describe("secretCode", () => {
// Test what the function does - returns a string of a coded message by converting 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0
        it("returns a string of a coded message by converting 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
// Expect the output of the function to be equal to the correct output - output of secretCode to equal a string of a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0
            expect(secretCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
            expect(secretCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
            expect(secretCode(secretCodeWord3)).toEqual("3cc3ntr1c")
        })
    })

// b) Create the function that makes the test pass.

// Create a function named secretCode
// That takes a string as an arguement for the input
const secretCode = (string) => {
// Use the replace method
// Use regular expressions which allows you to use global replacement to replace multiple characters in a string
// Use the "i" flag to make the replacement case insensitive
// Chain the methods together
// Return
    return string.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0)
}

var secretCodeWord1 = "Lackadaisical"
console.log(secretCode(secretCodeWord1))
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
console.log(secretCode(secretCodeWord2))
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
console.log(secretCode(secretCodeWord3))
// Expected output: "3cc3ntr1c"

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

// Describe the name of the function - aLetterFilter
describe("aLetterFilter", () => {
    // Test what the function does - returns an array of all the words of a given array that contain the letter a
        it("returns an array of all the words of a given array that contain the letter a", () => {
    // Expect the output of the function to be equal to the correct output - output of aLetterFilter to equal an array of all the words of a given array that contain the letter a
            expect(aLetterFilter(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
            expect(aLetterFilter(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
        })
    })

// b) Create the function that makes the test pass.

// Create a method called aLetterFilter
// Takes an array as a parameter
const aLetterFilter = (array) => {
// Create a new array to push the words into
    let newArray = []
// Iterate over the array using the .filter method to filter the correct words, and pass in a parameter of word
    array.filter(word => {
// Make a conditional, using the .includes method, check if the word includes a substring of 'a' or includes a substring of 'A', because the includes method is case-sensitive
        if(word.includes('a') || word.includes('A')) {
// If the word does have the letter a inside of it, using the .push method, push the word into the new array
            newArray.push(word)
        }
    })
// return the new array
    return newArray
}

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
console.log(aLetterFilter(arrayOfWords1))
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
console.log(aLetterFilter(arrayOfWords2))
// Expected output: ["Mango", "Apricot", "Peach"]

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

// Describe the name of the function - fullHouse
describe("fullHouse", () => {
    // Test what the function does - determines whether or not a given array is a "full house"
        it("determines whether or not a given array is a 'full house'", () => {
    // Expect the output of the function to be equal to the correct output - output of fullHouse to equal true or false
            expect(fullHouse(hand1)).toEqual(true)
            expect(fullHouse(hand2)).toEqual(false)
            expect(fullHouse(hand3)).toEqual(false)
        })
    })

// b) Create the function that makes the test pass.

// Create a method called fullHouse
// Takes an array as a parameter
const fullHouse = (array) => {
// Declare a variable of count assigned to an empty object
    let count = {}
// Iterate through the array using the .forEach() method
// For the .forEach() method pass in a parameter of value
    array.forEach(value => { 
// For each value of the array assign the value of the key of the count Object to the current value of the key plus 1, or if the value of the key is not set, assign it to 0 plus 1
// This goes through the array and populates the count object with the number of occurances of each duplicate valuel
        count[value] = (count[value] || 0) + 1
    })
// Declare a variable of values assigned to an array of the property values of the count object
// Use the Object.values() method to return an array with the property values of the passed in object
    let values = Object.values(count)
// If the value of the 0th index of the array values is 2 and the value of the 1st index of the array values is 3
// Or If the value of the 0th index of the array values is 3 and the value of the 1st index of the array values is 2
// Return True, you have a full house of 2 of a kind and 3 of a kind
    if((values[0] === 2 && values[1] === 3) || (values[1] === 2 && values[0] === 3)){
        return true
// Else return false, you do not have a full house
    } else {
        return false
    }
}

var hand1 = [5, 5, 5, 3, 3]
console.log(fullHouse(hand1))
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
console.log(fullHouse(hand2))
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
console.log(fullHouse(hand3))
// Expected output: false