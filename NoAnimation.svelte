<script>
  let shown = true;
  let moved = 0;

  const toggleShow = () => (shown = !shown);
  const toggleMove = () => (moved = moved ? 0 : 500);
</script>

<div style="opacity: {shown ? 1 : 0}">Content to fade</div>
<br />
<button on:click={toggleShow}>Fade Toggle</button>

<br /><br />

<div class="box" style="transform: translateX({moved}px)"></div>
<br />
<button on:click={toggleMove}>Move it!</button>

<hr />
