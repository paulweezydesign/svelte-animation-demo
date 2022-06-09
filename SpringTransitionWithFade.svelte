<script>
  import { springIn, springOut } from "svelte-helpers/spring-transitions";
  import { quintOut, quadIn } from "svelte/easing";

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
      duration,
      css: t => {
        const transform = tickToValue(t);
        const opacity = quintOut(t);
        return `transform: translateY(${transform}px); opacity: ${opacity};`;
      }
    };
  };

  const SPRING_OUT = { stiffness: 0.1, damping: 0.5, precision: 3 };
  const animateOut = node => {
    const currentT = currentYTranslation(node);
    const startOpacity = +getComputedStyle(node).opacity;
    const { duration, tickToValue } = springOut(
      currentT ? currentT : 0,
      80,
      SPRING_OUT
    );

    return {
      duration,
      css: t => {
        const transform = tickToValue(t);
        const opacity = quadIn(t);

        return `transform: translateY(${transform}px); opacity: ${startOpacity *
          opacity}`;
      }
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