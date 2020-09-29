'use strict'

let list_Password = [];
let list_Symbols = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
.split(""); // @#$_&-+()/*:;!?\'\" 
// Тесты 

check_Test(() => {
generate_Passwords(list_Password, list_Symbols);    
}, " : generate_Passwords");

// Генератор паролей :)
function generate_Passwords(storageValues, listSymbols) {

let len = list_Symbols.length;

for(let letterOne = 0; letterOne < len; letterOne++) {
    storageValues.push(
    listSymbols[letterOne]);
    
  for(let letterTwo = 0; letterTwo < len; letterTwo++) {
    storageValues.push(
    listSymbols[letterOne] + 
    listSymbols[letterTwo]);  
    
   for(let letterThree = 0; letterThree < len; letterThree++) {
   storageValues.push(
   listSymbols[letterOne] + 
   listSymbols[letterTwo] + 
   listSymbols[letterThree]); 
      
    for(let letterFour = 0; letterFour < len; letterFour++) {
      storageValues.push(
      listSymbols[letterOne] + 
      listSymbols[letterTwo] + 
      listSymbols[letterThree] +     
      listSymbols[letterFour]);          
  
    }

   }
   
  }
    
 } 
           
}    

// Тестер на время
function check_Test(func, text = "") {
let tm0 = performance.now();

func();

let tm1 = performance.now();

console.log((tm1 - tm0) + text);
}
