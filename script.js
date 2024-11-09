const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num > n) {
      // If adding num would exceed the max sum, finalize the current subarray
      result.push(currentSubarray);
      // Start a new subarray with the current number
      currentSubarray = [num];
      currentSum = num;
    } else {
       currentSubarray.push(num);
      currentSum += num;
    }
  }

  // Add the last subarray if there are remaining elements
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
