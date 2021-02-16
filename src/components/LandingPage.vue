<template>
  <div :class="{ dark_mode: darkMode }" id="landing_page" class="landing_page_container">
    <h1>Hi. I'm Jordan</h1>
    <h2>I'm a Junior Full Stack Developer, based in Manchester</h2>
    <div class="social_media_icons">
      <a href="https://www.github.com/JordanInsights" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" style="width:7rem;"/>
      </a>
      <a href="https://www.linkedin.com/in/jordan-shaw-dev">
        <font-awesome-icon :icon="['fab', 'linkedin']" style="width:7rem;"/>
      </a>
      <a href="https://www.instagram.com/jordoshaw/">
        <font-awesome-icon :icon="['fab', 'instagram']" style="width:7rem;"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'darkMode'
  ]
}
</script>

<style scoped>
.landing_page_container {
  box-sizing: border-box;
  width: 100vw;
  height: calc(100vh - 4rem);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.4s linear;
}
.dark_mode h1, .dark_mode h2, .dark_mode a, .dark_mode svg {
  color: white;
}
.social_media_icons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

a {
  color: black;
}

a:hover {
  text-decoration: none;
}

.social_media_icons svg {
  height: 7rem;
  width: 7rem;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border-radius: 50%;
  padding: 1.5rem;
  transition: all 0.4s linear;
}

.social_media_icons svg:hover {
  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
}
</style>