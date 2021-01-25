<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="view_area"/>
  </div>
</template>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  max-width: 100vw;
  z-index: 1;
}

#nav {
  padding: 30px;
}

.view_area {
  position: absolute;
  top: 5rem;
  bottom: 5rem;
  left: 0;
  width: 100vw;
  height: calc(100% - 10rem);;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
