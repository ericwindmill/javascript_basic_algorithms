// implement quicksort (which by the way, isn't that quick... )
//https://en.wikipedia.org/wiki/Quicksort 


Array.prototype.quickSort = function (comparator) {

};

// this call back is essentially the prc we would pass in ruby.

const compA = (a,b) => {
  if (a > b) {
    return 1;
  } else if (a < b){
    return -1;
  } else {
    return 0;
  }
};

const test = [7,3,5,2,8,1,9,3,4,].quickSort(compA);
console.log(test);
