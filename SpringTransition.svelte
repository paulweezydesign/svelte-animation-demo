<script>
  import { springIn, springOut } from "svelte-helpers/spring-transitions";

  let open = false;
  const show = () => (open = true);
  const hide = () => (open = false);

  const currentYTranslation = node => {
    const existingTransform = getComputedStyle(node).transform;
    return existingTransform == "none" ? 0 : new DOMMatrix(existingTransform).f;
  };

  const SPRING_IN = { stiffness: 0.1, damping: 0.1 };
  const animateIn = node => {
    const { duration, tickToValue } = springIn(-80, 0, SPRING_IN);
    return {
      duration: duration,
      css: t => `transform: translateY(${tickToValue(t)}px)`
    };
  };

  const SPRING_OUT = { stiffness: 0.1, damping: 0.5, precision: 3 };
  const animateOut = node => {
    const current = currentYTranslation(node);
    const { duration, tickToValue } = springOut(
      current ? current : 0,
      80,
      SPRING_OUT
    );

    return {
      duration: duration,
      css: t => `transform: translateY(${tickToValue(t)}px)`
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