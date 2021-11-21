function search(arr, x){
    for (let i = 0; i < arr.length; i++)
        if (arr[i] == x)
            return i;
    return undefined;
}
console.log(search([1,2,4,6,8,10,56], 10))
console.log(search([1,2,4,6,8,10,56], 20))