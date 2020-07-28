
let codes  = document.getElementById('codes');
let play   = document.getElementById('play');
let changeA1 = document.getElementById('changeA1'); 
let changeA2 = document.getElementById('changeA2'); 
let changeA = document.getElementById('changeA'); 
let result = document.getElementById('result'); 
let headCon = document.getElementById('headCon');
let alls = document.getElementById('all');  
let img = document.getElementById('img');  
 
let ls = localStorage;

let larg = codes.value;


play.onclick = ()=>{ 
	result.innerHTML = codes.value;
	ls.setItem("codes" , codes.value);
}; 
var  i = 1;
changeA.onclick = ()=>{ 
	if(i % 2==1){
	document.body.style.background = 'white';
	codes.style.background = 'white'; 
	codes.style.color = '#424242';
	img.style.background = 'none';
	headCon.style.background = '#eeeeee';
	alls.style.background = '#eeeeee'; 
	changeA1.style.color = '#616161';
	changeA2.style.color = '#616161';
	changeA.style.color = '#616161';
	}else{
	document.body.style.background = 'rgb(40, 44, 52)';
	codes.style.background   = 'rgb(40, 44, 52)';
	codes.style.color 	     = 'white';
	img.style.background     = '#eee';
	headCon.style.background = '#616161';
	alls.style.background    = '#616161'; 
	changeA1.style.color     = '#e0e0e0';
	changeA2.style.color     = '#e0e0e0';
	changeA.style.color      = '#e0e0e0';
	}
	i++;
	
	 
	
};
onload = ()=>{
	 codes.innerText = ls.getItem('codes');
     result.innerHTML = ls.getItem('codes');
};









