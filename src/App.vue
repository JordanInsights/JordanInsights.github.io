<template>
  <div id="app" :class="{dark_mode: darkMode}">
    <Navbar ref="navbar" 
      @navEvent="handleNavEvent($event)"
      @darkMode="handleDarkMode($event)"
      :dark-mode-prop="darkMode"
    />
    <transition name="slide">
      <Sidebar :dark-mode="darkMode" v-if="blur"/>
    </transition>
    <router-view class="page" :dark-mode="darkMode" :class="{ apply_blur: blur }"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue'
export default {
  components: { Navbar, Sidebar },
  data() {
    return {
      blur: false,
      darkMode: null,
    }
  },
  methods: {
    handleNavEvent(bool) {
      this.blur = bool;
    },
    handleDarkMode(bool) {
      localStorage.setItem('jsDarkMode', JSON.stringify(bool));
      this.darkMode = bool;
    }
  },
  beforeMount() {
    let bool = localStorage.getItem('jsDarkMode');
    if (bool) {
      bool = JSON.parse(bool);
      this.darkMode = bool;
    } else {
      this.darkMode = false;
    }
  },
}
</script>

<style >
* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  transition: background-color 0.4s linear;
}
.page {
}
.apply_blur {
  filter: blur(5px);
}

.slide-enter, .slide-leave-to {
  transform: translateX(20rem);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
