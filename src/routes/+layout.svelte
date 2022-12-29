<script lang="ts">

 import "../app.scss";
 import Navbar from "$lib/components/Navbar.svelte";

 //theme switching
 import { theme } from '$lib/stores'

</script>

<svelte:head>
  <meta name="color-scheme" content={$theme == 'system' ? 'light dark' :
  $theme}/> <link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<Navbar/>
<slot></slot>
