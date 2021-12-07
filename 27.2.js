function makeAllCaps(array) {
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < array.length; i++) {
      if (isNaN(array[i]) != true) {
        reject();
      }
    }
    resolve(`capitalize it: ${array.join(`,`).toUpperCase()}`);
  });
}

function sortWords(array) {
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < array.length; i++) {
      if (isNaN(array[i]) != true) {
        reject();
      }
    }
    resolve(`sort it: ${array.sort()}`);
  });
}

const array=[`hope`, `amal`, `mashal`, `engineer`];

  makeAllCaps(array)
  .then((arr) => {
    console.log(arr);
    return sortWords([`hope`, `amal`, `mashal`, `engineer`]);
  })
  .then((arr) => {
    console.log(arr);
  })
  .catch(()=>console.log("Ohh noooo!!"));
