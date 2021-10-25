const addExclamation = (arr) => {
  const localArray = [];
  // loop through array with foor each
  // arr.forEach((string, idx, array) => {
  //   //console.log(string, idx, array);
  //   let excitedString = string + '!';
  //   localArray.push(excitedString);
  // });
  // add updated values === push?
  arr.forEach(string => localArray.push(string + '!'));
  return localArray;
};

const addOne = (arr) => {
  // Solution code here...
  const localArray = [];
  arr.forEach(number => {
    let incrementedNumber = number + 1;
    localArray.push(incrementedNumber);
  });
  return localArray;
};