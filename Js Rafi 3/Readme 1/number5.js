function luasPersegi(arr, tinggi){
    const kali = arr[0] * arr[1];
    const bagi = arr[0] / arr[1];
    const tambah = arr[0] + arr[1];
    const kurang = arr[0] - arr[1];

    console.log(arr[0] + tinggi + arr[1] + " = " +  kali)
    console.log(arr[0] + tinggi + arr[1] + " = " +  bagi)
    console.log(arr[0] + tinggi + arr[1] + " = " +  tambah)
    console.log(arr[0] + tinggi + arr[1] + " = " +  kurang)
      
}

luasPersegi([3,2], " * ");
luasPersegi([10,2], " / ");
luasPersegi([76,12], " + ");
luasPersegi([789,100], " - ");