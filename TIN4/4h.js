
var SecLow , secGrt;
var result = function Second_Greatest_Lowest(arr) {
    var sortedArr = arr.sort();
    secLow = arr[1];
    secGrt = arr[arr.length-2];
    return secLow + ' , ' + secGrt ;
}

console.log(result([4,8,3,9,2]));