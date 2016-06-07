function fibo(count, a, b, counter){
	if (counter == 1){
		console.log(a);
	}
	else if (counter == 2){
		console.log(b);
	}
	else{
		var t = a+b;
		a = b;
		b = t;
		console.log(t);
	}
	counter = counter + 1;
	if (counter <= count){
		fibo(count, a, b, counter);
	}
}

fibo(process.argv[2], 0, 1, 1);  /*process.argv[2] gets the command line third element*/