function validation(){
	var a = document.getElementById ('name').value.length;
	var b = document.getElementById ('prénom').value.length;
	var c = document.getElementById ('date').value.length;
	var d = document.getElementById ('adresse').value.length;
	var e = document.getElementById ('mail').value.length;
	
	
	var value1= document.getElementById('name').value;
	var value2= document.getElementById('prénom').value;
	var value3= document.getElementById('date').value;
	var value4= document.getElementById('adresse').value;
	var value5= document.getElementById('mail').value;
	
	let Var=document.getElementById("error");
	
	if (b <= 4 || a <= 4 || c <= 4 || d <= 4 || e <= 4){
	document.getElementById("error").innerHTML="les champs doivent contenir au moin 5 caractères";
	Var.style.display="block";
	if(value1==''){
		document.getElementById("error").innerHTML="veuillez saisir votre nom";		
	}
	if(value2==''){
		document.getElementById("error").innerHTML="veuillez saisir votre prénom";		
	}
	if(value3==''){
		document.getElementById("error").innerHTML="veuillez saisir votre date de naissance";		
	}
	if(value4==''){
		document.getElementById("error").innerHTML="veuillez saisir votre adresse";		
	}
	if(value5==''){
		document.getElementById("error").innerHTML="veuillez saisir votre mail";		
	}

	}
	else{
		let var1=document.getElementById("result");
		document.getElementById("result").innerHTML="Bienvenue "+ document.querySelector("#name").value;
		var1.style.display="block";
		document.getElementById("error").innerHTML='';		
	}	
}
