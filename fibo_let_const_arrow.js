const fibo = (number, a, b, counter) => 
{
	"use strict";
	const increment = (x) => { return x + 1 };
	const print = (value) => { return console.log(value) };
	const FIRST = 1;
	const SECOND = 2;
	if (counter == FIRST){
		print(a);
	}
	else if (counter == SECOND){
		print(b);
	}
	else{
		let t = a+b;
		a = b;
		b = t;
		print(t);
	}
	counter = increment(counter);
	if (counter <= number){
		fibo(number, a, b, counter);
	}
}

fibo(process.argv[2], 0, 1, 1);  /*process.argv[2] gets the command line third element*/