<script setup>
import { RouterView } from "vue-router";
import loaderComponent from "./components/loaderComponent.vue";
import headerComponent from "./components/headerComponent.vue";
import footerComponent from "./components/footerComponent.vue";

</script>

<template>
  <loaderComponent />
  <header>
    <headerComponent />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <footerComponent />
  </footer>
</template>
