<script setup>
import { RouterView } from 'vue-router'
import Navber from './components/Navber.vue';
import Footer from './components/Footer.vue';
</script>

<template>

  <header>
    <Navber></Navber>
  </header>
  <main>
    <RouterView />
  </main>
<footer class="">
  <Footer></Footer>
</footer>
</template>
