<script>
  export let hash;
  export let currentHash;
</script>

<a href="#{hash}" class:active={hash == currentHash}><slot /></a>