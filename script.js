const arr = [1, "3ab", 2, "ef4", "g3h", 5];
const newArray = [];

const getNumbers = (item) => {
    if (!isNaN(item)) {
        newArray.push(Number(item));
    }
}

const removeAlphanumerals = item => {
    if (!isNaN(item)) {
        //item is not an alphanumeral
        newArray.push(item);
    } else {
        //item is an alphanumeral, therefore we convert to an array and loop throught to get the number
        (Array.from(item)).forEach(getNumbers);
    }
}

const filteredArray = () => {
    arr.forEach(removeAlphanumerals);
    return newArray;
}

console.log(filteredArray());