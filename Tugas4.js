// menghitung value unik

const countUniqueValues = (Array) => {
    const resultarray = []
    for(const item of Array) {
        if(resultarray.includes(item)) resultarray.push(item)
    }
    console.log(resultarray.length)

}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13,])
countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6])
countUniqueValues([])


//menyambung aray

function nama(arr) {
    console.log(arr.join(" "))
}
nama(['rafi','abdurrahman'])

// boolean
function boolean ( nomor, pembanding ) {
    if ( nomor <= pembanding ) {
        console.log("True");
    }
else{
    console.log("False");
}

}
boolean (10, 0)
boolean (-1, 0)
boolean (0)

