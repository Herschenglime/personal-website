<script>
  import Prism from 'svelte-prism';
  import Toc from 'svelte-toc';
  import * as ms from './mergeSort';

  let randomArray = ms.generateRandomArray(10);
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-okaidia.min.css"
/>

<!-- <Toc/> -->

<main style:margin="2em">
  <h1>Algorithms</h1>
  <h2>Merge Sort</h2>
  <p>
    I learned about merge sort in discrete math, and have a pretty good recollection of implementing
    it recursively. I did have to quickly check up on the algorithm and ran into some js syntax
    errors, but the code below results in a functional merge sort for numbers.
  </p>
  <Prism language="js">
    {`function orderedMergeBrute(arr1, arr2) {
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
    function mergeSort(arr) {
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
    function generateRandomArray(arrLength) {
      return Array.from({length: arrLength}, () => Math.floor(Math.random() * arrLength));
    }
    `}
  </Prism>

  <div>
    <h3>Examples</h3>
    <p>Random Array: {randomArray}</p>
    <p>That same array, but sorted: {ms.mergeSort(randomArray)}</p>
  </div>
</main>

<style>
 h3 ~ p {
   padding-left: 1em;
 }
</style>
