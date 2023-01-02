//"cheats" on sorting by using built in methods
function orderedMergeBrute(arr1, arr2) {
    let sortedArr = arr1.concat(arr2)
    return sortedArr.sort()
}

//brute test
{
    let arr1 = [1, 2, 4, 9]
    let arr2 = [3, 5, 6, 8]

    let sorted = orderedMergeBrute(arr1, arr2)
}

export function orderedMerge(arr1, arr2) {
    let sortedArr = []; // initialize as empty so that the length checking works

    let i, j  //iterators
    i = j = 0

    while (sortedArr.length < (arr1.length + arr2.length)) {

        if (i >= arr1.length) {
            sortedArr.push(arr2[j++])
            continue
        }

        if (j >= arr2.length) {
            sortedArr.push(arr1[i++])
            continue
        }

        if (arr1[i] < arr2[j]) {
            sortedArr.push(arr1[i++])
        } else {
            sortedArr.push(arr2[j++])
        }

    }

    return sortedArr
}

{
    let arr1 = [1, 3, 4, 5]
    let arr2 = [2, 6, 9, 10]

    orderedMerge(arr1, arr2)

    let arr3 = [1, 2, 3, 4]
    let arr4 = []

    orderedMerge(arr3,arr4)
}

//merge sort time, woot!
export function mergeSort(arr) {
    let leftArr = []
    let rightArr = []

    if (arr.length > 1) {
        let halfway = arr.length / 2

        //slice arrays into atomic units
        leftArr = mergeSort(arr.slice(0, halfway))
        rightArr = mergeSort(arr.slice(halfway))

    } else {
        leftArr = arr // just set left to what was passed in
    }

  //reconstruct sorted array
  return orderedMerge(leftArr, rightArr)
}

//test block
{
    let unsortedArr = [4, 23, 7, 39, 19, 0, 9, 14]
    let sortedArr = mergeSort(unsortedArr)
}

//random array generator to test sorting, taken from https://stackoverflow.com/a/43044960
export function generateRandomArray(length) {
  return Array.from({length: length}, () => Math.floor(Math.random() * length));
}
