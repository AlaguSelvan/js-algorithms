// Add any extra import statements you may need here

// Add any helper functions you may need here

function minOverallAwkwardness(arr) {
  // Write your code here
  arr.sort((a, b) => a - b); // Sorting Ascending order O(n log(n))
  // console.log(arr);
  const { length } = arr;
  let diff = arr[1] - arr[0];
  // console.log(diff);
  for (let i = 2; i < length; i++) {
    // O(n)
    diff = Math.max(diff, arr[i] - arr[i - 2]);
    // console.log(diff);
  }
  diff = Math.max(diff, arr[length - 1] - arr[length - 2]);
  // console.log(diff);
  return diff;
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  const out = `[${n}]`;
  return out;
}

let test_case_number = 1;

function check(expected, output) {
  const result = (expected == output);
  const rightTick = '\u2713';
  const wrongTick = '\u2717';
  if (result) {
    var out = `${rightTick} Test #${test_case_number}`;
    console.log(out);
  } else {
    var out = '';
    out += `${wrongTick} Test #${test_case_number}: Expected `;
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

const arr_1 = [5, 10, 6, 8];
const expected_1 = 4;
const output_1 = minOverallAwkwardness(arr_1);
check(expected_1, output_1);

const arr_2 = [1, 2, 5, 3, 7];
const expected_2 = 4;
const output_2 = minOverallAwkwardness(arr_2);
check(expected_2, output_2);

// Add your own test cases here
