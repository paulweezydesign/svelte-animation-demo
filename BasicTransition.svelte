<script>
  let open = false;
  const show = () => (open = true);
  const hide = () => (open = false);

  const animateIn = () => {
    return {
      duration: 2000,
      css: t => `transform: translateY(${t * 50 - 50}px)`
    };
  };

  const animateOut = node => {
    const existingTransform = getComputedStyle(node).transform;
    const currentY =
      existingTransform == "none" ? 0 : new DOMMatrix(existingTransform).f;

    return {
      duration: 2000,
      css: t => `transform: translateY(${currentY + (1 - t) * 50}px)`
    };
  };
</script>

<style>
  .box {
    width: 400px;
    height: 200px;
  }
</style>

<div style="margin-left: 400px">
<button on:click={show}>
  Show
</button>
<button on:click={hide}>
  Hide
</button>
</div>
<br /><br />

{#if open}
<div in:animateIn out:animateOut class="box">
  Hello World!
</div>
{/if}