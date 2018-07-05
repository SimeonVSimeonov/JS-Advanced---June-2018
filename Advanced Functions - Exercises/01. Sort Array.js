function sortArray(inputArray, sortMethod) {
    let ascendingComparator = (a, b) => a - b;
    let descendingComparator = (a, b) => b - a;

    let sortingStrategies = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };

    return inputArray.sort(sortingStrategies[sortMethod]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));