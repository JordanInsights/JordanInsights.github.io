<template>
  <div class="sidebar_container">
    <div class="buttons_container">
      <font-awesome-icon icon="user-secret" />
    </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style scoped>
  .sidebar_container {
    width: 5vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: cornflowerblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .buttons_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>