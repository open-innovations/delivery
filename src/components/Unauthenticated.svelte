<script>
  import Button from '../components/Button.svelte';
  import { login } from '../lib/auth';
</script>

<section>
  <p>Welcome to the production control room</p>
  <Button handler={login} name="Enter" />
  <figure>
    <img src="https://damn-8791.kxcdn.com/wp-content/uploads/2012/10/control-room-large-21.jpg" alt="A room with a circle of seven chairs facing inwards. The chairs are white with orange upholstery and are very futurustic looking. They have large orange control pads with a white buttons in various geometric shapes at the end of the right arm. The walls, which are wood panelled, are covered with video screens and control panels." />
    <figcaption>The control room from Chile's 1970's experiment in Cybernetics.</figcaption>
  </figure>
</section>

<style>
  section {
    text-align: center;
  }
  img {
    max-width: 50%;
  }
  figcaption {
    font-size: 0.8em;
  }
</style>