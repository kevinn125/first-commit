function hello(){
a = 12 ;
b= 100;
c= 4;

if (a > b) {
 	alert('greater than B')
	} else if( a >= b){
		alert('greater or equal to B')
	}
	else if(b == a){
		alert('not equal to A')
	}else{
		alert('no answer')
	}
}

hello();



var days = 1;

switch (days){
	case 1: 
	day = 'sunday'; 
	break;
	case 2:
	day = 'moday'; break;
	case 3:
	day = 'tuesday';break;
	break;
}
console.log(day);


function intrest(p,r,t){
	simpleIntrest= p*r*t/100;
	return simpleIntrest;
}
console.log(intrest(5, 4,2))


// write a function that checks if a number is odd or even


function kel(n){
	var n;
    if (n%2==0){
    	return ('even')
    }else{
		return ('odd')
	}
}
console.log(kel(6));


// WRITE a func to output the 2* tables

function multi(){
	var a =2;
	var i = 2;
	var result = '';
	for (i=1; i<11;i++){
		var c= a*i;
		result+ =a + "X" + i + "=" + c + '</br>';
		
	}
}


//for(var i= 1; i<=12; i++){
	//console.log(2 + "X" + i + "=" + 2*i);
