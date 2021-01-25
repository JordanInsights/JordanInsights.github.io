<template>
  <div id="app" :class="{hidden: hidden}">
    <div id="nav" :class="classObj" class="nav">
      <div :class="classObj" class="left_box">
        <h2>Aesthetic</h2>
        <select name="aesthetic" id="aesthetic" v-model="aesthetic">
          <option value="bauhaus">Bauhaus</option>
          <option value="minimalist">Minimalist</option>
        </select>
      </div>
      <div :class="classObj" class="right_box">
        <div :class="classObj" class="content">
          <h3 :class="classObj" class="nav_title">// Content</h3>
          <div :class="classObj" class="links">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
        </div>
        <div :class="classObj" class="bio">
          <h3 :class="classObj" class="nav_title">// Bio</h3>
          <div :class="classObj" class="stats">
            <p>Manchester, UK</p>
            <p>Junior Developer</p>
            <p>The Insights People</p>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide-left">
      <router-view :class="classObj" class="main_body child-view" :current-class="currentClass"/>
    </transition>
    <div :class="classObj" class="footer">
      <div :class="classObj" class="colour_blocks">
        <div :class="classObj" class="colour_block"></div>
        <div :class="classObj" class="colour_block"></div>
        <div :class="classObj" class="colour_block"></div>
      </div>
      <div :class="classObj" class="social_media"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aesthetic: 'bauhaus',
      hidden: false,
      currentClass: 'bauhaus',
    }
  },

  computed: {
    classObj() {
      return {
        bauhaus: this.currentClass === 'bauhaus',
        minimalist: this.currentClass === 'minimalist'
      }
    }
  },

  watch: {
    aesthetic() {
      this.hidden = true;
      setTimeout(() => {
        this.currentClass = this.aesthetic;
        return this.hidden = false;
      }, 1000)
    }
  }
}
</script>

<style>

body {
  padding: 0;
  margin: 0
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: opacity 0.5s ease-in-out;
}

.hidden {
  opacity: 0;
}

.nav.bauhaus {
  position: fixed;
  top: 0;
  left: 0;
  height: 7rem;
  background-color: white;
  border-bottom: solid black 5px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.left_box.bauhaus {
  width: 15rem;
  border-right: solid black 5px;
  height: 100%;
  position: relative;
}

.right_box.bauhaus {
  width: calc(100% - 15rem);
  height: 100%;
  display: flex;
  justify-content: center;
}

.nav_title.bauhaus {
  margin: 0;
  margin-bottom: 0.5rem;
}

.content.bauhaus, .bio.bauhaus {
  width: 40%;
  padding: 0.5rem;
  text-align: left;
}

.stats.bauhaus {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.stats.bauhaus p {
  width: 50%;
  margin: 0;
}

.circle_button.bauhaus {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -25%;
  margin-top: -25%;
  background-color: #FD6564;
}

.main_body.bauhaus {
  position: relative;
  top: 7rem;
  height: calc(100vh - 12rem);
}

.footer.bauhaus {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 5rem;
  border-top: solid black 5px;
  width: 100%;
  display: flex;
}

.colour_blocks.bauhaus {
  flex-grow: 1;
  display: flex;
  border-right: solid black 5px;
}

.colour_block.bauhaus {
  width: 4rem;
  border-right: solid black 5px;
}

.colour_block.bauhaus:nth-of-type(1) {
  background-color: #FFC066;
}

.colour_block.bauhaus:nth-of-type(2) {
  background-color: #FD4C28;
}

.colour_block.bauhaus:nth-of-type(3) {
  background-color: #FD6564;
  width: 15rem;
}

.social_media.bauhaus {
  width: 508px;
  height: 100%;
  background-color: black;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .75s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  transition: all .75s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
