// objek

const person = {
    nama: "Muhammad Rafi",
    kelas: "XI RPL 2",
    umur: "16 thn",
    hobi: {
        Volly: true,
        Game: true,
        sleep: true,
    }
}
console.log(person);

//animal 

const animal = {
    shark: "ocean",
    whale: "ocean",
    turtles: "pond",
    otter: "fish biscuit",
    lion: "land",
    tuna: "ocean"
}
console.log(animal);

const jumlahanimal = {
    shark: {
        habitat: "ocean",
        totalspesies: "570"
    },
    whale: {
        habitat: "ocean",
        totalspesies: "800"
    },
    lion: {
        habitat: "land",
        totalspesies: "780"
    },
    turtles: {
        habitat: "pond",
        totalspesies: "6000"
    },
}
console.log(jumlahanimal);

//my objec animal soal 1

const myobjec =[
    { nama:'shark', likes:'ocean'},
    { nama:'lion', likes:'land'},
    { nama:'otter', likes:'fish biscuit'},
    { nama:'whale', likes:'ocean'},
    { nama:'turtle', likes:'pond'},
    { nama:'tuna', likes:'ocean'},
]

const yes = myobjec.map(item => {
        const penyimpanan = {}

        penyimpanan[item.nama] = item.likes
        penyimpanan.spesies = item.nama.length * Math.floor(Math.random() * 5000)

    return penyimpanan
})
console.log(yes);


//filter soal 2
const fill = myobjec.filter((per) => {
    return per.likes == "ocean"
})
console.log(fill);

//nama jadi nama panggilan  soal 3

let Name = "kafi";
let result = Name.replace("kafi", "AA jedayyy");
console.log(result);


//soal 4

let numbers = [100, 25, 16, 56, 87]
let doubles = numbers.map(function(num) {
        return num * 5
})
console.log(doubles);

//soal 5

let minus = numbers.map(function(num) {
        return num - 100
})
console.log(minus);

//soal 6

let plus = numbers.map(function(num) {
        return num + 5
})
console.log(plus);

//soal 7
const nomor = [1,2,3,4,5,6,7,8,9,10]
const cekNomor = nomor.filter(lebihBesar);
function lebihBesar(nomor) {
  return nomor > 5;
}
console.log(cekNomor);

//soal 8
function under() {
    const under = nomor.filter(item => {
        return item < 6
    })
console.log(under);
    
}
 under()
//soal 9

const nomor = [1,2,3,4,5,6,5,4,7,54,5,6,7,8,7,5,5,5,5]
const pilih = nomor.filter(lima);
function lima(nomor) {
  return nomor == 5
}
console.log(pilih);

//soal 10

const nama = ['Rafi', 'Rafi', 'Rafi', 'Rafi', 'Romli', 'Alfi','Rafi', 'rafi']
const milih = nama.filter(huruf);
function huruf(nama) {
  return nama == "Rafi"
}
console.log(milih);