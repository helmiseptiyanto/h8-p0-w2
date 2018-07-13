//Excercises 7 Week 2

// 1. Menyusun Barisan Bintang
for(var rows1 = 1; rows1 <= 5; rows1++) {
  if(rows1 %1==0) {
  console.log('*')
  }
 }

 // 2. Menyusun Barisan Bintang Dengan Nested Looping

 var rows1 = 5
 for(var i = 0; i < rows1; i++) {
   var temp = ''
   for(var j = 0; j <  rows1; j++) {
     temp += '*';
   }
   console.log(temp)
 }

 // 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

 var rows3 = 5;
     var temp = ''
     for(var i = 0; i < rows3; i++) {
       temp += '*';
       console.log(temp)
   }
