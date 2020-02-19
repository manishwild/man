 function avr(blaArr){
  let Sum = 0
  for (let i = 0; i < blaArr.length; i++) {
         Sum += blaArr[i] 
         
              
         }
         return Sum / blaArr.length
         
     }
     
     document.write(avr([100,60,50,80]))
     