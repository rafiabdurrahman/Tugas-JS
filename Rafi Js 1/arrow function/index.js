let mahasiswa = ['Muhammad Rafi', 'Asep', 'Usep'];
let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlhHuruf: nama.length}))
console.table(jumlahHuruf);