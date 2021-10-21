<template>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--of-dark);
  min-height: 100vh;
}

.of-grid-3-col {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 50px;
}

.of-grid-2-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 100px;
}

input[type="radio" i] {
  margin: 0;
}

/*Product Addons*/
.ac-nav-container > div > a > div > img {
  width: 60%;
}
</style>
