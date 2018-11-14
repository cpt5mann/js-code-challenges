module.exports = function cookieProblem(array) {
    let goal= Math.max.apply(null, array);
    let emptyarr = [];
    array.forEach((i) =>{
     let cookiediff = goal-i;
     emptyarr.push(cookiediff); 
    });
    let sum = emptyarr.reduce((acc, curr) =>{
      return acc + curr;
    });
    return sum;
  }