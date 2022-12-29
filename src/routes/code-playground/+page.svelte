<script>
    import Prism from 'svelte-prism'
</script>

<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-okaidia.min.css'>

<h1>Code Playground</h1>
<p>At the time of writing, I had a technical interview coming up, so I wanted an interactive place to work through and store various coding challenges. Individual attempts are below. Code formatting is done with svelte-prism, an implementation of prism-js for svelte.</p>

<h2>Initial code test</h2>
This one's pretty simple, I'm just getting the hang of inline code formatting with prism.
<Prism language="js">
  {`let test = "test"`}
</Prism>

<h2>Merge Sort</h2>
I learned about merge sort in discrete math, and have a pretty good recollection of implementing it recursively. Below is my attempt at an implementation in JS from memory, although I might have to look up the names of js array methods.

(it's going a bit rough right now, will return later)

<h2>Merging Two Ordered Arrays</h2>
This one seems to mostly rely on keeping track of indexes and bounds checking - shouldn't be too bad.
