<script type='ts'>
  import ProjectSummary from './ProjectSummary.svelte';
  import Button from './Button.svelte';
  import { projects } from '../stores/data';
</script>
<section>
  <nav>
    <Button handler={ projects.refresh } name="Refresh Data" />
  </nav>

  <ul>
    {#each $projects as project}
      <li>
        <ProjectSummary {...project} />
      </li>
    {/each}
  </ul>
</section>

<style>
  ul {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5em;
  }
  li {
    list-style-type: none;
    border: 1px solid #ddd;
    border-radius: 0.5em;
    box-shadow: 0 2px 5px #aaae;
    overflow: hidden;
  }
  li:hover {
    box-shadow: 0 4px 5px #aaae;
    top: -2px;
    position: relative;
  }
  nav {
    display: flex;
    justify-content: end;
  }
</style>