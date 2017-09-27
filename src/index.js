module.exports = function multiply(first, second) {
  // your solution
  let res = [0], x = 0;
  
  for(let j = second.length - 1; j > -1; j--){
  
    for(let i = first.length - 1; i > -1; i--){
      if(j != 0){
        res[x] += first[i] * second[j];
        res[x + 1] = 0;
      }else {
        res[x] += first[i] * second[j];
      }
    }
    x++;
  } 

  for(let i = 0, numb = 0; i < res.lenght - 1; i++){
    if(res[i] == 0){
      numb = 0;
    }else{
      numb = Math.floor(res[i]/10);
      res[i] = res[i] % 10;
    }
      res[i+1] += numb;
  }

  return res.reverse().join('');
}
