<script>
  export let handler;
  export let name;
</script>

<button on:click={handler}>{name}</button>

<style>
  button {
    border: none;
    color: rgb(255, 230, 0);
    background: rgb(218, 1, 6);
    padding: 0.3em 1em;
    border-radius: 1em;
  }
  button:hover {
    text-decoration: underline;
  }
</style>
