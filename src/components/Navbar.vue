<template>
<div class="nav_container">
    <div class="top_nav">
      <div class="name_container">
        <div class="name">
          <h4>Jordan Shaw</h4>
          <h5>Junior Developer</h5>
        </div>
      </div>
      <div class="burger_container" @click="menuOpen = !menuOpen">
        <font-awesome-icon :icon="barsIcon" />
      </div>
    </div>

    <div class="" 
      :class="{ 
        menu_container_closed: !this.menuOpen, 
        menu_container_open: this.menuOpen
      }"
    > 
      <router-link to="/" :class="{display_none:!menuOpen}">Home</router-link> |
      <router-link to="/about" :class="{display_none:!menuOpen}">About</router-link>
    </div>
    <div class="nav_overlay" 
      :class="{transparent: !menuOpen}"
      @click="menuOpen = false"
    ></div>
</div>
</template>

<script>
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default {
  data() {
    return {
      menuOpen: false,
    }
  },
  computed: {
    barsIcon() {
      return faBars
    },
    menuClass() {
      return {
        menu_container_closed: !this.menuOpen,
        menu_container_open: this.menuOpen
      }
    },
  }
}
</script>

<style scoped>
.nav_container {
  max-width: 100vw;
}
  .top_nav {
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    z-index: 1;
  }
  .menu_container_open {
    min-width: 15rem;
  }
  .menu_container_open, .menu_container_closed {
    height: 100vh;
    background-color: white;
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    transition: all ease-in-out 0.2s;
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072),
      0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);

  }
  .menu_container_closed {
    /* display: none;  */
    right: -15rem;
    overflow: hidden;
    width: 0;
  }
  .name_container {
    min-width: 50vw;
  }
  .name h4, .name h5 {
    margin: 0
  }
  .display_none {
    display: none;
  }
  .burger_container {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
  }
  .burger_container:hover {
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072),
      0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  } 
  .nav_overlay {
    background-color: gray;
    opacity: 0.25;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
  .transparent {
    opacity: 0;
    z-index: 0;
  }
</style>