<template>
  <div class="home" :class="{dark_mode: darkMode}">
    <LandingPage :dark-mode="darkMode"/>
  </div>
</template>

<script>
import LandingPage from '../components/LandingPage.vue'

export default {
  name: 'Home',
  props: ['darkMode'],
  components: {
    LandingPage
  }
}
</script>

<style scoped>
  .home {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    z-index: 0;
    width: 100%;
    height: auto;
    transition: all 0.4s linear;
  }
  .dark_mode {
    color: white;
    background-color: #121212;
  }
</style>
