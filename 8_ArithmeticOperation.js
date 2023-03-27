//Numbers do following arithmetic operation and find the one that is maximum and minimum

let a = Math.floor(Math.random()*90) + 1;
let b = Math.floor(Math.random()*90) + 1;
let c = Math.floor(Math.random()*90) + 1;
console.log("Numbers : "+a,b,c);

calc1=a+b*c;     
calc2=a%b+c;     
calc3=c+a/b;     
calc4=a*b+c;

console.log("Calculated values are : a+b*c = "+calc1+" , a%b+c = "+calc2+" , c+a/b = "+calc3+" , a*b+c = "+calc4);

let max =calc1;
if(max<calc2)
{
    max =calc2;
}
if(max<calc3)
{
    max=calc3;
}
if(max<calc4)
{
    max =calc4;
}

let min = calc1;
if(min>calc2)
{
    min =calc2;
}
if(min>calc3)
{
    min=calc3;
}
if(min>calc4)
{
    min =calc4;
}

console.log("Minimum value : " + min);
console.log("Maximum value : " + max);