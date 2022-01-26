const countUniqueValues = (array) => {
    const resultArray = []
    for(const item of array) {
        if(!resultArray.includes(item)) resultArray.push(item)
    }
    console.log(resultArray.length)
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6])
countUniqueValues([])