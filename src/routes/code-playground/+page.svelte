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
  <h1>Code Playground</h1>
  <p>
    At the time of writing, I had a technical interview coming up, so I wanted an interactive place
    to work through and store various coding challenges. Individual implementations are below. Code
    formatting is done with svelte-prism, an implementation of prism-js for svelte. See the subsections below for more details.
  </p>

  <h3><a href="./code-playground/mini-projects">Mini Projects</a></h3>
  <h3><a href="./code-playground/algorithms">Algorithms</a></h3>
  <h3><a href="./code-playground/data-structures">Data Structures</a></h3>

  <h2>WIP Alert!</h2>
  <p>I intend to set up dynamic routing by loading external data that hosts these pages instead of writing it in plain html. I still need to read <a href="https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog">this link.</a> I expect to use [slug] in the routing and set up some kind of data type to handle inline code, contents, and so forth - or maybe I should just use markdown? This will be updated after reading the article.</p>
</main>

<style>
 h3 ~ p {
   padding-left: 1em;
 }
</style>
