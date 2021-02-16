<template>
  <div class="navbar" :class="{dark_mode: darkMode}">
    <div class="name" :class="{blurred: open}">
      <div class="switch" @click="darkMode = !darkMode">
        <div class="toggle" :class="{toggle_clicked: darkMode}"></div>
      </div>
    </div>
    <div class="burger">
      <svg class="burger_button ham hamRotate ham1" viewBox="0 0 100 100" width="80" :class="{ active: open }" @click="open = !open">
        <path
              class="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
        <path
              class="line middle"
              d="m 30,50 h 40" />
        <path
              class="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ['darkModeProp'],
  beforeMount() {
    this.darkMode = this.darkModeProp;
  },
  data() {
    return {
      open: false,
      darkMode: false,
    }
  },
  watch: {
    open() {
      this.$emit('navEvent', this.open);
    },
    darkMode() {
      this.$emit('darkMode', this.darkMode);
    } 
  }
}
</script>

<style>

.navbar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: 4rem;
  width: 100%;
  transition: all 0.3s linear 0.1s;
}
.dark_mode {
  background-color: #121212;
  color: white;
}
.blurred {
  filter: blur(10px);
}
.switch {
  width: 4rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: black;
  position: relative;
  transition: all 0.4s linear;
  cursor: pointer;
}
.dark_mode .switch {
  background-color: white
}
.toggle {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  transition: all 0.4s linear;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
}
.dark_mode .toggle {
  background-color: #1d1d1d;
}
.toggle_clicked {
  transform: translateX(2rem);
}
.name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 1.5rem;
}

.name p {
  margin-bottom: 0;
  margin-top: 0;
}
.burger {
  display: flex;
  justify-content: flex-end;
}
.burger svg {
  margin-left: auto;
  cursor: pointer;
  border-radius: 50%;
  position: relative;
  z-index: 4;
}
.burger svg:hover {}
.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.hamRotate180.active {
  transform: rotate(180deg);
}
.line {
  fill:none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke:#000;
  stroke-width:5.5;
  stroke-linecap:round;
}
.dark_mode .line {
  stroke: white;
}
.ham1 .top {
  stroke-dasharray: 40 139;
}
.ham1 .bottom {
  stroke-dasharray: 40 180;
}
.ham1.active .top {
  stroke-dashoffset: -98px;
}
.ham1.active .bottom {
  stroke-dashoffset: -138px;
}
.ham2 .top {
  stroke-dasharray: 40 121;
}
.ham2 .bottom {
  stroke-dasharray: 40 121;
}
.ham2.active .top {
  stroke-dashoffset: -102px;
}
.ham2.active .bottom {
  stroke-dashoffset: -102px;
}
.ham3 .top {
  stroke-dasharray: 40 130;
}
.ham3 .middle {
  stroke-dasharray: 40 140;
}
.ham3 .bottom {
  stroke-dasharray: 40 205;
}
.ham3.active .top {
  stroke-dasharray: 75 130;
  stroke-dashoffset: -63px;
}
.ham3.active .middle {
  stroke-dashoffset: -102px;
}
.ham3.active .bottom {
  stroke-dasharray: 110 205;
  stroke-dashoffset: -86px;
}
.ham4 .top {
  stroke-dasharray: 40 121;
}
.ham4 .bottom {
  stroke-dasharray: 40 121;
}
.ham4.active .top {
  stroke-dashoffset: -68px;
}
.ham4.active .bottom {
  stroke-dashoffset: -68px;
}
.ham5 .top {
  stroke-dasharray: 40 82;
}
.ham5 .bottom {
  stroke-dasharray: 40 82;
}
.ham5.active .top {
  stroke-dasharray: 14 82;
  stroke-dashoffset: -72px;
}
.ham5.active .bottom {
  stroke-dasharray: 14 82;
  stroke-dashoffset: -72px;
}
.ham6 .top {
  stroke-dasharray: 40 172;
}
.ham6 .middle {
  stroke-dasharray: 40 111;
}
.ham6 .bottom {
  stroke-dasharray: 40 172;
}
.ham6.active .top {
  stroke-dashoffset: -132px;
}
.ham6.active .middle {
  stroke-dashoffset: -71px;
}
.ham6.active .bottom {
  stroke-dashoffset: -132px;
}
.ham7 .top {
  stroke-dasharray: 40 82;
}
.ham7 .middle {
  stroke-dasharray: 40 111;
}
.ham7 .bottom {
  stroke-dasharray: 40 161;
}
.ham7.active .top {
  stroke-dasharray: 17 82;
  stroke-dashoffset: -62px;
}
.ham7.active .middle {
  stroke-dashoffset: 23px;
}
.ham7.active .bottom {
  stroke-dashoffset: -83px;
}
.ham8 .top {
  stroke-dasharray: 40 160;
}
.ham8 .middle {
  stroke-dasharray: 40 142;
  transform-origin: 50%;
  transition: transform 400ms;
}
.ham8 .bottom {
  stroke-dasharray: 40 85;
  transform-origin: 50%;
  transition: transform 400ms, stroke-dashoffset 400ms;
}
.ham8.active .top {
  stroke-dashoffset: -64px;
}
.ham8.active .middle {
  //stroke-dashoffset: -20px;
  transform: rotate(90deg);
}
.ham8.active .bottom {
  stroke-dashoffset: -64px;
}

.burger_button {
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 10000;
}

</style>