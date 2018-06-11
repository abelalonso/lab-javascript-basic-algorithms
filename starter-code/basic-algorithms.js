// Names and Input
var hacker1 = "Abel";
var hacker2 = prompt("Who is hacker 2");

console.log("The driver is "+hacker1);
console.log ("The navigator is "+hacker2);


//Conditionals
if (hacker1.length>hacker2.length){
    console.log ("The driver has the longest name, it has "+hacker1.length+" characters.");
    tamMenor=hacker2;
  } else if (hacker1.length<hacker2.length){
    console.log ("The navigator has the longest name, it has "+hacker2.length+" characters");
    tamMenor=hacker1;
  } else {
    console.log("Wow, you both got equally long names, "+hacker1.length+" characters");
    tamMenor=hacker1;
  
  }
  


var frase=prompt("Introduce a palindrome");
var frase2=frase.toLowerCase().match(/[A-Za-z]/g);
console.log(frase2.reverse().join(""));
if(frase2.join("")===frase2.reverse().join("")) {
  console.log("It's a palindrome");
}else{
  console.log("It's not a palindrome");
}

// Lorem ipsum generator

var cadena="";
for (var i=0; i<hacker1.length;i++){  
  cadena+=hacker1[i].toUpperCase()+" ";
  if (i==hacker1.length-1){
    continue;
  }
  cadena+=" ";
}
console.log(cadena);

console.log(hacker2);
for (i=hacker2.length-1; i>=0;i--){
  cadena+=hacker2[i];

}

var i=0;
while (i<tamMenor.length){
  if (hacker1[i].toUpperCase()<hacker2[i].toUpperCase()){
    console.log("The driver's name goes first");
    break;
  } else if (hacker1[i].toUpperCase()>hacker2[i].toUpperCase()){
    console.log("Yo, the navigator goes first definitely");
    break;
  }
  i++;
}

if (i===tamMenor.length){
  if (hacker1.length>hacker2.length){
    console.log("Yo, the navigator goes first definitely");
  } else if (hacker1.length<hacker2.length){
    console.log("The driver's name goes first");
  }else{
    console.log("what? you both got the same name");
  }
}

var parrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

arrayParrafo=parrafo.split(" ");
console.log("The length of the paragraph is "+arrayParrafo.length);

contador=0;
for (var i=0; i<arrayParrafo.length; i++){
  if ((arrayParrafo[i].length===2)&&(arrayParrafo[i].toLowerCase().indexOf("et")!=-1)){
    contador++;
  }
}

console.log("et appears "+contador+" times");
