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
    return filteredArray;
}

console.log(compute([1, "3ab", 2, "ef4", "g3h", 5]));




/* const computeMean = arr => {
    return mean
} */