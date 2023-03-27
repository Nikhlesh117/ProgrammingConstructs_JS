 const pro = require("prompt-sync");
 const prompt = pro();

let number = prompt("Enter a Number : ");  
switch (true)   //like nested if-else
{
    case (number>0 && number <=9) :
        console.log("Unit");
        break;
    case (number>9 && number <=99):
        console.log("Ten");
        break;
    case (number>99 && number <=999):
        console.log("Hundred");
        break;
    case (number>999 && number <=9999) :
        console.log("Thousand");
        break;
    case (number>9999 && number <=99999):
        console.log("Ten Thousand");
        break;
    default :
        console.log("Invalid Input..");
        break;          
}