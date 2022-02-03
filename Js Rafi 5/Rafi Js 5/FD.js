function person(nama, kelas, favColor, jurusan, hobby, alamat){
    const myFD={}
    myFD.nama=nama
    myFD.kelas=kelas
    myFD.favColor=favColor
    myFD.jurusan=jurusan
    myFD.hobby=hobby
    myFD.alamat=alamat
    return myFD
}
const myFD1=person("Hallo Nama saya Muhammad Rafi A panggil saya Rafi", "Kelas 11", "favcolor saya Black and White", "Saya masuk jurusan RPL", "Hobby saya Futsal", "Saya tinggal di sanggar indah banjaran")
console.log(myFD1)