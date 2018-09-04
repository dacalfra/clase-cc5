function Palindromo(x){
  var inverso=0;
  var digito;
	while (x>=10){ digito =x%10;
	              inverso=inverso*10+digito;
	               x=x/10;
	              }
	inverso=inverso*10+x;
	if (x===inverso){
      return  true;
	}
	
	else {
       return false;
	}
	
}

var x = 100,
    y = 100,
    producto = x * y;

for (x=100; x <= 999; x++) {
    for (y = x; y <= 999; y++) {
        producto = x * y;
        if (Palindromo(producto)) {
            console.log(x + '*' + y + '=' + producto);
        }
        else {
        	console.log('no es palindromo');
        }
    }
}