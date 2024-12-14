const removeFromArray = function(arr, w, x, y, z){
    return arr.filter(element => element !== w && element !== x && element !== y && element !== z)

};

// Do not edit below this line
module.exports = removeFromArray;
