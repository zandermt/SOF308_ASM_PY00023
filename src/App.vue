<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <FooterEnd />
  </div>
</template>

<script>
import FooterEnd from "./components/FooterEnd.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterEnd,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
