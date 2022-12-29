// @ts-nocheck
// ^ above stops thing from getting angry

let testArr1 = [1, 3, 54, 9, 2, 17, 22, 700]

/*
 * original, unsorted array
 *
 * split it up into 2 halves, then split those halves in half until you're left with a bunch of individual split arrays
 *
 * Then, reconstruct them in order, until the final array is done
 */

//will make tail recursive if possible
function mergeSort(arr) {
  if (arr.length > 1) {
    let halfway = arr.length / 2

    //slice arrays into atomic units
    let leftArr = mergeSort(arr.slice(0, halfway))
    let rightArr = mergeSort(arr.slice(halfway))

  }

  //reconstruct sorted array
  let sortedIndex = 0

  let leftIterator, rightIterator = 0

  while (sortedIndex < arr.length) {
    if (leftArr[leftIterator] < rightArr[rightIterator]) sortedArr.push(leftArr[leftIterator++])
    else
      sortedArr.push(rightArr[rightIterator++])

    sortedIndex++
  }
}

// repl stuff
// // @ts-nocheck
// ^ above stops thing from getting angry


let undefinedTestArr = [0 , 1 , 3]


/*
 * original, unsorted array
 *
 * split it up into 2 halves, then split those halves in half until you're left with a bunch of individual split arrays
 *
 * Then, reconstruct them in order, until the final array is done
 */

function arrSplit(arr) {
    if (arr.length < 2) {
        return {left: arr, right:undefined} //returns original array in left if it cannot be split
    } else {
        let halfway = arr.length / 2
        let leftArr = arr.slice(0, halfway)
        let rightArr = arr.slice(halfway)

        return {left: leftArr, right: rightArr}
    }
}

//block scoped test cases
{
let splitTest = [1, 2, 3, 4]
arrSplit(splitTest)
}

{
let singleSplit = [1]
arrSplit(singleSplit)
}

{
let unevenSplitTest = [1, 2, 3, 4, 5]
arrSplit(unevenSplitTest)
}


//will make tail recursive if possible
function mergeSort(arr) {
  if (arr.length > 1) {
    let halfway = arr.length / 2

    //slice arrays into atomic units
    let leftArr = mergeSort(arr.slice(0, halfway))
    let rightArr = mergeSort(arr.slice(halfway))

  }

  //reconstruct sorted array
  let sortedArr
  let leftIterator, rightIterator = 0

  while (sortedArr.length < arr.length) {
    if (leftIterator >= leftArr.length) {
        sortedArr.push(rightIterator++)
        continue
    }

    if (rightIterator >= rightArr.length) {
        sortedArr.push(leftIterator)
        continue
    }

    if (leftArr[leftIterator] < rightArr[rightIterator])
        sortedArr.push(leftArr[leftIterator++])
    else
        sortedArr.push(rightArr[rightIterator++])
  }

  return sortedArr;
}

let testArr1 = [1, 3, 54, 9, 2, 17, 22, 700]


console.log(mergeSort(testArr1))


//merge 2 ordered arrays
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

function orderedMerge(arr1, arr2) {
    let sortedArr = []; // initialize as empty so that the length checking works

    let i, j
    i = j = 0 //iterators

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
}
