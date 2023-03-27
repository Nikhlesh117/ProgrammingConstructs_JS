//Check input Year is a Leap Year or not.

let year = (Math.floor(Math.random() *9000)+1000);  //1000-9999
console.log("Year : "+year);
leapChk1=year % 400;
leapChk2=year % 100;
leapChk3=year % 4;
if (leapChk1== 0 ||  leapChk2 !=0 && leapChk3== 0)
{
    console.log("Is leap year.");
}
else console.log("Not a leap year.");