console.log(" Check day of month is between March 20 and June 20");

let day=(Math.floor(Math.random() * 10)%31)+1;
let month=(Math.floor(Math.random() * 10)%6)+1;

if( month >= 3 && month <= 6 )
{
    if( month == 3 && day <= 20 || month == 6 && day >= 20 )
    {
        console.log(" False");
    }
    else
    {
        console.log(" True");
    } 
}        
else 
{   
    console.log(" False");
}
