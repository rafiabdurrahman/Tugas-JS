class Person{
    constructor(nama, kelas, umur){
    this.nama=nama;
    this.kelas=kelas;
    this.umur=umur;
    }
  }
  class ram extends Person{
    constructor(nama, kelas, umur, hobi, favcolor){
    super(nama, kelas, umur);
    this.hobi=hobi;
    this.favcolor=favcolor;
  }
  greeting(){
    return `Namaku ${this.nama} Kelas ${this.kelas} Umurku ${this.umur} Hobiku ${this.hobi} Favorit Colorku ${this.favcolor}`
     }
  }
  const person2 = new ram("Muhammad Rafi A", 11, 16, "Futsal", "Black And White");
  console.log(person2.greeting());