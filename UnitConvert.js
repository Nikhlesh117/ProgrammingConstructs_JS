 const ps = require("prompt-sync");
 const prompt = ps();

 console.log("Options : 1-Feet to inch \t 2-Inch to feet \t 3-Feet to meter \t 4-Meter to feet" );
 
 let InputLength = prompt("Enter Length : ");
 let choice =prompt("Enter your choice : ");
                    
 switch (choice)
 {
    case '1' :
        console.log("Feet to inch = " +InputLength*12);
        break;
    case '2' :
        console.log("Inch to feet = " +InputLength/12);
        break;
    case '3' :
        console.log("Feet to meter = " +InputLength/3.2808);
        break;
    case '4':
        console.log("Meter to feet = " +InputLength*3.2808);
        break;
    default :
        console.log("Wrong Input");
        break;           

 }