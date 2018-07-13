//Excercises 6 Week 2

//1. Melakukan Looping Menggunakan While

//Looping Pertama
var angka = 2;
var angkaAkhir = 20;
console.log('LOOPING PERTAMA');
while(angka <= 20 ) {
  if(angka %2==0)
  console.log(angka + ' - I Love Coding');
  angka++;
}

console.log(angka);

//Looping Kedua
var angka = 20;
console.log('LOOPING KEDUA');
while(angka > 1) {
  console.log(angka + ' - I will become fullstack developer');
  angka--;
}

console.log(angka)

//2. Melakukan Looping Menggunakan For

//LOOPING PERTAMA
var angka1 = 20;
console.log('LOOPING PERTAMA');
for(i = 1; i <= 20; i++ ) {
  console.log(i + ' - I love coding')
}

//LOOPING KEDUA
var angka1 = 0;
console.log('LOOPING KEDUA');
for(j = 20; j > 0; j--) {
  console.log(j +' - I will become fullstack developer')
}

// 3. Angka Ganjil dan Genap
//GANJIL DAN GENAP
for(var angka = 1; angka <= 100; angka++ ) {
 if(angka %2==1) {
   console.log(angka + ' Ganjil')
 }
 else if(angka %2==0) {
   console.log(angka + ' Genap')
 }
}

// 3 KELIPATAN 3
for(var angka = 1; angka <= 100; angka += 2)  {
  if(angka %3==0) {
    console.log(angka + ' KELIPATAN 3')
  }
}

// 6 KELIPATAN 6
for(var angka = 1; angka <= 100; angka +=5) {
  if(angka %1==0) {
    console.log(angka + ' 6 KELIPATAN 6')
  }
}

// 10 KELIPATAN 10
for(var angka = 1; angka <= 100; angka +=1) {
  if(angka %9==0) {
    console.log(angka + ' 10 KELIPATAN 10')
  }
}
