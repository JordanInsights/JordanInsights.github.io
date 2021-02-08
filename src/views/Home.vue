<template>
<transition appear
  v-on:beforeEnter="beforeEnter"
  v-on:enter="enter"
  v-on:leave="leave"
>
  <div class="home">
    <h1 class="hidden" :class="{opaque: visibility[0]}">Hi, I'm Jordan</h1>
    <p class="hidden" :class="{opaque: visibility[1]}">I'm a Junior Fullstack Developer,</p>
    <p class="hidden" :class="{opaque: visibility[2]}">based in Manchester, UK. </p>
  </div>
</transition>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      visibility: [0, 0, 0]
    }
  },
  mounted() {
  },

  methods: {
    beforeEnter: function (el) {
      // el.style.opacity = 0
      // el.style.transformOrigin = 'top'
      // el.style.translateY = '-20px';
      console.log(el)
    },
    enter: function (el, done) {
      console.log(el, done)
    },
    leave: function (el, done) {
      console.log(el, done)
    }
  }
} 
</script>

<style>
  .home {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hidden {
  }
</style>
