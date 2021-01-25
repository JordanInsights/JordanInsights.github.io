<template>
  <div class="home">
    <div :class="classObj" class="content_body">
      <h1 :class="classObj" class="name_title">Js</h1>
      <div :class="classObj" class="subheading_container">
        <h2 :class="classObj" class="home_subheading">Jordan Shaw.</h2>
        <h2 :class="classObj" class="home_subheading">Junior Developer.</h2>
      </div>
    </div>
    <div :class="classObj" class="circle_container">
      <div :class="classObj" class="circles">
        <div :class="classObj" class="yellow_circle"></div>
        <div :class="classObj" class="red_circle"></div>
      </div>
      <div :class="classObj" class="circles_remainder"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  props: [
    'currentClass'
  ],
  computed: {
    classObj() {
      return {
        bauhaus: this.currentClass === 'bauhaus',
        minimalist: this.currentClass === 'minimalist'
      }
    }
  },
}
</script>

<style scoped>
  .home {
    display: flex;
  }
  .content_body.bauhaus {
    flex-grow: 1;
    height: 100%;
    border-right: solid black 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .circles.bauhaus {
    width: 500px;
    height: 500px;
    transform: rotate(-45deg);
    transform-origin: center;
  }
  .circle_container.bauhaus {
    display: flex;
    width: 508px;
    flex-direction: column;
    background-color: #C89D8E;
    overflow: hidden;
  }
  .yellow_circle.bauhaus, .red_circle.bauhaus {
    width: 500px;
    height: 250px;
    margin-left: -5px;
    margin-top: -5px;
    background-color: #FFC066;
    border: solid black 5px;
    border-top-left-radius: 500px;
    border-top-right-radius: 500px;
  }
  .name_title.bauhaus {
    font-size: 25rem;
    text-align: left;
    color: #FD6564;
    word-spacing: 0%;
    position: absolute;
    left: 8rem;
  }
  
  .home_subheading.bauhaus {
    text-align: left;
    margin: 0;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .red_circle.bauhaus {
    background-color: #FD6564;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 500px;
    border-bottom-right-radius: 500px;
  }
  .subheading_container.bauhaus {
    position: absolute;
    left: 35rem;
  }
  .circles_remainder.bauhaus {
    width: 100%;
    flex-grow: 1;
    margin-top: 5px;
    border-top: solid black 5px;
    background-color: #00B2A2;
  }
</style>
