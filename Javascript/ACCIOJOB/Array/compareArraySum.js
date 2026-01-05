

function compareArraySums(arr1, arr2) {
  const sum1 = arr1.reduce((a, b) => a + b, 0);
  const sum2 = arr2.reduce((a, b) => a + b, 0);

  if (sum1 > sum2) {
    console.log("First array is larger");
  } else if (sum2 > sum1) {
    console.log("Second array is larger");
  } else {
    console.log("Both are equal");
  }
}

// Example
const arr1 = [1, 2];
const arr2 = [3, 4];

compareArraySums(arr1, arr2);


// ================================
