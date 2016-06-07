const expo = (a, n, counter, initial_value) => {
  "use strict";
  const print = (value) => { console.log(value) }
  const increment = (value) => { return value + 1 }
  if (counter == n){
    print(a);
  }
  else{
    let result = a * initial_value;
    expo(result, n, increment(counter), initial_value);
  }
}

expo(process.argv[2], process.argv[3], 1, process.argv[2])