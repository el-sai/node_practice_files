function fibo(count){
	var a = 0;
	var b = 1;
 	for (var i=1; i <= count; i++){
 		if (i == 1){
 			console.log(a);
 		}
 		else if (i == 2){
 			console.log(b);
 		}
 		else {
 			var t = a+b;
 			a = b;
 			b = t;
 			console.log(t);
 		}
 	}
}

fibo(process.argv[2]);