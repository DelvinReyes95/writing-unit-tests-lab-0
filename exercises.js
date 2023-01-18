// Question 1

const isRealPalindrome = (str) => {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
};

// Question 2

const runningTotal = (numbers) => {
  let total = 0;
  return numbers.map(function (num) {
    total += num;
    return total;
  });
};

// Question 3

const swap = (reverse) => {
  return reverse.split(' ').map((word) => {
    if (word.length > 1) { 
      word = word[word.length - 1] + word.substring(1, word.length - 1) + word[0];
    }
    return word;
    })
    .join(' ');
  // let words = str.split(" ");
  // for (let i = 1; i < words.length; i++) {
  //     let word = words[i];
  //     let firstLetter = word[0];
  //     let lastLetter = word[word.length - 1];
  //     words[i] = lastLetter + word.slice(i, -1) + firstLetter;
      
  // }
  // console.log(words.join(" "));
  
};

// Question 4

const wordSizes = (str) => {
  // if(!word){
  //   return {};
  // }


  // return word.split(' ').reduce((words,num)=>{
  //   words[num.length] = (words[num.length] || 0) + 1;
  //   return words;
  // },{});
  
  if(!str){
    return {};
  }

  let wordCount = {};
  let words = str.split(" ");
  
  for (let i = 0; i < words.length; i++) {
    let length = words[i].length;
    if(wordCount[length]){
      wordCount[length]++;
    } else {
      wordCount[length] = 1;
    }
  }
  
  return wordCount;
  
};

// Question 5

const union = (arr1, arr2) => {
  let set = new Set(arr1.concat(arr2));
    return [...set];
};

// Question 6

const firstRecurring = (str) => {
  let charMap = {};
  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]]) {
      return str[i];
    } else {
      charMap[str[i]] = true;
    }
  }
  return "";
};

// Question 7
const showMultiplicativeAverage = (arr) => {
  let product = arr.reduce((prev, current) => prev * current);
  return (product / arr.length).toFixed(3); // toFixed(3) is used to limit the decimal point to 3
};

// Quetsion 8

const multiplyList = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] * arr2[i]);
  }
  return result;
};

// Question 9
const sequence = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
};

// The below code connects this JS file to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
};
