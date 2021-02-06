---Prompt---
//Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.
function ageDifference(ages) {
    let out = [0, 0];
    
	for (let i=0; i<=ages.length-1; i++)
    {
        if (ages[i]>out[0])
				{
        	out[1] = out[0];
        	out[0] = ages[i];
        }
        if (ages[i]>out[1] && ages[i]<out[0])
          {
          	out[1] = ages[i];
          }
        
    }
    return `"This person is ${out[0]-out[1]} years older`;
}
let oth = [4, 56, 13, 2, 20];
let ages = [29, 1, 6, 8, 28];
let arr = [1,2,14,25, 20];

console.log(ageDifference(arr));

---Promt---
// Move Capital Letters to the Front
// Create a function that moves all capital letters to the front of a word.

// Examples
// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"
// Notes
// Keep the original relative order of the upper and lower case letters the same.


// ***this solution uses built in methods .push() .join() .match()
function capToFront(string){ //assume string = "AbOut";
    let upper = []; // make array to hold uppercase letters
    let lower = []; // make array to hold lowercase letters
    regEx = /[A-Z]/g; // regular expression for filtering
    let arr = string.split(""); // split input string into array of characters "About" becomes -> ["A", "b", "O", "u", "t"]
    for (let i=0; i<arr.length; i++){ //loop through entire array one element at a time
        if (arr[i].match(regEx)){ //the regEx here returns true when it hits a character that is capitalized
            upper.push(arr[i]) // push that capatalized character to upper []
        }else lower.push(arr[i]) // if it doesn't return true in line 48, the character gets pushed to lower []
    }
    upper.push(lower); // push the entire lower array to the end of the upper array: ["A", "O"] + ["b", "u", "t"] =["A", "O", "b", "u", "t"]
    return upper.join(); // turns the upper array into a string "AObut"
}