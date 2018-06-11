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

