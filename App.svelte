<script>
  import MenuAnchor from "./MenuAnchor";

  import SpringAnimation from "./SpringAnimate";
  import NoAnimation from "./NoAnimation";
  import AnimateHeight from "./animateHeight/Basic";
  import AnimateHeightInitial from "./animateHeight/InitialHeight";
  import AnimateHeightDifferentSprings from "./animateHeight/DifferentSprings";
  import AnimateHeightCleanedUp from "./animateHeight/CleanedUp";
  import SlideAnimate from "./animateHeight/SlideAnimate";
  import SlideAnimate2 from "./animateHeight/SlideAnimate2";
  import BasicTransition from "./BasicTransition";
  import SpringTransition from "./SpringTransition";
  import SpringTransitionWithFade from "./SpringTransitionWithFade";

  let currentHash = window.location.hash.replace("#", "") || "no-animation";

  window.addEventListener(
    "hashchange",
    () => (currentHash = window.location.hash.replace("#", ""))
  );
</script>

<style>
  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  nav :global(a) {
    margin: 0 15px 15px 0;
    text-decoration: none;
    color: blue;
  }
  nav :global(a.active) {
    color: black;
    font-weight: bolder;
  }
</style>

<main>
  <nav>
    <MenuAnchor hash="no-animation" {currentHash}>No Animation</MenuAnchor>
    <MenuAnchor hash="add-animation" {currentHash}>Add Animation</MenuAnchor>
    <MenuAnchor hash="animate-height" {currentHash}>Animate Height</MenuAnchor>
    <MenuAnchor hash="animate-height-initial" {currentHash}>Animate Height Initial</MenuAnchor>
    <MenuAnchor hash="animate-height-different-springs" {currentHash}>Animate Height Different Springs</MenuAnchor>
    <MenuAnchor hash="animate-height-cleanup" {currentHash}>Animate Height Cleanup</MenuAnchor>
    <MenuAnchor hash="slide-animate" {currentHash}>Slide Animate</MenuAnchor>
    <MenuAnchor hash="slide-animate2" {currentHash}>Slide Animate 2</MenuAnchor>
    <MenuAnchor hash="basic-transition" {currentHash}>Basic Transition</MenuAnchor>
    <MenuAnchor hash="spring-transition" {currentHash}>Spring Transition</MenuAnchor>
    <MenuAnchor hash="spring-transition-fade" {currentHash}>Spring Transition with Fade</MenuAnchor>
  </nav>

  <hr />

  {#if currentHash == "no-animation"}
  <NoAnimation />
  {/if}

  {#if currentHash == "add-animation"}
  <SpringAnimation />
  {/if}

  {#if currentHash == "animate-height"}
  <AnimateHeight />
  {/if}

  {#if currentHash == "animate-height-initial"}
  <AnimateHeightInitial />
  {/if}

  {#if currentHash == "animate-height-different-springs"}
  <AnimateHeightDifferentSprings />
  {/if}

  {#if currentHash == "animate-height-cleanup"}
  <AnimateHeightCleanedUp />
  {/if}

  {#if currentHash == "slide-animate"}
  <SlideAnimate />
  {/if}

  {#if currentHash == "slide-animate2"}
  <SlideAnimate2 />
  {/if}

  {#if currentHash == "basic-transition"}
  <BasicTransition />
  {/if}

  {#if currentHash == "spring-transition"}
  <SpringTransition />
  {/if}

  {#if currentHash == "spring-transition-fade"}
  <SpringTransitionWithFade />
  {/if}
</main>