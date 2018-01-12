function sleep(){
	i++;
	if(i > 2){
		i = 0;
		ar = makeText(); //reset
	}
	scroll.innerHTML = "";
	start();
}

function makeText(){
	var text = 'prvi text';
	var text1 ='drugi text';
	var text2 = 'treci text';

	var stext = text.split('');
	var stext1 = text1.split('');
	var stext2 = text2.split(''); //ovo su tri array od tri varijable ove gore
	var nasArray = [stext,stext1,stext2];  //u nasArray sam ubacila sva tri array
	return nasArray;
}

var ar = makeText();
var scroll = document.getElementById('scroll');
var loop; //ovde je undefinie, ali u funkciji joj je dodeljena vrednost
var i = 0;

function start(){

		if(ar[i].length > 0){
		scroll.innerHTML += ar[i].shift(); //+= ynaci dodavacemo svaki put kad se ponovi funkcija , shift/prvo slovo
		loop = setTimeout(start,400); //ovim cu ponovo pozvati funkciju, ali moram da je deklarisem
	
	}else{
		var ss = setTimeout(sleep,2000);
	}
}
start();
//ovo ce se isto ponasati kao i scroll 