


function load(){
    alert("Page is okay!!!");
}

function button(){
    document.getElementById("thksfull").innerHTML = "Thks for your click here!";
    console.log()
}

function redirection(elemento){
    //document.getElementById("mousemove").innerHTML ="Hey thanks for pass the mouse";
    elemento.innerHTML = "Hey thanks for pass the mouse";
}
function back(elemento){
   // document.getElementById("mousemove").innerHTML ="Pass the mouse here!"
    elemento.innerHTML = "Pass the mouse here!";
}
function funcaoChange(elemento){
    console.log(elemento.value)
}

/*var nome = prompt("Qual e o seu nome ?");

if(nome == "Alan"){
    alert("Seu nome realmente e :" + nome);
}else{
    alert("Desculpe , nome nao cadastrado em noso banco de dados!");
}*/



/*
var lista = ["pera","uva","maca"];
console.log(lista)
lista.push("salada-mista");
console.log(lista)
console.log(typeof(lista));
console.log(lista.length);


var lista2 = {nome1:'Raphael',nome2:"Thiago"};
console.log(lista2);
console.log(lista2[1]);


var lista3 = [{nome:"Marlon",nome:"Larissa"},{nome:"Pedro",nome:"Karina"},{nome:"Guliver",nome:"Shelsea"}];
*/

/*
var nome = "Raphael Verissimo";
var idade = 29;
var frase =  "Alemanha e o melhor time do mundo";
console.log(frase.replace("Alemanha","Japao"))
alert("my JS" + nome + " tem " + idade);
alert(frase.replace("Japao","Brazil"));
*/

