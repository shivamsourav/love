var randomnumber= Math.floor(Math.random()*100)+1;

if(randomnumber>90){
  document.querySelector("p.result1").innerHTML="your love point is "+randomnumber+"% ......... SOULMATE!!";
}
else{
  document.querySelector("p.result1").innerHTML="your love point is "+randomnumber+"%........ LIFEPATNER!!";
}
