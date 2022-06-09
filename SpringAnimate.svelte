<script>
  import { spring } from "svelte/motion";

  const fadeSpring = spring(1, { stiffness: 0.1, damping: 0.5 });
  const transformSpring = spring(0, { stiffness: 0.2, damping: 0.1 });

  const toggleFade = () => fadeSpring.update(val => (val ? 0 : 1));
  const toggleTransform = () => transformSpring.update(val => (val ? 0 : 500));
  const snapTransform = () => transformSpring.update(val => val, { hard: true });
</script>

<div style="opacity: {$fadeSpring}">Content to fade</div>
<br />
<button on:click={toggleFade}>Fade Toggle</button>

<br /><br />

<div class="box" style="transform: translateX({$transformSpring}px)"></div>
<br />
<button on:click={toggleTransform}>Move it!</button>
<button on:click={snapTransform}>Snap into place</button>

<br />

<hr />