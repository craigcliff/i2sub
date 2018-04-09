<template>
<div class="header-container">
  <header class="the-header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="logo">
     <logo2/>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/posts">About us</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">What we do</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin">How we do it</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin">Where we've done it</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin">Contact us</nuxt-link></li>
      </ul>
    </div>
  </header>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle"
import Logo2 from '~/components/Navigation/Logo.vue'

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle,
    Logo2
  }
};
</script>


<style scoped>
.header-container {
  height: 80px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
  flex: 1;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
  flex: 4;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  
}

.nav-item {
  margin: 0 20px;
}

.nav-item a {
  text-decoration: none;
  color: black;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>
