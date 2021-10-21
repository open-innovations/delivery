<script>
  import { login, logout } from '../lib/auth';
  import { isAuthenticated, userFullName } from '../stores/session';
  import Button from './Button.svelte';
</script>

<div>
  <header>
    <h1>Open Innovations Delivery</h1>
    {#if $isAuthenticated}
      <p>{$userFullName}</p>
      <Button handler={logout} name="Logout" />
    {:else}
      <Button handler={login} name="Login" />
    {/if}
  </header>
</div>

<style>
  div {
    background: #333;
    color: #ccc;
  }
  header {
    display: flex;
    max-width: 760px;
    margin: 0 auto;
    align-items: baseline;
    padding: 1em;
  }
  header > :global(*) {
    margin: 0;
    margin-left: 1em;
    text-align: left;
  }
  header > *:first-child {
    flex-grow: 10;
    margin-left: 0;
  }
  h1 {
    font-size: 1.5em;
  }
</style>
