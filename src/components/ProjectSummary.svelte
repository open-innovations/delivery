<script>
  import Warning from './Warning.svelte';
  export let name;
  export let customer;
  export let stage;
  export let value;
  export let note;
  export let rag;
  export let state;
  export let due_by;
  $: blocked = state === 'blocked'

  console.log(state);
</script>

<section class:dropped="{ state === 'dropped' }">
<h1>{#if blocked}<Warning /> {/if}{name}</h1>
<table>
  <tr>
    <th>Customer</th><td>{ customer }</td>
  </tr>
  <tr>
    <th>Status</th><td class="status { rag }">{ rag }</td>
  </tr>
  <tr>
    <th>Stage</th><td>{stage}</td>
  </tr>
  <tr>
    <th>Due date</th><td>{ due_by.toDateString() }</td>
  </tr>
  <tr>
    <th>Value</th><td>{@html value ? '&pound;' + value : 'Not captured'}</td>
  </tr>
</table>
<p>{note}</p>
</section>

<style>
  section {
    padding: 1em;
  }
  h1 {
    padding: 0;
    margin: 0;
  }
  h1 > :global(svg) {
    width: 0.8em;
  }
  h1 > :global(svg path) {
    fill: red;
  }
  .status {
    text-align: center;
  }
  .green {
    color: white;
    background-color: green;
  }
  .amber {
    color: white;
    background-color: rgb(255, 178, 13);
  }
  table {
    margin: 0 auto;
  }
  th {
    text-align: right;
  }
  td {
    text-align: left;
  }
  .dropped {
    color: #555;
    background: #aaa;
  }
</style>
