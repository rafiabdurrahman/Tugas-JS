class person{
    constructor(nama, kelas, umur, colorfav){
        this.nama=nama;
        this.kelas=kelas;
        this.umur=umur;
        this.colorfav=colorfav;
    }
    greeeting(){
        return("Namaku" +" "+this.nama + " "+ "Kelas" + " " + this.kelas + " " +"Umurku" + " " + this.umur + " " +"Color Favorit"+ " " + this.colorfav);
    }
}
const person1=new person ("Muhammad Rafi A", "XI RPL 2", "16", "Black And White");
console.log(person1.greeeting());