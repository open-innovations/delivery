<script lang="ts">
  import DeliveryStatus from './components/DeliveryStatus.svelte';
  import Header from './components/Header.svelte';
  import Unauthenticated from './components/Unauthenticated.svelte';
  import { isAuthenticated } from './stores/session';
</script>

<Header />
<main role="main">
  {#if $isAuthenticated}
    <DeliveryStatus />
  {:else}
    <Unauthenticated />
  {/if}
</main>

<style>
  main {
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: 760px;
    }
  }
</style>
