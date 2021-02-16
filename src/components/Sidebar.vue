<template>
  <div :class="{dark_mode: darkMode}" class="sidebar">
    <div class="list">
      <a href="#landing_page">Links</a>
      <a href="#projects_page">Projects</a>
      <a href="#about_page">About</a>
      <a href="#contact_page">Contact</a>
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
.sidebar {
  box-sizing: border-box;
  height: 96vh;
  width: 20rem;
  top: 2vh;
  position: fixed;
  z-index: 1;
  right: 0;
  transition: all 0.4s linear;
  border-radius: 1rem 0 0 1rem;
  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
  padding: 2rem;
  padding-top: 5rem;
  background-color: white;

}
.list {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 5;
}
a {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: black;
  text-decoration: underline;
}
.dark_mode, .dark_mode .list a {
  background-color: #1D1D1D;
  color: white;
}
</style>