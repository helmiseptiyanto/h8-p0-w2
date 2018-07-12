//Menggunakan If Else

var nama = 'Jokowi'
var peran = 'Presiden'
if (nama ==='' && peran ==='') {
  console.log('nama harus diisi');
}
else if (peran ==='') {
  console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
}
else if (peran ==='Ksatria') {
  console.log('Selamat datang di Dunia Proxytia ' + nama )
  console.log('Halo ' + peran + ' ' + nama +', kamu dapat menyerang dengan senjatamu!');
}
else if (peran ==='Tabib') {
  console.log('Selamat datang di Dunia Proxytia,' + nama)
  console.log('Halo ' + peran + ' ' + 'Danu, kamu akan membantu temanmu yang terluka.');
}
else if (peran ==='Penyihir') {
  console.log ('Selamat datang di Dunia Proxytia,' + nama)
  console.log ('Halo ' + peran + ' ' + ', ciptakan keajaiban yang membantu kemenanganmu!')
}
else {
  console.log('Peran Sebagai ' + peran + ' Tidak Tersedia!!')
  console.log('Silkan pilih peran Ksatria,Tabib, atau penyihir')
}
