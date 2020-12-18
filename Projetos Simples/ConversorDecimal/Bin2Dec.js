function calcBinario(a,b,c,d,e,f,g,h){
   let bin1 = a * (2**0);
   let bin2 = b * (2**1);
   let bin3 = c * (2**2);
   let bin4 = d * (2**3);
   let bin5 = e * (2**4);
   let bin6 = f * (2**5);
   let bin7 = g * (2**6);
   let bin8 = h * (2**7);
   
   return bin1 + bin2 + bin3 + bin4 + bin5 + bin6 + bin7 + bin8;
};


console.log(calcBinario(1,0,1,0,0,0,0,0));
