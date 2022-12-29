<script lang="ts">

 import "../app.scss";
 import Navbar from "$lib/components/Navbar.svelte";

 //theme switching
 import { theme } from '$lib/stores'

</script>

<svelte:head>
  <meta name="color-scheme" content={$theme == 'system' ? 'dark light' :
  $theme}/> <link rel="stylesheet" href={`/theme/${$theme}.scss`} />
</svelte:head>

<Navbar/>
<slot></slot>

