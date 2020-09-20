const computeMean = arr => {
    let sumOfItems = arr.reduce((a, b) => a + b);
    let mean = sumOfItems / arr.length;
    return mean;
}

const computeMedian = arr => {
    let arrIndex = arr.length / 2;
    if (arr.length % 2 === 0) {
        let median = (arr[arrIndex] + arr[arrIndex - 1]) / 2;
	return median;
    } else {
        let median = arr[Math.floor(arrIndex)];
	return median;
    }
}

const computeMode = arr => {
    //Using the formular gotten from the empirical relationship between mean, median and mode
    let mode = computeMean(arr) - 3 * (computeMean(arr) - computeMedian(arr));
    return mode;
}

const compute = arr => {
    const newArray = [];

    const removeAlphanumerals = item => {
        if (!isNaN(item)) {
            newArray.push(item);
        } else {
            let getNumbers = Number(item.replace(/\D/g, ''));
            newArray.push(getNumbers);
        }
    }

    arr.forEach(removeAlphanumerals);

    const filteredArray = newArray.sort((a, b) => b - a);

    const mean = computeMean(filteredArray);

    const median = computeMedian(filteredArray);

    const mode = computeMode(filteredArray);

    return {
        filteredArray,
        mean,
        median,
        mode
    }
}

console.log(compute([1, "3ab", 2, "ef4", "g3h", 5]));
