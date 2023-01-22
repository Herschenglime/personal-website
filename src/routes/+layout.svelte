<script lang="ts">

 import "../app.scss";
 import Navbar from "$lib/components/Navbar.svelte";
 import Topbar from "$lib/components/topbar/Topbar.svelte";

 //theme switching
 import { theme } from '$lib/stores'

</script>

<svelte:head>
  <meta name="color-scheme" content={$theme == 'system' ? 'dark light' :
                                    $theme}/>
  <link rel="stylesheet" href={`/theme/${$theme}.css`} />
  <!-- <link rel="stylesheet" href="/theme/dark.css"> -->
</svelte:head>

<!-- <Navbar/> -->
<Topbar/>
<slot></slot>

