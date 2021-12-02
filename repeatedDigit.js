
const initalNumber=1;
const finalNumber=100;  
 let repeatedNumbers=()=>{
    for(let i=initalNumber;i<=finalNumber;i++){
    let units=parseInt(i%10);
    let tens=parseInt((i/10)%10);
    if (units==tens){
  console.log(i);}
}
}
repeatedNumbers();