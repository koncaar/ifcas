//let a=5;
//a=a+1;
//let b=17;
//b=a-1;
//console.log(a);
//console.log(b);
//let a = !'7';
//console.log(typeof a);
//let a = 'abc73f';
//console.log(a);
//let a=prompt ("Unesite broj");
//console.log(a*a);
//if (uslov) {
//kod izvrsen ako je true
//}
let god= Number(prompt("Unesite godine"));
if (Number.isNaN(god)){
  console.log("Niste uneli broj!")
} else 
if (god>=18 ) {
console.log("Punoletni ste")
} else {
console.log("Niste punoletni")
};