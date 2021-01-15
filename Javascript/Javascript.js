
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