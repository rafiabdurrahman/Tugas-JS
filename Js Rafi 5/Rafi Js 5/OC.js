function siswa(nama, ttl, umur, nohp, alamat){
    this.nama = nama;
    this.ttl = ttl;
    this.umur = umur;
    this.nohp = nohp;
    this.alamat = alamat;
}

const siswa1= new siswa("hallo nama saya Rafi", "ttl saya 28 Mei 2005", "umur saya 16 tahun", "jika kalian ingin menanyakan apapun bisa hubungi saya ke no ini 083811300078 ", "saya tinggal di sanggar indah banjaran");
console.log(siswa1);