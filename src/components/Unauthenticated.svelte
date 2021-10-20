<script>
  import Button from '../components/Button.svelte';
  import { login } from '../lib/auth';
</script>

<section>
  <p>Log in to review the delivery tracker</p>
  <Button handler={login} name="Login" />
</section>

<style>
  section {
    text-align: center;
  }
</style>